export default function TopBar() {
    return (
        <div
            className="w-full bg-[linear-gradient(90deg,rgb(16,31,90)_0%,rgb(61,80,148)_24.687%,rgb(26,43,102)_45.569%,rgb(0,9,66)_77.549%,rgb(0,16,87)_100%)] relative flex items-center justify-center"
            style={{
                height: 'clamp(32px, 3vw, 48px)',
                paddingLeft: 'clamp(16px, 7vw, 135px)',
                paddingRight: 'clamp(16px, 7vw, 135px)'
            }}
        >

            {/* Container */}
            <div className="w-full max-w-[1920px] h-full flex items-center justify-between mx-auto">

                {/* Mobile Content (Visible only < md) */}
                <div className="flex md:hidden w-full justify-between items-center text-white">
                    <span className="font-semibold text-xs">40% OFF</span>
                    <span className="text-[10px] opacity-80">Tap details</span>
                </div>

                {/* Desktop Left Group */}
                <div className="hidden md:flex items-center h-full" style={{ gap: 'clamp(20px, 2.5vw, 48px)' }}>
                    {/* Frame 2: Forex Highlight Box */}
                    <div className="relative h-full flex items-center justify-center overflow-hidden" style={{ width: 'clamp(100px, 10vw, 190px)' }}>
                        {/* Background Gradient Layer - contained within box */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,102,255,0)] via-[rgba(0,102,255,0.5)] to-[#96c0ff] opacity-50 pointer-events-none" />
                        {/* Bottom Border */}
                        <div className="absolute bottom-0 left-0 w-full bg-[#b7dcff]" style={{ height: 'clamp(2px, 0.15vw, 3px)' }} />
                        {/* Text */}
                        <span
                            className="relative z-10 font-normal leading-none text-white"
                            style={{
                                fontSize: 'clamp(12px, 1vw, 18px)',
                                letterSpacing: 'clamp(-0.4px, -0.05vw, -0.9px)'
                            }}
                        >
                            ¥ Forex
                        </span>
                    </div>

                    {/* Futures Text */}
                    <div className="flex items-center">
                        <span
                            className="font-normal leading-none text-white opacity-80"
                            style={{
                                fontSize: 'clamp(12px, 1vw, 18px)',
                                letterSpacing: 'clamp(-0.4px, -0.05vw, -0.9px)'
                            }}
                        >
                            Futures (Coming Soon!)
                        </span>
                    </div>
                </div>

                {/* Desktop Right Group */}
                <div className="hidden md:flex items-center" style={{ gap: 'clamp(12px, 1.2vw, 24px)' }}>
                    {/* 40% OFF */}
                    <div
                        className="font-semibold text-white whitespace-nowrap"
                        style={{
                            fontSize: 'clamp(12px, 1vw, 18px)',
                            letterSpacing: 'clamp(-0.4px, -0.05vw, -0.9px)'
                        }}
                    >
                        40% OFF
                    </div>

                    {/* Timer */}
                    <div
                        className="text-white whitespace-nowrap"
                        style={{
                            fontSize: 'clamp(12px, 1vw, 18px)',
                            letterSpacing: 'clamp(-0.4px, -0.05vw, -0.9px)'
                        }}
                    >
                        <span className="font-normal">Offer Ends in : </span>
                        <span className="font-semibold">18:45:12</span>
                    </div>

                    {/* Code Button */}
                    <div
                        className="relative rounded-[65px] border border-[#a6b9ef] bg-[linear-gradient(90deg,rgba(99,116,181,0.44),rgba(181,197,255,0.44))] flex items-center"
                        style={{
                            width: 'clamp(120px, 10vw, 190px)',
                            height: 'clamp(26px, 2.2vw, 42px)',
                            paddingLeft: 'clamp(12px, 1.6vw, 20px)',
                            paddingRight: 'clamp(12px, 1.6vw, 20px)'
                        }}
                    >
                        <span
                            className="font-normal text-white"
                            style={{
                                fontSize: 'clamp(11px, 1vw, 18px)',
                                letterSpacing: 'clamp(-0.4px, -0.05vw, -0.9px)'
                            }}
                        >
                            Use Code : V40
                        </span>
                        <div
                            className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
                            style={{
                                right: 'clamp(6px, 0.8vw, 10px)',
                                width: 'clamp(14px, 1vw, 20px)',
                                height: 'clamp(14px, 1vw, 20px)'
                            }}
                        >
                            <img src="/assets/icon-bright.svg" alt="" className="w-full h-full" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
