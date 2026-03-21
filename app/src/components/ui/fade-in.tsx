"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    y?: number;
    startOnView?: boolean;
    viewportAmount?: number;
}

export function FadeIn({ children, className, delay = 0, duration = 0.45, y = 16, startOnView = false, viewportAmount = 0.2 }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            animate={startOnView ? undefined : { opacity: 1, y: 0 }}
            whileInView={startOnView ? { opacity: 1, y: 0 } : undefined}
            viewport={startOnView ? { once: true, amount: viewportAmount } : undefined}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
