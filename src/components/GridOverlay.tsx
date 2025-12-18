"use client";

import { useEffect, useState } from "react";

/**
 * GridOverlay component
 * Renders a visual 12-column grid and 100px row lines with numbers.
 * Useful for precise layout alignment and communicating positions.
 */
export default function GridOverlay() {
    const [isVisible, setIsVisible] = useState(true); // Default to on for now, or toggleable

    if (!isVisible) return null;

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-[9999] overflow-hidden">
            {/* Columns (12 cols) */}
            <div className="w-full max-w-[1920px] mx-auto h-full grid grid-cols-12 gap-4 opacity-30">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={`col-${i}`} className="h-full border-x border-red-500 bg-red-500/5 relative">
                        <span className="absolute top-0 left-1 text-[8px] text-red-500">Col {i + 1}</span>
                    </div>
                ))}
            </div>

            {/* Rows (Every 100px) */}
            <div
                className="absolute inset-0 w-full h-full opacity-20"
                style={{
                    backgroundSize: '100% 100px',
                    backgroundImage: 'linear-gradient(to bottom, cyan 1px, transparent 1px)'
                }}
            >
                {/* We can't easily map infinite rows in CSS alone for numbers without JS loop or repeat, 
                    but the gradient lines give the visual. 
                    Let's add a few visual numbers for reference up to a reasonable height (e.g. 5000px). 
                */}
                {Array.from({ length: 50 }).map((_, i) => (
                    <div
                        key={`row-${i}`}
                        className="absolute w-full flex items-center pl-2 text-cyan-400 text-[10px]"
                        style={{ top: `${i * 100}px` }}
                    >
                        Row {i} ({i * 100}px)
                    </div>
                ))}
            </div>
        </div>
    );
}
