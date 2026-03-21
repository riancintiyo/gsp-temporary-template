import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { LazyImage } from "@/components/ui/lazy-image";
import { RevealOnView } from "@/components/ui/reveal-on-view";

/* ------------------------------------------------------------------ */
/*  Dynamic metadata for each blog post                                */
/* ------------------------------------------------------------------ */

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    const description =
        post.markdown
            .replace(/[#*\n]+/g, " ")
            .trim()
            .slice(0, 155) + "…";

    return {
        title: post.title,
        description,
        authors: [{ name: post.author }],
        alternates: { canonical: `/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description,
            url: `/blog/${post.slug}`,
            type: "article",
            publishedTime: new Date(post.date).toISOString(),
            authors: [post.author],
            images: [{ url: post.image, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description,
            images: [post.image],
        },
    };
}

type MarkdownBlock = { type: "h2"; text: string } | { type: "h3"; text: string } | { type: "p"; text: string };

function parseMarkdown(markdown: string): MarkdownBlock[] {
    const lines = markdown.split("\n");
    const blocks: MarkdownBlock[] = [];
    let paragraph: string[] = [];

    const flushParagraph = () => {
        if (paragraph.length === 0) return;
        blocks.push({ type: "p", text: paragraph.join(" ").trim() });
        paragraph = [];
    };

    for (const rawLine of lines) {
        const line = rawLine.trim();

        if (!line) {
            flushParagraph();
            continue;
        }

        if (line.startsWith("### ")) {
            flushParagraph();
            blocks.push({ type: "h3", text: line.replace(/^###\s+/, "").trim() });
            continue;
        }

        if (line.startsWith("## ")) {
            flushParagraph();
            blocks.push({ type: "h2", text: line.replace(/^##\s+/, "").trim() });
            continue;
        }

        paragraph.push(line);
    }

    flushParagraph();
    return blocks;
}

function renderInlineBold(text: string): React.ReactNode[] {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return <span key={index}>{part}</span>;
    });
}

/* ------------------------------------------------------------------ */
/*  Static params for Next.js static generation                        */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
    return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-white font-(family-name:--font-plus-jakarta)">
                <main className="mx-auto px-6 pt-[calc(var(--nav-height)+4rem)] pb-24 text-center">
                    <p className="text-grey-600">Post not found.</p>
                    <Link href="/blog" className="mt-6 inline-block text-sm font-medium text-primary-blue underline">
                        ← Back to blog
                    </Link>
                </main>
            </div>
        );
    }

    const contentBlocks = parseMarkdown(post.markdown).filter((block, index) => !(index === 0 && block.type === "h2" && block.text === post.title));

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        image: post.image,
        datePublished: new Date(post.date).toISOString(),
        author: { "@type": "Person", name: post.author },
        publisher: {
            "@type": "Organization",
            name: "General Science Program",
            url: "https://www.generalscienceprogram.com",
        },
    };

    return (
        <div className="min-h-screen bg-white font-(family-name:--font-plus-jakarta)">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <main className="pt-[calc(var(--nav-height)+3rem)] pb-24">
                {/* ---- Header ---- */}
                <RevealOnView>
                    <header className="mx-auto px-6 text-center mb-10">
                        {/* Category · Date */}
                        <p className="text-sm text-grey-800 mb-5">
                            <span>{post.category}</span>
                            <span className="mx-3 text-grey-300">·</span>
                            <span>{post.date}</span>
                        </p>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-grey-1200 mb-5">{post.title}</h1>

                        {/* Author */}
                        <p className="text-sm text-grey-800">{post.author}</p>
                    </header>
                </RevealOnView>

                {/* ---- Hero image ---- */}
                <RevealOnView delay={0.08}>
                    <div className="mx-auto px-6 mb-14">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-grey-100">
                            <LazyImage src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 900px" priority />
                        </div>
                    </div>
                </RevealOnView>

                {/* ---- Article body ---- */}
                <RevealOnView delay={0.12}>
                    <article className="mx-auto max-w-180 px-6">
                        {contentBlocks.map((block, index) => {
                            if (block.type === "h2") {
                                return (
                                    <h2 key={index} className="text-xl sm:text-2xl font-bold text-grey-1200 mt-10 mb-4">
                                        {renderInlineBold(block.text)}
                                    </h2>
                                );
                            }

                            if (block.type === "h3") {
                                return (
                                    <h3 key={index} className="text-lg sm:text-xl font-bold text-grey-1200 mt-10 mb-4">
                                        {renderInlineBold(block.text)}
                                    </h3>
                                );
                            }

                            return (
                                <p key={index} className="text-base text-grey-1000 leading-relaxed mb-4">
                                    {renderInlineBold(block.text)}
                                </p>
                            );
                        })}

                        {/* ---- Back link ---- */}
                        <div className="mt-12 pt-8 border-t border-grey-200">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-grey-1200 hover:text-grey-800 transition-colors">
                                ← Back to all posts
                            </Link>
                        </div>
                    </article>
                </RevealOnView>
            </main>
        </div>
    );
}
