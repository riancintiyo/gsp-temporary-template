import { blogPosts } from "./content";
import type { BlogPost, BlogPostSummary } from "./types";

export function getAllBlogPosts(): BlogPost[] {
    return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getBlogSummaries(): BlogPostSummary[] {
    return blogPosts.map(({ markdown, ...summary }) => summary);
}

export function getBlogCategories(): string[] {
    return ["All", ...new Set(blogPosts.map((post) => post.category))];
}
