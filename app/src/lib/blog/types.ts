export interface BlogPostSummary {
    slug: string;
    title: string;
    date: string;
    category: string;
    image: string;
    featured?: boolean;
}

export interface BlogPost extends BlogPostSummary {
    markdown: string;
    author?: string;
}
