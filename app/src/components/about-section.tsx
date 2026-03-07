import { HeroGridPattern } from "./hero-grid-pattern";

function BlueFlowerIcon({ className }: { className?: string }) {
    return (
        <svg className={className} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.8529 8.75592L11.5902 8.00213L12.8529 7.24834C13.9511 6.59249 14.3254 5.14027 13.6919 4.00319C13.0585 2.86612 11.656 2.47857 10.5578 3.13442L9.29508 3.88821V2.37636C9.29508 1.06468 8.26682 0 7 0C5.73318 0 4.70492 1.06468 4.70492 2.37636V3.88821L3.44221 3.13442C2.34402 2.47857 0.941471 2.86612 0.308061 4.00319C-0.32535 5.14027 0.0489382 6.59249 1.14712 7.24834L2.40983 8.00213L1.14712 8.75592C0.0489382 9.41177 -0.32535 10.864 0.308061 12.0011C0.941471 13.1381 2.34402 13.5257 3.44221 12.8698L4.70492 12.1161V13.6236C4.70492 14.9353 5.73318 16 7 16C8.26682 16 9.29508 14.9353 9.29508 13.6236V12.1118L10.5578 12.8656C11.656 13.5214 13.0585 13.1339 13.6919 11.9968C14.3254 10.864 13.9511 9.41177 12.8529 8.75592Z"
                fill="#638FF5"
            />
        </svg>
    );
}

export function AboutSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* Layer 1: Grid pattern — left side only, hidden on mobile */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block" style={{
                maskImage: "linear-gradient(to right, black 45%, transparent 65%)",
                WebkitMaskImage: "linear-gradient(to right, black 45%, transparent 65%)",
            }}>
                <HeroGridPattern className="absolute inset-0 w-full h-full" />
            </div>

            {/* Layer 2: Gradient blobs — top-right area */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <svg
                    className="absolute top-0 right-0 h-full w-full lg:w-[85%]"
                    viewBox="0 0 1221 655"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMaxYMin slice"
                    style={{ maxWidth: "1221px" }}
                >
                    {/* Green blob */}
                    <g filter="url(#about-blur-green)">
                        <path
                            d="M1292.1 -112.787C1459.66 -227.95 1566.77 -258.549 1629.46 -91.9411C1692.14 74.6669 1608.04 260.494 1441.61 323.114C1275.18 385.735 991.083 190.664 928.396 24.0563C962.992 -167.746 1125.66 -50.1667 1292.1 -112.787Z"
                            fill="#95D2B3"
                        />
                    </g>
                    {/* Purple blob */}
                    <g filter="url(#about-blur-purple)">
                        <path
                            d="M582.612 -633.695C743.044 -648.923 903.845 -758.766 952.034 -630.692C1000.22 -502.618 885.052 -218.034 757.117 -169.898C629.182 -121.762 620.867 -237.156 572.679 -365.23C524.491 -493.304 452.768 -635.048 582.612 -633.695Z"
                            fill="#D6C7FF"
                        />
                    </g>
                    {/* Blue blob */}
                    <g filter="url(#about-blur-blue)">
                        <circle cx="1197.68" cy="-365.528" r="468.5" transform="rotate(-110.619 1197.68 -365.528)" fill="#638FF5" />
                    </g>
                    <defs>
                        <filter id="about-blur-green" x="419.396" y="-717.06" width="1739.81" height="1561.16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur" />
                        </filter>
                        <filter id="about-blur-purple" x="0" y="-1201.02" width="1472.24" height="1551.29" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur" />
                        </filter>
                        <filter id="about-blur-blue" x="220.052" y="-1343.15" width="1955.25" height="1955.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur" />
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Layer 3: Noise texture overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-1 opacity-[0.95] mix-blend-soft-light bg-black"
                style={{
                    mask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                    WebkitMask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-360 px-8 lg:px-(--page-margin) py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left column — Badge, date & history text */}
                    <div className="flex-1 flex flex-col">
                        {/* Badge + date row */}
                        <div className="flex items-center justify-between mb-16 lg:mb-24">
                            <div className="inline-flex items-center gap-2 rounded-full border border-grey-100 bg-white px-4 py-2 text-sm font-medium text-grey-1200">
                                <BlueFlowerIcon className="shrink-0" />
                                <span>About GSP</span>
                            </div>
                            <span className="text-lg font-medium text-grey-800 tracking-wide">08/24</span>
                        </div>

                        {/* History text */}
                        <p className="text-base sm:text-lg leading-[1.75] text-grey-800 max-w-150">
                            Launched in <strong className="font-bold text-grey-1200">2024</strong>,{" "}
                            <strong className="font-bold text-grey-1200">GSP (General Science Program)</strong> began as
                            a personal initiative to introduce software engineering to students in{" "}
                            <strong className="font-bold text-grey-1200">Kalidadap</strong>,{" "}
                            <strong className="font-bold text-grey-1200">Wonosobo</strong>. As the program grew, more
                            passionate individuals joined, and together we expanded the initiative into a broader{" "}
                            <strong className="font-bold text-grey-1200">STEAM</strong>-focused learning
                            movement—covering Science, Technology, Engineering, Arts, and Math.
                        </p>
                    </div>

                    {/* Right column — Our Mission (vertically centered) */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-grey-1200 mb-8">
                            Our Mission
                        </h2>
                        <p className="text-base sm:text-lg leading-[1.75] text-grey-800 max-w-135">
                            The GSP program aims to empower elementary students by providing them with the tools and inspiration to
                            explore their surrounding environment. Through engaging activities and STEAM-based hands-on projects, the
                            program seeks to build their motivation for learning and expand their knowledge about career exploration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
