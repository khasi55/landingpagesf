import React from "react";

export default function RewardsSectionTwo() {
    return (
        <section className="w-full flex flex-col items-center justify-center text-center px-4 relative z-20">
            {/* 
        Node 174:88 - "Flexible & Secure Payout Options"
        Style: Sora Regular, 75px, -3.75px tracking
      */}
            <h2
                className="font-normal text-white leading-[1.118]"
                style={{
                    fontFamily: 'var(--font-sora), sans-serif',
                    fontSize: 'clamp(32px, 5vw, 75px)',
                    letterSpacing: 'clamp(-1.5px, -0.05em, -3.75px)'
                }}
            >
                Flexible & Secure Payout Options
            </h2>

            <p className="font-extralight text-white/80 mt-6 max-w-[1131px]"
                style={{
                    fontFamily: 'var(--font-sora), sans-serif',
                    fontSize: 'clamp(14px, 2vw, 28px)',
                    lineHeight: '1.35',
                    letterSpacing: 'clamp(-0.5px, -0.04em, -1.13px)'
                }}
            >
                {/* Placeholder description */}
                Explore our diverse and secure payout methods designed for your convenience.
            </p>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full max-w-[1240px]">

                {/* Card 1: Payout with Wise */}
                <div className="relative group rounded-[32px] p-[1px] bg-gradient-to-b from-blue-500/50 to-transparent overflow-visible h-[420px]">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative rounded-[31px] bg-[#0A0B1E] h-full overflow-hidden flex flex-col justify-end p-0">
                        <img
                            src="/assets/wisecard_full.webp"
                            alt="Payout with Wise"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                {/* Card 2: Payout with Crypto */}
                <div className="relative group rounded-[32px] p-[1px] bg-gradient-to-b from-blue-500/50 to-transparent overflow-visible h-[420px]">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative rounded-[31px] bg-[#0A0B1E] h-full overflow-hidden flex flex-col justify-end p-0">
                        <img
                            src="/assets/cryptocard_full.webp"
                            alt="Payout with Crypto"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                {/* Card 3: Bi-Weekly Rewards (Full Width) */}
                <div className="md:col-span-2 relative group rounded-[32px] p-[1px] bg-gradient-to-b from-blue-500/50 to-transparent overflow-hidden h-[200px]">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative rounded-[31px] bg-[#0A0B1E] h-full p-12 flex flex-col md:flex-row items-center justify-between text-left gap-8 overflow-hidden z-10">

                        {/* Decorative Grid & Number (Background) */}
                        <div className="absolute top-0 right-0 w-[40%] h-full mix-blend-plus-lighter z-0">
                            <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                                    backgroundSize: '60px 60px',
                                    maskImage: 'linear-gradient(to left, black 60%, transparent 100%)'
                                }}>
                            </div>
                            <div className="absolute top-[-20px] right-10 text-white/5 font-mono text-[160px] font-bold leading-none select-none tracking-tighter">
                                03
                            </div>
                        </div>

                        {/* Left Side */}
                        <div className="flex items-center gap-8 relative z-10">
                            {/* Icon Placeholder */}
                            <div className="w-20 h-20 rounded-full bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center border border-white/10">
                                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl text-white font-[family-name:var(--font-sora)] mb-2">Bi-Weekly Rewards</h3>
                                <p className="text-white/60 font-[family-name:var(--font-sora)] font-light text-sm max-w-[400px]">
                                    Enjoy faster rewards with payouts requests handled in as little as two weeks.
                                </p>
                            </div>
                        </div>

                        {/* Right Side Stats */}
                        <div className="flex items-center gap-12 border-l border-white/10 pl-12 relative z-10">
                            <div className="text-center">
                                <div className="text-3xl text-white font-[family-name:var(--font-sora)] font-normal">3H</div>
                                <div className="text-white/40 text-xs mt-1">Avg. Payout Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl text-white font-[family-name:var(--font-sora)] font-normal">24/7</div>
                                <div className="text-white/40 text-xs mt-1">Customer Support</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl text-white font-[family-name:var(--font-sora)] font-normal">$120K+</div>
                                <div className="text-white/40 text-xs mt-1">Overall Payouts</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
