import { HeroSection } from "@/components/hero-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { AboutSection } from "@/components/about-section";
import { DarkTruthSection } from "@/components/dark-truth-section";
import { ProblemsSection } from "@/components/problems-section";
import { PovertyCycleSection } from "@/components/poverty-cycle-section";
import { WhatWeDoSection } from "@/components/what-we-do-section";
import { GallerySection } from "@/components/gallery-section";
import { BlogSection } from "@/components/blog-section";
import { TeamSection } from "@/components/team-section";
import { QuoteSection } from "@/components/quote-section";

export default function Home() {
    return (
        <div className="min-h-screen font-(family-name:--font-plus-jakarta)">
            <HeroSection />
            <LogoMarquee />
            <AboutSection />
            <DarkTruthSection />
            <ProblemsSection />
            <PovertyCycleSection />
            <WhatWeDoSection />
            <BlogSection />
            <TeamSection />
            <QuoteSection />
            <GallerySection />
        </div>
    );
}
