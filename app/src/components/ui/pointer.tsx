"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export function Pointer({ className, style, children, ...props }: HTMLMotionProps<"div">): React.ReactNode {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isActive, setIsActive] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const parent = containerRef.current?.parentElement ?? null;
        const supportsHoverPointer = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

        if (!parent || !supportsHoverPointer) {
            return;
        }

        const onMove = (e: PointerEvent) => {
            if (e.pointerType !== "mouse") return;
            x.set(e.clientX);
            y.set(e.clientY);
            setIsActive(true);
        };
        const onEnter = (e: PointerEvent) => {
            if (e.pointerType !== "mouse") return;
            x.set(e.clientX);
            y.set(e.clientY);
            setIsActive(true);
        };
        const onLeave = () => setIsActive(false);

        parent.style.cursor = "none";
        parent.addEventListener("pointermove", onMove);
        parent.addEventListener("pointerenter", onEnter);
        parent.addEventListener("pointerleave", onLeave);
        parent.addEventListener("pointercancel", onLeave);

        return () => {
            parent.style.cursor = "";
            parent.removeEventListener("pointermove", onMove);
            parent.removeEventListener("pointerenter", onEnter);
            parent.removeEventListener("pointerleave", onLeave);
            parent.removeEventListener("pointercancel", onLeave);
        };
    }, [x, y]);

    return (
        <>
            <div ref={containerRef} />
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className={cn("pointer-events-none fixed z-50", className)}
                        style={{ top: y, left: x, translate: "-50% -50%", ...style }}
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        {...props}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
