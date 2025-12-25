"use client";

import React, { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import { motion } from "framer-motion";

const sections = [
    { id: "welcome", title: "Welcome to SharkFunded" },
    { id: "modification", title: "Modification of Agreement" },
    { id: "representations", title: "Trader Representations" },
    { id: "license", title: "Limited License" },
    { id: "education", title: "Education" },
    { id: "account", title: "Account Creation" },
    { id: "prohibited", title: "Prohibited Countries" },
    { id: "purchases", title: "Purchases and Refunds" },
    { id: "guidelines", title: "Guidelines" },
    { id: "trademarks", title: "Trademarks" },
    { id: "disclosure", title: "Disclosure Statement" },
    { id: "termination", title: "Term and Termination" },
    { id: "disclaimer", title: "Disclaimer of Warranties" },
    { id: "indemnification", title: "Indemnification" },
    { id: "arbitration", title: "Arbitration" },
    { id: "force-majeure", title: "Force Majeure" },
    { id: "severability", title: "Severability" },
    { id: "interpretation", title: "Interpretation" },
    { id: "assignment", title: "Assignment" },
    { id: "waiver", title: "Waiver" },
    { id: "entire-agreement", title: "Entire Agreement" },
];

import StickyHeader from "@/components/StickyHeader";

export default function TermsAndConditionsPage() {
    const [activeSection, setActiveSection] = useState("welcome");

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
                            src="/assets/reviews-rays.png"
                            alt=""
                            className="absolute w-[120%] h-[140%] left-[-10%] top-[10%] max-w-none transform scale-y-[-1]"
                        />
                    </div>

                    <div className="relative z-10 max-w-[900px] mx-auto">
                        <h1 className="font-[family-name:var(--font-sora)] font-semibold text-white text-[32px] md:text-[56px] lg:text-[72px] leading-[1.12] tracking-[-0.05em] mb-6">
                            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#0047FF]">Conditions</span>
                        </h1>
                        <p className="font-[family-name:var(--font-sora)] font-extralight text-white text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.04em] max-w-[700px] mx-auto text-white/80">
                            Last Updated: December 2025
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
                            {/* Welcome */}
                            <section id="welcome" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Welcome to SharkFunded</h2>
                                <p className="text-[#595959] leading-relaxed mb-4">
                                    These Terms and Conditions (“Agreement”) govern your use of the services (“Services”) provided by SharkFunded (“Company,” “we,” “us,” or “our”). By accessing or using our Services, you (“you” or “Trader”) agree to be bound by this Agreement. If you do not agree to these terms, please do not use the Services.
                                </p>
                            </section>

                            <section id="modification" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Modification of Agreement</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    SharkFunded reserves the right to modify, amend, or terminate this Agreement at any time, at its sole discretion. Your continued use of the Services following any changes will constitute your acceptance of the revised Agreement.
                                </p>
                            </section>

                            <section id="representations" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Trader Representations</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    By using the Services, you affirm that you are at least eighteen (18) years old and have the capacity to enter into this Agreement. You represent that your use of the Services complies with all applicable laws and that you are not restricted from entering into this Agreement by any other agreements.
                                </p>
                            </section>

                            <section id="license" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Limited License</h2>
                                <p className="text-[#595959] leading-relaxed mb-4">
                                    The Company grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable, and royalty-free license to access and use the Services solely for their intended purposes. You may not engage in any activities such as scraping, hacking, reverse engineering, or using the Services in any way that is unauthorized or unlawful.
                                </p>
                                <p className="text-[#595959] leading-relaxed">
                                    All rights not expressly granted to you under this Agreement are reserved by company.
                                </p>
                            </section>

                            <section id="education" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Education</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    The Company may provide educational content regarding trading and investment strategies. However, such information is for general informational purposes only and should not be construed as financial or investment advice. You bear the responsibility of evaluating any data provided and agree not to hold the Company liable for any decisions made based on such information.
                                </p>
                            </section>

                            <section id="account" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Account Creation</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    To register as a Trader, you must provide accurate personal information, including your name, email, address, phone number, date of birth, and a unique username and password. Your account is personal and must not be shared with others. You are responsible for keeping your account information confidential. If you suspect any unauthorized access, you must notify the Company immediately.
                                </p>
                            </section>

                            <section id="prohibited" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Prohibited Countries</h2>
                                <p className="text-[#595959] leading-relaxed mb-4">
                                    Individuals residing or having citizenship in the following countries are prohibited from registering as a Trader:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[#595959] leading-relaxed">
                                    <li>USA</li>
                                    <li>North Korea</li>
                                    <li>Pakistan</li>
                                </ul>
                            </section>

                            <section id="purchases" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Purchases and Refunds</h2>
                                <p className="text-[#595959] leading-relaxed mb-4">
                                    The Company offers products and services that may incur a monetary cost. Prices are subject to change without notice. By making a purchase, you agree that the Company is not responsible for any claims related to those purchases.
                                </p>
                                <p className="text-[#595959] leading-relaxed">
                                    Once you begin trading your evaluation, you are not eligible for a refund. If you wish to receive a refund before taking any trades on your account, simply contact us, and we will process a refund. However, refunds are not eligible after the earlier of (a) 14 days from the date of initial purchase or (b) the date the Trader first executed a trade on the account.
                                </p>
                            </section>

                            <section id="guidelines" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Guidelines</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    The Company will display guidelines associated with the Services on its website and via email. These guidelines may change at the Company's discretion and are incorporated into this Agreement.
                                </p>
                            </section>

                            <section id="trademarks" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Trademarks</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    You acknowledge that all trademarks and logos displayed on the Company website are owned or licensed by the Company. You are prohibited from using the Company's trademarks in any manner that could cause confusion or mislead consumers.
                                </p>
                            </section>

                            <section id="disclosure" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Disclosure Statement</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    Before participating in financial markets, carefully consider your investment objectives and risk tolerance. Trading carries risks, and you should only trade with money you can afford to lose.
                                </p>
                            </section>

                            <section id="termination" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Term and Termination</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    This Agreement will commence when you purchase a Service and will continue until terminated by either party. The Company reserves the right to terminate your access to the Services at any time without prior notice.
                                </p>
                            </section>

                            <section id="disclaimer" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Disclaimer of Warranties and Limitation of Liability</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    The Services and Company website are provided "as-is" without any warranties. The Company is not liable for any claims, damages, or losses resulting from your use of the Services or any information on the website. Your use of the Services is at your own risk.
                                </p>
                            </section>

                            <section id="indemnification" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Indemnification</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    You agree to indemnify and hold the Company harmless from any claims, losses, or damages arising from your use of the Services or violation of this Agreement.
                                </p>
                            </section>

                            <section id="arbitration" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Arbitration</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    Any disputes arising from this Agreement will be settled by arbitration under the rules of the American Arbitration Association (AAA) in Quebec. Both parties agree to submit to the jurisdiction of Quebec.
                                </p>
                            </section>

                            <section id="force-majeure" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Force Majeure</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    The Company shall not be liable for any loss or damage caused by events beyond its control, including but not limited to natural disasters, governmental actions, and market conditions.
                                </p>
                            </section>

                            <section id="severability" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Severability</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    If any provision of this Agreement is found to be invalid, the remaining provisions shall continue in full force and effect.
                                </p>
                            </section>

                            <section id="interpretation" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Interpretation</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    This Agreement shall be interpreted as having been drafted by both parties.
                                </p>
                            </section>

                            <section id="assignment" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Assignment</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    You may not assign your rights under this Agreement. The Company may assign its rights at its discretion.
                                </p>
                            </section>

                            <section id="waiver" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Waiver</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    No waiver of any term of this Agreement shall be effective unless in writing and signed by the party to be charged.
                                </p>
                            </section>

                            <section id="entire-agreement" className="scroll-mt-32">
                                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sora)] mb-6 text-black">Entire Agreement</h2>
                                <p className="text-[#595959] leading-relaxed">
                                    This Agreement constitutes the entire understanding between the Company and Trader regarding the Services and supersedes all prior agreements.
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
