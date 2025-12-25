'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from '@/components/RevealSection';

const data = {
    Forex: [
        { symbol: "AusCash", size: "100,000", leverage: "1:100", commission: "$2 / Lot" },
        { symbol: "AUDCHF", size: "100,000", leverage: "1:100", commission: "$2 / Lot" },
        { symbol: "AUDJPY", size: "100,000", leverage: "1:100", commission: "$2 / Lot" },
        { symbol: "AUDNZD", size: "100,000", leverage: "1:100", commission: "$2 / Lot" },
        { symbol: "AUDUSD", size: "100,000", leverage: "1:100", commission: "$2 / Lot" },
        { symbol: "CADCHF", size: "100,000", leverage: "1:100", commission: "$2 / Lot" },
        { symbol: "CADJPY", size: "100,000", leverage: "1:100", commission: "$2 / Lot" },
        { symbol: "CHFJPY", size: "100,000", leverage: "1:100", commission: "$2 / Lot" },
        { symbol: "AUDCAD", size: "100,000", leverage: "1:100", commission: "$2 / Lot" },
        { symbol: "AUDJPY", size: "100,000", leverage: "1:100", commission: "$2 / Lot" },
    ],
    Crypto: [
        { symbol: "BTCUSD", size: "1", leverage: "1:2", commission: "$0" },
        { symbol: "ETHUSD", size: "1", leverage: "1:2", commission: "$0" },
        { symbol: "XRPUSD", size: "1", leverage: "1:2", commission: "$0" },
        { symbol: "LTCUSD", size: "1", leverage: "1:2", commission: "$0" },
    ],
    Commodities: [
        { symbol: "XAUUSD", size: "100", leverage: "1:20", commission: "$2 / Lot" },
        { symbol: "XAGUSD", size: "5000", leverage: "1:20", commission: "$2 / Lot" },
        { symbol: "USOIL", size: "1000", leverage: "1:20", commission: "$0" },
    ],
    Indices: [
        { symbol: "US30", size: "1", leverage: "1:20", commission: "$0" },
        { symbol: "US100", size: "1", leverage: "1:20", commission: "$0" },
        { symbol: "US500", size: "1", leverage: "1:20", commission: "$0" },
        { symbol: "DE30", size: "1", leverage: "1:20", commission: "$0" },
    ]
};

export default function TickersSection() {
    const [activeTab, setActiveTab] = useState<'Forex' | 'Crypto' | 'Commodities' | 'Indices'>('Forex');

    return (
        <section className="w-full bg-white relative py-20 px-4 z-20">
            <div className="max-w-[1000px] mx-auto">

                <RevealSection>
                    <div className="text-center mb-12">
                        <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-black font-[family-name:var(--font-sora)] mb-12">
                            Tickers
                        </h2>

                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {Object.keys(data).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as any)}
                                    className={`px-8 py-2 rounded-full font-bold border transition-all font-[family-name:var(--font-sora)] text-sm
                                        ${activeTab === tab
                                            ? 'bg-[#1E233B] text-white border-[#1E233B]'
                                            : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </RevealSection>

                <RevealSection>
                    <div className="w-full bg-[#DDE9F4] rounded-[32px] overflow-hidden shadow-xl border border-white/50 p-1">
                        <div className="w-full bg-[#EAF2F9] rounded-[28px] overflow-hidden relative min-h-[500px]">

                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#EAF2F9] border-b border-[#D1DEEA]">
                                    <tr>
                                        <th className="py-5 px-8 text-black font-bold font-[family-name:var(--font-sora)] w-1/4">Symbol</th>
                                        <th className="py-5 px-8 text-black font-bold font-[family-name:var(--font-sora)] w-1/4">Contract Size</th>
                                        <th className="py-5 px-8 text-black font-bold font-[family-name:var(--font-sora)] w-1/4">Leverage</th>
                                        <th className="py-5 px-8 text-black font-bold font-[family-name:var(--font-sora)] w-1/4 text-right">Commission</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <AnimatePresence mode='wait'>
                                        {data[activeTab].map((row, index) => (
                                            <motion.tr
                                                key={`${activeTab}-${index}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                                className="border-b border-[#D1DEEA] last:border-0 hover:bg-white/40 transition-colors"
                                            >
                                                <td className="py-4 px-8 text-[#5E6D82] font-medium font-[family-name:var(--font-sora)]">{row.symbol}</td>
                                                <td className="py-4 px-8 text-[#5E6D82] font-medium font-[family-name:var(--font-sora)]">{row.size}</td>
                                                <td className="py-4 px-8 text-[#5E6D82] font-medium font-[family-name:var(--font-sora)]">{row.leverage}</td>
                                                <td className="py-4 px-8 text-[#5E6D82] font-medium font-[family-name:var(--font-sora)] text-right">{row.commission}</td>
                                            </motion.tr>
                                        ))}
                                    </AnimatePresence>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </RevealSection>

            </div>
        </section>
    );
}
