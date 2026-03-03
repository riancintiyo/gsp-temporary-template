/**
 * Bento-style grid for the hero section right panel.
 * Contains decorative cards with geometric patterns and placeholder images.
 */

/* ---- Geometric pattern cards ---- */

function PatternCard1() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-[#95D2B3] h-full min-h-[160px]">
            {/* Concentric rounded rectangles pattern */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
                <rect x="40" y="30" width="120" height="140" rx="16" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
                <rect x="55" y="45" width="90" height="110" rx="12" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
                <rect x="70" y="60" width="60" height="80" rx="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
                <rect x="85" y="75" width="30" height="50" rx="6" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
            </svg>
        </div>
    );
}

function PatternCard2() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-[#638FF5] h-full min-h-[160px]">
            {/* Concentric arch/door pattern */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
                <path d="M40 200 V100 Q40 40 100 40 Q160 40 160 100 V200" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />
                <path d="M55 200 V105 Q55 55 100 55 Q145 55 145 105 V200" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
                <path d="M70 200 V110 Q70 70 100 70 Q130 70 130 110 V200" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
                <path d="M85 200 V115 Q85 85 100 85 Q115 85 115 115 V200" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
            </svg>
        </div>
    );
}

function PatternCard3() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-[#95D2B3]/60 h-full min-h-[160px]">
            {/* Wavy lines pattern */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <path key={i} d={`M0 ${60 + i * 18} Q50 ${45 + i * 18} 100 ${60 + i * 18} Q150 ${75 + i * 18} 200 ${60 + i * 18}`} stroke="white" strokeWidth="1.5" strokeOpacity={0.5 - i * 0.05} fill="none" />
                ))}
            </svg>
        </div>
    );
}

function DarkCard() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-[var(--palette-grey-1200)] h-full min-h-[160px] p-6 flex items-center justify-center">
            {/* Design thinking diagram */}
            <svg className="w-full h-full" viewBox="0 0 400 160" fill="none">
                {/* Central scribble */}
                <circle cx="130" cy="80" r="30" stroke="white" strokeWidth="1" strokeOpacity="0.4" fill="none" />
                <ellipse cx="130" cy="80" rx="25" ry="20" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" fill="none" transform="rotate(30 130 80)" />
                <ellipse cx="130" cy="80" rx="20" ry="28" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" fill="none" transform="rotate(-20 130 80)" />

                {/* Labels */}
                <text x="60" y="25" fill="white" fontSize="9" fontFamily="var(--font-plus-jakarta)" opacity="0.7">
                    Problems
                </text>
                <text x="120" y="25" fill="white" fontSize="9" fontFamily="var(--font-plus-jakarta)" opacity="0.7">
                    Understand
                </text>
                <text x="190" y="80" fill="white" fontSize="9" fontFamily="var(--font-plus-jakarta)" opacity="0.7">
                    Define
                </text>
                <text x="185" y="93" fill="white" fontSize="8" fontFamily="var(--font-plus-jakarta)" opacity="0.5">
                    Point of View
                </text>
                <text x="270" y="30" fill="white" fontSize="9" fontFamily="var(--font-plus-jakarta)" opacity="0.7">
                    Develop
                </text>
                <text x="275" y="43" fill="white" fontSize="8" fontFamily="var(--font-plus-jakarta)" opacity="0.5">
                    Idea
                </text>
                <text x="310" y="80" fill="white" fontSize="9" fontFamily="var(--font-plus-jakarta)" opacity="0.7">
                    Build
                </text>
                <text x="340" y="30" fill="white" fontSize="9" fontFamily="var(--font-plus-jakarta)" opacity="0.7">
                    Test
                </text>

                {/* Connection dots */}
                {[
                    [75, 35],
                    [140, 35],
                    [200, 70],
                    [285, 50],
                    [320, 70],
                    [355, 35],
                ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="3" fill="#638FF5" />
                ))}

                {/* Connection lines */}
                <line x1="78" y1="35" x2="137" y2="35" stroke="#638FF5" strokeWidth="0.8" strokeOpacity="0.5" />
                <line x1="143" y1="35" x2="197" y2="70" stroke="#638FF5" strokeWidth="0.8" strokeOpacity="0.5" />
                <line x1="203" y1="70" x2="282" y2="50" stroke="#638FF5" strokeWidth="0.8" strokeOpacity="0.5" />
                <line x1="288" y1="50" x2="317" y2="70" stroke="#638FF5" strokeWidth="0.8" strokeOpacity="0.5" />
                <line x1="323" y1="70" x2="352" y2="35" stroke="#638FF5" strokeWidth="0.8" strokeOpacity="0.5" />
            </svg>
        </div>
    );
}

function PhotoPlaceholder({ label }: { label: string }) {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#95D2B3]/30 to-[#638FF5]/30 h-full min-h-[160px] flex items-center justify-center">
            <span className="text-xs font-medium text-[var(--palette-grey-800)] opacity-60">{label}</span>
        </div>
    );
}

function PentagonCard() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-[#D6C7FF]/40 h-full min-h-[160px]">
            {/* Pentagon/star geometric pattern */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
                {[0, 1, 2].map((i) => {
                    const s = 40 - i * 10;
                    const cx = 100;
                    const cy = 100;
                    return (
                        <polygon
                            key={i}
                            points={Array.from({ length: 5 }, (_, j) => {
                                const angle = (j * 72 - 90) * (Math.PI / 180);
                                return `${cx + s * Math.cos(angle)},${cy + s * Math.sin(angle)}`;
                            }).join(" ")}
                            stroke="white"
                            strokeWidth="1.5"
                            strokeOpacity={0.6 - i * 0.15}
                            fill="none"
                        />
                    );
                })}
            </svg>
        </div>
    );
}

function CrossCard() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-[#95D2B3]/50 h-full min-h-[160px]">
            {/* Four-leaf / cross pattern */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="70" r="25" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
                <circle cx="100" cy="130" r="25" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
                <circle cx="70" cy="100" r="25" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
                <circle cx="130" cy="100" r="25" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
                <circle cx="100" cy="100" r="8" fill="white" fillOpacity="0.3" />
            </svg>
        </div>
    );
}

export function HeroBentoGrid() {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full h-full">
            {/* Row 1 */}
            <PatternCard3 />
            <PatternCard2 />
            <PhotoPlaceholder label="Photo 1" />

            {/* Row 2 — dark card spans full width */}
            <div className="col-span-3">
                <DarkCard />
            </div>

            {/* Row 3 */}
            <PhotoPlaceholder label="Photo 2" />
            <CrossCard />
            <PentagonCard />
        </div>
    );
}
