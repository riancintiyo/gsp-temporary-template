export function QuoteSection() {
    return (
        <section className="w-full bg-primary-blue font-sans">
            <div className="mx-auto w-full px-8 lg:px-(--page-margin) py-16 lg:py-24">
                {/* Top meta row */}
                <div className="flex items-center justify-between mb-8 lg:mb-12">
                    <span className="text-white/60 text-xs font-medium tracking-wide">11/01/2025</span>
                    <span className="text-white/60 text-xs font-medium tracking-widest uppercase">GSP</span>
                </div>

                {/* Quote */}
                <blockquote className="text-white font-bold text-3xl sm:text-4xl lg:text-7xl leading-tight lg:leading-snug">The illiterate of the future will not be the person who cannot read. It will be the person who does not know how to learn.</blockquote>
            </div>
        </section>
    );
}
