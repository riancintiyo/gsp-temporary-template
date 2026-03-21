import type { MetadataRoute } from "next";
import { getBlogSummaries } from "@/lib/blog";

const SITE_URL = "https://www.generalscienceprogram.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const blogPosts = getBlogSummaries();

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...staticPages, ...blogPages];
}
