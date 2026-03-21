import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

const plusJakartaSans = localFont({
    src: [
        { path: "../../public/fonts/PlusJakartaSans-Regular.ttf", weight: "400", style: "normal" },
        { path: "../../public/fonts/PlusJakartaSans-Medium.ttf", weight: "500", style: "normal" },
        { path: "../../public/fonts/PlusJakartaSans-SemiBold.ttf", weight: "600", style: "normal" },
        { path: "../../public/fonts/PlusJakartaSans-Bold.ttf", weight: "700", style: "normal" },
    ],
    variable: "--font-plus-jakarta",
    display: "swap",
});

const SITE_URL = "https://www.generalscienceprogram.com";
const SITE_NAME = "General Science Program";
const SITE_DESCRIPTION = "General Science Program (GSP) is a STEAM program empowering elementary school students in rural Indonesia through hands-on Science, Technology, Engineering, Art, and Math education.";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "General Science Program — STEAM Education for Rural Students",
        template: "%s | General Science Program",
    },
    description: SITE_DESCRIPTION,
    keywords: [
        "STEAM Program",
        "General Science",
        "STEAM Science Program",
        "General Science Program",
        "STEAM education",
        "science program for kids",
        "rural education Indonesia",
        "STEAM for elementary students",
        "hands-on science education",
        "science technology engineering art math",
        "GSP",
        "STEAM project",
        "education empowerment",
    ],
    authors: [{ name: "General Science Program" }],
    creator: "General Science Program",
    publisher: "General Science Program",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: "General Science Program — STEAM Education for Rural Students",
        description: SITE_DESCRIPTION,
        images: [
            {
                url: "/img/og-image.png",
                width: 1200,
                height: 630,
                alt: "General Science Program — STEAM Science Program for Rural Students",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "General Science Program — STEAM Education for Rural Students",
        description: SITE_DESCRIPTION,
        images: ["/img/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: SITE_URL,
    },
    icons: {
        icon: [
            { url: "/icon/16.png", sizes: "16x16", type: "image/png" },
            { url: "/icon/32.png", sizes: "32x32", type: "image/png" },
            { url: "/icon/48.png", sizes: "48x48", type: "image/png" },
            { url: "/icon/96.png", sizes: "96x96", type: "image/png" },
            { url: "/icon/48.ico", sizes: "48x48" },
        ],
        shortcut: "/icon/48.ico",
        apple: [{ url: "/icon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/icon/site.webmanifest",
};

function JsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "General Science Program",
        alternateName: "GSP",
        url: SITE_URL,
        logo: `${SITE_URL}/icon/32.png`,
        description: SITE_DESCRIPTION,
        foundingDate: "2024",
        areaServed: {
            "@type": "Country",
            name: "Indonesia",
        },
        knowsAbout: ["STEAM Education", "Science Education", "Technology Education", "Engineering Education", "Art Education", "Mathematics Education", "Rural Education"],
        sameAs: [],
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        alternateName: "GSP",
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };

    const programSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        name: "General Science Program — STEAM Science Program",
        description: "A STEAM program providing hands-on Science, Technology, Engineering, Art, and Math education to elementary school students in rural areas of Indonesia, aiming to increase mean years of schooling and inspire future generations.",
        provider: {
            "@type": "EducationalOrganization",
            name: "General Science Program",
            url: SITE_URL,
        },
        educationalProgramMode: "onsite",
        occupationalCategory: "STEAM Education",
        programType: "Community Education Program",
        timeOfDay: "Daytime",
        typicalAgeRange: "6-12",
        educationalCredentialAwarded: "Certificate of Participation",
        teaches: ["Science", "Technology", "Engineering", "Art", "Mathematics"],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }} />
        </>
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <JsonLd />
            </head>
            <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
                <SmoothScroll />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
