import { ArrowRight } from "lucide-react";
import { HeroGridPattern } from "./hero-grid-pattern";
import { HeroBentoGrid } from "./hero-bento-grid";
import { ShinyButton } from "@/components/ui/shiny-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-white pt-(--nav-height)">
            {/* Layer 1 (bottom): Grid pattern — shifted right */}
            <HeroGridPattern className="pointer-events-none absolute inset-0 w-full h-full opacity-100" style={{ transform: "translateX(20%)" }} />

            {/* Mobile fallback background */}
            <div className="pointer-events-none absolute inset-0 z-0 md:hidden bg-center bg-cover opacity-80" style={{ backgroundImage: "url('/img/gradient-blob.webp')" }} />

            {/* Layer 2 (middle): Gradient blobs — green, blue, purple */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden md:block">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <g filter="url(#blur-green)" transform="translate(200, 00)">
                        <path d="M969.63 431.593C1018.41 628.973 1009.33 740 831.317 740C653.306 740 509 595.846 509 418.023C509 240.2 791.619 43 969.63 43C1136.96 142.924 969.63 253.77 969.63 431.593Z" fill="#95D2B3" />
                    </g>
                    <g filter="url(#blur-blue)" transform="translate(10, 10)">
                        <circle cx="1250" cy="850" r="350" fill="#638FF5" />
                    </g>
                    <g filter="url(#blur-purple)" transform="translate(10, -10)">
                        <path d="M1004.54 94.2996C962.296 249.818 1008.48 439 871.637 439C734.797 439 509 230.991 509 94.2996C509 -42.3917 619.93 -9.53726 756.77 -9.53726C893.61 -9.53726 1051.53 -26.7501 1004.54 94.2996Z" fill="#D6C7FF" />
                    </g>
                    <defs>
                        <filter id="blur-green" x="-800" y="-800" width="3600" height="3000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur_77_1558" />
                        </filter>
                        <filter id="blur-blue" x="-800" y="-800" width="3600" height="3000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur_77_1560" />
                        </filter>
                        <filter id="blur-purple" x="-800" y="-800" width="3600" height="3000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur_77_1559" />
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Layer 3 (top): Noise texture overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.95] mix-blend-soft-light bg-black hidden md:block"
                style={{
                    mask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                    WebkitMask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto flex w-full max-w-360 flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16 px-8 lg:px-(--page-margin) py-16 lg:py-24">
                {/* Left column — Text */}
                <div className="flex flex-1 flex-col justify-center items-center md:items-start gap-8 lg:gap-10 py-8 lg:py-16">
                    <TextAnimate as="h1" by="line" animation="fadeIn" duration={0.6} startOnView={false} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-grey-1200 text-center md:text-left" style={{ fontStyle: "normal" }}>
                        {`General Science Program`}
                    </TextAnimate>

                    <TextAnimate as="p" by="line" animation="fadeIn" duration={0.5} delay={0.2} startOnView={false} className="max-w-130 text-base sm:text-lg leading-7 text-grey-800 text-center md:text-left">
                        {`A STEAM science program empowering learning and creativity through Science, Technology, Engineering, Art, and Math projects for elementary students in rural areas.`}
                    </TextAnimate>

                    <FadeIn className="pt-2" delay={0.8} duration={0.45}>
                        <ShinyButton href="/join">
                            <span>Join Our Voluntrip</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </ShinyButton>
                    </FadeIn>
                </div>

                {/* Right column — Bento Grid */}
                <FadeIn className="flex-1 w-full max-w-145" delay={0.35} duration={0.55}>
                    <HeroBentoGrid />
                </FadeIn>
            </div>
        </section>
    );
}
