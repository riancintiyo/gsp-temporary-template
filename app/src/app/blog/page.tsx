"use client";

import { useState } from "react";
import Link from "next/link";
import { getBlogCategories, getBlogSummaries } from "@/lib/blog";
import { LazyImage } from "@/components/ui/lazy-image";
import { RevealOnView } from "@/components/ui/reveal-on-view";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ALL_POSTS = getBlogSummaries();
const CATEGORIES = getBlogCategories();

/* ------------------------------------------------------------------ */
/*  Read Blog button                                                   */
/* ------------------------------------------------------------------ */

function ReadBlogButton({ href }: { href: string }) {
    return (
        <Link href={href} className="inline-flex items-center w-fit gap-1.5 rounded-full border border-grey-300 bg-white px-5 py-2 text-xs font-medium text-grey-1200 hover:bg-grey-50 transition-colors">
            Read blog
        </Link>
    );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const postsByCategory = activeCategory === "All" ? ALL_POSTS : ALL_POSTS.filter((post) => post.category === activeCategory);

    const featured = postsByCategory.find((p) => p.featured) ?? postsByCategory[0];

    if (!featured) {
        return (
            <div className="min-h-screen bg-white font-(family-name:--font-plus-jakarta)">
                <main className="mx-auto w-full max-w-360 px-8 lg:px-(--page-margin) pt-[calc(var(--nav-height)+8rem)] pb-24">
                    <p className="py-16 text-center text-grey-800 text-sm">No posts available yet.</p>
                </main>
            </div>
        );
    }

    const listPosts = activeCategory === "All" ? (postsByCategory.length > 1 ? postsByCategory.filter((post) => post.slug !== featured.slug) : postsByCategory) : postsByCategory;

    // Pair list posts into rows of 2
    const rows: Array<typeof listPosts> = [];
    for (let i = 0; i < listPosts.length; i += 2) {
        rows.push(listPosts.slice(i, i + 2));
    }

    return (
        <div className="min-h-screen bg-white font-(family-name:--font-plus-jakarta)">
            <main className="mx-auto w-full max-w-360 px-8 lg:px-(--page-margin) pt-[calc(var(--nav-height)+8rem)] pb-24">
                <RevealOnView>
                    <p className="text-xl font-medium text-grey-800 mb-4">Featured</p>
                </RevealOnView>

                <RevealOnView delay={0.06}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-12">
                        {/* Left — text */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-grey-1200">{featured.title}</h1>
                                <p className="text-sm text-grey-800">
                                    {featured.date}
                                    <span className="mx-3 text-grey-300">·</span>
                                    {featured.category}
                                </p>
                            </div>
                            <ReadBlogButton href={`/blog/${featured.slug}`} />
                        </div>

                        {/* Right — image */}
                        <div className="relative w-full aspect-video lg:aspect-auto lg:min-h-64 rounded-2xl overflow-hidden bg-grey-100">
                            <LazyImage src={featured.image} alt={featured.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                        </div>
                    </div>
                </RevealOnView>

                {/* ---------------------------------------------------------------- */}
                {/* Category filter tabs                                             */}
                {/* ---------------------------------------------------------------- */}
                <RevealOnView delay={0.1}>
                    <div className="mt-8 flex items-center gap-0 border-b border-grey-200 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                        {CATEGORIES.map((cat) => (
                            <button key={cat} type="button" onClick={() => setActiveCategory(cat)} className={`relative shrink-0 px-4 py-3 text-sm font-medium transition-colors ${activeCategory === cat ? "text-grey-1200 font-bold" : "text-grey-800 hover:text-grey-1200"}`}>
                                {cat}
                                {activeCategory === cat && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-blue rounded-t-full" />}
                            </button>
                        ))}
                    </div>
                </RevealOnView>

                {/* ---------------------------------------------------------------- */}
                {/* Blog list                                                        */}
                {/* ---------------------------------------------------------------- */}
                {rows.length === 0 ? (
                    <RevealOnView delay={0.14}>
                        <p className="py-16 text-center text-grey-800 text-sm">No posts in this category yet.</p>
                    </RevealOnView>
                ) : (
                    rows.map((row, ri) => (
                        <RevealOnView key={ri} delay={0.14 + ri * 0.04}>
                            <div className="border-b border-grey-200">
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    {row.map((post, pi) => (
                                        <article key={post.slug} className={`relative flex items-center justify-between gap-6 py-7 ${pi === 0 ? "sm:pr-8" : "sm:pl-8"} ${pi === 0 && row.length === 2 ? "border-grey-200" : ""}`}>
                                            {/* Stretched link — covers the whole card */}
                                            <Link href={`/blog/${post.slug}`} className="absolute inset-0" aria-label={post.title} />

                                            {/* Text */}
                                            <div className="relative z-10 flex flex-col gap-3 flex-1 min-w-0">
                                                <h2 className="text-base sm:text-lg font-bold text-grey-1200 leading-snug line-clamp-2">{post.title}</h2>
                                                <p className="text-sm text-grey-800">
                                                    {post.date}
                                                    <span className="mx-3 text-grey-300">·</span>
                                                    {post.category}
                                                </p>
                                                <ReadBlogButton href={`/blog/${post.slug}`} />
                                            </div>

                                            {/* Thumbnail */}
                                            <div className="relative z-10 shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-grey-100">
                                                <LazyImage src={post.image} alt={post.title} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="112px" />
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </RevealOnView>
                    ))
                )}
            </main>
        </div>
    );
}
