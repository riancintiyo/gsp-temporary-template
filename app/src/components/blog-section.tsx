"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getBlogSummaries } from "@/lib/blog";
import { LazyImage } from "@/components/ui/lazy-image";
import { FadeIn } from "@/components/ui/fade-in";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const posts = getBlogSummaries();

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function BlogSection() {
    const trackRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "prev" | "next") => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector<HTMLElement>("[data-blog-card]");
        const cardWidth = card ? card.offsetWidth + 24 : 320; // 24 = gap-6
        el.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
    };

    return (
        <section className="w-full py-16 lg:pt-32 lg:pb-24 bg-white font-sans">
            <div className="mx-auto w-full max-w-360 px-8 lg:px-(--page-margin)">
                {/* Header */}
                <FadeIn startOnView duration={0.45} y={10} className="mb-10 lg:mb-12">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl sm:text-4xl font-bold text-grey-1200 leading-tight">Latest Blogs</h2>
                        <Link href="/blog" className="inline-flex items-center gap-1.5 rounded-full border border-grey-200 bg-white px-5 py-2 text-sm font-medium text-grey-1200 hover:bg-grey-50 transition-colors shadow-webflow-dropshadow">
                            View blog
                        </Link>
                    </div>
                </FadeIn>

                {/* Card track */}
                <FadeIn startOnView delay={0.12} duration={0.5} y={12}>
                    <div ref={trackRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scroll-smooth scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} data-blog-card className="group flex-none flex flex-col w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] snap-start">
                                {/* Thumbnail */}
                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-grey-100 shadow-webflow-dropshadow">
                                    <LazyImage src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                                </div>

                                {/* Text */}
                                <h3 className="font-bold text-grey-1200 text-base leading-snug mb-2 group-hover:text-grey-1000 transition-colors" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "2.5rem" }}>
                                    {post.title}
                                </h3>
                                <p className="text-sm text-grey-1000 mb-3">
                                    {post.date}&nbsp;&nbsp;{post.category}
                                </p>
                                <span className="inline-flex items-center gap-0.5 text-sm font-medium text-grey-1200 group-hover:gap-1.5 transition-all mt-auto">
                                    Read blog <ChevronRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Navigation arrows */}
                    <div className="flex items-center gap-2 mt-8">
                        <button onClick={() => scroll("prev")} aria-label="Previous posts" className="flex items-center justify-center w-9 h-9 rounded-full border border-grey-200 bg-white text-grey-800 hover:bg-grey-50 transition-colors shadow-webflow-dropshadow">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button onClick={() => scroll("next")} aria-label="Next posts" className="flex items-center justify-center w-9 h-9 rounded-full border border-grey-200 bg-white text-grey-800 hover:bg-grey-50 transition-colors shadow-webflow-dropshadow">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
