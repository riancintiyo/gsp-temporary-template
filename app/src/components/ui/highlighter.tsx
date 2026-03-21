"use client";

import { useEffect, useRef, useState } from "react";
import type React from "react";
import { useInView } from "motion/react";
import { annotate } from "rough-notation";
import { type RoughAnnotation } from "rough-notation/lib/model";

type AnnotationAction = "highlight" | "underline" | "box" | "circle" | "strike-through" | "crossed-off" | "bracket";

interface HighlighterProps {
    children: React.ReactNode;
    action?: AnnotationAction;
    color?: string;
    strokeWidth?: number;
    animationDuration?: number;
    iterations?: number;
    padding?: number;
    multiline?: boolean;
    isView?: boolean;
    startDelay?: number;
}

export function Highlighter({ children, action = "highlight", color = "#ffd1dc", strokeWidth = 1.5, animationDuration = 600, iterations = 2, padding = 4, multiline = true, isView = false, startDelay = 0 }: HighlighterProps) {
    const elementRef = useRef<HTMLSpanElement>(null);
    const annotationRef = useRef<RoughAnnotation | null>(null);
    const [delayReady, setDelayReady] = useState(startDelay <= 0);

    const isInView = useInView(elementRef, {
        once: true,
        margin: "-10%",
    });

    // If isView is false, always show. If isView is true, wait for inView
    const shouldShow = !isView || isInView;
    const shouldAnnotate = shouldShow && (startDelay <= 0 || delayReady);

    useEffect(() => {
        if (!shouldShow || startDelay <= 0) {
            return;
        }

        const timer = window.setTimeout(() => setDelayReady(true), startDelay);
        return () => window.clearTimeout(timer);
    }, [shouldShow, startDelay]);

    useEffect(() => {
        const element = elementRef.current;
        let resizeObserver: ResizeObserver | null = null;

        if (shouldAnnotate && element) {
            const annotationConfig = {
                type: action,
                color,
                strokeWidth,
                animationDuration,
                iterations,
                padding,
                multiline,
            };

            const annotation = annotate(element, annotationConfig);

            annotationRef.current = annotation;
            annotation.show();

            resizeObserver = new ResizeObserver(() => {
                annotation.hide();
                annotation.show();
            });

            resizeObserver.observe(element);
            resizeObserver.observe(document.body);
        }

        return () => {
            if (annotationRef.current) {
                annotationRef.current.remove();
                annotationRef.current = null;
            }
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        };
    }, [shouldAnnotate, action, color, strokeWidth, animationDuration, iterations, padding, multiline]);

    return (
        <span ref={elementRef} className="relative inline-block bg-transparent">
            {children}
        </span>
    );
}
