"use client";

import { useState, useEffect } from "react";

export function useLayeredLoading() {
    const [layer2, setLayer2] = useState(false); // Static visuals (200ms)
    const [layer3, setLayer3] = useState(false); // Heavy assets (Idle)
    const [layer4, setLayer4] = useState(false); // Animations (After visuals)

    useEffect(() => {
        // Layer 1 is immediate (default state)

        // Layer 2: 200ms delay
        const timer2 = setTimeout(() => {
            setLayer2(true);
        }, 200);

        // Layer 3: Idle callback (or fallback timeout)
        let idleId: number | undefined;
        if (typeof window !== "undefined" && "requestIdleCallback" in window) {
            idleId = (window as any).requestIdleCallback(() => {
                setLayer3(true);
            });
        } else {
            setTimeout(() => {
                setLayer3(true);
            }, 1000);
        }

        // Layer 4: Start animations after visuals are likely visible
        // Assuming visuals take ~500ms to fade in after Layer 2 starts (200ms + 500ms = 700ms)
        const timer4 = setTimeout(() => {
            setLayer4(true);
        }, 800);

        return () => {
            clearTimeout(timer2);
            clearTimeout(timer4);
            if (idleId && typeof window !== "undefined" && "cancelIdleCallback" in window) {
                (window as any).cancelIdleCallback(idleId);
            }
        };
    }, []);

    return { layer2, layer3, layer4 };
}
