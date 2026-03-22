"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Pointer } from "@/components/ui/pointer";
import { LazyImage } from "@/components/ui/lazy-image";
import { TextAnimate } from "@/components/ui/text-animate";
import { FadeIn } from "@/components/ui/fade-in";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const IMAGES = [
    { src: "/img/gsp/image-10.jpg", alt: "General Science Program team building workshop" },
    { src: "/img/gsp/1.webp", alt: "Students at STEAM program sport activity" },
    { src: "/img/gsp/image-3.png", alt: "General Science Program hands-on science class" },
    { src: "/img/gsp/image-5.png", alt: "STEAM science program community learning session" },
    { src: "/img/gsp/image-16.jpg", alt: "Outdoor STEAM program activity in rural Indonesia" },
    { src: "/img/gsp/image-11.jpg", alt: "GSP STEAM program team collaboration workshop" },
];

const N = IMAGES.length;
const CARD_W = 370;
const CARD_H = 280;

/* ------------------------------------------------------------------ */
/*  Coverflow slot configs  (keyed by offset from center: -2 … +2)   */
/* ------------------------------------------------------------------ */

interface SlotConfig {
    x: number; // horizontal offset from center (px)
    rotateY: number; // 3-D Y-axis rotation (deg)
    scale: number;
    zIndex: number;
    dim: number; // dark overlay opacity
}

const SLOT: Record<number, SlotConfig> = {
    [-2]: { x: -485, rotateY: 52, scale: 0.7, zIndex: 1, dim: 0.55 },
    [-1]: { x: -258, rotateY: 40, scale: 0.84, zIndex: 2, dim: 0.28 },
    [0]: { x: 0, rotateY: 0, scale: 1.0, zIndex: 3, dim: 0.0 },
    [1]: { x: 258, rotateY: -40, scale: 0.84, zIndex: 2, dim: 0.28 },
    [2]: { x: 485, rotateY: -52, scale: 0.7, zIndex: 1, dim: 0.55 },
};

// Config for cards outside the visible window
const OFF_L: SlotConfig = { x: -700, rotateY: 65, scale: 0.55, zIndex: 0, dim: 1 };
const OFF_R: SlotConfig = { x: 700, rotateY: -65, scale: 0.55, zIndex: 0, dim: 1 };

function slotFor(imgIdx: number, center: number): SlotConfig {
    let off = imgIdx - center;
    // Wrap offset into range [-N/2, N/2]
    if (off > N / 2) off -= N;
    if (off < -N / 2) off += N;
    if (off < -2) return OFF_L;
    if (off > 2) return OFF_R;
    return SLOT[off];
}

