"use client";
import React, { useRef } from "react";

export default function AffiliateTestimonials() {
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

    const videoTestimonials = [
        { id: 1, videoId: "tWGu5AdCuaI" },
        { id: 2, videoId: "a1TH5h7wlpw" },
        { id: 3, videoId: "6TJ_Ro_0USg" },
        { id: 4, videoId: "1_GasVnMlaE" },
        { id: 5, videoId: "Nmosn8DWyjo" },
        { id: 6, videoId: "LpCUhaWECWk" },
    ];

    return (
        <section className="w-full flex flex-col items-center justify-center py-12 relative z-20 bg-white">
            <div className="w-full max-w-[1598px] px-4 mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-[family-name:var(--font-sora)] font-bold text-black text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.03em] mb-4">
                            Video Testimonials
                        </h2>
                        <p className="font-[family-name:var(--font-sora)] font-light text-gray-600 text-[16px] max-w-[600px]">
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
                        <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative rounded-[24px] overflow-hidden snap-center group cursor-pointer border border-black/5 bg-gray-100 shadow-sm">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.videoId}?enablejsapi=1&rel=0`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full object-cover rounded-[24px]"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
