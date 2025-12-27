'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from './RevealSection';
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer';

// Types
type AccountSize = '5K' | '10K' | '25K' | '50K' | '100K' | '200K';

const accountSizes: AccountSize[] = ['5K', '10K', '25K', '50K', '100K', '200K'];

// Data Configuration
const pricingConfig = {
    '5K': {
        price: '$35.6', oldPrice: '$89',
        dailyLoss: '$250', maxLoss: '$500', target1: '$400', target2: '$250',
    },
    '10K': {
        price: '$55.46', oldPrice: '$139',
        dailyLoss: '$500', maxLoss: '$1,000', target1: '$800', target2: '$500',
    },
    '25K': {
        price: '$95.6', oldPrice: '$239',
        dailyLoss: '$1,250', maxLoss: '$2,500', target1: '$2,000', target2: '$1,250',
    },
    '50K': {
        price: '$159.6', oldPrice: '$399',
        dailyLoss: '$2,500', maxLoss: '$5,000', target1: '$4,000', target2: '$2,500',
    },
    '100K': {
        price: '$308', oldPrice: '$770',
        dailyLoss: '$5,000', maxLoss: '$10,000', target1: '$8,000', target2: '$5,000',
    },
    '200K': {
        price: '$618', oldPrice: '$1,545',
        dailyLoss: '$10,000', maxLoss: '$20,000', target1: '$16,000', target2: '$10,000',
    }
};

