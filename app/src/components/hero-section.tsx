import { ArrowRight } from "lucide-react";
import { HeroGridPattern } from "./hero-grid-pattern";
import { HeroBentoGrid } from "./hero-bento-grid";

export function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-white pt-[var(--nav-height)]">
            {/* Background gradient: white left → blue/purple right */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(214,199,255,0.15) 50%, rgba(99,143,245,0.2) 70%, rgba(149,210,179,0.1) 100%)",
                }}
            />

            {/* Noise texture overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.85] mix-blend-soft-light"
                style={{
                    backgroundImage: "url('/noise.webp')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                }}
            />

            {/* Grid pattern */}
            <HeroGridPattern className="pointer-events-none absolute inset-0 w-full h-full opacity-100" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16 px-8 lg:px-[var(--page-margin)] py-16 lg:py-24">
                {/* Left column — Text */}
                <div className="flex flex-1 flex-col justify-center gap-8 lg:gap-10 py-8 lg:py-16">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[var(--palette-grey-1200)]" style={{ fontStyle: "normal" }}>
                        General Science <br />
                        Program
                    </h1>

                    <p className="max-w-[520px] text-base sm:text-lg leading-7 text-[var(--palette-grey-800)]">Empowering learning and creativity based on Science, Technology, Engineering, Art, Mathematic (STEAM) project for elementary school students in rural areas.</p>

                    <div className="pt-2">
                        <a href="/join" className="inline-flex items-center gap-3 rounded-full bg-[var(--palette-grey-1200)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--palette-grey-900)]">
                            Join Our Voluntrip
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Right column — Bento Grid */}
                <div className="flex-1 w-full max-w-[580px] lg:max-w-none">
                    <HeroBentoGrid />
                </div>
            </div>
        </section>
    );
}
