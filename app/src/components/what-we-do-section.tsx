"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type { ComponentType, SVGProps } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Microscope, Volleyball, Atom, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import { LazyImage } from "@/components/ui/lazy-image";
import { TextAnimate } from "@/components/ui/text-animate";
import { FadeIn } from "@/components/ui/fade-in";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ActivityImage {
    src: string;
    alt: string;
    related_desc?: string;
}

interface Activity {
    title: string;
    description: string;
    date: string;
    tags: { label: string; color: string }[];
    icon?: string;
    images: ActivityImage[];
}

const activities: Activity[] = [
    {
        title: "Practical Science Workshop",
        description: "As the core focus of our STEAM program — dividing theory and practice 40% and 60% respectively — we organized a hands-on general science workshop where students actively engaged in experiments and activities to deepen their understanding of scientific concepts.",
        date: "08 November 2024",
        tags: [
            { label: "Math", color: "bg-primary-blue text-white" },
            { label: "Science", color: "bg-primary-green text-white" },
        ],
        icon: "Microscope",
        images: [
            { src: "/img/gsp/image-4.png", alt: "Rocket Water Experiment", related_desc: "Practical example of Newton's III laws in action." },
            { src: "/img/gsp/4.webp", alt: "Pre and Post Test Measurement", related_desc: "Measurement of students' understanding before and after the program." },
            { src: "/img/gsp/image-8.jpg", alt: "Rocket Creation", related_desc: "Students building and launching their own rockets." },
            { src: "/img/gsp/image-1.png", alt: "Post Project Documentation", related_desc: "Documentation of the project's outcomes and student reflections." },
        ],
    },
    {
        title: "Sport Friday",
        description: "Since the school doesn’t have a sports teacher, we decided to step in and create a fun Sport Day for the students. It’s a chance for them to play, move, and enjoy learning outside the classroom.",
        date: "02 November 2024",
        tags: [{ label: "Sports", color: "bg-primary-purple text-white" }],
        icon: "Volleyball",
        images: [
            { src: "/img/gsp/12.webp", alt: "Boxing Pad Training", related_desc: "Students practicing boxing techniques on pads." },
            { src: "/img/gsp/8.webp", alt: "Gathering Together", related_desc: "Students gathering together to start their workout session." },
            { src: "/img/gsp/image-15.jpg", alt: "Hand Wrap Demo", related_desc: "Demonstration of proper hand wrapping techniques for boxing." },
        ],
    },
    {
        title: "What is Engineering?",
        description: "Introduction to software engineering concepts through block-based coding activities, fostering creativity and problem-solving skills in a fun and interactive way.",
        date: "15 November 2024",
        tags: [
            { label: "Math", color: "bg-primary-green text-white" },
            { label: "Engineering", color: "bg-primary-blue text-white" },
        ],
        icon: "Atom",
        images: [
            { src: "/img/gsp/image-14.jpg", alt: "Introduction to Logic Based Concept", related_desc: "Block code as a tool for learning logic and problem-solving." },
            { src: "/img/gsp/image-13.png", alt: "Logic Based Concept Part 2", related_desc: "Showing the students about implementation of logic-based concepts." },
            { src: "/img/gsp/poster-13.png", alt: "How Computers Work", related_desc: "Concept of binary numbers and how computers process information." },
        ],
    },
    {
        title: "Nutrition Workshop",
        description: "10 Steps to Balanced Nutrition: A Guide to Healthy Eating Habits for Kids. This workshop covers essential nutrition principles, practical tips for meal planning, and fun activities to encourage healthy eating habits among children.",
        date: "22 November 2024",
        tags: [
            { label: "Nutrition", color: "bg-primary-yellow text-white" },
            { label: "Health", color: "bg-primary-green text-white" },
        ],
        icon: "Atom",
        images: [
            { src: "/img/gsp/6.webp", alt: "Nutrition Sharing from SME", related_desc: "Explaining about balanced nutrition and healthy eating habits." },
            { src: "/img/gsp/image-12.jpg", alt: "Healthy Breakfast", related_desc: "Providing meals for students that align with balanced nutrition principles." },
            { src: "/img/gsp/poster-2.png", alt: "Introduction to Balanced Nutrition", related_desc: "Visual representation of balanced nutrition principles." },
        ],
    },
    {
        title: "Road to Medical School",
        description: "What does it take to become a doctor? This session provides an overview of the medical school journey, including the necessary education, skills, and experiences needed to pursue a career in medicine.",
        date: "29 November 2024",
        tags: [
            { label: "Biology", color: "bg-primary-purple text-white" },
            { label: "Math", color: "bg-primary-yellow text-white" },
        ],
        icon: "Atom",
        images: [
            { src: "/img/gsp/5.webp", alt: "Road to Medical School", related_desc: "Overview of the medical school journey and necessary steps to become a doctor." },
            { src: "/img/gsp/2.jpg", alt: "Medical School Journey", related_desc: "Detailed look into the various stages of medical education and training." },
            { src: "/img/gsp/7.webp", alt: "Becoming a Doctor", related_desc: "Highlighting the skills and experiences needed to pursue a career in medicine." },
        ],
    },
];

