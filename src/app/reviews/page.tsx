"use client";
import React, { useRef } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import FAQSection from "@/components/FAQSection";

export default function ReviewsPage() {
    const textScrollRef = useRef<HTMLDivElement>(null);
    const videoScrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    const reviews = [
        {
            name: "Robert W",
            country: "🇬🇧",
            title: "For start they don't have...",
            text: "What can I say other than that this prop firm blows the rest out of the park. With extensive experience of prop firms over the last few years, I've not found one that even comes close to this one and it goes to show just how disreputable a lot of the others are when Brightfunded does what they do. Phase 2 credentials immediately upon passing phase 1, funded account credentials the next day and most importantly...",
        },
        {
            name: "Michael T",
            country: "🇺🇸",
            title: "Best prop firm experience ever",
            text: "I've tried multiple prop firms and SharkFunded stands head and shoulders above the rest. The platform is incredibly reliable, payouts are fast, and the support team is always available. The challenge rules are fair and achievable. Highly recommend to anyone serious about prop trading.",
        },
        {
            name: "Ahmed K",
            country: "🇦🇪",
            title: "Professional and transparent",
            text: "The transparency at SharkFunded is unmatched. Every rule is clearly stated, no hidden clauses. I passed my challenge in 3 weeks and received my funded account credentials within 24 hours. The profit split is excellent and payouts have always been on time.",
        },
        {
            name: "Sophie L",
            country: "🇫🇷",
            title: "Finally a trustworthy firm",
            text: "After being burned by other prop firms, I was skeptical. But SharkFunded proved me wrong. Their support is responsive, the platform is stable, and they actually pay out. I've received 3 payouts already and each was processed within 2 business days.",
        },
        {
            name: "David Chen",
            country: "🇸🇬",
            title: "Excellent trading conditions",
            text: "The spreads are tight, execution is fast, and there's no dealing desk interference. I can trade my strategy without worrying about slippage or requotes. The scaling plan is generous and I've already upgraded twice.",
        },
        {
            name: "Carlos M",
            country: "🇪🇸",
            title: "Game changer for my career",
            text: "SharkFunded has completely transformed my trading career. With access to proper capital, I can finally trade without the stress of risking my own money. The community is supportive and the educational resources are top-notch.",
        },
        {
            name: "Emma R",
            country: "🇦🇺",
            title: "Smooth experience throughout",
            text: "From sign-up to my first payout, everything was smooth. The dashboard is intuitive, account metrics are clear, and I always know where I stand. Customer support resolved my questions within hours. 5 stars!",
        },
        {
            name: "Takeshi Y",
            country: "🇯🇵",
            title: "Worth every penny",
            text: "The challenge fee pays for itself quickly when you get funded. I passed phase 1 in two weeks, phase 2 in another week, and I've already made back my initial investment multiple times over. This is the real deal.",
        },
    ];

    const videoTestimonials = [
        { name: "Jordy", country: "🇧🇪", amount: "$24,827.20", image: "/assets/testimonial-1.png" },
        { name: "Emre", country: "🇹🇷", amount: "$14,319.90", image: "/assets/testimonial-2.png" },
        { name: "Dave", country: "🇳🇱", amount: "$4,195.37", image: "/assets/testimonial-3.png" },
        { name: "John", country: "🇺🇸", amount: "$24,827.20", image: "/assets/testimonial-4.png" },
        { name: "Sarah", country: "🇨🇦", amount: "$18,543.00", image: "/assets/testimonial-5.png" },
        { name: "Marcus", country: "🇩🇪", amount: "$31,250.00", image: "/assets/testimonial-6.png" },
        { name: "Lisa", country: "🇸🇪", amount: "$9,875.50", image: "/assets/testimonial-7.png" },
        { name: "Raj", country: "🇮🇳", amount: "$12,340.00", image: "/assets/testimonial-8.png" },
    ];

    return (
        <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
            {/* Dashboard Card Container: Wraps Header */}
            <div className="relative w-[95%] max-w-[1800px] mx-auto mt-4 md:mt-8 bg-[#040822] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl border border-black/5">
                <div className="relative z-50">
                    <TopBar />
                    <Navbar />
                </div>

                {/* Hero Section for Reviews Page */}
                <div className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
                    {/* Background Effect Image from Figma */}
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

                    <div className="max-w-[1400px] mx-auto relative z-10">
                        {/* Badge */}
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1f3d]/80 border border-white/10 backdrop-blur-sm">
                                <span className="font-[family-name:var(--font-sora)] text-white/90 text-[14px] md:text-[16px] font-light tracking-wide">
                                    Real Trustpilot Reviews, Real Credibility
                                </span>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="font-[family-name:var(--font-sora)] font-semibold text-white text-[40px] md:text-[64px] lg:text-[72px] leading-[1.1] tracking-[-0.04em] mb-6 text-center">
                            Trusted By Traders Worldwide
                        </h1>

                        {/* Subtitle */}
                        <p className="font-[family-name:var(--font-sora)] font-light text-white/60 text-[16px] md:text-[18px] max-w-[600px] mx-auto leading-relaxed text-center mb-8">
                            Learn to trade on our simulated trading platform, develop real skills, and get rewarded for your performance.
                        </p>

                        {/* Navigation Arrows */}
                        <div className="flex justify-center gap-3 mb-12">
                            <button
                                onClick={() => scrollLeft(textScrollRef)}
                                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                            >
                                ←
                            </button>
                            <button
                                onClick={() => scrollRight(textScrollRef)}
                                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                            >
                                →
                            </button>
                        </div>

                        {/* Review Cards Carousel */}
                        <div
                            ref={textScrollRef}
                            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 px-1"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="min-w-[300px] md:min-w-[360px] bg-[#0c1229]/80 backdrop-blur-md border border-white/10 rounded-[20px] p-6 snap-center flex flex-col items-start hover:border-blue-500/30 transition-all duration-300"
                                >
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4 text-[#F7B919]">
                                        {[...Array(5)].map((_, s) => <span key={s} className="text-[18px]">★</span>)}
                                    </div>

                                    <h3 className="font-[family-name:var(--font-sora)] font-semibold text-white text-[16px] mb-3">
                                        {review.title}
                                    </h3>

                                    <p className="font-[family-name:var(--font-sora)] font-light text-white/60 text-[13px] leading-[1.7] mb-6 line-clamp-6 flex-grow">
                                        {review.text}
                                    </p>

                                    <div className="flex items-center gap-2 mt-auto">
                                        <span className="text-white font-medium text-[14px]">{review.name}</span>
                                        <span className="text-[18px]">{review.country}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Testimonials Section */}
            <RevealSection>
                <section className="w-full flex flex-col items-center justify-center py-24 relative z-20 bg-white">
                    <div className="w-full max-w-[1598px] px-4 mx-auto">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h2 className="font-[family-name:var(--font-sora)] font-medium text-black text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.04em] mb-4">
                                    Video Testimonials
                                </h2>
                                <p className="font-[family-name:var(--font-sora)] font-light text-black text-[18px] max-w-[600px]">
                                    Don&apos;t just rely on written reviews. Watch and listen to video testimonials from real SharkFunded traders who are thriving with us.
                                </p>
                            </div>

                            {/* Nav Buttons */}
                            <div className="hidden md:flex gap-4">
                                <button onClick={() => scrollLeft(videoScrollRef)} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black/5 transition-colors">
                                    ←
                                </button>
                                <button onClick={() => scrollRight(videoScrollRef)} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black/5 transition-colors">
                                    →
                                </button>
                            </div>
                        </div>

                        {/* Video Cards Carousel */}
                        <div
                            ref={videoScrollRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pt-4 pb-4 px-1"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {videoTestimonials.map((video, i) => (
                                <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative rounded-[24px] overflow-hidden snap-center group cursor-pointer border border-white/5">
                                    {/* Fallback Background (Gradient if no image) */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500" />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 w-full p-6">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-white font-[family-name:var(--font-sora)] font-medium text-lg">{video.name}</span>
                                            <span className="text-xl">{video.country}</span>
                                        </div>
                                        <div className="text-white/80 font-[family-name:var(--font-sora)] text-sm">
                                            {video.amount}
                                        </div>
                                        {/* Shark Logo */}
                                        <div className="absolute bottom-6 right-6 w-8 h-8 opacity-80">
                                            <img src="/assets/shark-logo.svg" alt="SharkFunded Logo" className="w-full h-full brightness-0 invert" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </RevealSection>

            {/* World Map Section */}
            <RevealSection>
                <section className="w-full relative z-20">
                    {/* Rays Effect Overlay */}
                    <div
                        className="absolute inset-0 overflow-hidden pointer-events-none z-20"
                        style={{ mixBlendMode: 'screen' }}
                    >
                        <img
                            src="/assets/reviews-rays.png"
                            alt=""
                            className="absolute"
                            style={{
                                width: '160%',
                                height: '240%',
                                left: '-35%',
                                top: '-70%',
                                maxWidth: 'none'
                            }}
                        />
                    </div>

                    {/* Text Overlay */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center pt-[8%] px-4">
                        <h2 className="font-[family-name:var(--font-sora)] font-semibold text-white text-[32px] md:text-[48px] lg:text-[56px] leading-[1.2] tracking-[-0.03em] text-center mb-4">
                            Empowering Traders Across the Globe
                        </h2>
                        <p className="font-[family-name:var(--font-sora)] font-light text-white/70 text-[14px] md:text-[16px] lg:text-[18px] max-w-[800px] text-center leading-relaxed">
                            At SharkFunded, we provide traders with the tools, resources, and support they need to succeed, no matter where they are in the world.
                        </p>
                    </div>

                    <img
                        src="/assets/reviews-world-map.png"
                        alt="Global Trader Payouts"
                        className="w-full h-auto"
                    />
                </section>
            </RevealSection>

            {/* FAQ Section with CTA Banner */}
            <div className="relative w-full bg-white z-20">
                <FAQSection />
            </div>

            {/* Footer Section */}
            <div className="relative w-full z-30">
                <Footer />
            </div>
        </main>
    );
}
