"use client";

import { motion } from "motion/react";
import { TextAnimate } from "@/components/ui/text-animate";

export function ProblemsSection() {
    return (
        <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden font-sans">
            <div className="relative z-10 mx-auto w-full max-w-360 px-8 lg:px-(--page-margin)">
                {/* Title */}
                <TextAnimate as="h2" by="line" animation="fadeIn" startOnView once className="text-4xl text-center md:text-start sm:text-5xl lg:text-6xl font-bold text-grey-1200 mb-6">
                    {`The Problems in Wonosobo`}
                </TextAnimate>

                {/* Intro paragraph */}
                <TextAnimate as="p" by="line" animation="fadeIn" startOnView once delay={0.08} className="max-w-240 text-base text-grey-800 leading-relaxed mb-12 ml-2">
                    {`The 2022 UNDP's Human Development Index (HDI) stated that Indonesia was ranked 6th in Southeast Asia, with an average of only 8.6 years of schooling. In Wonosobo, Central Java, the mean years of schooling in 2023 was only 6.88 years, where the rate of students who continued their study to junior high school was only around 40%.`}
                </TextAnimate>

                {/* Stat cards row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <StatCard icon={<GreenFlowerIcon />} bgColor="bg-[#95D2B3]" value="15.28%" label="Living Under Poverty" delay={0.18} />
                    <StatCard icon={<PurpleFlowerIcon />} bgColor="bg-[#D6C7FF]" value="6.88 Years" label="Years of Schooling" delay={0.24} />
                    <StatCard icon={<YellowStarIcon />} bgColor="bg-[#FBBF24]" value="69.37" label="HDI Index" delay={0.3} />
                    <StatCard icon={<BlueStarIcon />} bgColor="bg-[#638FF5]" value="Rank 3rd" label="Poorest City in Central Java" delay={0.36} />
                </div>

                {/* Bento grid — 2 rows */}
                <div className="grid grid-rows-2 gap-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                        {/* Poverty + Chart card */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
                            whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 380, damping: 26 } }}
                            className="order-2 md:order-1 rounded-2xl flex flex-col-reverse md:flex-row border border-grey-100 bg-white p-6 gap-6 shadow-webflow-dropshadow"
                        >
                            {/* Text side */}
                            <div className="flex-1 min-w-0">
                                <div className="relative z-10 flex flex-col gap-12">
                                    <div className="w-12 h-12 rounded-xl bg-[#95D2B3] flex items-center justify-center">
                                        <GreenFlowerIcon />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-bold text-grey-1200">{`Poverty`}</h3>
                                        <p className="text-sm text-grey-800 leading-relaxed">{`In 2024, Wonosobo was ranked third as the poorest city in Central Java, with a total of 15.28% or 121.49 thousand people still living under poverty. One of the primary factor that contribute to this condition is lack of education, in which, this condition can perpetuate poverty and hinder economic growth.`}</p>
                                    </div>
                                </div>
                            </div>
                            {/* Chart side with grid background */}
                            <div className="relative flex-1 min-w-0 flex flex-col justify-end">
                                <ChartGridBackground />
                                <div className="relative z-10">
                                    <ChartLineSvg />
                                </div>
                            </div>
                        </motion.div>

                        {/* Years of Schooling card — angular gradient + noise */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: 0.24 }}
                            whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 380, damping: 26 } }}
                            className="order-1 md:order-2 relative rounded-2xl opacity-90 border border-grey-100 overflow-hidden p-8 flex flex-col gap-4 shadow-webflow-dropshadow"
                            style={{
                                background: "conic-gradient(from 230deg, rgba(214,199,255,0.9) 0deg, rgba(112,160,229,0.4) 22%, rgba(149,210,179,0.2) 46%, rgba(255,255,255,0.9) 63%, rgba(112,160,229,0.25) 78%, rgba(149,210,179,0.35) 90%, rgba(214,199,255,0.9) 100%)",
                            }}
                        >
                            {/* Noise overlay */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.90] mix-blend-soft-light bg-white blur-xl"
                                style={{
                                    mask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                                    WebkitMask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                                }}
                            />
                            <div className="relative z-10 flex flex-col gap-12">
                                <div className="w-12 h-12 rounded-xl bg-[#D6C7FF] flex items-center justify-center">
                                    <PurpleFlowerIcon />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-grey-1200">{`Years of Schooling`}</h3>
                                    <p className="text-sm text-grey-800 leading-relaxed">{`In Wonosobo, Central Java, the mean years of schooling in 2023 was only 6.88 years. The region's and Central Java's mean years of schooling are 8.7 years and 8.01 years respectively.`}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Row 2: HDI/IPM Index + Low Education Rate */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
                        {/* HDI/IPM Index — gradient 2 + noise */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
                            whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 380, damping: 26 } }}
                            className="relative rounded-2xl opacity-95 border border-grey-100 overflow-hidden p-8 flex flex-col gap-4 shadow-webflow-dropshadow"
                            style={{
                                background: "conic-gradient(from 230deg, rgba(112,160,229,0.9) 0deg, rgba(149,210,179,0.4) 22%, rgba(149,210,179,0.2) 46%, rgba(255,255,255,0.8) 63%, rgba(112,160,229,0.6) 78%, rgba(149,210,179,0.15) 90%, rgba(112,160,229,0.7) 100%)",
                            }}
                        >
                            {/* Noise overlay */}
                            <div
                                className="pointer-events-none absolute blur-in-3xl inset-0 opacity-[0.95] mix-blend-soft-light bg-white"
                                style={{
                                    mask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                                    WebkitMask: "repeating-radial-gradient(circle at center, #000, 0.0003px, #000, 0, #0000, 0.0006px, #0000 0)",
                                }}
                            />
                            <div className="relative z-10 flex flex-col gap-12">
                                <div className="w-12 h-12 rounded-xl bg-[#FBBF24] flex items-center justify-center">
                                    <YellowStarIcon />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-grey-1200">{`HDI/IPM Index`}</h3>
                                    <p className="text-sm text-grey-800 leading-relaxed">{`In 2023, Indonesia's HDI reached 74.39 and for Central Java the number decreased to 73.39. However, for Wonosobo, the index only seized for 69.37 point.`}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Low Education Rate + Student Profiles */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: 0.36 }}
                            whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 380, damping: 26 } }}
                            className="relative overflow-visible rounded-2xl flex flex-col-reverse md:flex-row border border-grey-100 bg-white p-6 gap-6 shadow-webflow-dropshadow"
                        >
                            <div className="relative z-10 flex flex-col gap-12">
                                <div className="w-12 h-12 rounded-xl bg-[#638FF5] flex items-center justify-center">
                                    <BlueStarIcon />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-grey-1200">{`Low Education Rate`}</h3>
                                    <p className="text-sm text-grey-800 leading-relaxed">{`Only 20.47% people above 15 years old in Wonosobo graduated from junior high school, the number decreased for high school level which only accounted for 16.6% and then the number plummeted for they who graduated for university level with a mere of 3.72% in 2022.`}</p>
                                </div>
                            </div>
                            <StudentProfileStack />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---- Stat Card ---- */
