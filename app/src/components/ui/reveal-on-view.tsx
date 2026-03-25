"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealOnViewProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    y?: number;
    scaleFrom?: number;
    followScroll?: boolean;
    scrollEnd?: number;
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
    blurFrom?: number;
}

export function RevealOnView({ children, className, delay = 0, duration = 0.72, y = 16, scaleFrom = 0.92, followScroll = false, scrollEnd = 0.65, threshold = 0.2, rootMargin = "0px 0px -18% 0px", once = true, blurFrom = 0 }: RevealOnViewProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isTouchLike, setIsTouchLike] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
        const onChange = () => setIsTouchLike(mediaQuery.matches);

        onChange();
        mediaQuery.addEventListener("change", onChange);

        return () => {
            mediaQuery.removeEventListener("change", onChange);
        };
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        if (isTouchLike) {
            setIsVisible(true);
            setProgress(1);
            return;
        }

        const effectiveFollowScroll = followScroll && !isTouchLike;

        const observerThreshold = effectiveFollowScroll ? Array.from({ length: 101 }, (_, index) => index / 100) : threshold;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (effectiveFollowScroll) {
                        const normalizedProgress = Math.max(0, Math.min(1, entry.intersectionRatio / scrollEnd));
                        if (once) {
                            setProgress((prev) => Math.max(prev, normalizedProgress));
                            if (normalizedProgress >= 1) observer.unobserve(entry.target);
                        } else {
                            setProgress(normalizedProgress);
                        }
                        setIsVisible(normalizedProgress > 0);
                        return;
                    }

                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (once) observer.unobserve(entry.target);
                    } else if (!once) {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: observerThreshold, rootMargin },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [followScroll, isTouchLike, once, rootMargin, scrollEnd, threshold]);

    const normalizedScaleFrom = Math.min(1, Math.max(0.7, scaleFrom));
    const normalizedBlurFrom = Math.max(0, blurFrom);
    const effectiveFollowScroll = followScroll && !isTouchLike;
    const effectiveProgress = effectiveFollowScroll ? progress : isVisible ? 1 : 0;
    const currentScale = normalizedScaleFrom + (1 - normalizedScaleFrom) * effectiveProgress;
    const currentY = y * (1 - effectiveProgress);
    const currentBlur = normalizedBlurFrom * (1 - effectiveProgress);

    const style: CSSProperties = {
        opacity: effectiveProgress,
        transform: `translate3d(0, ${currentY}px, 0) scale(${currentScale})`,
        filter: currentBlur > 0 ? `blur(${currentBlur}px)` : "none",
        transition: followScroll ? `opacity ${duration}s linear, transform ${duration}s linear, filter ${duration}s linear` : `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s, filter ${duration}s ease-out ${delay}s`,
        willChange: isVisible && effectiveProgress < 1 ? "opacity, transform, filter" : "auto",
    };

    return (
        <div ref={ref} className={cn(className)} style={style}>
            {children}
        </div>
    );
}