const challenges = [
    {
        title: 'One-Step Challenge',
        type: '1-Step',
        features: ['Only 8% profit target', 'Get Funded fast'],
        badge: 'Popular',
        badgeColor: 'bg-[#292D32] text-white'
    },
    {
        title: 'Two Step Challenge',
        type: '2-Step',
        features: ['Standard evaluation', '10% max drawdown'],
        badge: null,
        badgeColor: ''
    },
    {
        title: 'Try Shark Funding',
        type: 'Trial',
        features: ['Fastest evaluation', 'Fastest evaluation'],
        badge: 'New',
        badgeColor: 'bg-white text-black'
    },
    {
        title: 'Instant Funding',
        type: 'Instant',
        features: ['No evaluation', 'Fastest Way'],
        badge: 'Fastest',
        badgeColor: 'bg-[#ff3b3b] text-white',
        isSpecial: true
    }
];

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState<'Forex' | 'Futures'>('Forex');
    const [selectedSize, setSelectedSize] = useState<AccountSize>('5K');
    const [selectedChallenge, setSelectedChallenge] = useState('Two Step Challenge');
    const [isPrime, setIsPrime] = useState(true);

    const data = pricingConfig[selectedSize];

    return (
        <section
            id="pricing"
            className="w-full relative flex flex-col items-start justify-center text-left overflow-visible py-20"
        >
            <RevealSection>
                <div className="w-[95%] max-w-[1800px] mx-auto bg-[#020514] rounded-[60px] p-8 md:p-16 md:pb-24 relative overflow-hidden ring-1 ring-white/5">

                    {/* Jellyfish Background */}
                    <div className="absolute -top-[20%] -right-[15%] w-[60%] h-[1000px] pointer-events-none z-0 overflow-visible mix-blend-screen opacity-100 hidden md:block transform-gpu">
                        <img
                            src="/assets/jellyfish-figma.png"
                            alt=""
                            className="w-full h-full object-contain opacity-100 transform-gpu"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-12 relative z-10 w-full">

                        {/* HEADLINE */}
                        <div className="flex flex-col items-start gap-4">
                            <h2 className="font-[family-name:var(--font-sora)] font-normal text-white leading-[1.1]" style={{ fontSize: 'clamp(32px, 5vw, 75px)', letterSpacing: '-3.75px' }}>
                                Straightforward Challenges!
                            </h2>
                            <p className="font-sans text-white/90 font-normal" style={{ fontSize: 'clamp(12px, 1.25vw, 16px)', maxWidth: '867px' }}>
                                Learn to trade on our simulated trading platform, develop real skills, and get rewarded for your performance.
                            </p>
                        </div>

                        {/* --- MOBILE VIEW (RESTORED PILLS) --- */}
                        <div className="md:hidden w-full flex flex-col gap-6 items-center">

                            {/* 1. Challenge Type Pills */}
                            <div className="flex flex-wrap justify-center gap-2 w-full">
                                {challenges.map((c) => (
                                    <button
                                        key={c.title}
                                        onClick={() => setSelectedChallenge(c.title)}
                                        className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all border
                                            ${selectedChallenge === c.title
                                                ? 'bg-[#1E233B] text-white border-blue-500/50 shadow-[0_0_15px_rgba(30,35,66,0.5)]'
                                                : 'bg-[#0A0C1A] text-gray-500 border-white/5 hover:border-white/20'
                                            }
                                        `}
                                    >
                                        {c.type || c.title}
                                    </button>
                                ))}
                            </div>

                            {/* 2. Prime/Lite Pills */}
                            <div className="bg-[#0A0C1A] p-1 rounded-full flex items-center border border-white/5">
                                <button
                                    onClick={() => setIsPrime(true)}
                                    className={`px-8 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm ${isPrime ? 'bg-[#1E233B] text-white ring-1 ring-white/10' : 'text-gray-500 hover:text-white'}`}
                                >
                                    Prime 🔥
                                </button>
                                <button
                                    onClick={() => setIsPrime(false)}
                                    className={`px-8 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm ${!isPrime ? 'bg-[#1E233B] text-white ring-1 ring-white/10' : 'text-gray-500 hover:text-white'}`}
                                >
                                    Lite
                                </button>
                            </div>

                            {/* 3. Account Size Pills */}
                            <div className="flex flex-wrap justify-center gap-2 w-full">
                                {accountSizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-5 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all border
                                            ${selectedSize === size
                                                ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                                                : 'bg-[#151932] text-gray-400 border-white/5 hover:border-white/20'
                                            }
                                        `}
                                    >
                                        ${size}
                                    </button>
                                ))}
                            </div>

                            {/* 4. Mobile Data Card */}
                            <div className="w-full bg-[#151932] rounded-3xl p-6 border border-white/5 shadow-2xl relative overflow-hidden mt-2">
                                {/* Price Header */}
                                <div className="flex flex-col items-center mb-6">
                                    <span className="text-white/40 text-sm mb-1 line-through">{data.oldPrice}</span>
                                    <span className="text-4xl font-bold text-white mb-4">{data.price}</span>
                                    <Link href={`https://dashboard.sharkfunded.com/register?plan=${selectedSize}`} className="w-full">
                                        <button className="w-full py-3.5 rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20 active:scale-95 transition-transform">
                                            Get Funded
                                        </button>
                                    </Link>
                                </div>

                                {/* Rules List */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-white/60 text-sm">Profit Target</span>
                                        <span className="text-white font-bold">{data.target1}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-white/60 text-sm">Daily Loss</span>
                                        <span className="text-white font-bold">{data.dailyLoss}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-white/60 text-sm">Max Loss</span>
                                        <span className="text-white font-bold">{data.maxLoss}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-white/60 text-sm">Trading Days</span>
                                        <span className="text-white font-bold">5 Min.</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-white/60 text-sm">Leverage</span>
                                        <span className="text-white font-bold">1:100</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* --- DESKTOP VIEW --- */}
                        <div className="w-full hidden md:flex flex-col">

                            {/* TABS (Restored) */}
                            <div className="flex items-end w-full pl-0 z-10 hidden md:flex">
                                <button
                                    onClick={() => setActiveTab('Forex')}
                                    className={`relative px-8 py-6 rounded-t-3xl flex flex-col items-start gap-1 transition-all ${activeTab === 'Forex' ? 'bg-[#060B30] text-white' : 'bg-transparent text-white/40 hover:text-white/60'}`}
                                    style={{ marginBottom: '-2px' }}
                                >
                                    <span className="text-2xl font-light mb-2">¥</span>
                                    <span className="text-[20px] font-bold">Forex</span>
                                    <span className="text-xs font-normal text-white/60">Raw spreads</span>
                                </button>
                                <button onClick={() => setActiveTab('Futures')} className={`relative px-8 py-6 rounded-t-3xl flex flex-col items-start gap-1 transition-all ${activeTab === 'Futures' ? 'bg-[#060B30] text-white' : 'bg-transparent text-white/40 hover:text-white/60'}`}>
                                    <img src="/assets/futures_icon.webp" alt="Futures" className="w-8 h-8 object-contain mb-2 opacity-80" decoding="async" />
                                    <span className="text-[20px] font-bold">Futures</span>
                                    <span className="text-xs font-normal text-white/40 opacity-70">Coming Soon</span>
                                </button>
                            </div>

                            {/* CONTAINER */}
                            <div
                                className="w-full rounded-b-[48px] rounded-tr-[48px] rounded-tl-none p-8 flex flex-col gap-10 relative z-0 border-t border-white/5"
                                style={{
                                    background: 'linear-gradient(180deg, #060B30 0%, #00000A 100%)',
                                    boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.6)',
                                    borderTopLeftRadius: activeTab === 'Forex' ? '0px' : '48px'
                                }}
                            >
                                {/* 1. CHALLENGE CARDS (Restored Previous Look) */}
                                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                                    {challenges.map((challenge, index) => (
                                        <StaggerItem key={index}>
                                            <div
                                                onClick={() => setSelectedChallenge(challenge.title)}
                                                className={`relative p-8 rounded-2xl border transition-all cursor-pointer group min-h-[160px] flex flex-col justify-between h-full
                                        ${challenge.isSpecial
                                                        ? 'bg-[linear-gradient(180deg,rgba(226,27,50,0.37)_0%,rgba(226,27,50,0.1)_100%)] border-[#E21B32]/30 hover:border-[#E21B32]/60'
                                                        : (challenge.title === 'Two Step Challenge' || challenge.title === 'Try Shark Funding')
                                                            ? 'bg-[linear-gradient(180deg,rgba(34,67,139,0.84)_0%,rgba(34,67,139,0)_100%)] border-[#22438B]/30 hover:border-[#22438B]/60'
                                                            : selectedChallenge === challenge.title
                                                                ? 'bg-[#1e2342] border-blue-500/50 shadow-[0_0_30px_rgba(30,35,66,0.5)]'
                                                                : 'bg-[#151932] border-white/5 hover:border-white/10'
                                                    }
                                                `}
                                            >
                                                {challenge.badge && (
                                                    <div className={`absolute -top-7 left-8 px-4 py-1 rounded-t-xl text-xs font-bold uppercase tracking-wider ${challenge.badgeColor}`}>
                                                        {challenge.badge}
                                                    </div>
                                                )}
                                                <h3 className="text-lg xl:text-[20px] font-bold text-white mt-2 mb-2 whitespace-nowrap">{challenge.title}</h3>
                                                <div className="flex flex-col gap-2">
                                                    {challenge.features.map((feature, i) => (
                                                        <div key={i} className="flex items-center gap-2 text-white/60 text-[14px] font-medium">
                                                            <CheckCircleIcon className={`w-4 h-4 ${challenge.isSpecial ? 'text-[#ff3b3b]' : 'text-white'}`} />
                                                            <span>{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>

                                {/* 2. SIZE SELECTOR BUTTONS (Updated per Screenshot) */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <p className="text-white/60 text-sm uppercase tracking-widest font-bold">Select Account Size</p>

                                        {/* Prime Toggle Inline */}
                                        <div className="bg-[#0f1226] p-1 rounded-full inline-flex gap-1 border border-white/5">
                                            <button
                                                onClick={() => setIsPrime(true)}
                                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${isPrime ? 'bg-black text-white' : 'text-white/40'}`}
                                            >
                                                Prime 🔥
                                            </button>
                                            <button
                                                onClick={() => setIsPrime(false)}
                                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${!isPrime ? 'bg-black text-white' : 'text-white/40'}`}
                                            >
                                                Lite
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap justify-between gap-3 w-full">
                                        {accountSizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`flex-1 min-w-[100px] py-3 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center gap-1
                                                    ${selectedSize === size
                                                        ? 'bg-[#1E2342] border-blue-500/50 shadow-[0_0_20px_rgba(30,35,66,0.6)] z-10'
                                                        : 'bg-[#0A0C1A] border-white/5 text-white/40 hover:border-white/20 hover:text-white hover:bg-white/5'
                                                    }
                                                `}
                                            >
                                                <span className={`text-xl font-bold ${selectedSize === size ? 'text-white' : 'text-inherit'}`}>
                                                    ${size.replace('K', ',000')}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Promo Banner */}
                                <div className="w-full bg-[#1A3F45]/30 border border-[#4FD1C5]/20 rounded-xl p-3 flex items-center justify-center gap-4 text-[#4FD1C5] font-medium text-sm">
                                    <span>🎁 Christmas Promo: <strong>30% OFF</strong> → Limited Time</span>
                                    <div className="bg-[#4FD1C5]/10 px-3 py-1 rounded border border-[#4FD1C5]/30 text-xs mono flex items-center gap-2">
                                        Code: XMAS30
                                    </div>
                                </div>

                                {/* 3. PHASE TABLE (Screenshot Structure) */}
                                <div className="w-full overflow-x-auto rounded-3xl border border-white/5 bg-[#151932]/30 backdrop-blur-sm">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/[0.02]">
                                                <th className="p-6 text-white/40 font-medium w-[25%]">Target Metric</th>
                                                <th className="p-6 text-blue-400 font-bold text-lg w-[25%] text-center">Step 1</th>
                                                {selectedChallenge !== '1-Step' && selectedChallenge !== 'Instant' && (
                                                    <th className="p-6 text-blue-400 font-bold text-lg w-[25%] text-center">Step 2</th>
                                                )}
                                                <th className="p-6 text-green-400 font-bold text-lg w-[25%] text-center">Funded Stage</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {[
                                                { label: 'Trading Period', s1: 'Unlimited', s2: 'Unlimited', funded: 'Indefinite' },
                                                { label: 'Min. Trading Days', s1: '5 Days', s2: '5 Days', funded: '-' },
                                                { label: 'Max Daily Loss', s1: data.dailyLoss, s2: data.dailyLoss, funded: data.dailyLoss },
                                                { label: 'Max Overall Loss', s1: data.maxLoss, s2: data.maxLoss, funded: data.maxLoss },
                                                { label: 'Profit Target', s1: data.target1, s2: data.target2, funded: '-' },
                                            ].map((row, idx) => (
                                                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                                    <td className="p-6 text-white font-medium flex items-center gap-2">
                                                        {row.label}
                                                        <InformationCircleIcon className="w-4 h-4 text-white/20" />
                                                    </td>
                                                    <td className="p-6 text-center text-white/90 font-bold text-lg">{row.s1}</td>
                                                    {selectedChallenge !== '1-Step' && selectedChallenge !== 'Instant' && (
                                                        <td className="p-6 text-center text-white/90 font-bold text-lg">{row.s2}</td>
                                                    )}
                                                    <td className="p-6 text-center text-white/90 font-bold text-lg">{row.funded}</td>
                                                </tr>
                                            ))}

                                            {/* Price Row */}
                                            <tr className="bg-[#1E2342]/50">
                                                <td className="p-8 text-white font-bold text-xl">Price</td>
                                                <td colSpan={selectedChallenge !== '1-Step' && selectedChallenge !== 'Instant' ? 3 : 2} className="p-6">
                                                    <div className="flex items-center justify-between w-full px-8">
                                                        <div className="flex flex-col items-start">
                                                            <span className="text-sm text-white/40 line-through">{data.oldPrice}</span>
                                                            <span className="text-4xl font-bold text-white">{data.price}</span>
                                                        </div>
                                                        <Link href={`https://dashboard.sharkfunded.com/register?plan=${selectedSize}`}>
                                                            <button className="px-12 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105">
                                                                Get Funded
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </RevealSection>
        </section>
    );
}
