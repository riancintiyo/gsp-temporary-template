"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    image: string;
    featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
    {
        slug: "sport-friday-activity",
        title: "Sport Friday at SDN 1 Kalidadap",
        date: "01 Nov 2024",
        category: "Sports",
        image: "/img/poster-1.webp",
        featured: true,
    },
    {
        slug: "steam-learning-rocket",
        title: "Building Water Rockets with STEAM Learning",
        date: "15 Dec 2024",
        category: "STEAM",
        image: "/img/poster-2.webp",
    },
    {
        slug: "poverty-and-education",
        title: "Breaking the Poverty Cycle Through Education",
        date: "10 Jan 2025",
        category: "Education",
        image: "/img/poster-1.webp",
    },
    {
        slug: "volunteer-stories",
        title: "Stories from Our Volunteers in the Field",
        date: "03 Feb 2025",
        category: "Community",
        image: "/img/poster-2.webp",
    },
    {
        slug: "impact-report-2024",
        title: "GSP Impact Report: Year in Review 2024",
        date: "01 Mar 2025",
        category: "Report",
        image: "/img/poster-1.webp",
    },
    {
        slug: "science-olympiad-prep",
        title: "Preparing Students for the Science Olympiad",
        date: "20 Mar 2025",
        category: "Education",
        image: "/img/poster-2.webp",
    },
    {
        slug: "community-garden-project",
        title: "Growing Together: The Community Garden Project",
        date: "05 Apr 2025",
        category: "Community",
        image: "/img/poster-1.webp",
    },
    {
        slug: "teacher-training-workshop",
        title: "Empowering Teachers Through STEAM Workshops",
        date: "22 Apr 2025",
        category: "STEAM",
        image: "/img/poster-2.webp",
    },
];

const CATEGORIES = ["All", "Sports", "STEAM", "Education", "Community", "Report"];

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

    const featured = ALL_POSTS.find((p) => p.featured)!;

    const listPosts = ALL_POSTS.filter((p) => {
        if (p.featured) return false;
        if (activeCategory === "All") return true;
        return p.category === activeCategory;
    });

    // Pair list posts into rows of 2
    const rows: BlogPost[][] = [];
    for (let i = 0; i < listPosts.length; i += 2) {
        rows.push(listPosts.slice(i, i + 2));
    }

    return (
        <div className="min-h-screen bg-white font-(family-name:--font-plus-jakarta)">
            <main className="mx-auto w-full max-w-360 px-8 lg:px-(--page-margin) pt-[calc(var(--nav-height)+8rem)] pb-24">
        
                <p className="text-xl font-medium text-grey-800 mb-4">Featured</p>

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
                        <Image src={featured.image} alt={featured.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                    </div>
                </div>

                {/* ---------------------------------------------------------------- */}
                {/* Category filter tabs                                             */}
                {/* ---------------------------------------------------------------- */}
                <div className="mt-8 flex items-center gap-0 border-b border-grey-200 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                    {CATEGORIES.map((cat) => (
                        <button key={cat} type="button" onClick={() => setActiveCategory(cat)} className={`relative shrink-0 px-4 py-3 text-sm font-medium transition-colors ${activeCategory === cat ? "text-grey-1200 font-bold" : "text-grey-800 hover:text-grey-1200"}`}>
                            {cat}
                            {activeCategory === cat && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-blue rounded-t-full" />}
                        </button>
                    ))}
                </div>

                {/* ---------------------------------------------------------------- */}
                {/* Blog list                                                        */}
                {/* ---------------------------------------------------------------- */}
                {rows.length === 0 ? (
                    <p className="py-16 text-center text-grey-800 text-sm">No posts in this category yet.</p>
                ) : (
                    rows.map((row, ri) => (
                        <div key={ri} className="border-b border-grey-200">
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
                                            <Image src={post.image} alt={post.title} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="112px" />
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </main>
        </div>
    );
}
