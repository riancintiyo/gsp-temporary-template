import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { AboutSection } from "@/components/about-section";

export default function Home() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-plus-jakarta)]">
            <Navbar />
            <HeroSection />
            <LogoMarquee />
            <AboutSection />
        </div>
    );
}
