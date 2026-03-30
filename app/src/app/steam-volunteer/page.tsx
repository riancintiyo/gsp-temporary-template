"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TextAnimate } from "@/components/ui/text-animate";
import { FadeIn } from "@/components/ui/fade-in";
import { RevealOnView } from "@/components/ui/reveal-on-view";

/* ------------------------------------------------------------------ */
/*  Gallery images (reused from home gallery section)                  */
/* ------------------------------------------------------------------ */

const GALLERY_IMAGES = [
    { src: "/img/gsp/image-10.jpg", alt: "Team building workshop" },
    { src: "/img/gsp/1.webp", alt: "Students at STEAM sport activity" },
    { src: "/img/gsp/image-3.png", alt: "Hands-on science class" },
    { src: "/img/gsp/image-5.png", alt: "Community learning session" },
    { src: "/img/gsp/image-16.jpg", alt: "Outdoor STEAM activity in rural Indonesia" },
    { src: "/img/gsp/image-11.jpg", alt: "Team collaboration workshop" },
    { src: "/img/gsp/4.webp", alt: "Pre and post test measurement" },
    { src: "/img/gsp/image-8.jpg", alt: "Rocket creation project" },
];

/* ------------------------------------------------------------------ */
/*  Section 1 — Hero                                                   */
/* ------------------------------------------------------------------ */

function HeroSection() {
    return (
        <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <Image
                src="/img/gsp/image-16.jpg"
                alt="Volunteer program hero background"
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex flex-col items-center gap-6 px-6 text-center pt-(--nav-height)">
                <TextAnimate
                    as="h1"
                    by="line"
                    animation="fadeIn"
                    duration={0.6}
                    startOnView={false}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
                >
                    {`Join Our Volunteer Program and Seek New Journey`}
                </TextAnimate>

                <FadeIn delay={0.3} duration={0.5}>
                    <p className="text-base sm:text-lg leading-relaxed text-white/85">
                        Step beyond the ordinary and immerse yourself in rural Indonesia, where your presence as a STEAM volunteer teacher can spark curiosity and hope. Spend meaningful days living alongside the community, studying together with the kids, and discovering that the most rewarding journeys are the ones where you give — and receive — far more than you ever expected.
                    </p>
                </FadeIn>

                <FadeIn delay={0.6} duration={0.45}>
                    <a
                        href="#apply"
                        className="inline-flex items-center gap-2 mt-4 px-8 py-3.5 rounded-full bg-white text-grey-1200 text-sm font-semibold hover:bg-grey-50 transition-colors"
                    >
                        Apply Now
                        <ArrowDown className="w-4 h-4" />
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Image Carousel (for section 2)                                     */
/* ------------------------------------------------------------------ */

function ImageCarousel() {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const total = GALLERY_IMAGES.length;

    const startAutoplay = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 4000);
    }, [total]);

    const stopAutoplay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    useEffect(() => {
        startAutoplay();
        return stopAutoplay;
    }, [startAutoplay, stopAutoplay]);

    const go = (dir: 1 | -1) => {
        stopAutoplay();
        setCurrent((prev) => (prev + dir + total) % total);
        startAutoplay();
    };

    return (
        <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-grey-100">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={GALLERY_IMAGES[current].src}
                        alt={GALLERY_IMAGES[current].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-5 h-5 text-grey-1200" />
            </button>
            <button
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Next image"
            >
                <ChevronRight className="w-5 h-5 text-grey-1200" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {GALLERY_IMAGES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            stopAutoplay();
                            setCurrent(i);
                            startAutoplay();
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
                        aria-label={`Go to image ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Section 2 — Program Details                                        */
/* ------------------------------------------------------------------ */

function ProgramDetailsSection() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto w-full px-6 lg:px-16">
                <RevealOnView>
                    <div className="flex flex-col gap-4 mb-12">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary-blue">About the Program</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-grey-1200">
                            Become a STEAM Teacher Visitor
                        </h2>
                    </div>
                </RevealOnView>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Description */}
                    <RevealOnView>
                        <div className="flex flex-col gap-6">
                            <p className="text-base sm:text-lg leading-relaxed text-grey-800">
                                The <strong>STEAM Volunteer Program</strong> invites passionate individuals to travel to rural communities in Indonesia and serve as visiting teachers. As a volunteer, you&apos;ll lead engaging, hands-on workshops in Science, Technology, Engineering, Art, and Math for elementary school students who rarely have access to these enriching experiences.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed text-grey-800">
                                Your role goes beyond the classroom. You&apos;ll live alongside the local community, share meals with the families, and build genuine connections with the children. The program typically runs over several days, during which you&apos;ll guide students through interactive experiments, creative projects, and collaborative learning activities designed to spark curiosity and confidence.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed text-grey-800">
                                No formal teaching experience is required — just a willingness to learn, adapt, and share your knowledge. Whether you&apos;re a university student, a working professional, or simply someone who cares about education equity, this program offers a transformative experience for both you and the students you&apos;ll teach.
                            </p>

                            {/* Key highlights */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                {[
                                    { title: "Hands-on Workshops", desc: "Lead interactive STEAM experiments and creative projects" },
                                    { title: "Community Living", desc: "Stay with local families and experience rural Indonesian life" },
                                    { title: "No Experience Needed", desc: "Training and teaching materials are provided" },
                                    { title: "Meaningful Impact", desc: "Help bridge the education gap for underserved children" },
                                ].map(({ title, desc }) => (
                                    <div key={title} className="rounded-xl border border-grey-100 p-4">
                                        <p className="text-sm font-semibold text-grey-1200">{title}</p>
                                        <p className="text-sm text-grey-800 mt-1">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </RevealOnView>

                    {/* Right — Image Carousel */}
                    <RevealOnView>
                        <ImageCarousel />
                    </RevealOnView>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Section 3 — Tally Form                                             */
/* ------------------------------------------------------------------ */

function ApplicationFormSection() {
    return (
        <section id="apply" className="scroll-mt-20">
            {/* Title area with padding */}
            <div className="bg-grey-10 pt-20 lg:pt-28 pb-12">
                <div className="mx-auto w-full px-6 lg:px-16">
                    <RevealOnView>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm font-semibold uppercase tracking-widest text-primary-blue">Apply Now</p>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-grey-1200">
                                STEAM Volunteer Application
                            </h2>
                            <p className="text-base sm:text-lg leading-relaxed text-grey-800">
                                This is an <strong>unpaid volunteer program</strong> driven by a mission to address education inequality. In Wonosobo, Kalidadap, students lost nearly two years of learning due to the COVID-19 pandemic. Many children in the area still have limited access to essential educational tools such as laptops and science equipment. This program was started to bridge that gap — to bring quality STEAM education directly to the students who need it most, and to remind them that their dreams are worth pursuing.
                            </p>
                        </div>
                    </RevealOnView>
                </div>
            </div>

            {/* Tally embed — full width, original dark background preserved */}
            <div className="w-full">
                <iframe
                    data-tally-src="https://tally.so/r/NpLGyN"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="STEAM Volunteer Application Form"
                    className="w-full"
                />
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Tally Script Loader                                                */
/* ------------------------------------------------------------------ */

function TallyLoader() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return null;
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SteamVolunteerPage() {
    return (
        <div className="min-h-screen font-(family-name:--font-plus-jakarta)">
            <TallyLoader />
            <HeroSection />
            <ProgramDetailsSection />
            <ApplicationFormSection />
        </div>
    );
}
