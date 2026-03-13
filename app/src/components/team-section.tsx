"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface TeamMember {
    name: string;
    role: string;
    badge: string;
    quote: string;
    image: string;
}

const members: TeamMember[] = [
    {
        name: "Rian C.",
        role: "Founder",
        badge: "Founder GSP",
        quote: "\u201CIt\u2019s still feel surreal to be able to start and initialize this project. Overcome all self-doubt and keep moving forward to holding on to what you believe is truly remarkable experience.\u201D",
        image: "/img/poster-1.webp",
    },
    {
        name: "Dwi Sari p.",
        role: "Program Director",
        badge: "Co-Founder",
        quote: "\u201CEducation is the most powerful weapon which you can use to change the world. We believe every child deserves access to quality learning.\u201D",
        image: "/img/poster-2.webp",
    },
    {
        name: "Nirmala",
        role: "Community Lead",
        badge: "Core Team",
        quote: "\u201CWatching students discover their potential in STEAM gives me endless motivation. The spark in their eyes is why we do this work every day.\u201D",
        image: "/img/poster-1.webp",
    },
];

/* ------------------------------------------------------------------ */
/*  Clover / flower decorative icon                                    */
/* ------------------------------------------------------------------ */

function Icon({ className }: { className?: string }) {
    return (
        <svg className={className} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7491 15.5106C32.2354 -5.17021 0.764631 -5.17021 14.2509 15.5106C0.764631 -5.17021 -8.96208 24.6562 12.8649 19.7692C-8.96208 24.6479 16.5 43.0796 16.5 22.3987C16.5 43.0796 41.9621 24.6479 20.1351 19.7692C41.9621 24.6562 32.2354 -5.17021 18.7491 15.5106Z" fill="white" />
        </svg>
    );
}

