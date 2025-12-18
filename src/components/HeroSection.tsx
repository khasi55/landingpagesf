"use client";

import { useEffect, useRef } from "react";
import SunRays from "./SunRays";
import { useLayeredLoading } from "@/hooks/useLayeredLoading";

export default function HeroSection() {
    const { layer2, layer3, layer4 } = useLayeredLoading();
    const videoRef = useRef<HTMLVideoElement>(null);

    // Layer 3: Load and play video when idle
    useEffect(() => {
        if (layer3 && videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay might be blocked, handled by user interaction if needed
            });
        }
    }, [layer3]);

    return (
        <section className="relative w-full h-full flex items-center justify-center bg-black">
            {/* Aspect Ratio Lock Container - Ensures Video, Logo & Dashboard scale together 1:1 */}
            <div className="relative w-full h-full flex items-center justify-center">

                {/* Layer 1: Background Color/Gradient (Immediate) */}
                <div className="absolute inset-0 bg-black" />

                {/* Layer 3: Video Background (Deferred) */}
                {/* 
                   Rules: preload="none", no autoplay on initial paint.
                   We trigger play() via effect when layer3 is true.
                */}
                <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    preload="none"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${layer3 ? "opacity-100" : "opacity-0"
                        }`}
                    style={{ pointerEvents: "none" }}
                >
                    <source src="/videos/light-beam-logo.webm" type="video/webm" />
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Layer 2: Glows and SunRays (Fade in 200-600ms) */}
                <div
                    className={`absolute inset-0 w-full h-full pointer-events-none z-10 mix-blend-screen overflow-hidden transition-opacity duration-700 ease-out ${layer2 ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Primary intensified glow - STRICTLY LEFT */}
                    <div className="absolute top-[-20%] left-[-30%] w-[70%] h-[120%] bg-[radial-gradient(circle_closest-side,rgba(0,85,255,0.6)_0%,rgba(0,31,99,0.3)_60%,transparent_100%)] blur-[80px]" />

                    {/* Sun Beams / Light Rays Effect */}
                    <SunRays />

                    {/* Secondary lighter glow - right side (Reduced) */}
                    <div className="absolute top-[10%] right-[-20%] w-[60%] h-[80%] bg-[radial-gradient(circle_closest-side,rgba(92,176,255,0.3)_0%,transparent_100%)] blur-3xl" />

                    {/* Extra core highlight for punchiness - aligned with text - INTENSIFIED - Restricted Width */}
                    <div className="absolute top-[15%] left-[-10%] w-[45%] h-[60%] bg-[radial-gradient(circle_closest-side,rgba(60,160,255,0.7)_0%,transparent_100%)] blur-[120px]" />

                    {/* Bottom Left Fill - preventing black void */}
                    <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-[radial-gradient(circle_closest-side,rgba(0,50,150,0.6)_0%,transparent_100%)] blur-[100px]" />
                </div>

                {/* Content Container - Left Aligned */}
                {/* Text should be visible immediately (Layer 1), but can have subtle motion in Layer 4 if desired. 
                    Requirement: "Page shell (layout, text...) must render immediately".
                    So we keep opacity-100 always, but maybe add slide-up for Layer 4?
                    Requirement: "Start animations... only after all visuals are visible."
                */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 md:px-0 md:pl-[9.375%] z-20 pointer-events-none">
                    <div
                        className={`flex flex-col items-start gap-6 max-w-[90%] md:max-w-[764px] pointer-events-auto mt-[-5%] 2xl:mt-[-10%] transition-transform duration-1000 ease-out ${layer4 ? "translate-y-0" : "translate-y-4"
                            }`}
                    >

                        {/* Status Badge */}
                        <div className="w-fit mb-2">
                            <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                                <div className="flex items-center gap-2">
                                    <span className={`flex h-2 w-2 rounded-full bg-blue-400 ${layer4 ? 'animate-pulse' : ''}`}></span>
                                    <span className="text-xs font-light tracking-wide text-white/90 font-sans">
                                        Trading Platform Update
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="flex flex-col font-sans leading-none tracking-[-0.05em] text-white">
                            <h1 className="text-[32px] md:text-[50px] lg:text-[72px] font-light">
                                Where a Trader
                            </h1>
                            <div className="flex flex-wrap items-baseline gap-2 md:gap-4">
                                <span className="text-[32px] md:text-[50px] lg:text-[72px] font-light">
                                    Becomes a
                                </span>
                                <span className="text-[32px] md:text-[50px] lg:text-[72px] font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] to-[#7496ff]">
                                    Shark!
                                </span>
                            </div>
                        </div>

                        {/* Subtext */}
                        <p className="font-sans font-extralight text-white/90 text-[14px] md:text-[18px] lg:text-[22px] leading-[1.35] tracking-[-0.04em] max-w-[800px]">
                            Learn to trade on our simulated trading platform, develop real skills, and get rewarded for your performance.
                        </p>

                        {/* Buttons CTA */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 md:mt-6">
                            {/* Get Started Button */}
                            <button className="relative group overflow-hidden rounded-full min-w-[140px] h-[48px] md:h-[60px] transition-transform hover:scale-105 active:scale-95">
                                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(92,176,255)] to-[rgb(0,31,99)] opacity-100" />
                                <div className="absolute inset-0 shadow-[inset_0px_4px_13.4px_0px_#79c3ff] rounded-full pointer-events-none" />
                                <span className="relative z-10 flex items-center justify-center w-full h-full text-[16px] md:text-[20px] font-normal text-white font-sans tracking-[-0.05em]">
                                    Get Started
                                </span>
                            </button>

                            {/* How it works Button */}
                            <button className="relative group overflow-hidden rounded-full min-w-[140px] h-[48px] md:h-[60px] border-2 border-[#295fa6] bg-transparent backdrop-blur-sm transition-all hover:bg-[#295fa6]/20 hover:border-[#4d8eff] active:scale-95">
                                <span className="relative z-10 flex items-center justify-center w-full h-full text-[16px] md:text-[20px] font-normal text-white font-sans tracking-[-0.05em]">
                                    How it works?
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dashboard Image */}
                {/* Layer 2: Visuals (Fade in) */}
                <div
                    className={`absolute z-10 transition-opacity duration-700 ease-out ${layer2 ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        left: "8.33%",
                        width: "83.33%",
                        top: "70%",
                        height: "auto"
                    }}
                >
                    <img
                        src="/assets/Frame 2147225728 (1).webp"
                        alt="Dashboard Preview"
                        className="w-full h-auto"
                        loading="lazy"
                        width="1200"
                        height="800"
                        decoding="async"
                    />
                </div>
            </div>
        </section >
    );
}
