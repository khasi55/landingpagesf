"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div
            className="w-full bg-black/40 relative flex items-center z-50 px-4 md:px-0 md:pl-[9.375%] md:pr-[9.375%] h-16 md:h-20"
            style={{}}
        >
            <div className="w-full max-w-[1920px] mx-auto h-full flex items-center justify-between">

                {/* Logo Group */}
                <div className="flex items-center shrink-0" style={{ gap: 'clamp(6px, 0.6vw, 10px)' }}>
                    <div className="relative" style={{ width: 'clamp(24px, 1.6vw, 32px)', height: 'clamp(24px, 1.6vw, 32px)' }}>
                        <img src="/assets/shark-logo.svg" alt="SharkFunded Logo" className="w-full h-full object-contain" />
                    </div>
                    <div
                        className="font-normal leading-none text-transparent bg-clip-text bg-[linear-gradient(173deg,#FFF_44.98%,#4B4B56_103.76%)]"
                        style={{
                            fontSize: 'clamp(16px, 1.2vw, 22px)',
                            letterSpacing: 'clamp(-0.3px, -0.06vw, -1.1px)'
                        }}
                    >
                        Shark<span className="font-semibold">Funded</span>
                    </div>
                </div>

                {/* Desktop Navigation - Centered Flex Group */}
                <nav className="hidden md:flex items-center text-white font-light" style={{ gap: 'clamp(16px, 2vw, 40px)' }}>
                    <Link
                        href="#"
                        className="hover:text-blue-400 transition-colors"
                        style={{
                            fontSize: 'clamp(12px, 0.95vw, 17px)',
                            letterSpacing: 'clamp(-0.2px, -0.04vw, -0.85px)'
                        }}
                    >
                        Challenges
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-blue-400 transition-colors"
                        style={{
                            fontSize: 'clamp(12px, 0.95vw, 17px)',
                            letterSpacing: 'clamp(-0.2px, -0.04vw, -0.85px)'
                        }}
                    >
                        Rewards
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-blue-400 transition-colors"
                        style={{
                            fontSize: 'clamp(12px, 0.95vw, 17px)',
                            letterSpacing: 'clamp(-0.2px, -0.04vw, -0.85px)'
                        }}
                    >
                        Partner Up
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-blue-400 transition-colors"
                        style={{
                            fontSize: 'clamp(12px, 0.95vw, 17px)',
                            letterSpacing: 'clamp(-0.2px, -0.04vw, -0.85px)'
                        }}
                    >
                        FAQs
                    </Link>
                </nav>
                {/* Action Buttons */}
                <div className="hidden md:flex items-center shrink-0" style={{ gap: 'clamp(8px, 0.6vw, 10px)' }}>
                    <button
                        className="rounded-[65px] border border-[#6880ff] text-white font-normal hover:bg-[#6880ff]/10 transition-colors"
                        style={{
                            width: 'clamp(65px, 6vw, 110px)',
                            height: 'clamp(28px, 2vw, 38px)',
                            fontSize: 'clamp(11px, 0.9vw, 15px)',
                            letterSpacing: 'clamp(-0.2px, -0.04vw, -0.75px)'
                        }}
                    >
                        Login
                    </button>
                    <button
                        className="rounded-[65px] bg-white text-black font-normal hover:bg-gray-100 transition-colors"
                        style={{
                            width: 'clamp(85px, 7vw, 130px)',
                            height: 'clamp(28px, 2vw, 38px)',
                            fontSize: 'clamp(11px, 0.9vw, 15px)',
                            letterSpacing: 'clamp(-0.2px, -0.04vw, -0.75px)'
                        }}
                    >
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-[80px] left-0 w-full bg-slate-900/90 backdrop-blur-md border-t border-white/10 p-4 flex flex-col gap-4 lg:hidden shadow-xl z-50">
                    <Link href="#" className="text-white text-xl py-3 border-b border-white/10">Challenges</Link>
                    <Link href="#" className="text-white text-xl py-3 border-b border-white/10">Rewards</Link>
                    <Link href="#" className="text-white text-xl py-3 border-b border-white/10">Partner Up</Link>
                    <Link href="#" className="text-white text-xl py-3 border-b border-white/10">FAQs</Link>
                    <div className="flex flex-col gap-3 mt-4">
                        <button className="w-full h-[50px] rounded-full border border-[#6880ff] text-white text-lg">Login</button>
                        <button className="w-full h-[50px] rounded-full bg-white text-black text-lg">Get Started</button>
                    </div>
                </div>
            )}
        </div>
    );
}
