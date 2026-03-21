import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog — STEAM Education Insights & Program Updates",
    description: "Read the latest articles, insights, and updates from the General Science Program. Explore STEAM education stories, science program highlights, and community impact in rural Indonesia.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog — General Science Program",
        description: "Explore articles and updates from the General Science Program covering STEAM education, science activities, and community impact.",
        url: "/blog",
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
