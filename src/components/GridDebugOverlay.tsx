"use client";

import { useEffect, useState } from "react";

export default function GridDebugOverlay() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    // 12 columns, arbitrary number of rows (e.g., 50) to cover long pages
    const columns = 12;
    const rows = 50;
    const totalCells = columns * rows;

    return (
        <div className="absolute inset-0 z-[9999] pointer-events-none overflow-hidden h-full w-full">
            <div className="w-full h-full grid grid-cols-12 auto-rows-[100px] gap-0 opacity-30">
                {Array.from({ length: totalCells }).map((_, i) => {
                    const cellNum = i + 1;
                    const rowNum = Math.ceil(cellNum / columns);
                    const colNum = (i % columns) + 1;

                    return (
                        <div
                            key={i}
                            className="border border-red-500/50 flex flex-col items-center justify-center text-red-300 text-[10px] font-mono"
                        >
                            <span className="font-bold text-lg">{cellNum}</span>
                            <span>R{rowNum}:C{colNum}</span>
                        </div>
                    );
                })}
            </div>

            {/* Toggle Button (top-left fixed, pointer-events-auto) */}
            <div className="fixed top-24 right-4 pointer-events-auto z-[10000]">
                <button
                    onClick={() => setIsVisible(false)}
                    className="bg-red-600 text-white px-3 py-1 text-xs rounded shadow hover:bg-red-700"
                >
                    Hide Grid
                </button>
            </div>
        </div>
    );
}
