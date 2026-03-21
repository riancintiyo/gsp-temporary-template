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
}

export function RevealOnView({ children, className, delay = 0, duration = 0.72, y = 16, scaleFrom = 0.92, followScroll = false, scrollEnd = 0.65, threshold = 0.2, rootMargin = "0px 0px -18% 0px", once = true }: RevealOnViewProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observerThreshold = followScroll ? Array.from({ length: 101 }, (_, index) => index / 100) : threshold;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (followScroll) {
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
    }, [followScroll, once, rootMargin, scrollEnd, threshold]);

    const normalizedScaleFrom = Math.min(1, Math.max(0.7, scaleFrom));
    const effectiveProgress = followScroll ? progress : isVisible ? 1 : 0;
    const currentScale = normalizedScaleFrom + (1 - normalizedScaleFrom) * effectiveProgress;
    const currentY = y * (1 - effectiveProgress);

    const style: CSSProperties = {
        opacity: effectiveProgress,
        transform: `translate3d(0, ${currentY}px, 0) scale(${currentScale})`,
        transition: followScroll ? `opacity ${duration}s linear, transform ${duration}s linear` : `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        willChange: isVisible && effectiveProgress < 1 ? "opacity, transform" : "auto",
    };

    return (
        <div ref={ref} className={cn(className)} style={style}>
            {children}
        </div>
    );
}
