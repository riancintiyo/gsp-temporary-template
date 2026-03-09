"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type TagColor = "green" | "blue" | "teal" | "purple";

const tagColorMap: Record<TagColor, string> = {
    green: "bg-[#95D2B3] text-white",
    blue: "bg-[#638FF5] text-white",
    teal: "bg-[#FBBF24] text-white",
    purple: "bg-[#D6C7FF] text-white",
};

interface AccordionItemData {
    value: string;
    trigger: string;
    content: ReactNode;
    tags: { label: string; color: TagColor }[];
}

const items: AccordionItemData[] = [
    {
        value: "steam-occupation",
        trigger: "STEAM Occupation",
        content: (
            <>
                Occupations that related to <strong>STEM and STEAM</strong> will growth until <strong>10,4%</strong> compared to <strong>3,6%</strong> for non STEM occupations between 2024 and 2033. Moreover, more than 80% of jobs over the next decade will require STEM skills. Lastly, an additional <strong>653,000</strong> tech workers will be
                needed by 2030 to meet demand.
            </>
        ),
        tags: [
            { label: "Science", color: "green" },
            { label: "Engineering", color: "teal" },
        ],
    },
    {
        value: "stem-impact",
        trigger: "STEM Impact",
        content: <>Shifting just <strong>1%</strong> workforce into STEM roles would add <strong>$57.4 billion</strong> to GDP (net present value over 20 years). Additionally, between 1960 and 2000, 75% of the growth in gross domestic product around the world was linked to increased math and science skills.</>,
        tags: [
            { label: "Science", color: "green" },
            { label: "Engineering", color: "teal" },
            { label: "Math", color: "purple" },
            { label: "Engineering", color: "blue" },
        ],
    },
    {
        value: "stem-children",
        trigger: "STEM for Children",
        content: (
            <>
                Early STEM intervention helps children broaden their horizon and aspirations, where at the age of <strong>7 years</strong> those factors are affected by stereotypes. Subsequently, teachers childhood experiences are grounded in the construction of identity. Through conversations and activities, those
                things can influence a child’s future aspirations and career.
            </>
        ),
        tags: [
            { label: "Science", color: "green" },
            { label: "Engineering", color: "teal" },
            { label: "Math", color: "purple" },
        ],
    },
];

function Tag({ label, color }: { label: string; color: TagColor }) {
    return <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${tagColorMap[color]}`}>{label}</span>;
}

export function PovertyCycleSection() {
    return (
        <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden font-sans">
            <div className="relative z-10 mx-auto w-full max-w-360 px-8 lg:px-(--page-margin)">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center md:items-start">
                    {/* Left — Accordions */}
                    <div className="order-2 mt-2">
                        <Accordion type="multiple" className="w-full" defaultValue={["steam-occupation"]}>
                            {items.map((item) => (
                                <AccordionItem key={item.value} value={item.value} className="rounded-2xl border border-grey-100 bg-white px-6 py-2 shadow-webflow-dropshadow mb-4 last:mb-0">
                                    <AccordionTrigger className="text-lg font-bold text-grey-1200 hover:no-underline">{item.trigger}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-sm text-grey-800 leading-relaxed mb-4">{item.content}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag, i) => (
                                                <Tag key={`${tag.label}-${i}`} label={tag.label} color={tag.color} />
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Right — Title + Cycle Image */}
                    <div className="order-1 flex flex-col items-center justify-center md:items-start md:justify-start  gap-8">
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-grey-1200 leading-tight text-center md:text-start">Cycle of Poverty and Opportunities in Wonosobo</h2>
                        <div className="relative w-full max-w-75 md:max-w-124 overflow-hidden rounded-2xl">
                            <Image
                                src="/img/poverty-cycle.webp"
                                alt="Cycle of Poverty diagram showing the relationship between lack of education, lack of opportunity, low income, and insufficient living conditions, with GSP breaking the cycle"
                                width={400}
                                height={160}
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
