"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { HeroGridPattern } from "@/components/hero-grid-pattern";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { RevealOnView } from "@/components/ui/reveal-on-view";
import { Send } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Program Description Section                                        */
/* ------------------------------------------------------------------ */

function ProgramSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white pt-[calc(var(--nav-height)+6rem)] pb-24">
            {/* Layer 1: Grid pattern — left side */}
            <div
                className="pointer-events-none absolute inset-0 hidden lg:block"
                style={{
                    maskImage: "linear-gradient(to right, black 45%, transparent 65%)",
                    WebkitMaskImage: "linear-gradient(to right, black 45%, transparent 65%)",
                }}
            >
                <HeroGridPattern className="absolute inset-0 w-full h-full" />
            </div>

            {/* Layer 2: Gradient blobs */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <svg className="absolute top-0 right-0 h-full w-full lg:w-[85%]" viewBox="0 0 1221 655" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMin slice" style={{ maxWidth: "1221px" }}>
                    <g filter="url(#about-page-blur-green)">
                        <path d="M1292.1 -112.787C1459.66 -227.95 1566.77 -258.549 1629.46 -91.9411C1692.14 74.6669 1608.04 260.494 1441.61 323.114C1275.18 385.735 991.083 190.664 928.396 24.0563C962.992 -167.746 1125.66 -50.1667 1292.1 -112.787Z" fill="#95D2B3" />
                    </g>
                    <g filter="url(#about-page-blur-purple)">
                        <path d="M582.612 -633.695C743.044 -648.923 903.845 -758.766 952.034 -630.692C1000.22 -502.618 885.052 -218.034 757.117 -169.898C629.182 -121.762 620.867 -237.156 572.679 -365.23C524.491 -493.304 452.768 -635.048 582.612 -633.695Z" fill="#D6C7FF" />
                    </g>
                    <g filter="url(#about-page-blur-blue)">
                        <circle cx="1197.68" cy="-365.528" r="468.5" transform="rotate(-110.619 1197.68 -365.528)" fill="#638FF5" />
                    </g>
                    <defs>
                        <filter id="about-page-blur-green" x="419.396" y="-717.06" width="1739.81" height="1561.16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur" />
                        </filter>
                        <filter id="about-page-blur-purple" x="0" y="-1201.02" width="1472.24" height="1551.29" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur" />
                        </filter>
                        <filter id="about-page-blur-blue" x="220.052" y="-1343.15" width="1955.25" height="1955.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="254.5" result="effect1_foregroundBlur" />
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Layer 3: Noise texture */}
            <div
                className="pointer-events-none absolute inset-0 z-1 opacity-[0.95] mix-blend-soft-light bg-black"
                style={{
                    mask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                    WebkitMask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto w-full px-8 lg:px-(--page-margin)">
                <div className="flex flex-col gap-6">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-blue">About the Program</p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-grey-1200">General Science Program</h1>
                    <p className="text-base sm:text-lg leading-7 text-grey-800 max-w-80 lg:max-w-260">
                        The <strong>General Science Program (GSP)</strong> aims to empower elementary students by providing them with the tools and inspiration to explore their surrounding environment. Through engaging activities and <strong>STEAM-based hands-on projects</strong>, the program seeks
                        to build their motivation for learning and expand their knowledge about career exploration. Additionally, the program will offer workshops and seminars for parents and teachers, such as parenting seminars, teaching methods and language training for teachers. The long-term
                        goal of this program is to increase the mean years of schooling in <strong>rural areas of Indonesia</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Contact Form Section                                               */
/* ------------------------------------------------------------------ */

function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validate: (values) => {
            const errors: Partial<Record<keyof typeof values, string>> = {};

            if (!values.name.trim()) {
                errors.name = "Full name is required.";
            } else if (values.name.trim().length < 2) {
                errors.name = "Full name must be at least 2 characters.";
            }

            if (!values.email.trim()) {
                errors.email = "Email is required.";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                errors.email = "Please enter a valid email address.";
            }

            if (!values.subject.trim()) {
                errors.subject = "Subject is required.";
            } else if (values.subject.trim().length < 3) {
                errors.subject = "Subject must be at least 3 characters.";
            }

            if (!values.message.trim()) {
                errors.message = "Message is required.";
            } else if (values.message.trim().length < 10) {
                errors.message = "Message must be at least 10 characters.";
            }

            return errors;
        },
        onSubmit: () => {
            setSubmitted(true);
        },
    });

    return (
        <section className="bg-white py-24 border-t border-grey-100">
            <div className="mx-auto w-full px-8 lg:px-(--page-margin)">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left — section title */}
                    <div className="flex flex-col gap-4 lg:pt-2">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary-blue">Contact</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-grey-1200">
                            Reach out <br className="hidden sm:block" /> to Us
                        </h2>
                        <p className="text-base text-grey-800 leading-relaxed mt-2">
                            Have a question, partnership idea, or just want to say hello? <br className="hidden sm:block" />
                            We&apos;d love to hear from you.
                        </p>
                    </div>

                    {/* Right — contact form card */}
                    <div>
                        <Card className="relative overflow-hidden border border-grey-100 shadow-(--shadow-webflow-dropshadow) bg-white">
                            <CardHeader className="pb-2 mb-6">
                                <CardTitle className="text-lg font-semibold text-grey-1200">Send us a message</CardTitle>
                                <CardDescription className="text-grey-800">Fill in the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
                            </CardHeader>

                            <CardContent>
                                {submitted ? (
                                    <div className="py-8 flex flex-col items-center gap-3 text-center">
                                        <div className="w-12 h-12 rounded-full bg-primary-green/15 flex items-center justify-center">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 11L9 16L18 6" stroke="#95D2B3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-base font-semibold text-grey-1200">Message sent!</p>
                                        <p className="text-sm text-grey-800">Thank you for reaching out. We&apos;ll reply to you soon.</p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSubmitted(false);
                                                formik.resetForm();
                                            }}
                                            className="mt-2 text-sm text-primary-blue hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={formik.handleSubmit} className="grid gap-5" noValidate>
                                        {/* Name + Email row */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-4">
                                                <Label htmlFor="name">Full Name</Label>
                                                <Input id="name" name="name" type="text" placeholder="Your name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} aria-invalid={Boolean(formik.touched.name && formik.errors.name)} required />
                                                {formik.touched.name && formik.errors.name ? <p className="text-sm text-red-600">{formik.errors.name}</p> : null}
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" name="email" type="email" placeholder="you@example.com" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} aria-invalid={Boolean(formik.touched.email && formik.errors.email)} required />
                                                {formik.touched.email && formik.errors.email ? <p className="text-sm text-red-600">{formik.errors.email}</p> : null}
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div className="flex flex-col gap-4">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input id="subject" name="subject" type="text" placeholder="What is this about?" value={formik.values.subject} onChange={formik.handleChange} onBlur={formik.handleBlur} aria-invalid={Boolean(formik.touched.subject && formik.errors.subject)} required />
                                            {formik.touched.subject && formik.errors.subject ? <p className="text-sm text-red-600">{formik.errors.subject}</p> : null}
                                        </div>

                                        {/* Message */}
                                        <div className="flex flex-col gap-4">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" name="message" placeholder="Write your message here…" rows={5} value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} aria-invalid={Boolean(formik.touched.message && formik.errors.message)} required />
                                            {formik.touched.message && formik.errors.message ? <p className="text-sm text-red-600">{formik.errors.message}</p> : null}
                                        </div>

                                        <Button type="submit" className="w-full bg-grey-1200 text-white hover:bg-grey-1000 rounded-lg h-10 font-semibold flex items-center justify-center gap-2">
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </Button>
                                    </form>
                                )}
                            </CardContent>

                            {/* Animated border beam */}
                            <BorderBeam duration={10} size={120} colorFrom="#638FF5" colorTo="#95D2B3" />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-(family-name:--font-plus-jakarta)">
            <RevealOnView>
                <ProgramSection />
            </RevealOnView>
            <RevealOnView delay={0.08}>
                <ContactSection />
            </RevealOnView>
        </div>
    );
}
