"use client";

import { motion } from "framer-motion";

export default function CareersHero() {
    return (
        <section className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
            {/* Background Effect Image */}
            <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ mixBlendMode: 'screen' }}
            >
                <img
                    src="/assets/reviews-hero-bg.png"
                    alt=""
                    className="absolute w-[108%] h-[112%] object-cover"
                    style={{
                        left: '-4%',
                        top: '-10%',
                        maxWidth: 'none',
                        transform: 'scaleY(-1)'
                    }}
                />
            </div>

            {/* Background Effect - Ellipse Gradient */}
            <div className="absolute left-[-30%] top-[-50%] w-[80vw] h-[80vw] max-w-[1400px] max-h-[1400px] rounded-full bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-transparent blur-[100px] pointer-events-none" />

            {/* Rays Effect */}
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ mixBlendMode: 'screen' }}
            >
                <img
                    src="/assets/reviews-rays.webp"
                    alt=""
                    className="absolute"
                    style={{
                        width: '120%',
                        height: '140%',
                        left: '-10%',
                        top: '10%',
                        maxWidth: 'none',
                        transform: 'scaleY(-1)'
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-[1200px] px-6 text-center mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
                        <span className="text-sm font-medium text-white/80">We are Hiring</span>
                    </div>

                    <h1 className="font-[family-name:var(--font-sora)] font-semibold text-white text-[40px] md:text-[64px] lg:text-[82px] leading-[1.12] tracking-[-0.05em] mb-8">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#0047FF]">Revolution</span> <br />
                        in Prop Trading
                    </h1>

                    <p className="font-[family-name:var(--font-sora)] font-extralight text-white text-[14px] md:text-[16px] lg:text-[18px] leading-[1.35] tracking-[-0.04em] text-center max-w-[900px] mx-auto">
                        We're building the future of simulated trading. If you're passionate, ambitious, and ready to make an impact, we want you on our team.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