function offsetOf(imgIdx: number, center: number): number {
    let off = imgIdx - center;
    if (off > N / 2) off -= N;
    if (off < -N / 2) off += N;
    return off;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function GallerySection() {
    const [center, setCenter] = useState(2);

    // Swipe tracking
    const dragStartX = useRef<number | null>(null);
    const wasDrag = useRef(false);

    const advance = (dir: 1 | -1) => setCenter((c) => (c + dir + N) % N);

    function onPointerDown(e: React.PointerEvent) {
        e.currentTarget.setPointerCapture(e.pointerId);
        dragStartX.current = e.clientX;
        wasDrag.current = false;
    }

    function onPointerMove(e: React.PointerEvent) {
        if (dragStartX.current !== null && Math.abs(e.clientX - dragStartX.current) > 8) {
            wasDrag.current = true;
        }
    }

    function onPointerUp(e: React.PointerEvent) {
        if (dragStartX.current === null) return;
        const dx = e.clientX - dragStartX.current;
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
        }
        dragStartX.current = null;
        if (Math.abs(dx) >= 55) {
            wasDrag.current = true;
            advance(dx < 0 ? 1 : -1);
        }
    }

    function onTouchStart(e: React.TouchEvent) {
        if (e.touches.length === 0) return;
        dragStartX.current = e.touches[0].clientX;
        wasDrag.current = false;
    }

    function onTouchMove(e: React.TouchEvent) {
        if (dragStartX.current === null || e.touches.length === 0) return;
        const dx = e.touches[0].clientX - dragStartX.current;
        if (Math.abs(dx) > 8) {
            wasDrag.current = true;
        }
    }

    function onTouchEnd(e: React.TouchEvent) {
        if (dragStartX.current === null) return;
        const touch = e.changedTouches[0];
        if (!touch) {
            dragStartX.current = null;
            return;
        }
        const dx = touch.clientX - dragStartX.current;
        dragStartX.current = null;
        if (Math.abs(dx) >= 55) {
            wasDrag.current = true;
            advance(dx < 0 ? 1 : -1);
        }
    }

    function onCardClick(imgIdx: number) {
        // Ignore if this pointer-up was a swipe
        if (wasDrag.current) {
            wasDrag.current = false;
            return;
        }
        const off = offsetOf(imgIdx, center);
        if (off === 1) advance(1);
        else if (off === -1) advance(-1);
    }

    return (
        <section className="w-full overflow-hidden py-16 lg:py-28 bg-white">
            <div className="mx-auto w-full max-w-360 px-8 lg:px-(--page-margin)">
                {/* ---- Header ---- */}
                <div className="mb-6 text-start lg:mb-14">
                    <FadeIn startOnView duration={0.4} y={10} className="inline-block">
                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] px-6 py-2 bg-primary-purple text-white inline-block rounded-sm">Our Activities</p>
                    </FadeIn>
                    <TextAnimate as="h2" by="line" animation="fadeIn" startOnView once className="text-3xl mt-2 font-bold leading-tight text-grey-1200 sm:text-4xl lg:text-5xl">
                        {`Moments That Matter`}
                    </TextAnimate>
                    <FadeIn startOnView delay={0.08} duration={0.45} y={12}>
                        <p className="mx-auto mt-4 text-base text-grey-1000">Every photo tells a story — of students discovering general science through our STEAM program, teammates building trust, and communities growing stronger together.</p>
                    </FadeIn>
                </div>

                {/* ---- Coverflow ---- */}
                <FadeIn startOnView delay={0.12} duration={0.5} y={12}>
                    {/* Outer wrapper: handles pointer events + Pointer (no perspective/transform) */}
                    <div
                        className="relative mx-auto w-full select-none"
                        style={{ height: CARD_H + 100, touchAction: "pan-y" }}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        onTouchCancel={() => {
                            dragStartX.current = null;
                        }}
                        onPointerLeave={() => {
                            dragStartX.current = null;
                        }}
                    >
                        <Pointer>
                            <div className="flex items-center gap-2 rounded-full bg-white px-2 py-1 shadow-lg border border-grey-100">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.00012 6C6.75052 5.99979 7.48585 6.21067 8.12209 6.60854C8.75833 7.00641 9.26982 7.57523 9.59812 8.25H8.43712C8.06673 7.73428 7.54227 7.34937 6.93921 7.15067C6.33616 6.95198 5.68561 6.94975 5.08121 7.1443C4.4768 7.33885 3.94971 7.72015 3.57579 8.23331C3.20188 8.74648 3.00042 9.36505 3.00042 10C3.00042 10.6349 3.20188 11.2535 3.57579 11.7667C3.94971 12.2799 4.4768 12.6612 5.08121 12.8557C5.68561 13.0503 6.33616 13.048 6.93921 12.8493C7.54227 12.6506 8.06673 12.2657 8.43712 11.75H9.59712C9.28468 12.3922 8.80601 12.939 8.21083 13.3337C7.61565 13.7283 6.92566 13.9565 6.21252 13.9944C5.49938 14.0323 4.7891 13.8785 4.15544 13.5492C3.52178 13.2198 2.98786 12.7268 2.60911 12.1214C2.23037 11.5159 2.02062 10.8201 2.00166 10.1062C1.98269 9.39234 2.15519 8.68639 2.50125 8.06169C2.84731 7.43699 3.3543 6.91633 3.96958 6.55379C4.58485 6.19124 5.28597 6.00002 6.00012 6ZM15.2801 13.03L17.7801 10.53C17.9206 10.3894 17.9995 10.1988 17.9995 10C17.9995 9.80125 17.9206 9.61063 17.7801 9.47L15.2801 6.97C15.1379 6.83752 14.9499 6.7654 14.7556 6.76883C14.5613 6.77225 14.3759 6.85097 14.2385 6.98838C14.1011 7.12579 14.0224 7.31118 14.0189 7.50548C14.0155 7.69978 14.0876 7.88783 14.2201 8.03L15.4401 9.25H5.75012C5.55121 9.25 5.36044 9.32902 5.21979 9.46967C5.07914 9.61032 5.00012 9.80109 5.00012 10C5.00012 10.1989 5.07914 10.3897 5.21979 10.5303C5.36044 10.671 5.55121 10.75 5.75012 10.75H15.4401L14.2201 11.97C14.1464 12.0387 14.0873 12.1215 14.0463 12.2135C14.0053 12.3055 13.9833 12.4048 13.9815 12.5055C13.9797 12.6062 13.9983 12.7062 14.036 12.7996C14.0737 12.893 14.1299 12.9778 14.2011 13.049C14.2723 13.1203 14.3571 13.1764 14.4505 13.2141C14.5439 13.2518 14.6439 13.2704 14.7446 13.2686C14.8453 13.2668 14.9447 13.2448 15.0367 13.2038C15.1287 13.1628 15.2115 13.1037 15.2801 13.03Z"
                                        fill="#638FF5"
                                    />
                                </svg>
                                <span className="text-xs font-semibold text-grey-1200 whitespace-nowrap">Swipe Me</span>
                            </div>
                        </Pointer>
                        {/* Inner container: holds perspective + cards */}
                        <div className="absolute inset-0" style={{ perspective: "1400px" }}>
                            {IMAGES.map((img, idx) => {
                                const cfg = slotFor(idx, center);
                                const isCenter = idx === center;
                                const isHidden = cfg.zIndex === 0;

                                return (
                                    <motion.div
                                        key={idx}
                                        className="absolute overflow-hidden rounded-2xl pointer-events-none md:pointer-events-auto"
                                        style={{
                                            width: CARD_W,
                                            height: CARD_H,
                                            left: "50%",
                                            top: "50%",
                                            marginTop: -(CARD_H / 2),
                                            touchAction: "pan-y",
                                            boxShadow: isCenter ? "0 28px 72px rgba(0,0,0,0.38)" : "0 8px 28px rgba(0,0,0,0.20)",
                                        }}
                                        animate={{
                                            x: cfg.x - CARD_W / 2,
                                            rotateY: cfg.rotateY,
                                            scale: cfg.scale,
                                            zIndex: cfg.zIndex,
                                            opacity: isHidden ? 0 : 1,
                                        }}
                                        transition={{ type: "spring", stiffness: 280, damping: 32 }}
                                        onClick={() => onCardClick(idx)}
                                    >
                                        <LazyImage src={img.src} alt={img.alt} fill className="object-cover pointer-events-none" sizes={`${CARD_W}px`} priority={isCenter} />
                                        {/* Darkening overlay for non-center cards */}
                                        <motion.div className="absolute inset-0 bg-black pointer-events-none" animate={{ opacity: cfg.dim }} transition={{ type: "spring", stiffness: 280, damping: 32 }} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ---- Mobile prev/next ---- */}
                    <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
                        <button
                            type="button"
                            onClick={() => advance(-1)}
                            aria-label="Previous image"
                            className="flex items-center justify-center w-9 h-9 rounded-full border border-grey-200 bg-white text-grey-800 hover:bg-grey-50 transition-colors shadow-webflow-dropshadow"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => advance(1)}
                            aria-label="Next image"
                            className="flex items-center justify-center w-9 h-9 rounded-full border border-grey-200 bg-white text-grey-800 hover:bg-grey-50 transition-colors shadow-webflow-dropshadow"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* ---- Progress dots ---- */}
                    <div className="mt-6 flex justify-center gap-2">
                        {IMAGES.map((_, i) => (
                            <button key={i} type="button" onClick={() => setCenter(i)} aria-label={`Go to image ${i + 1}`} className={`h-2 rounded-full transition-all duration-300 ${i === center ? "w-6 bg-primary-green" : "w-2 bg-grey-300 hover:bg-grey-400"}`} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
