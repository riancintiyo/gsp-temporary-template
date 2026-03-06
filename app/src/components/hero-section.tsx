import { ArrowRight } from "lucide-react";
import { HeroGridPattern } from "./hero-grid-pattern";
import { HeroBentoGrid } from "./hero-bento-grid";

export function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-white pt-[var(--nav-height)]">
            {/* Layer 1 (bottom): Grid pattern — shifted right */}
            <HeroGridPattern className="pointer-events-none absolute inset-0 w-full h-full opacity-100" style={{ transform: "translateX(20%)" }} />

            {/* Layer 2 (middle): Gradient blobs — green, blue, purple */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <g filter="url(#blur-green)" transform="translate(200, 00)">
                        <path d="M969.63 431.593C1018.41 628.973 1009.33 740 831.317 740C653.306 740 509 595.846 509 418.023C509 240.2 791.619 43 969.63 43C1136.96 142.924 969.63 253.77 969.63 431.593Z" fill="#95D2B3"/>
                    </g>
                    <g filter="url(#blur-blue)" transform="translate(10, 10)">
                        <circle cx="1250" cy="850" r="350" fill="#638FF5"/>
                    </g>
                    <g filter="url(#blur-purple)" transform="translate(10, -10)">
                        <path d="M1004.54 94.2996C962.296 249.818 1008.48 439 871.637 439C734.797 439 509 230.991 509 94.2996C509 -42.3917 619.93 -9.53726 756.77 -9.53726C893.61 -9.53726 1051.53 -26.7501 1004.54 94.2996Z" fill="#D6C7FF"/>
                    </g>
                    <defs>
                        <filter id="blur-green" x="-2000" y="-2000" width="6000" height="6000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur_77_1558"/>
                        </filter>
                        <filter id="blur-blue" x="-2000" y="-2000" width="6000" height="6000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur_77_1560"/>
                        </filter>
                        <filter id="blur-purple" x="-2000" y="-2000" width="2000" height="2000" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur_77_1559"/>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Layer 3 (top): Noise texture overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.95] mix-blend-soft-light bg-black"
                style={{
                    mask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                    WebkitMask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16 px-8 lg:px-[var(--page-margin)] py-16 lg:py-24">
                {/* Left column — Text */}
                <div className="flex flex-1 flex-col justify-center items-center md:items-start gap-8 lg:gap-10 py-8 lg:py-16">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[var(--palette-grey-1200)] text-center md:text-left" style={{ fontStyle: "normal" }}>
                        General Science <br />
                        Program
                    </h1>

                    <p className="max-w-[520px] text-base sm:text-lg leading-7 text-[var(--palette-grey-800)] text-center md:text-left">Empowering learning and creativity based on Science, Technology, Engineering, Art, Mathematic (STEAM) project for elementary school students in rural areas.</p>

                    <div className="pt-2">
                        <a href="/join" className="inline-flex items-center gap-3 rounded-full bg-[var(--palette-grey-1200)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--palette-grey-900)]">
                            Join Our Voluntrip
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Right column — Bento Grid */}
                <div className="flex-1 w-full max-w-[580px]">
                    <HeroBentoGrid />
                </div>
            </div>
        </section>
    );
}
