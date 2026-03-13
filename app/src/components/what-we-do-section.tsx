"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ActivityImage {
    src: string;
    alt: string;
}

interface Activity {
    title: string;
    description: string;
    date: string;
    tags: { label: string; color: string }[];
    images: ActivityImage[];
    relatedImages: ActivityImage[];
}

const activities: Activity[] = [
    {
        title: "Sport Friday",
        description: "There is no dedicated sport teacher at SDN 1 Kalidadap, therefore we decided to step up and share our knowledge about something that I passionate about.",
        date: "01 November 2024",
        tags: [
            { label: "Science", color: "bg-primary-green text-white" },
            { label: "Sports", color: "bg-grey-300 text-grey-1200" },
        ],
        images: [
            { src: "/img/poster-1.webp", alt: "Playing Catch Ball" },
            { src: "/img/poster-2.webp", alt: "Activity photo 2" },
            { src: "/img/poster-1.webp", alt: "Activity photo 3" },
        ],
        relatedImages: [
            { src: "/img/poster-2.webp", alt: "Crafting Water Rocket" },
            { src: "/img/poster-1.webp", alt: "Climbing wall" },
        ],
    },
    {
        title: "STEAM Learning",
        description: "Implementing project-based STEAM learning to encourage critical thinking and creativity among students in rural areas.",
        date: "15 December 2024",
        tags: [
            { label: "Science", color: "bg-primary-green text-white" },
            { label: "Math", color: "bg-primary-purple text-white" },
            { label: "Engineering", color: "bg-primary-blue text-white" },
        ],
        images: [
            { src: "/img/poster-2.webp", alt: "STEAM activity 1" },
            { src: "/img/poster-1.webp", alt: "STEAM activity 2" },
        ],
        relatedImages: [
            { src: "/img/poster-1.webp", alt: "Related STEAM 1" },
            { src: "/img/poster-2.webp", alt: "Related STEAM 2" },
        ],
    },
];

/* ------------------------------------------------------------------ */
/*  SVG assets                                                         */
/* ------------------------------------------------------------------ */

function GridPattern({ className }: { className?: string }) {
    return (
        <svg className={className} width="1438" height="941" viewBox="0 0 1438 941" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0v941" stroke="url(#ga)" />
            <path d="M159.669 0v941" stroke="url(#gb)" />
            <path d="M319.332 0v941" stroke="url(#gc)" />
            <path d="M479.004 0v941" stroke="url(#gd)" />
            <path d="M638.665 0v941" stroke="url(#ge)" />
            <path d="M798.335 0v941" stroke="url(#gf)" />
            <path d="M958.005 0v941" stroke="url(#gg)" />
            <path d="M1117.67 0v941" stroke="url(#gh)" />
            <path d="M1277.34 0v941" stroke="url(#gi)" />
            <path d="M1437 0v941" stroke="url(#gj)" />
            <path d="M0 0h1437" stroke="url(#gk)" />
            <path d="M0 104.556h1437" stroke="url(#gl)" />
            <path d="M0 209.111h1437" stroke="url(#gm)" />
            <path d="M0 313.667h1437" stroke="url(#gn)" />
            <path d="M0 418.223h1437" stroke="url(#go)" />
            <path d="M0 522.777h1437" stroke="url(#gp)" />
            <path d="M0 627.333h1437" stroke="url(#gq)" />
            <path d="M0 731.89h1437" stroke="url(#gr)" />
            <path d="M0 836.445h1437" stroke="url(#gs)" />
            <path d="M0 941h1437" stroke="url(#gt)" />
            <defs>
                <radialGradient id="ga" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 470.5 -.5 0 .5 470.5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 470.5 -.5 0 160.169 470.5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gc" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 470.5 -.5 0 319.832 470.5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gd" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 470.5 -.5 0 479.504 470.5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="ge" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 470.5 -.5 0 639.165 470.5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gf" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 470.5 -.5 0 798.835 470.5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 470.5 -.5 0 958.505 470.5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gh" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 470.5 -.5 0 1118.17 470.5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gi" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 470.5 -.5 0 1277.84 470.5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gj" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 470.5 -.5 0 1437.5 470.5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gk" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .5 -718.5 0 718.5 .5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gl" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .5 -718.5 0 718.5 105.056)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gm" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .5 -718.5 0 718.5 209.611)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gn" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .5 -718.5 0 718.5 314.167)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="go" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .5 -718.5 0 718.5 418.723)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gp" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .5 -718.5 0 718.5 523.277)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gq" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .5 -718.5 0 718.5 627.833)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gr" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .5 -718.5 0 718.5 732.39)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gs" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .5 -718.5 0 718.5 836.945)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
                <radialGradient id="gt" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .5 -718.5 0 718.5 941.5)">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#eee" stopOpacity=".65" />
                </radialGradient>
            </defs>
        </svg>
    );
}

