"use client";

/**
 * Infinite-scrolling logo marquee at the bottom of the hero section.
 * Uses CSS animation for smooth continuous scroll.
 */

const logos = ["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue", "kontrastr", "WAVES"];

function LogoItem({ name }: { name: string }) {
    return (
        <div className="flex items-center gap-2 px-8 shrink-0">
            {/* Simple icon placeholder */}
            <div className="w-6 h-6 rounded-md bg-[var(--palette-grey-300)]" />
            <span className="text-base font-bold tracking-tight text-[var(--palette-grey-1200)] whitespace-nowrap">{name}</span>
        </div>
    );
}

export function LogoMarquee() {
    return (
        <div className="relative w-full overflow-hidden border-t border-[var(--theme-outline-outline-variant)] bg-white py-6">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

            <div className="flex animate-marquee">
                {/* Render logos twice for seamless loop */}
                {[...logos, ...logos].map((name, i) => (
                    <LogoItem key={`${name}-${i}`} name={name} />
                ))}
            </div>
        </div>
    );
}
