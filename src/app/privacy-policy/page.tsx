"use client";

import React, { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

import StickyHeader from "@/components/StickyHeader";

const sections = [
    { id: "privacy", title: "Privacy Notice" },
    { id: "trading-rules", title: "Trading Rules" },
    { id: "collection", title: "What Information Do We Collect?" },
    { id: "sensitive", title: "Sensitive Information" },
    { id: "payment", title: "Payment Information" },
];

export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState("privacy");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: "smooth",
            });
            setActiveSection(id);
        }
    };

    return (
        <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
            {/* Dashboard Card Container: Wraps Header & Hero */}
            <div className="relative w-[95%] max-w-[1800px] mx-auto mt-4 md:mt-8 bg-[#040822] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl border border-black/5">
                <div className="relative z-50">
                    <StickyHeader>
                        <TopBar />
                        <Navbar />
                    </StickyHeader>
                </div>

                {/* Hero Section */}
                <div className="relative w-full py-20 px-6 text-center">
                    {/* Background Effects */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ mixBlendMode: 'screen' }}>
                        <img
                            src="/assets/reviews-hero-bg.png"
                            alt=""
                            className="absolute w-[108%] h-[112%] object-cover"
                            style={{ left: '-4%', top: '-10%', maxWidth: 'none', transform: 'scaleY(-1)' }}
                        />
                    </div>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ mixBlendMode: 'screen' }}>
                        <img
                            src="/assets/reviews-rays.webp"
                            alt=""
                            className="absolute w-[120%] h-[140%] left-[-10%] top-[10%] max-w-none transform scale-y-[-1]"
                        />
                    </div>

                    <div className="relative z-10 max-w-[900px] mx-auto">
                        <h1 className="font-[family-name:var(--font-sora)] font-semibold text-white text-[32px] md:text-[56px] lg:text-[72px] leading-[1.12] tracking-[-0.05em] mb-6">
                            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#0047FF]">Policy</span>
                        </h1>
                        <p className="font-[family-name:var(--font-sora)] font-extralight text-white text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.04em] max-w-[700px] mx-auto text-white/80">
                            SharkFunded is committed to protecting your privacy.
                        </p>
                    </div>
                </div>
            </div>

            <RevealSection>
                <section className="w-full py-16 md:py-24 bg-white text-black relative">
                    <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-16">

                        {/* Sidebar */}
                        <aside className="hidden lg:block w-[300px] shrink-0">
                            <div className="sticky top-32 flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-200">
                                <h3 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-4 px-4">Contents</h3>
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`text-left px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${activeSection === section.id
                                            ? "bg-gray-100 text-[#0047FF]"
                                            : "text-gray-500 hover:text-black hover:bg-gray-50"
                                            }`}
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </div>
                        </aside>

                        {/* Content */}
                        <div className="flex-1 space-y-16 lg:pt-0">

                            <section id="privacy" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Privacy Notice</h2>
                                <p className="text-[#595959] leading-relaxed mb-4">
                                    SharkFunded (“Company,” “we,” “us,” or “our”) is committed to protecting your privacy. This privacy notice outlines our data collection and processing practices. By using our services, you acknowledge and agree to our policies regarding the handling of your personal information. If you have any questions or concerns, please contact us at <a href="mailto:support@sharkfunded.com" className="text-blue-600 hover:underline">support@sharkfunded.com</a>. If you do not agree with our policies, we kindly ask you to refrain from using our services.
                                </p>
                            </section>

                            <section id="trading-rules" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Trading Rules</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    Our trading rules are designed to create a transparent, fair and supportive trading environment. These guidelines protect the trading experience for all participants while promoting responsible and sustainable practices.
                                </p>
                            </section>

                            <section id="collection" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">What Information Do We Collect?</h2>
                                <p className="text-[#595959] leading-relaxed mb-4">
                                    We collect personal information that you voluntarily provide to us when you:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[#595959] leading-relaxed mb-6">
                                    <li>Register for our services</li>
                                    <li>Express interest in our products or services</li>
                                    <li>Participate in activities on our platform</li>
                                    <li>Contact us directly</li>
                                </ul>
                                <p className="text-[#595959] leading-relaxed mb-4">
                                    The personal information we collect may vary depending on how you interact with us and which services you use. This information may include, but is not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[#595959] leading-relaxed">
                                    <li>Full name</li>
                                    <li>Phone number</li>
                                    <li>Email address</li>
                                    <li>Physical address</li>
                                    <li>Billing address</li>
                                </ul>
                            </section>

                            <section id="sensitive" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Sensitive Information</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    We do not collect sensitive personal information, such as Social Security numbers or any other data that is not essential to the operation of our business.
                                </p>
                            </section>

                            <section id="payment" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Payment Information</h2>
                                <p className="text-[#595959] leading-relaxed mb-4">
                                    When you make a purchase, we may collect the information necessary to process your payment, including payment instrument numbers and security codes associated with your payment method.
                                </p>
                                <p className="text-[#595959] leading-relaxed mb-4">
                                    All payment data is securely processed by our third-party payment providers. We do not store or manage sensitive payment details directly. For more information, please refer to the privacy policies of our payment processors, available on their respective websites.
                                </p>
                                <p className="text-[#595959] leading-relaxed">
                                    It is important that the personal information you provide is accurate, complete, and up to date. You are responsible for notifying us of any changes to your information.
                                </p>
                            </section>

                        </div>
                    </div>
                </section>
            </RevealSection>

            <Footer />
        </main>
    );
}
