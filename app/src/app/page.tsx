import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { AboutSection } from "@/components/about-section";
import { DarkTruthSection } from "@/components/dark-truth-section";
import { ProblemsSection } from "@/components/problems-section";
import { PovertyCycleSection } from "@/components/poverty-cycle-section";

export default function Home() {
    return (
        <div className="min-h-screen font-(family-name:--font-plus-jakarta)">
            <Navbar />
            <HeroSection />
            <LogoMarquee />
            <AboutSection />
            <DarkTruthSection />
            <ProblemsSection />
            <PovertyCycleSection />
        </div>
    );
}
