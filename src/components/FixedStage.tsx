"use client";

import { useEffect, useState } from "react";
import GridOverlay from "./GridOverlay";

export default function FixedStage({ children }: { children: React.ReactNode }) {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            const targetWidth = 1920;
            const targetHeight = 1080;

            // Compute scale to FIT WIDTH
            // This ensures the Hero matches the device width exactly (Standard Responsive Behavior)
            // No cropping, full content visible.
            const newScale = windowWidth / targetWidth;

            setScale(newScale);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Calculate dynamic height based on scale
    // We add extra cushion (e.g. +400px unscaled * scale) to allow the dashboard 
    // (which starts at 75% height) to fully extend without being cut off.
    const scaledHeight = (1080 + 3500) * scale; // Increased cushion to 3500 to cover Rewards section

    return (
        <section
            className="relative bg-black" // Removed overflow-hidden to allow dashboard to show
            style={{
                width: "100%",
                height: `${scaledHeight}px`
            }}
        >
            <div
                style={{
                    width: "1920px",
                    height: "1080px", // Base canvas still 1080 for video
                    // Standard alignment
                    position: "absolute",
                    top: "0",
                    left: "0",
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                }}
                className="bg-black"
            >
                {/* Debug Grid Overlay - Scaled with content */}
                <div className="absolute inset-0 w-full h-[5000px] pointer-events-none z-[9999]">
                    <GridOverlay />
                </div>
                {children}
            </div>
        </section>
    );
}
