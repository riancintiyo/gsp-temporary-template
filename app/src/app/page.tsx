import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { RevealOnView } from "@/components/ui/reveal-on-view";

const LogoMarquee = dynamic(() => import("@/components/logo-marquee").then((m) => ({ default: m.LogoMarquee })));
const AboutSection = dynamic(() => import("@/components/about-section").then((m) => ({ default: m.AboutSection })));
const DarkTruthSection = dynamic(() => import("@/components/dark-truth-section").then((m) => ({ default: m.DarkTruthSection })));
const ProblemsSection = dynamic(() => import("@/components/problems-section").then((m) => ({ default: m.ProblemsSection })));
const PovertyCycleSection = dynamic(() => import("@/components/poverty-cycle-section").then((m) => ({ default: m.PovertyCycleSection })));
const WhatWeDoSection = dynamic(() => import("@/components/what-we-do-section").then((m) => ({ default: m.WhatWeDoSection })));
const GallerySection = dynamic(() => import("@/components/gallery-section").then((m) => ({ default: m.GallerySection })));
const BlogSection = dynamic(() => import("@/components/blog-section").then((m) => ({ default: m.BlogSection })));
const TeamSection = dynamic(() => import("@/components/team-section").then((m) => ({ default: m.TeamSection })));
const QuoteSection = dynamic(() => import("@/components/quote-section").then((m) => ({ default: m.QuoteSection })));

export default function Home() {
    return (
        <div className="min-h-screen font-(family-name:--font-plus-jakarta)">
            <HeroSection />
            <LogoMarquee />
            <RevealOnView>
                <AboutSection />
            </RevealOnView>
            <DarkTruthSection />
            <ProblemsSection />
            <RevealOnView>
                <PovertyCycleSection />
            </RevealOnView>
            <WhatWeDoSection />
            <BlogSection />
            <TeamSection />
            <QuoteSection />
            <GallerySection />
        </div>
    );
}
