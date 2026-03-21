import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About the STEAM Science Program",
    description: "Learn about the General Science Program (GSP), a STEAM program empowering elementary students in rural Indonesia through hands-on Science, Technology, Engineering, Art, and Math education.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About the General Science Program — STEAM Education",
        description: "The General Science Program (GSP) aims to empower elementary students in rural Indonesia through engaging STEAM-based hands-on projects and career exploration workshops.",
        url: "/about",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
