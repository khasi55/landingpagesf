import React from 'react';

const HeroStats = () => {
    return (
        <div className="md:mt-4 lg:mt-12 mt-6 w-full max-w-[900px]">
            <div className="bg-black/40 backdrop-blur-md rounded-[36px] border border-white/5 p-6 md:p-8 grid grid-cols-2 md:flex items-center justify-between gap-y-6 gap-x-4 md:gap-0 relative overflow-hidden">
                {/* Gradient Border/Glow effect if needed, for now standard border */}

                {/* Item 1: Min Deposit */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 md:pr-8 md:border-r border-white/10">
                    <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent text-[16px] md:text-[22px]" style={{ fontSize: 'clamp(16px, 2.2vw, 22px)' }}>
                        DailyRewards
                    </span>
                    <span className="font-normal text-white leading-normal mt-1 text-[10px] md:text-[18px]" style={{ fontSize: 'clamp(10px, 1vw, 18px)' }}>
                        upto 80% split
                    </span>
                </div>

                {/* Item 2: Leverage */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 md:px-8 md:border-r border-white/10">
                    <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent text-[16px] md:text-[20px]" style={{ fontSize: 'clamp(16px, 2.2vw, 20px)' }}>
                        NoConsistency
                    </span>
                    <span className="font-normal text-white leading-normal mt-1 text-[10px] md:text-[18px]" style={{ fontSize: 'clamp(10px, 1vw, 18px)' }}>
                        Score Rules
                    </span>
                </div>

                {/* Item 3: Commission */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 md:px-8 md:border-r border-white/10">
                    <div className="flex items-baseline gap-1">
                        <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent text-[16px] md:text-[20px]" style={{ fontSize: 'clamp(16px, 2.2vw, 20px)' }}>
                            24
                        </span>
                        <span className="font-bold font-[family-name:var(--font-sora)] text-[#5c8eff] mb-0 md:mb-1 text-[10px] md:text-[20px]" style={{ fontSize: 'clamp(10px, 1.2vw, 20px)' }}>
                            /HourPayout
                        </span>
                    </div>
                    <span className="font-normal text-white leading-normal mt-1 text-[10px] md:text-[18px]" style={{ fontSize: 'clamp(10px, 1vw, 18px)' }}>
                        Guaranteed
                    </span>
                </div>

                {/* Item 4: Spreads */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left relative flex-1 md:pl-8">
                    <span className="font-bold font-[family-name:var(--font-sora)] leading-[1.1] bg-gradient-to-b from-white to-[#0084FF] bg-clip-text text-transparent text-[16px] md:text-[22px]" style={{ fontSize: 'clamp(16px, 2.2vw, 22px)' }}>
                        No Minimumdays
                    </span>
                    <span className="font-normal text-white leading-normal mt-1 text-[10px] md:text-[18px]" style={{ fontSize: 'clamp(10px, 1vw, 18px)' }}>
                        Trading days
                    </span>
                </div>

            </div>
        </div>
    );
};

export default HeroStats;