const allActivityImageSources = activities.flatMap((activity) => activity.images.map((image) => image.src));

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

const IconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
    Microscope,
    Volleyball,
    Atom,
    User,
};

function GspLogo({ className, iconName }: { className?: string; iconName?: string }) {
    const IconComp = iconName && IconMap[iconName] ? IconMap[iconName] : User;
    return (
        <div className={`flex items-center justify-center rounded-lg bg-primary-blue/90 ${className}`}>
            <IconComp className="w-4 h-4 text-white" />
        </div>
    );
}

function ImageSkeleton({ className }: { className?: string }) {
    return <div className={`absolute inset-0 z-10 pointer-events-none animate-pulse bg-linear-to-br from-grey-200 via-grey-100 to-grey-200 ${className}`} />;
}

/* ------------------------------------------------------------------ */
/*  Inner image carousel (inside the featured card)                    */
/* ------------------------------------------------------------------ */

function InnerImageCarousel({ images, currentIdx, onIdxChange, eagerLoad, isCurrentImageLoaded, onImageLoaded }: { images: ActivityImage[]; currentIdx: number; onIdxChange: (i: number) => void; eagerLoad: boolean; isCurrentImageLoaded: boolean; onImageLoaded: (src: string) => void }) {
    const currentImage = images[currentIdx];

    return (
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <AnimatePresence initial={false}>
                <motion.div key={currentIdx} initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} className="absolute inset-0">
                    {!isCurrentImageLoaded && <ImageSkeleton />}
                    <LazyImage
                        src={currentImage.src}
                        alt={currentImage.alt}
                        fill
                        draggable={false}
                        className={`object-cover w-full h-full transition-opacity duration-300 ${isCurrentImageLoaded ? "opacity-100" : "opacity-0"}`}
                        sizes="(max-width: 720px) 80vw, 40vw"
                        priority={eagerLoad}
                        loading={eagerLoad ? "eager" : "lazy"}
                        onLoad={() => onImageLoaded(currentImage.src)}
                        onError={() => onImageLoaded(currentImage.src)}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-28 md:bottom-20 left-0 right-0 flex justify-center gap-2 z-20">
                {images.map((_, i) => (
                    <button key={i} onClick={() => onIdxChange(i)} aria-label={`Go to image ${i + 1}`} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIdx ? "bg-white w-5" : "bg-white/80"}`} />
                ))}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Featured card (left side of each slide)                            */
/* ------------------------------------------------------------------ */

const AUTOPLAY_INTERVAL = 6500;

function FeaturedCard({ activity, eagerLoad, loadedImageSources, onImageLoaded }: { activity: Activity; eagerLoad: boolean; loadedImageSources: Set<string>; onImageLoaded: (src: string) => void }) {
    const images = activity.images;
    const [innerIdx, setInnerIdx] = useState(0);
    const currentImageSrc = images[innerIdx]?.src ?? "";

    // Autoplay
    useEffect(() => {
        const timer = setInterval(() => {
            if (images.length === 0) return;
            setInnerIdx((prev) => (prev + 1) % images.length);
        }, AUTOPLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative flex flex-col rounded-2xl overflow-hidden bg-grey-1200 shadow-webflow-dropshadow">
            {/* Image area with inner carousel */}
            <div className="relative w-full aspect-4/5">
                <InnerImageCarousel images={images} currentIdx={innerIdx} onIdxChange={setInnerIdx} eagerLoad={eagerLoad} isCurrentImageLoaded={loadedImageSources.has(currentImageSrc)} onImageLoaded={onImageLoaded} />

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
                        <GspLogo className="w-7 h-7 shrink-0" iconName={activity.icon} />
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.h4 key={innerIdx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.35, ease: "easeOut" }} className="text-white font-bold text-base leading-tight">
                                {images[innerIdx].alt}
                            </motion.h4>
                        </AnimatePresence>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed text-wrap max-w-120 truncate">{images[innerIdx]?.related_desc ?? activity.description}</p>
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
    const sectionRef = useRef<HTMLElement | null>(null);
    const [[page, direction], setPage] = useState([0, 0]);
    const [hasEnteredSection, setHasEnteredSection] = useState(false);
    const [loadedImageSources, setLoadedImageSources] = useState<Set<string>>(new Set());
    const slideCount = activities.length;
    const activeIndex = ((page % slideCount) + slideCount) % slideCount;
    const activity = activities[activeIndex];

    const paginate = useCallback((newDirection: number) => setPage(([p]) => [p + newDirection, newDirection]), []);
    const markImageLoaded = useCallback((source: string) => {
        setLoadedImageSources((prev) => {
            if (prev.has(source)) return prev;
            const next = new Set(prev);
            next.add(source);
            return next;
        });
    }, []);

    const variants = {
        enter: (d: number) => ({ x: d > 0 ? 600 : -600, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? -600 : 600, opacity: 0 }),
    };

    useEffect(() => {
        const sectionElement = sectionRef.current;
        if (!sectionElement || hasEnteredSection) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries[0]?.isIntersecting) return;
                setHasEnteredSection(true);
                observer.disconnect();
            },
            {
                root: null,
                threshold: 0.15,
                rootMargin: "120px 0px",
            },
        );

        observer.observe(sectionElement);
        return () => observer.disconnect();
    }, [hasEnteredSection]);

    useEffect(() => {
        if (!hasEnteredSection) return;

        const preloadedImages = allActivityImageSources.map((source) => {
            const image = new Image();
            image.onload = () => markImageLoaded(source);
            image.onerror = () => markImageLoaded(source);
            image.src = source;
            return image;
        });

        return () => {
            for (const image of preloadedImages) {
                image.onload = null;
                image.onerror = null;
            }
        };
    }, [hasEnteredSection, markImageLoaded]);

    return (
        <section ref={sectionRef} className="relative w-full py-16 lg:py-24 overflow-hidden bg-primary-green font-sans">
            {/* Grid background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
                <GridPattern className="w-full h-full" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-360 px-8 lg:px-(--page-margin)">
                {/* Section header */}
                <div className="flex items-center gap-3 mb-10 lg:mb-14">
                    <FlowerIcon className="w-14 h-14 lg:w-20 lg:h-20 -mt-1" />
                    <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-grey-1200 leading-tight">
                        <Highlighter action="highlight" color="#FFFFFF" isView startDelay={450}>
                            <TextAnimate as="span" by="line" animation="fadeIn" startOnView>
                                {`What We Do`}
                            </TextAnimate>
                        </Highlighter>
                    </h2>
                </div>

                {/* Carousel viewport */}
                <FadeIn startOnView delay={0.12} duration={0.5} y={12} className="relative">
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
                                <FeaturedCard activity={activity} eagerLoad={hasEnteredSection} loadedImageSources={loadedImageSources} onImageLoaded={markImageLoaded} />

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
                                    <div className="md:flex gap-3 overflow-x-auto pb-1 mt-0 md:mt-6 hidden thin-scrollbar">
                                        {activity.images.map((img, i) => (
                                            <div key={i} className="relative w-36 lg:w-60 shrink-0 aspect-4/5 rounded-2xl overflow-hidden shadow-webflow-dropshadow">
                                                {!loadedImageSources.has(img.src) && <ImageSkeleton className="z-1" />}
                                                <LazyImage
                                                    src={img.src}
                                                    alt={img.alt}
                                                    fill
                                                    draggable={false}
                                                    className="object-cover w-full h-full"
                                                    sizes="420px"
                                                    priority={hasEnteredSection}
                                                    loading={hasEnteredSection ? "eager" : "lazy"}
                                                    onLoad={() => markImageLoaded(img.src)}
                                                    onError={() => markImageLoaded(img.src)}
                                                />
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
                                                        <GspLogo className="w-6 h-6 shrink-0" iconName={activity.icon} />
                                                        <span className="text-white text-xs font-bold leading-tight">{img.alt}</span>
                                                    </div>
                                                    <p className="text-white/70 text-[10px] leading-snug">{img.related_desc ?? img.alt}</p>
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
                </FadeIn>
            </div>
        </section>
    );
}