function AltIcon({ className }: { className?: string }) {
    return (
        <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M29.9964 20.9081C26.1263 22.1277 21.4974 21.2892 18.6138 18.3163C21.8768 19.4597 25.3675 18.545 28.3269 16.5631C28.4787 16.4106 28.5546 16.2581 28.7064 16.1819C29.8446 15.4959 30.6793 14.5049 31.2864 13.3615C32.0452 11.8369 32.5005 9.70252 31.0588 8.48287C30.5276 8.40664 29.9964 8.63532 29.6928 9.09269C28.2511 11.4558 26.6575 13.4377 24.2292 14.6573C24.1533 14.7336 24.0016 14.6573 23.9257 14.7336C22.5598 15.4959 20.9662 15.7245 19.4485 15.8008C21.0421 15.0385 22.2562 13.8951 23.2427 12.4467C24.9881 9.62629 25.8987 6.42471 24.9881 3.22312C24.5328 1.69856 23.3945 0.173995 21.7251 0.0215389C21.0421 -0.0546893 20.6627 0.707593 20.8144 1.39365C21.3456 3.68049 21.6492 5.73865 21.1939 8.0255C20.7386 10.0837 19.828 11.9894 18.3103 13.3615C18.7656 12.0656 18.8415 10.6935 18.7656 9.32138C18.7656 9.01646 18.6138 8.71155 18.5379 8.33041C17.7032 4.44277 15.1232 0.173995 10.8737 0.0215389C10.0389 -0.0546893 8.82481 0.0215388 8.52127 1.08873C8.44539 1.5461 8.74892 1.92724 9.12834 2.23216C11.0254 3.45181 12.619 4.59523 13.909 6.42471C15.199 8.33041 15.8061 10.3123 15.8061 12.523C14.9714 10.8459 13.7573 9.55006 12.1637 8.55909C10.646 7.64436 9.12834 7.03453 7.4589 6.88207C6.01711 6.65339 4.6512 6.50093 3.28529 6.9583C1.76762 7.56813 -0.0535953 8.71155 0.0981723 10.6173C0.705243 11.532 1.91938 11.0746 2.82999 10.8459C3.28529 10.7697 3.74059 10.6935 4.1959 10.6173C5.78946 10.3886 7.38302 10.541 8.97658 10.9984C10.646 11.532 12.1637 12.4467 13.4537 13.6664C8.82481 12.1418 3.66471 14.2 0.932894 18.3163C-0.129479 19.8409 -0.508898 22.2039 1.00878 23.4998C1.99527 23.576 2.52645 22.5851 2.98176 21.8228C4.1959 19.9171 5.78946 18.3925 7.76243 17.3253C7.83832 17.2491 7.99009 17.3253 8.06597 17.2491C8.82481 16.868 9.50776 16.6393 10.3425 16.4106C10.4184 16.4106 10.5701 16.4106 10.646 16.4106C11.2531 16.1819 11.936 16.1819 12.5431 16.1819C10.8737 17.0204 9.58365 18.2401 8.59716 19.8409C7.0036 22.6613 6.09299 26.0154 7.23125 29.1407C7.68655 30.589 9.12834 32.4185 10.7978 31.8087C11.329 31.58 11.2531 30.8177 11.1013 30.2841C10.7978 28.912 10.5701 27.6161 10.646 26.3203C10.646 25.7104 10.646 25.1768 10.7219 24.567C10.8737 23.7285 11.1013 23.0425 11.329 22.2039C11.4049 21.9753 11.5566 21.8228 11.6325 21.6703C11.7084 21.5941 11.6325 21.4417 11.7084 21.3654C12.3155 20.3745 12.8466 19.3835 13.6814 18.6212C12.2396 23.2711 14.2126 28.4547 18.3103 31.1989C19.2968 31.8087 20.3591 32.1136 21.4974 31.9611C22.2562 31.8849 23.2427 31.8849 23.3945 31.0464C23.698 29.903 22.408 29.4456 21.5733 28.912C19.9038 27.7686 18.6138 26.4727 17.6273 24.7957C17.2479 24.0334 16.9444 23.3474 16.6408 22.5851C16.3373 21.5941 16.2614 20.5269 16.1855 19.4597C16.4891 20.0696 16.8685 20.6794 17.3997 21.213C17.4756 21.2892 17.4756 21.4417 17.5514 21.5179C20.1315 24.3383 23.8498 25.558 27.5681 25.2531C29.0858 25.1006 30.3758 24.4146 31.3623 23.1949C31.7417 22.5851 32.2729 21.899 31.8176 21.213C31.7417 21.1367 31.6658 21.0605 31.5899 20.9843C31.0588 20.6794 30.5276 20.8318 29.9964 20.9081Z"
                fill="white"
            />
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/*  Card dot-grid pattern (CSS)                                        */
/* ------------------------------------------------------------------ */

const dotGridStyle: React.CSSProperties = {
    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1.2px, transparent 1.2px)",
    backgroundSize: "18px 18px",
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function TeamSection() {
    const trackRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "prev" | "next") => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector<HTMLElement>("[data-team-card]");
        const cardWidth = card ? card.offsetWidth + 24 : 460;
        el.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
    };

    return (
        <section className="w-full py-16 lg:pt-24 lg:pb-32 bg-white font-sans overflow-hidden">
            <div className="mx-auto w-full max-w-360 px-8 lg:px-(--page-margin)">
                {/* Header */}
                <div className="flex items-center justify-between mb-10 lg:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-grey-1200 leading-tight">Meet the Team</h2>
                </div>
            </div>

            {/* Scrollable track — bleeds to edge */}
            <div className="mx-auto w-full max-w-360 px-8 lg:px-(--page-margin)">
                <div ref={trackRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-3" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    {members.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            data-team-card
                            whileHover={{ scale: 1.015, y: -2 }}
                            transition={{ type: "spring", stiffness: 380, damping: 26 }}
                            className="group flex-none w-[min(520px,85vw)] snap-start rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-webflow-dropshadow"
                            style={{ background: "#e8deff", ...dotGridStyle }}
                        >
                            {/* Photo */}
                            <div className="relative h-52 sm:h-auto sm:w-44 shrink-0 self-stretch">
                                <Image src={member.image} alt={member.name} fill className="object-cover grayscale" sizes="176px" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-between px-5 py-5 flex-1 min-w-0">
                                {/* Badge */}
                                <div>
                                    <span className="inline-block rounded-full border border-grey-400 bg-white/60 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-grey-1000 mb-3">{member.badge}</span>

                                    {/* Quote */}
                                    <p className="text-[13px] leading-relaxed text-grey-1100 italic">{member.quote}</p>
                                </div>

                                {/* Name + role + clover */}
                                <div className="flex items-end justify-between mt-4">
                                    <div>
                                        <p className="font-bold text-grey-1200 text-sm">{member.name}</p>
                                        <p className="text-xs text-grey-800">{member.role}</p>
                                    </div>
                                    {idx % 2 === 1 ? <Icon className="w-8 h-8 shrink-0" /> : <AltIcon className="w-8 h-8 shrink-0" />}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2 mt-6">
                    <button onClick={() => scroll("prev")} aria-label="Previous member" className="flex items-center justify-center w-9 h-9 rounded-full border border-grey-200 bg-white text-grey-800 hover:bg-grey-50 transition-colors shadow-webflow-dropshadow">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button onClick={() => scroll("next")} aria-label="Next member" className="flex items-center justify-center w-9 h-9 rounded-full border border-grey-200 bg-white text-grey-800 hover:bg-grey-50 transition-colors shadow-webflow-dropshadow">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
