import { LazyImage } from "@/components/ui/lazy-image";

const logos = [
    { name: "Knods Playground", src: "/img/knods-black.png" },
    { name: "DoEd Wonosobo", src: "/img/disdik-wonosobo.png" },
];

// Duplicate for seamless loop
const ITEMS = [...logos, ...logos];

function LogoItem({ name, src }: { name: string; src: string }) {
    return (
        <div className="flex items-center gap-2 px-8 shrink-0">
            <LazyImage src={src} alt={`${name} logo`} width={24} height={24} className="h-6 w-6 rounded-md object-contain" />
            <span className="text-base font-bold tracking-tight text-grey-1200 whitespace-nowrap">{name}</span>
        </div>
    );
}

export function LogoMarquee() {
    return (
        <div className="relative w-full overflow-hidden border-t border-(--theme-outline-outline-variant) bg-white py-6">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-24 md:w-80 bg-linear-to-r from-white via-white/90 to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-24 md:w-80 bg-linear-to-l from-white via-white/90 to-transparent" />

            <div className="flex w-max animate-[marquee_18s_linear_infinite]">
                {ITEMS.map((logo, i) => (
                    <LogoItem key={i} name={logo.name} src={logo.src} />
                ))}
            </div>
        </div>
    );
}