function StatCard({ icon, bgColor, value, label, delay = 0 }: { icon: React.ReactNode; bgColor: string; value: string; label: string; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay }}
            whileHover={{ scale: 1.06, transition: { type: "spring", stiffness: 380, damping: 26 } }}
            className="flex items-center gap-3 rounded-xl border border-grey-100 bg-white px-4 py-3 shadow-webflow-dropshadow"
        >
            <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center shrink-0`}>{icon}</div>
            <div className="min-w-0 flex flex-col gap-1">
                <p className="text-lg font-bold text-grey-1200 leading-tight">{value}</p>
                <p className="text-xs text-grey-800 leading-tight">{label}</p>
            </div>
        </motion.div>
    );
}

/* ---- SVG Icons ---- */
function GreenFlowerIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8.00415C0 10.0537 0.784396 12.0948 2.34475 13.6552C3.90511 15.2155 5.95467 15.9999 7.99578 15.9999C7.91987 13.3094 2.69056 8.08849 0 8.00415Z" fill="white" />
            <path d="M0 7.99578C2.69056 7.91144 7.91144 2.68213 7.99578 0C5.94623 0 3.90511 0.784396 2.34475 2.34475C0.784396 3.90511 0.00843437 5.95467 0 7.99578Z" fill="white" />
            <path d="M16 7.99578C16 5.94623 15.2156 3.90511 13.6552 2.34475C12.0949 0.784396 10.0453 0 8.00421 0C8.08856 2.69056 13.3094 7.91144 16 7.99578Z" fill="white" />
            <path d="M16 8.00415C16 10.0537 16.7844 12.0948 18.3448 13.6552C19.9051 15.2155 21.9547 15.9999 23.9958 15.9999C23.9114 13.3178 18.6906 8.08849 16 8.00415Z" fill="white" />
            <path d="M16 8.00433C18.6906 7.91998 23.9114 2.69067 23.9958 0.00854492C21.9462 0.00854492 19.9051 0.792941 18.3448 2.3533C16.7844 3.90522 16 5.95477 16 8.00433Z" fill="white" />
            <path d="M32 8.00433C32 5.95477 31.2156 3.91366 29.6552 2.3533C28.0949 0.792941 26.0453 0.00854492 24.0042 0.00854492C24.0801 2.69067 29.3094 7.91998 32 8.00433Z" fill="white" />
            <path d="M23.9958 15.9999C26.0453 15.9999 28.0865 15.2155 29.6468 13.6552C31.2072 12.0948 31.9916 10.0453 31.9916 8.00415C29.3094 8.08849 24.0801 13.3178 23.9958 15.9999Z" fill="white" />
            <path d="M0 23.9958C0 26.0454 0.784396 28.0865 2.34475 29.6469C3.90511 31.2072 5.95467 31.9916 7.99578 31.9916C7.91987 29.3095 2.69056 24.0802 0 23.9958Z" fill="white" />
            <path d="M0 23.9958C2.69056 23.9114 7.91144 18.6821 7.99578 16C5.94623 16 3.90511 16.7844 2.34475 18.3448C0.784396 19.9051 0.00843437 21.9462 0 23.9958Z" fill="white" />
            <path
                d="M16 23.9957C16 21.9462 15.2156 19.905 13.6552 18.3447C12.0949 16.7843 10.0453 15.9999 8.00421 15.9999C10.0538 15.9999 12.0949 15.2155 13.6552 13.6552C15.2156 12.0948 16 10.0453 16 8.00415C13.3094 8.08849 8.08856 13.3178 8.00421 15.9999C8.08856 18.6821 13.3094 23.9114 16 23.9957Z"
                fill="white"
            />
            <path d="M8.00421 31.9916C10.0538 31.9916 12.0949 31.2072 13.6552 29.6469C15.2156 28.0865 16 26.037 16 23.9958C13.3094 24.0802 8.08856 29.3095 8.00421 31.9916Z" fill="white" />
            <path d="M16 24.0042C16 26.0537 16.7844 28.0948 18.3448 29.6552C19.9051 31.2155 21.9547 31.9999 23.9958 31.9999C23.9114 29.3094 18.6906 24.0885 16 24.0042Z" fill="white" />
            <path d="M16 23.9958C18.6906 23.9114 23.9114 18.6821 23.9958 16C21.9462 16 19.9051 16.7844 18.3448 18.3448C16.7844 19.9051 16 21.9547 16 23.9958Z" fill="white" />
            <path d="M23.9958 16C24.0801 18.6906 29.3094 23.9114 31.9916 23.9958C31.9916 21.9462 31.2072 19.9051 29.6468 18.3448C28.0949 16.7844 26.0453 16 23.9958 16Z" fill="white" />
            <path d="M23.9958 31.9999C26.0453 31.9999 28.0865 31.2155 29.6468 29.6552C31.2072 28.0948 31.9916 26.0453 31.9916 24.0042C29.3094 24.0885 24.0801 29.3094 23.9958 31.9999Z" fill="white" />
        </svg>
    );
}

function PurpleFlowerIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 0C7.16329 0 0 7.16329 0 16C0 24.8367 7.16329 32 16 32C24.8367 32 32 24.8367 32 16C32 7.16329 24.8367 0 16 0ZM24.5891 18.7919C26.3565 21.0886 24.0427 24.2818 21.3106 23.3084C21.3874 26.2113 17.6393 27.4322 16 25.0331C14.3607 27.4237 10.6126 26.2113 10.6894 23.3084C7.95731 24.2818 5.635 21.0886 7.41089 18.7919C4.62753 17.9723 4.62753 14.0277 7.41089 13.2081C5.64354 10.9114 7.95731 7.71825 10.6894 8.69157C10.6126 5.78869 14.3607 4.56777 16 6.96692C17.6393 4.57631 21.3874 5.78869 21.3106 8.69157C24.0427 7.71825 26.365 10.9114 24.5891 13.2081C27.381 14.0277 27.381 17.9723 24.5891 18.7919Z"
                fill="white"
            />
        </svg>
    );
}

function YellowStarIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7491 15.5106C32.2354 -5.17021 0.764631 -5.17021 14.2509 15.5106C0.764631 -5.17021 -8.96208 24.6562 12.8649 19.7692C-8.96208 24.6479 16.5 43.0796 16.5 22.3987C16.5 43.0796 41.9621 24.6479 20.1351 19.7692C41.9621 24.6562 32.2354 -5.17021 18.7491 15.5106Z" fill="white" />
        </svg>
    );
}

function BlueStarIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9956 7.3434L22.6275 0L22.118 9.88197L32 9.3725L24.6566 16.0044L32 22.6275L22.118 22.1268L22.6275 32L15.9956 24.6654L9.37249 32L9.87318 22.1268L0 22.6275L7.33461 16.0044L0 9.3725L9.87318 9.88197L9.37249 0L15.9956 7.3434Z" fill="white" />
        </svg>
    );
}

/* ---- Chart grid background ---- */
function ChartGridBackground() {
    return (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 568 352" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <line x1="1" y1="5.5" x2="567" y2="5.5" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="1" y1="90.5" x2="567" y2="90.5" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="1" y1="175.5" x2="567" y2="175.5" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="1" y1="260.5" x2="567" y2="260.5" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="1" y1="345.5" x2="567" y2="345.5" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="0.5" y1="346" x2="0.5" y2="6" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="63.3889" y1="346" x2="63.3889" y2="6" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="126.278" y1="346" x2="126.278" y2="6" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="189.167" y1="346" x2="189.167" y2="6" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="252.056" y1="346" x2="252.056" y2="6" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="314.944" y1="346" x2="314.944" y2="6" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="377.833" y1="346" x2="377.833" y2="6" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="440.722" y1="346" x2="440.722" y2="6" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="503.611" y1="346" x2="503.611" y2="6" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
            <line x1="566.5" y1="346" x2="566.5" y2="6" stroke="#00001A" strokeOpacity="0.15" strokeDasharray="2" />
        </svg>
    );
}

/* ---- Chart line SVG ---- */
function ChartLineSvg() {
    return (
        <svg className="w-full" viewBox="0 0 254 174" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                {`
                    @keyframes drawNeon0 {
                        0% { stroke-dashoffset: 12; animation-timing-function: ease-in; }
                        40% { stroke-dashoffset: -100; }
                        100% { stroke-dashoffset: -100; }
                    }
                    @keyframes drawNeon1 {
                        0% { stroke-dashoffset: 8; animation-timing-function: ease-in; }
                        40% { stroke-dashoffset: -104; }
                        100% { stroke-dashoffset: -104; }
                    }
                    @keyframes drawNeon2 {
                        0% { stroke-dashoffset: 4; animation-timing-function: ease-in; }
                        40% { stroke-dashoffset: -108; }
                        100% { stroke-dashoffset: -108; }
                    }
                    @keyframes drawNeon3 {
                        0% { stroke-dashoffset: 1.5; animation-timing-function: ease-in; }
                        40% { stroke-dashoffset: -110.5; }
                        100% { stroke-dashoffset: -110.5; }
                    }

                    .neon-path-0 { animation: drawNeon0 5s infinite; }
                    .neon-path-1 { animation: drawNeon1 5s infinite; }
                    .neon-path-2 { animation: drawNeon2 5s infinite; }
                    .neon-path-3 { animation: drawNeon3 5s infinite; }
                `}
            </style>
            <g filter="url(#filter0_ddd_problems)">
                {/* Base subtle static line */}
                <path
                    d="M18 108.284C31.8333 108.284 31.8333 93.192 45.6667 93.192C59.5 93.192 59.5 64.156 73.3333 64.156C87.1667 64.156 87.1667 9.5 101 9.5C114.833 9.5 114.833 62.882 128.667 62.882C142.5 62.882 142.5 129.214 156.333 129.214C170.167 129.214 170.167 25.698 184 25.698C197.833 25.698 197.833 113.24 211.667 113.24C225.5 113.24 225.5 105.414 239.333 105.414"
                    stroke="#8979FF"
                />

                {/* Layered glowing animation trails */}
                <g style={{ filter: "drop-shadow(0px 0px 2px #FFFFFF) drop-shadow(0px 0px 2px #8979FF)" }}>
                    <path
                        d="M18 108.284C31.8333 108.284 31.8333 93.192 45.6667 93.192C59.5 93.192 59.5 64.156 73.3333 64.156C87.1667 64.156 87.1667 9.5 101 9.5C114.833 9.5 114.833 62.882 128.667 62.882C142.5 62.882 142.5 129.214 156.333 129.214C170.167 129.214 170.167 25.698 184 25.698C197.833 25.698 197.833 113.24 211.667 113.24C225.5 113.24 225.5 105.414 239.333 105.414"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        pathLength="100"
                        strokeDasharray="12 250"
                        opacity="0.1"
                        className="neon-path-0"
                    />
                    <path
                        d="M18 108.284C31.8333 108.284 31.8333 93.192 45.6667 93.192C59.5 93.192 59.5 64.156 73.3333 64.156C87.1667 64.156 87.1667 9.5 101 9.5C114.833 9.5 114.833 62.882 128.667 62.882C142.5 62.882 142.5 129.214 156.333 129.214C170.167 129.214 170.167 25.698 184 25.698C197.833 25.698 197.833 113.24 211.667 113.24C225.5 113.24 225.5 105.414 239.333 105.414"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        pathLength="100"
                        strokeDasharray="8 250"
                        opacity="0.3"
                        className="neon-path-1"
                    />
                    <path
                        d="M18 108.284C31.8333 108.284 31.8333 93.192 45.6667 93.192C59.5 93.192 59.5 64.156 73.3333 64.156C87.1667 64.156 87.1667 9.5 101 9.5C114.833 9.5 114.833 62.882 128.667 62.882C142.5 62.882 142.5 129.214 156.333 129.214C170.167 129.214 170.167 25.698 184 25.698C197.833 25.698 197.833 113.24 211.667 113.24C225.5 113.24 225.5 105.414 239.333 105.414"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        pathLength="100"
                        strokeDasharray="4 250"
                        opacity="0.6"
                        className="neon-path-2"
                    />
                    <path
                        d="M18 108.284C31.8333 108.284 31.8333 93.192 45.6667 93.192C59.5 93.192 59.5 64.156 73.3333 64.156C87.1667 64.156 87.1667 9.5 101 9.5C114.833 9.5 114.833 62.882 128.667 62.882C142.5 62.882 142.5 129.214 156.333 129.214C170.167 129.214 170.167 25.698 184 25.698C197.833 25.698 197.833 113.24 211.667 113.24C225.5 113.24 225.5 105.414 239.333 105.414"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        pathLength="100"
                        strokeDasharray="1.5 250"
                        opacity="1"
                        className="neon-path-3"
                    />
                </g>
            </g>
            <circle cx="18.0001" cy="108.284" r="3.5" fill="#8979FF" stroke="white" />
            <circle cx="45.6667" cy="93.1919" r="3.5" fill="#8979FF" stroke="white" />
            <circle cx="73.3334" cy="64.156" r="3.5" fill="#8979FF" stroke="white" />
            <circle cx="101" cy="9.5" r="3.5" fill="#8979FF" stroke="white" />
            <circle cx="128.667" cy="62.8821" r="3.5" fill="#8979FF" stroke="white" />
            <circle cx="156.333" cy="129.214" r="3.5" fill="#8979FF" stroke="white" />
            <circle cx="184" cy="25.698" r="3.5" fill="#8979FF" stroke="white" />
            <circle cx="211.667" cy="113.24" r="3.5" fill="#8979FF" stroke="white" />
            <circle cx="239.333" cy="105.414" r="3.5" fill="#8979FF" stroke="white" />
            {/* Legend */}
            <line x1="88.1667" y1="165.692" x2="98.1667" y2="165.692" stroke="#A5A7AC" strokeWidth="0.5" />
            <rect x="87.1667" y="163.942" width="4" height="4" rx="1" fill="#8979FF" />
            <rect x="97.1667" y="163.942" width="4" height="4" rx="1" fill="#8979FF" />
            <text x="106" y="170.5" fill="#A5A7AC" fontSize="7.5" fontFamily="var(--font-plus-jakarta), sans-serif">
                Index Poverty
            </text>
            <defs>
                <filter id="filter0_ddd_problems" x="0" y="0" width="257.333" height="156.714" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.537451 0 0 0 0 0.474902 0 0 0 0 1 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="4.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.537451 0 0 0 0 0.474902 0 0 0 0 1 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="9" />
                    <feGaussianBlur stdDeviation="9" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.537451 0 0 0 0 0.474902 0 0 0 0 1 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}

/* ---- Student profile stack ---- */
function StudentProfileStack() {
    const profiles = [
        { name: "Dena", school: "Fifth Grade", quote: "I want to become a doctor!", color: "from-pink-400 to-rose-400", offset: "translate-y-0", opacity: "opacity-60", scale: "scale-90" },
        { name: "Anung", school: "Fifth Grade", quote: "I want to become an engineer!", color: "from-amber-400 to-yellow-400", offset: "-translate-y-3", opacity: "opacity-75", scale: "scale-95" },
        { name: "Kamal", school: "Fourth Grade", quote: "I like Science", color: "from-emerald-400 to-teal-400", offset: "-translate-y-6", opacity: "opacity-100", scale: "scale-100" },
        { name: "Afnan", school: "Fourth Grade", quote: "I want to study Rocket!", color: "from-pink-400 to-rose-400", offset: "-translate-y-9", opacity: "opacity-60", scale: "scale-90" },
    ];

    const loopedProfiles = [...profiles, ...profiles];
    // animation-delay so each pill's scale peak aligns with it being at the container's center
    // computed for: pill-height≈64px, mb-4=16px → 80px/item, container h-72=288px, center=144px, duration=18s
    const PILL_DELAYS = ["2.7s", "7.2s", "-6.3s", "-1.8s"];

    return (
        <div
            className="relative w-full h-56 md:h-72 -my-6 ml-auto overflow-hidden"
            style={{
                marginRight: "-32px",
                maskImage: "linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
        >
            <div className="flex flex-col animate-student-marquee">
                {loopedProfiles.map((p, i) => (
                    <div key={i} className="w-full max-w-55 h-16 rounded-2xl bg-white border border-grey-100 px-4 py-3 mb-4 shadow-sm flex items-center gap-3 animate-pill-scale" style={{ animationDelay: PILL_DELAYS[i % 4] }}>
                        {/* Avatar */}
                        <div className={`w-10 h-10 rounded-full bg-linear-to-br ${p.color} shrink-0`} />
                        <div className="min-w-0 flex-1 flex flex-col justify-center items-center">
                            <p className="text-sm text-center font-bold text-grey-1200 truncate">
                                {p.name} <span className="text-xs text-grey-800">({p.school})</span>
                            </p>
                            <p
                                className="text-xs text-grey-800 text-center whitespace-normal wrap-break-word"
                                style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }}
                            >
                                &quot;{p.quote}&quot;
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
