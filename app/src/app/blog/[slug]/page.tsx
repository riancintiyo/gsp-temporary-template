import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Static post data (replace with Directus CMS fetch later)          */
/* ------------------------------------------------------------------ */

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    author: string;
    image: string;
    body: Section[];
}

interface Section {
    heading?: string;
    paragraphs: string[];
}

const LOREM_BODY: Section[] = [
    {
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, est augue posuere risus, vel pretium augue risus id metus.",
        ],
    },
    {
        heading: "Why This Matters",
        paragraphs: [
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
            "Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.",
        ],
    },
    {
        heading: "How We Approached It",
        paragraphs: [
            "Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non justo. Nam lacus libero, pretium at, lobortis vitae, ornare et, elit. Donec aliquet, tortor sed accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi.",
            "Morbi ac orci et nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tincidunt urna. Nulla ullamcorper vestibulum turpis.",
            "Pellentesque cursus luctus mauris. Nulla malesuada porttitor diam. Donec felis erat, congue non, volutpat at, tincidunt tristique, libero. Vivamus viverra fermentum felis. Donec nonummy pellentesque ante.",
        ],
    },
    {
        heading: "Looking Forward",
        paragraphs: [
            "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Nullam in massa. Suspendisse vitae nisl sit amet augue bibendum aliquam.",
            "Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin in tellus sit amet nibh dignissim sagittis. Fusce nec tellus sed augue semper porta. Mauris massa.",
        ],
    },
];

const ALL_POSTS: BlogPost[] = [
    {
        slug: "sport-friday-activity",
        title: "Sport Friday at SDN 1 Kalidadap",
        date: "01 Nov 2024",
        category: "Sports",
        author: "The GSP Team",
        image: "/img/poster-1.webp",
        body: LOREM_BODY,
    },
    {
        slug: "steam-learning-rocket",
        title: "Building Water Rockets with STEAM Learning",
        date: "15 Dec 2024",
        category: "STEAM",
        author: "The GSP Team",
        image: "/img/poster-2.webp",
        body: LOREM_BODY,
    },
    {
        slug: "poverty-and-education",
        title: "Breaking the Poverty Cycle Through Education",
        date: "10 Jan 2025",
        category: "Education",
        author: "The GSP Team",
        image: "/img/poster-1.webp",
        body: LOREM_BODY,
    },
    {
        slug: "volunteer-stories",
        title: "Stories from Our Volunteers in the Field",
        date: "03 Feb 2025",
        category: "Community",
        author: "The GSP Team",
        image: "/img/poster-2.webp",
        body: LOREM_BODY,
    },
    {
        slug: "impact-report-2024",
        title: "GSP Impact Report: Year in Review 2024",
        date: "01 Mar 2025",
        category: "Report",
        author: "The GSP Team",
        image: "/img/poster-1.webp",
        body: LOREM_BODY,
    },
    {
        slug: "science-olympiad-prep",
        title: "Preparing Students for the Science Olympiad",
        date: "20 Mar 2025",
        category: "Education",
        author: "The GSP Team",
        image: "/img/poster-2.webp",
        body: LOREM_BODY,
    },
    {
        slug: "community-garden-project",
        title: "Growing Together: The Community Garden Project",
        date: "05 Apr 2025",
        category: "Community",
        author: "The GSP Team",
        image: "/img/poster-1.webp",
        body: LOREM_BODY,
    },
    {
        slug: "teacher-training-workshop",
        title: "Empowering Teachers Through STEAM Workshops",
        date: "22 Apr 2025",
        category: "STEAM",
        author: "The GSP Team",
        image: "/img/poster-2.webp",
        body: LOREM_BODY,
    },
];

/* ------------------------------------------------------------------ */
/*  Static params for Next.js static generation                        */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
    return ALL_POSTS.map((p) => ({ slug: p.slug }));
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = ALL_POSTS.find((p) => p.slug === slug);

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

    return (
        <div className="min-h-screen bg-white font-(family-name:--font-plus-jakarta)">
            <main className="pt-[calc(var(--nav-height)+3rem)] pb-24">
                {/* ---- Header ---- */}
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

                {/* ---- Hero image ---- */}
                <div className="mx-auto px-6 mb-14">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-grey-100">
                        <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 900px" priority />
                    </div>
                </div>

                {/* ---- Article body ---- */}
                <article className="mx-auto max-w-180 px-6">
                    {post.body.map((section, si) => (
                        <div key={si} className="mb-10">
                            {section.heading && <h2 className="text-xl sm:text-2xl font-bold text-grey-1200 mb-4">{section.heading}</h2>}
                            {section.paragraphs.map((p, pi) => (
                                <p key={pi} className="text-base text-grey-1000 leading-relaxed mb-4">
                                    {p}
                                </p>
                            ))}
                        </div>
                    ))}

                    {/* ---- Back link ---- */}
                    <div className="mt-12 pt-8 border-t border-grey-200">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-grey-1200 hover:text-grey-800 transition-colors">
                            ← Back to all posts
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    );
}
