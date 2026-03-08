import Image from "next/image";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const mapPins = [
    {
        id: "sd-1",
        label: "SD 1 Kalidadap",
        positionClasses: "left-[10%] top-[28%] md:left-[25%] md:top-[38%]",
        title: "GSP in SD 1 Kalidadap",
        description: (
            <>
                SD N 1 Kalidadap only had roughly around <b>27</b> male and <b>23</b> female students. Mostly they were not continuing their study up to Senior High School levels.
            </>
        ),
    },
    {
        id: "sd-2",
        label: "SD 2 Kalidadap",
        positionClasses: "left-[45%] top-[40%] md:left-[58%] md:top-[47%]",
        title: "GSP in SD 2 Kalidadap",
        description: <>You&apos;re currently working solo on a draft. Move this to your projects so your team can edit the file, organize it, and more. You&apos;re currently working solo on a draft. Move this to your projects so your team can edit the file, organize it, and more.</>,
    },
];

function BlueGridPattern() {
    return (
        <svg className="absolute top-0 left-0 w-full h-full mix-blend-screen opacity-50" viewBox="0 0 800 745" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin slice">
            <g opacity="0.5">
                <mask id="dark-truth-mask" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="-871" y="-234" width="1957" height="1440">
                    <path d="M-2.94153 307.781C-2.94153 455.04 94.4233 574.418 214.529 574.418C334.634 574.418 1085.04 57.9208 1085.04 -89.3391C1085.04 -236.599 6.85303 -33.8684 -113.253 -33.8684C-233.358 -33.8684 -2.94153 160.521 -2.94153 307.781Z" fill="url(#dt-mask-linear)" />
                    <path d="M-87.4065 938.806C-87.4065 1086.07 9.95831 1205.44 130.064 1205.44C250.169 1205.44 919.261 1171.12 919.261 1023.86C919.261 876.598 869.802 527.774 749.697 527.774C629.591 527.774 -87.4065 791.546 -87.4065 938.806Z" fill="url(#dt-mask-radial)" />
                    <path
                        d="M-334.102 308.185C-658.168 600.873 -508.469 453.785 -786.813 446.375C-830.478 454.786 -904.605 455.186 -851.792 389.495C-785.776 307.38 -807.052 249.382 -724.55 159.918C-642.048 70.454 -591.804 -20.4398 -467.248 -162.73C-342.692 -305.02 -333.11 -187.726 -192.69 -198.845C-52.2692 -209.964 -116.315 -192.307 77.429 14.1502C271.173 220.607 -10.0362 15.4961 -334.102 308.185Z"
                        fill="#D9D9D9"
                    />
                    <path
                        d="M-28.1557 768.567C405.524 819.625 196.248 803.866 374.007 1018.18C409.096 1045.5 458.221 1101.01 374.007 1104.54C268.739 1108.95 239.112 1163.16 117.455 1160.01C-4.20245 1156.86 -105.689 1178.92 -294.793 1178.92C-483.898 1178.92 -401.953 1094.46 -502.808 996.122C-603.664 897.788 -548.194 934.348 -520.458 652.582C-492.723 370.816 -461.836 717.508 -28.1557 768.567Z"
                        fill="#D9D9D9"
                    />
                </mask>
                <g mask="url(#dark-truth-mask)">
                    <line y1="-0.630349" x2="1511.58" y2="-0.630349" transform="matrix(-1 0 0 1 748.019 685.38)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1511.58" y2="-0.630349" transform="matrix(-1 0 0 1 748.019 362.642)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1511.58" y2="-0.630349" transform="matrix(-1 0 0 1 748.019 39.9017)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1511.58" y2="-0.630349" transform="matrix(-1 0 0 1 748.019 524.01)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1511.58" y2="-0.630349" transform="matrix(-1 0 0 1 748.019 201.272)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1511.58" y2="-0.630349" transform="matrix(-1 0 0 1 748.019 604.695)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1511.58" y2="-0.630349" transform="matrix(-1 0 0 1 748.019 281.957)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1511.58" y2="-0.630349" transform="matrix(-1 0 0 1 748.019 443.325)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1511.58" y2="-0.630349" transform="matrix(-1 0 0 1 748.019 120.587)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1167.41" y2="-0.630349" transform="matrix(4.37114e-08 1 1 -4.37114e-08 701.374 10.9072)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1167.41" y2="-0.630349" transform="matrix(4.37114e-08 1 1 -4.37114e-08 55.8932 10.9072)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1167.41" y2="-0.630349" transform="matrix(4.37114e-08 1 1 -4.37114e-08 378.634 10.9071)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1167.41" y2="-0.630349" transform="matrix(4.37114e-08 1 1 -4.37114e-08 540.004 10.9072)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1167.41" y2="-0.630349" transform="matrix(4.37114e-08 1 1 -4.37114e-08 217.264 10.9072)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1167.41" y2="-0.630349" transform="matrix(4.37114e-08 1 1 -4.37114e-08 620.687 10.9072)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1167.41" y2="-0.630349" transform="matrix(4.37114e-08 1 1 -4.37114e-08 297.951 10.9072)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1167.41" y2="-0.630349" transform="matrix(4.37114e-08 1 1 -4.37114e-08 459.317 10.9072)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <line y1="-0.630349" x2="1167.41" y2="-0.630349" transform="matrix(4.37114e-08 1 1 -4.37114e-08 136.581 10.9072)" stroke="white" strokeOpacity="0.09" strokeWidth="1.2607" />
                    <g opacity="0.7">
                        <rect width="80.2262" height="79.0801" transform="matrix(-1 0 0 1 242.169 179.061)" fill="#1E4FC0" fillOpacity="0.31" />
                        <rect width="80.2262" height="79.0801" transform="matrix(-1 0 0 1 323.542 259.287)" fill="#1E4FC0" fillOpacity="0.31" />
                        <rect width="80.2262" height="79.0801" transform="matrix(-1 0 0 1 323.542 179.061)" fill="#1E4FC0" fillOpacity="0.31" />
                        <rect width="80.2262" height="80.2262" transform="matrix(-1 0 0 1 564.22 742.937)" fill="#1E4FC0" fillOpacity="0.25" />
                        <rect width="81.3723" height="82.5184" transform="matrix(-1 0 0 1 564.22 176.769)" fill="#1E4FC0" fillOpacity="0.24" />
                        <rect width="81.3723" height="80.2262" transform="matrix(-1 0 0 1 645.593 96.5426)" fill="#1E4FC0" fillOpacity="0.24" />
                        <rect width="81.3723" height="80.2262" transform="matrix(-1 0 0 1 725.819 97.6887)" fill="#1E4FC0" fillOpacity="0.24" />
                        <rect width="81.3723" height="82.5184" transform="matrix(-1 0 0 1 645.593 176.769)" fill="#1E4FC0" fillOpacity="0.24" />
                        <rect width="81.3723" height="80.2262" transform="matrix(-1 0 0 1 322.396 16.3165)" fill="#1E4FC0" />
                        <rect width="80.2262" height="81.3723" transform="matrix(-1 0 0 1 564.22 338.367)" fill="#1E4FC0" fillOpacity="0.24" />
                    </g>
                </g>
            </g>
            <defs>
                <linearGradient id="dt-mask-linear" x1="565.633" y1="-15.5882" x2="111.152" y2="226.466" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="dt-mask-radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600.304 945.065) rotate(-150.607) scale(777.019 1335.47)">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );
}

function StarIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M44.5561 20.5562C43.3369 20.5562 34.6417 21.1872 28.5027 22.139C33.5187 18.4706 40.107 12.7594 40.9733 11.9037C42.3209 10.5561 42.3209 8.37433 40.9733 7.02674C39.6257 5.67915 37.4439 5.67915 36.0963 7.02674C35.2406 7.88235 29.5294 14.4813 25.861 19.4973C26.8128 13.3583 27.4438 4.6631 27.4438 3.44385C27.4438 1.54011 25.9037 0 24 0C22.0963 0 20.5562 1.54011 20.5562 3.44385C20.5562 4.6631 21.1872 13.3583 22.139 19.4973C18.4706 14.4813 12.7594 7.89305 11.9037 7.02674C10.5562 5.67915 8.37433 5.67915 7.02674 7.02674C5.67914 8.37433 5.67914 10.5561 7.02674 11.9037C7.88235 12.7594 14.4813 18.4706 19.4973 22.139C13.3583 21.1872 4.6631 20.5562 3.44385 20.5562C1.54011 20.5562 0 22.0963 0 24C0 25.9037 1.54011 27.4439 3.44385 27.4439C4.6631 27.4439 13.3583 26.8128 19.4973 25.861C14.4813 29.5294 7.89305 35.2406 7.02674 36.0963C5.67914 37.4439 5.67914 39.6257 7.02674 40.9733C8.37433 42.3209 10.5562 42.3209 11.9037 40.9733C12.7594 40.1176 18.4706 33.5187 22.139 28.5027C21.1872 34.6417 20.5562 43.3369 20.5562 44.5562C20.5562 46.4599 22.0963 48 24 48C25.9037 48 27.4438 46.4599 27.4438 44.5562C27.4438 43.3369 26.8128 34.6417 25.861 28.5027C29.5294 33.5187 35.2406 40.107 36.0963 40.9733C37.4439 42.3209 39.6257 42.3209 40.9733 40.9733C42.3209 39.6257 42.3209 37.4439 40.9733 36.0963C40.1176 35.2406 33.5187 29.5294 28.5027 25.861C34.6417 26.8128 43.3369 27.4439 44.5561 27.4439C46.4599 27.4439 48 25.9037 48 24C48 22.0963 46.4599 20.5562 44.5561 20.5562Z"
                fill="#CFF608"
            />
        </svg>
    );
}

