import { TextAnimate } from "@/components/ui/text-animate";
import { RevealOnView } from "@/components/ui/reveal-on-view";

const currentTimestamp = Date.now();

export function QuoteSection() {
    const now = new Date(currentTimestamp);
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return (
        <section className="relative w-full font-sans overflow-hidden">
            <RevealOnView y={0} scaleFrom={1} duration={0.45} className="absolute inset-0">
                <div className="w-full h-full bg-primary-blue" />
            </RevealOnView>

            <div className="relative z-10 mx-auto w-full px-8 lg:px-(--page-margin) py-16 lg:py-24">
                {/* Top meta row */}
                <div className="flex items-center justify-between mb-8 lg:mb-12">
                    <span className="text-white/60 text-xs font-medium tracking-wide">{formattedDate}</span>
                    <span className="text-white/60 text-xs font-medium tracking-widest uppercase">GSP</span>
                </div>

                {/* Quote */}
                <blockquote className="text-white font-bold text-3xl sm:text-4xl lg:text-7xl leading-tight lg:leading-snug">
                    <TextAnimate as="span" by="line" animation="blurIn" startOnView once delay={0.48} viewportAmount={0.45} viewportMargin="-10% 0px -10% 0px">
                        {`The illiterate of the future will not be the person who cannot read. It will be the person who does not know how to learn.`}
                    </TextAnimate>
                </blockquote>
            </div>
        </section>
    );
}
