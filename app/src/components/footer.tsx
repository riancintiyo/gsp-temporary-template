import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";

const NAV_LINKS = {
    About: [
        { label: "About GSP", href: "/about" },
        { label: "Partnership", href: "/join" },
    ],
    Community: [
        { label: "Voluntrip Program", href: "/join" },
        { label: "Blog", href: "/blog" },
    ],
};

const SOCIAL_LINKS = [
    { label: "Instagram", href: "https://www.instagram.com/gsp_indo/", icon: Instagram },
    { label: "Facebook", href: "#", icon: Facebook },
];

export function Footer() {
    return (
        <footer className="font-(family-name:--font-plus-jakarta) bg-white border-t border-grey-200">
            {/* Main content */}
            <div className="mx-auto max-w-360 px-8 lg:px-(--page-margin) py-16">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    {/* Left — brand */}
                    <div className="flex flex-col gap-5">
                        <Link href="/" aria-label="GSP Home">
                            <LazyImage src="/icon/96.png" alt="General Science Program logo" width={52} height={52} className="rounded-full" />
                        </Link>

                        <p className="text-sm text-grey-700 leading-relaxed max-w-[300px]">Our vision is to empower elementary students through engaging activities and hands-on STEAM learning.</p>

                        <div className="flex items-center gap-4">
                            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                                <Link key={label} href={href} aria-label={label} className="text-grey-800 hover:text-primary-blue transition-colors">
                                    <Icon size={22} strokeWidth={1.75} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right — link columns */}
                    <div className="flex flex-wrap gap-12 lg:gap-20">
                        {/* About & Community */}
                        {Object.entries(NAV_LINKS).map(([heading, links]) => (
                            <div key={heading} className="flex flex-col gap-4 min-w-32">
                                <h3 className="text-base font-semibold text-grey-1000">{heading}</h3>
                                <ul className="flex flex-col gap-3">
                                    {links.map(({ label, href }) => (
                                        <li key={label}>
                                            <Link href={href} className="text-sm text-grey-700 hover:text-primary-blue transition-colors">
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Socials */}
                        <div className="flex flex-col gap-4 min-w-32">
                            <h3 className="text-base font-semibold text-grey-1000">Socials</h3>
                            <ul className="flex flex-col gap-3">
                                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                                    <li key={label}>
                                        <Link href={href} className="flex items-center gap-2 text-sm text-grey-700 hover:text-primary-blue transition-colors">
                                            <Icon size={16} strokeWidth={1.75} />
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-grey-200">
                <div className="mx-auto max-w-360 px-8 lg:px-(--page-margin) py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-sm text-grey-1000">©2026 General Science Program. All rights reserved</p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="text-sm font-medium text-grey-1000 hover:text-primary-blue transition-colors">
                            Privacy &amp; Policy
                        </Link>
                        <Link href="#" className="text-sm font-medium text-grey-1000 hover:text-primary-blue transition-colors">
                            Terms &amp; Condition
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