function FlowerIcon({ className }: { className?: string }) {
    return (
        <svg className={className} width="109" height="122" viewBox="0 0 109 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M56.8892 61C147.939 61 101.219 -19.6468 55.6946 58.9404C101.219 -19.6468 7.78072 -19.6468 53.3054 58.9404C7.78072 -19.6468 -38.9386 61 52.1108 61C-38.9386 61 7.78072 141.647 53.3054 63.0596C7.78072 141.647 101.219 141.647 55.6946 63.0596C101.219 141.647 147.939 61 56.8892 61Z"
                fill="#FFDC00"
            />
        </svg>
    );
}

function GspLogo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center rounded-lg bg-primary-blue/90 ${className}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="10" r="5" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M8 14c0 2.5 2 4 4 4s4-1.5 4-4" stroke="white" strokeWidth="1.5" fill="none" />
                <circle cx="10" cy="9" r="1" fill="white" />
            </svg>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Inner image carousel (inside the featured card)                    */
/* ------------------------------------------------------------------ */

function InnerImageCarousel({ images, currentIdx, onIdxChange }: { images: ActivityImage[]; currentIdx: number; onIdxChange: (i: number) => void }) {
    return (
        <div className="relative w-full aspect-4/5 max-h-120 overflow-hidden rounded-2xl">
            <AnimatePresence initial={false}>
                <motion.div key={currentIdx} initial={{ opacity: 0, scale: 1.07 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} className="absolute inset-0">
                    <Image src={images[currentIdx].src} alt={images[currentIdx].alt} fill draggable={false} className="object-cover" sizes="(max-width: 768px) 90vw, 50vw" />
                </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, i) => (
                    <button key={i} onClick={() => onIdxChange(i)} aria-label={`Go to image ${i + 1}`} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIdx ? "bg-white w-5" : "bg-white/50"}`} />
                ))}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Featured card (left side of each slide)                            */
/* ------------------------------------------------------------------ */

const AUTOPLAY_INTERVAL = 6500;

function FeaturedCard({ activity }: { activity: Activity }) {
    const images = activity.relatedImages;
    const [innerIdx, setInnerIdx] = useState(0);

    // Autoplay
    useEffect(() => {
        const timer = setInterval(() => {
            setInnerIdx((prev) => (prev + 1) % images.length);
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative flex flex-col rounded-2xl overflow-hidden bg-grey-1200 shadow-webflow-dropshadow max-h-130">
            {/* Image area with inner carousel */}
            <div className="relative">
                <InnerImageCarousel images={images} currentIdx={innerIdx} onIdxChange={setInnerIdx} />

                {/* Overlay: tags + date */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
                    <div className="flex gap-2">
                        {activity.tags.slice(0, 2).map((tag) => (
                            <span key={tag.label} className={`inline-block rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${tag.color}`}>
                                {tag.label}
                            </span>
                        ))}
                    </div>
                    <span className="text-xs text-white font-medium">{activity.date}</span>
                </div>

                {/* Overlay: title + description at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 via-black/40 to-transparent px-5 pb-5 pt-16 z-10">
                    <div className="flex items-center gap-2 mb-1">
                        <GspLogo className="w-8 h-8 shrink-0" />
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.h4 key={innerIdx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.35, ease: "easeOut" }} className="text-white font-bold text-base leading-tight">
                                {images[innerIdx].alt}
                            </motion.h4>
                        </AnimatePresence>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">{activity.description.slice(0, 60)}…</p>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Main outer carousel                                                */
/* ------------------------------------------------------------------ */

const swipeConfidenceThreshold = 10_000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

export function WhatWeDoSection() {
    const [[page, direction], setPage] = useState([0, 0]);
    const slideCount = activities.length;
    const activeIndex = ((page % slideCount) + slideCount) % slideCount;
    const activity = activities[activeIndex];

    const paginate = useCallback((newDirection: number) => setPage(([p]) => [p + newDirection, newDirection]), []);

    const variants = {
        enter: (d: number) => ({ x: d > 0 ? 600 : -600, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? -600 : 600, opacity: 0 }),
    };

    return (
        <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-primary-green font-sans">
            {/* Grid background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
                <GridPattern className="w-full h-full" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-360 px-8 lg:px-(--page-margin)">
                {/* Section header */}
                <div className="flex items-center gap-3 mb-10 lg:mb-14">
                    <FlowerIcon className="w-14 h-14 lg:w-20 lg:h-20 -mt-1" />
                    <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-grey-1200 leading-tight">
                        <Highlighter action="highlight" color="#FFFFFF">
                            What We Do
                        </Highlighter>
                    </h2>
                </div>

                {/* Carousel viewport */}
                <div className="relative">
                    <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(_e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) paginate(1);
                                else if (swipe > swipeConfidenceThreshold) paginate(-1);
                            }}
                            className="w-full"
                        >
                            {/* Two‑column slide */}
                            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 lg:gap-8 bg-white/60 backdrop-blur-sm rounded-3xl p-5 lg:p-8 shadow-webflow-dropshadow">
                                {/* Left — featured card */}
                                <FeaturedCard activity={activity} />

                                {/* Right — info + related images */}
                                <div className="flex flex-col gap-2 md:gap-4 justify-center">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mx-0 md:mx-auto mb-0 md:mb-4">
                                        {activity.tags.map((tag) => (
                                            <span key={tag.label} className={`inline-block rounded-full px-4 py-1.5 text-xs font-medium ${tag.color}`}>
                                                {tag.label}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title + description */}
                                    <h3 className="text-2xl lg:text-3xl font-bold text-grey-1200 leading-tight mx-0 text-start mt-2 md:mt-0 md:text-center md:mx-auto">{activity.title}</h3>
                                    <p className="text-sm text-grey-800 leading-relaxed text-start md:text-center">{activity.description}</p>

                                    {/* Related images row */}
                                    <div className="md:flex gap-3 overflow-x-auto pb-1 mt-0 md:mt-6 hidden">
                                        {activity.relatedImages.map((img, i) => (
                                            <div key={i} className="relative w-36 lg:w-60 shrink-0 aspect-4/5 rounded-2xl overflow-hidden shadow-webflow-dropshadow">
                                                <Image src={img.src} alt={img.alt} fill draggable={false} className="object-cover" sizes="420px" />
                                                {/* Mini overlay */}
                                                <div className="absolute top-3 left-3 right-3 flex gap-1.5 z-10">
                                                    {activity.tags.slice(0, 2).map((t) => (
                                                        <span key={t.label} className={`rounded-full px-2 py-0.5 text-[10px] font-medium backdrop-blur-sm ${t.color}`}>
                                                            {t.label}
                                                        </span>
                                                    ))}
                                                    <span className="ml-auto text-[10px] text-white font-medium">{activity.date}</span>
                                                </div>
                                                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent px-3 pb-3 pt-8 z-10">
                                                    <div className="flex items-center gap-1.5 mb-0.5">
                                                        <GspLogo className="w-5 h-5 shrink-0" />
                                                        <span className="text-white text-xs font-bold leading-tight">{img.alt}</span>
                                                    </div>
                                                    <p className="text-white/70 text-[10px] leading-snug">Creating rocket to implement STEAM learning at class.</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Outer carousel navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button onClick={() => paginate(-1)} aria-label="Previous slide" className="flex items-center justify-center w-10 h-10 rounded-full border border-grey-200 bg-white text-grey-800 hover:bg-grey-50 transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-2">
                            {activities.map((_, i) => (
                                <button key={i} onClick={() => setPage([i, i > activeIndex ? 1 : -1])} aria-label={`Go to slide ${i + 1}`} className={`rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 h-3 bg-primary-blue" : "w-3 h-3 bg-grey-300"}`} />
                            ))}
                        </div>

                        <button onClick={() => paginate(1)} aria-label="Next slide" className="flex items-center justify-center w-10 h-10 rounded-full border border-grey-200 bg-white text-grey-800 hover:bg-grey-50 transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
