"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        const isTouchLike = window.matchMedia("(hover: none), (pointer: coarse)").matches;
        const isIOS = /iP(ad|hone|od)/.test(userAgent) || (userAgent.includes("Mac") && "ontouchend" in window);

        if (isTouchLike || isIOS) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.5,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const id = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(id);
            lenis.destroy();
        };
    }, []);

    return null;
}
