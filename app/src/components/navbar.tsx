"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";

function GSPLogo() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="url(#gsp-gradient)" />
            <defs>
                <linearGradient id="gsp-gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="25%" stopColor="#FFB347" />
                    <stop offset="50%" stopColor="#95D2B3" />
                    <stop offset="75%" stopColor="#638FF5" />
                    <stop offset="100%" stopColor="#D6C7FF" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function NavHoverText({ label }: { label: string }) {
    const [hovered, setHovered] = useState(false);

    return (
        <span className="inline-block" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {hovered ? (
                <TextAnimate
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 30,
                            rotate: 45,
                            scale: 0.5,
                        },
                        show: (i: number) => ({
                            opacity: 1,
                            y: 0,
                            rotate: 0,
                            scale: 1,
                            transition: {
                                delay: i * 0.1,
                                duration: 0.4,
                                y: {
                                    type: "spring",
                                    damping: 12,
                                    stiffness: 200,
                                    mass: 0.8,
                                },
                                rotate: {
                                    type: "spring",
                                    damping: 8,
                                    stiffness: 150,
                                },
                                scale: {
                                    type: "spring",
                                    damping: 10,
                                    stiffness: 300,
                                },
                            },
                        }),
                        exit: (i: number) => ({
                            opacity: 0,
                            y: 30,
                            rotate: 45,
                            scale: 0.5,
                            transition: {
                                delay: i * 0.1,
                                duration: 0.4,
                            },
                        }),
                    }}
                    by="character"
                >
                    {label}
                </TextAnimate>
            ) : (
                <span>{label}</span>
            )}
        </span>
    );
}

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-3 bg-white/80 backdrop-blur-md border-b border-[var(--theme-outline-outline-variant)]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
                <GSPLogo />
                <span className="text-base font-semibold tracking-tight text-[var(--palette-grey-1200)]">General Science Program</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
                <button className="flex items-center gap-1 text-sm font-medium text-[var(--palette-grey-800)] hover:text-[var(--palette-grey-1200)] transition-colors">
                    <NavHoverText label="Programs" />
                    <ChevronDown className="w-4 h-4" />
                </button>
                <Link href="/gallery" className="text-sm font-medium text-[var(--palette-grey-800)] hover:text-[var(--palette-grey-1200)] transition-colors">
                    <NavHoverText label="Gallery" />
                </Link>
                <Link href="/articles" className="text-sm font-medium text-[var(--palette-grey-800)] hover:text-[var(--palette-grey-1200)] transition-colors">
                    <NavHoverText label="Articles" />
                </Link>
                <Link href="/about" className="text-sm font-medium text-[var(--palette-grey-800)] hover:text-[var(--palette-grey-1200)] transition-colors">
                    <NavHoverText label="About" />
                </Link>
            </div>

            {/* CTA Button */}
            <Link href="/join" className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full bg-[var(--palette-grey-1200)] text-white text-sm font-semibold hover:bg-[var(--palette-grey-900)] transition-colors">
                Join Us
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden flex flex-col gap-1.5 p-2">
                <span className="w-5 h-0.5 bg-[var(--palette-grey-1200)]" />
                <span className="w-5 h-0.5 bg-[var(--palette-grey-1200)]" />
                <span className="w-3.5 h-0.5 bg-[var(--palette-grey-1200)]" />
            </button>
        </nav>
    );
}
