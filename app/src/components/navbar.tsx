"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

function GSPLogo() {
    return <Image src="/icon/96.png" alt="General Science Program logo" width={36} height={36} className="rounded-full" />;
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

const NAV_LINKS = [
    // { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
];

const PROGRAM_MENU_ITEMS = [
    { href: "/join", label: "Voluntrip Program" },
    { href: "/join", label: "STEAM Volunteer Application" },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-3 bg-white/80 backdrop-blur-md border-b border-(--theme-outline-outline-variant)">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <GSPLogo />
                    <span className="text-base font-semibold tracking-tight text-grey-1200">General Science Program</span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="h-auto bg-transparent px-0 py-0 text-sm font-medium text-grey-800 hover:bg-transparent hover:text-grey-1200 focus:bg-transparent focus:text-grey-1200 data-[state=open]:bg-transparent data-[state=open]:text-grey-1200 data-[state=open]:hover:bg-transparent">
                                    <NavHoverText label="Programs" />
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="min-w-64 rounded-md border border-grey-100 bg-white p-2 shadow-lg">
                                    <ul className="grid gap-1">
                                        {PROGRAM_MENU_ITEMS.map(({ href, label }) => (
                                            <li key={label}>
                                                <NavigationMenuLink asChild>
                                                    <Link href={href} className="rounded-sm px-3 py-2 text-sm font-medium text-grey-800 transition-colors hover:bg-grey-100/30 hover:text-primary-blue">
                                                        {label}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link key={href} href={href} className="text-sm font-medium text-grey-800 hover:text-grey-1200 transition-colors">
                            <NavHoverText label={label} />
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <Link href="/join" className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full bg-grey-1200 text-white text-sm font-semibold hover:bg-grey-900 transition-colors">
                    Join Us
                </Link>

                {/* Mobile hamburger / close button */}
                <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen((o) => !o)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
                    {mobileOpen ? (
                        <X className="w-5 h-5 text-grey-1200" />
                    ) : (
                        <>
                            <span className="w-5 h-0.5 bg-grey-1200" />
                            <span className="w-5 h-0.5 bg-grey-1200" />
                            <span className="w-3.5 h-0.5 bg-grey-1200" />
                        </>
                    )}
                </button>
            </nav>

            {/* Mobile menu overlay */}
            {mobileOpen && <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={() => setMobileOpen(false)} />}

            {/* Mobile slide-in drawer */}
            <aside className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
                {/* Drawer header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-(--theme-outline-outline-variant)">
                    <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                        <GSPLogo />
                        <span className="text-sm font-semibold text-grey-1200">GSP</span>
                    </Link>
                    <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                        <X className="w-5 h-5 text-grey-800" />
                    </button>
                </div>

                {/* Drawer links */}
                <nav className="flex flex-col px-6 py-6 gap-1 flex-1">
                    <div>
                        <button onClick={() => setMobileProgramsOpen((o) => !o)} className="flex items-center justify-between w-full py-3 text-base font-medium text-grey-800 hover:text-grey-1200 transition-colors border-b border-grey-100">
                            <span>Programs</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProgramsOpen ? "rotate-180" : ""}`} />
                        </button>
                        {mobileProgramsOpen && (
                            <div className="flex flex-col pl-4">
                                {PROGRAM_MENU_ITEMS.map(({ href, label }) => (
                                    <Link key={label} href={href} onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-medium text-grey-800 hover:text-primary-blue transition-colors">
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="py-3 text-base font-medium text-grey-800 hover:text-grey-1200 transition-colors border-b border-grey-100">
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Drawer CTA */}
                <div className="px-6 py-6">
                    <Link href="/join" onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-full px-6 py-3 rounded-full bg-grey-1200 text-white text-sm font-semibold hover:bg-grey-900 transition-colors">
                        Join Us
                    </Link>
                </div>
            </aside>
        </>
    );
}
