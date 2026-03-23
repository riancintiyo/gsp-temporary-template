"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import "@/styles/default-dev-placeholder.css";

type TemporaryPlaceholderProps = {
    title?: string;
    description?: string;
    contactEmail?: string;
    ctaUrl?: string;
    ctaText?: string;
    logoSrc?: string;
};

const TOTAL_PILLS = 35;

function buildPills(filled: number) {
    return Array.from({ length: TOTAL_PILLS }, (_, index) => index < filled);
}

export default function TemporaryPlaceholder({
    title = "General Science Program",
    description = "We're in the middle of cooking a fresh update — new STEM & STEAM projects and hands-on experiments. Come back soon to taste what we've been making!🍥",
    contactEmail = "riancintiyo@generalscienceprogram.com",
    ctaUrl = "https://riancintiyo.com",
    ctaText = "Freshly baked: progress is up 6% this week — see what's cooking at riancintiyo.com",
    logoSrc = "/icon/32.png",
}: TemporaryPlaceholderProps) {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sceneRef = useRef<HTMLDivElement>(null);
    const dinoRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const performingPills = useMemo(() => buildPills(31), []);
    const targetPills = useMemo(() => buildPills(23), []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const targetNode = event.target as Node;
            const isInsideMenu = menuRef.current?.contains(targetNode);
            const isButton = menuButtonRef.current?.contains(targetNode);

            if (!isInsideMenu && !isButton) {
                setIsMenuOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    useEffect(() => {
        const sceneEl = sceneRef.current;
        const dinoEl = dinoRef.current;

        if (!sceneEl || !dinoEl) {
            return;
        }

        const scene = sceneEl;
        const dino = dinoEl;

        const activateTimer = window.setTimeout(() => {
            scene.classList.add("active");
        }, 1500);

        const OBSTACLE_CROSS_TIME = 4000;
        const JUMP_LEAD = 350;
        const DUCK_LEAD = 400;

        function getHitTime() {
            const sceneRect = scene.getBoundingClientRect();
            const dinoRect = dino.getBoundingClientRect();
            const dinoCenterX = dinoRect.left + dinoRect.width / 2;
            const totalVisualDistance = sceneRect.width + 120;
            const distanceToDino = sceneRect.right - dinoCenterX + 60;
            return (distanceToDino / totalVisualDistance) * OBSTACLE_CROSS_TIME;
        }

        function spawnObstacle(className: string) {
            const obstacle = document.createElement("div");
            obstacle.className = `dinoSprite ${className}`;
            obstacle.style.animationDelay = "0s";
            scene.appendChild(obstacle);
            void obstacle.offsetWidth;

            obstacle.addEventListener("animationend", (event) => {
                if (event.animationName.includes("obstaclePass")) {
                    obstacle.remove();
                }
            });
        }

        function runCycle() {
            const hitTime = getHitTime();
            spawnObstacle("dinoCactusLg");

            const jumpTimeout = window.setTimeout(
                () => {
                    dino.classList.add("jump");
                    window.setTimeout(() => dino.classList.remove("jump"), 550);
                },
                Math.max(0, hitTime - JUMP_LEAD),
            );

            const pteroSpawnTimeout = window.setTimeout(() => {
                spawnObstacle("dinoPtero");
            }, 5500);

            const duckTimeout = window.setTimeout(
                () => {
                    dino.classList.add("duck");
                    window.setTimeout(() => dino.classList.remove("duck"), 600);
                },
                Math.max(0, 5500 + hitTime - DUCK_LEAD),
            );

            return [jumpTimeout, pteroSpawnTimeout, duckTimeout];
        }

        const cycleTimeouts: number[] = [];
        const initialStartTimer = window.setTimeout(() => {
            cycleTimeouts.push(...runCycle());
        }, 1600);

        const cycleInterval = window.setInterval(() => {
            cycleTimeouts.push(...runCycle());
        }, 11000);

        return () => {
            window.clearTimeout(activateTimer);
            window.clearTimeout(initialStartTimer);
            window.clearInterval(cycleInterval);
            cycleTimeouts.forEach((timerId) => window.clearTimeout(timerId));
        };
    }, []);

    return (
        <main className={`devPlaceholderContainer ${isLightTheme ? "lightTheme" : ""}`}>
            <div className="dinoScene" ref={sceneRef}>
                <div className="dinoGroundWrap">
                    <div className="dinoGround" />
                </div>
                <div className="dinoSprite dinoRunner" ref={dinoRef} />
                <div className="dinoSprite dinoCloud" style={{ top: "18%", animationDelay: "0s" }} />
                <div className="dinoSprite dinoCloud" style={{ top: "12%", animationDelay: "8s" }} />
                <div className="dinoSprite dinoCloud" style={{ top: "25%", animationDelay: "15s" }} />
            </div>

            <div className="card">
                <div className="cardTopbar">
                    <button className="navBtn" type="button" aria-label="Toggle theme" onClick={() => setIsLightTheme((prev) => !prev)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isLightTheme ? (
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            ) : (
                                <>
                                    <circle cx="12" cy="12" r="5" />
                                    <line x1="12" y1="1" x2="12" y2="3" />
                                    <line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" />
                                    <line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </>
                            )}
                        </svg>
                    </button>

                    <div className="menuWrapper">
                        <button ref={menuButtonRef} className="navBtn" aria-label="Menu" type="button" onClick={() => setIsMenuOpen((prev) => !prev)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="5" cy="12" r="1" />
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="19" cy="12" r="1" />
                            </svg>
                        </button>

                        <div className={`popupMenu ${isMenuOpen ? "show" : ""}`} ref={menuRef}>
                            <a href={`mailto:${contactEmail}`} className="popupItem">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>Contact Developer</span>
                            </a>
                        </div>
                    </div>
                </div>

                <header className="header">
                    <div className="headerContent">
                        <div className="iconBox">
                            <div className="iconInner">
                                <Image src={logoSrc} alt="GSP logo" width={24} height={24} priority={false} />
                            </div>
                        </div>

                        <div className="textGroup">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </header>

                <section className="progressSection">
                    <div className="statsRow">
                        <span className="label">Performing Progress</span>
                        <div className="statsRight">
                            <span className="percentageChange green">↑ 10.2%</span>
                            <span className="totalValue">89%</span>
                        </div>
                    </div>

                    <div className="pillBar">
                        {performingPills.map((filled, index) => (
                            <div key={`performing-${index}`} className={`pill ${filled ? "filledGreen" : ""}`} />
                        ))}
                    </div>
                </section>

                <section className="progressSection">
                    <div className="statsRow">
                        <span className="label">Total Target Project</span>
                        <div className="statsRight">
                            <span className="percentageChange green">↑ 2.2%</span>
                            <span className="totalValue">67%</span>
                        </div>
                    </div>

                    <div className="pillBar">
                        {targetPills.map((filled, index) => (
                            <div key={`target-${index}`} className={`pill ${filled ? "filledBlue" : ""}`} />
                        ))}
                    </div>
                </section>

                <a className="footerAlert footerCta" href={ctaUrl} target="_blank" rel="noopener noreferrer">
                    <p>{ctaText}</p>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </a>

                <Link className="backHomeLink" href="/">
                    <span>Back to Home</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                </Link>
            </div>
        </main>
    );
}