function GspBadge() {
    return (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 md:top-24 md:left-27.5 xl:left-47.5 md:translate-x-8 min-w-50 inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 border border-white/10 z-20">
            <Image src="/icon/32.png" alt="Info icon" width={24} height={24} className="w-6 h-6 opacity-70" />
            <span className="text-xs text-nowrap md:text-sm font-medium text-white tracking-wide">GSP Schools Location</span>
        </div>
    );
}

function RouteLine() {
    return (
        <svg className="absolute left-[37%] top-[40%] md:left-[45%] md:top-[45%] z-10 w-[150px] md:w-[202px] overflow-visible" viewBox="0 0 202 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.0031 49.2017C15.9378 55.3562 29.1262 67.9291 34.4015 68.9842C40.9957 70.303 49.5681 69.6436 52.2058 70.303C54.8434 70.9624 62.7564 75.5783 65.3941 78.216C68.0318 80.8537 78.5824 99.9768 81.8795 101.296C85.1766 102.614 116.829 105.912 119.466 107.89C122.104 109.868 133.973 115.803 137.271 115.803C140.568 115.803 172.879 121.078 176.176 118.44C179.473 115.803 189.365 107.23 193.98 109.209"
                stroke="url(#paint0_linear_111_234)"
                strokeWidth="5"
                strokeLinecap="round"
            />
            <path d="M194.124 70.4484L194.478 110.758" stroke="#4D7BFF" strokeDasharray="2 2" />
            <ellipse style={{ transformOrigin: "194.638px 69.6436px", animationDuration: "2s" }} className="animate-ping" opacity="0.4" cx="194.638" cy="69.6436" rx="6" ry="6" fill="#638FF5" />
            <ellipse opacity="0.1" cx="194.638" cy="69.6436" rx="7.25359" ry="7.25359" fill="#638FF5" />
            <ellipse opacity="0.2" cx="194.639" cy="69.6436" rx="4.61592" ry="4.61592" fill="#638FF5" />
            <path d="M199.255 108.549C199.255 111.463 196.893 113.824 193.979 113.824C191.066 113.824 188.704 111.463 188.704 108.549C188.704 105.636 191.066 103.274 193.979 103.274C196.893 103.274 199.255 105.636 199.255 108.549Z" fill="#638FF5" />
            <path d="M196.758 69.279C196.675 70.7334 195.429 71.8455 193.975 71.7629C192.52 71.6804 191.408 70.4344 191.491 68.98C191.573 67.5256 192.819 66.4135 194.274 66.4961C195.728 66.5787 196.84 67.8246 196.758 69.279Z" fill="#638FF5" />
            <path d="M8.7179 8.47485L7.94591 48.7783" stroke="#4D7BFF" strokeDasharray="2 2" />
            <ellipse style={{ transformOrigin: "8.68389px 7.65837px", animationDuration: "2s", animationDelay: "1s" }} className="animate-ping" opacity="0.4" cx="8.68389" cy="7.65837" rx="6" ry="6" fill="#638FF5" />
            <ellipse opacity="0.1" cx="8.68389" cy="7.65837" rx="7.25359" ry="7.25359" fill="#638FF5" />
            <ellipse opacity="0.2" cx="8.68367" cy="7.65828" rx="4.61592" ry="4.61592" fill="#638FF5" />
            <path d="M12.7824 46.704C12.7011 49.6163 10.2742 51.9113 7.36187 51.83C4.44952 51.7487 2.15451 49.3219 2.23582 46.4095C2.31714 43.4972 4.74399 41.2021 7.65634 41.2835C10.5687 41.3648 12.8637 43.7916 12.7824 46.704Z" fill="#638FF5" />
            <path d="M11.3826 7.37946C11.2595 8.83098 9.98295 9.90786 8.53142 9.78472C7.07989 9.66158 6.00302 8.38505 6.12616 6.93353C6.2493 5.482 7.52582 4.40512 8.97735 4.52826C10.4289 4.6514 11.5058 5.92793 11.3826 7.37946Z" fill="#638FF5" />
            <defs>
                <linearGradient id="paint0_linear_111_234" x1="28.4667" y1="49.2016" x2="182.77" y2="119.1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#638FF5" />
                    <stop offset="0.163462" stopColor="#8AABF7" stopOpacity="0.775" />
                    <stop offset="0.490385" stopColor="#B1C7FA" stopOpacity="0.55" />
                    <stop offset="0.788462" stopColor="#D8E3FD" stopOpacity="0.325" />
                    <stop offset="1" stopColor="#80A6FF" stopOpacity="0.9" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function BgSvgMap() {
    return (
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 md:top-40 md:-bottom-20 z-0">
            <div className="relative w-full h-full">
                <Image src="/img/gradient-blob.webp" alt="Section glow" fill priority className="object-cover" />
            </div>
        </div>
    );
}

export function DarkTruthSection() {
    return (
        <section className="relative w-full py-16 lg:py-32 bg-white overflow-hidden font-sans">
            {/* Glowing Map background effect behind the container */}
            <BgSvgMap />

            <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-[var(--page-margin)]">
                {/* Main rounded container */}
                <div className="relative w-full rounded-[18px] overflow-hidden flex flex-col-reverse md:flex-col md:flex-row bg-[#111215] border border-gray-300 shadow-webflow-dropshadow">
                    {/* Left Column: Text Content */}
                    <div className="relative flex-1 p-8 md:p-12 lg:p-20 flex flex-col justify-center max-w-[700px] z-10">
                        {/* Grid on the left background */}
                        <BlueGridPattern />

                        <div className="relative z-10">
                            {/* Headline */}
                            <h2 className="flex items-center gap-4 text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-8">
                                <StarIcon />
                                The Dark Truth
                            </h2>

                            {/* Paragraphs */}
                            <div className="space-y-6 text-[#A0AAB4] text-base md:text-[17px] leading-relaxed">
                                <p>
                                    Wonosobo might be famous for its stunning natural gem, Dieng Plateau—where tourists go to enjoy cool weather, ancient temples, and misty mountains—but not many people realize <span className="font-semibold text-white">Dieng</span> is actually part of{" "}
                                    <span className="font-semibold text-white">Wonosobo</span>. While the scenery draws praise and visitors, few know that behind all the beauty, Wonosobo is facing serious education challenges that have quietly held back its young generation for years.
                                </p>
                                <p>
                                    The numbers are worrying: most students in Wonosobo only finish up to middle school, and only a tiny percentage ever reach college. Limited access to quality education means many kids miss out on learning the skills that could open doors to better
                                    futures—especially in <span className="font-semibold text-white">STEAM</span> (Science, Technology, Engineering, Arts, and Math) fields. Coupled with early school dropouts and youth marriages, particularly among girls, the cycle of poverty and low-skilled
                                    employment persists.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Map Image */}
                    <div className="relative flex-1 min-h-[400px] md:min-h-[600px] w-full bg-[#E8EAEF] overflow-hidden group">
                        {/* Gradient mask to blend map with black bg */}
                        <div className="absolute top-0 left-0 w-[10%] h-full bg-linear-to-r from-[#3e3f41] to-transparent z-10 opacity-45 hidden md:block" />

                        {/* Map Image */}
                        <div className="absolute inset-0 w-full h-[120%] -top-[21%] object-cover opacity-60">
                            {/* Using next image with some scale to match design perspective */}
                            <Image src="/img/kalidadap-map.webp" alt="Kalidadap Map" fill className="object-cover scale-110 origin-center" priority />
                        </div>

                        {/* White faded overlay on map to match design */}
                        <div className="absolute inset-0 bg-white/40 mix-blend-overlay z-[5]" />

                        <GspBadge />

                        {/* Map Pins and Route */}
                        <div className="absolute inset-0 z-20">
                            {/* Route SVG connecting pins */}
                            <RouteLine />

                            {mapPins.map((pin) => (
                                <TooltipProvider key={pin.id} delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button className={`absolute ${pin.positionClasses} bg-white border border-gray-200 rounded-md py-2 px-4 text-xs md:text-sm font-medium text-gray-800 shadow-webflow-dropshadow flex items-center gap-1.5 transition-transform hover:scale-105 z-30 group/pin`}>
                                                {pin.label}
                                                <Info className="w-4 h-4" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent side="bottom" align="start" className="max-w-[300px] p-4 text-sm rounded-sm bg-white border border-gray-100 shadow-xl [&>svg]:fill-white [&>svg]:!bg-transparent">
                                            <p className="font-semibold text-black/80 mb-1 font-sans">{pin.title}</p>
                                            <p className="text-black/80 leading-relaxed font-sans">{pin.description}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
