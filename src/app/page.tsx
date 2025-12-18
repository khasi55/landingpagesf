import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FixedStage from "@/components/FixedStage";
import PricingSection from "@/components/PricingSection";
import RewardsSection from "@/components/RewardsSection";
import RewardsSectionTwo from "@/components/RewardsSectionTwo";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-screen bg-black">
      <div className="relative z-50">
        <TopBar />
        <Navbar />
      </div>
      {/* 
        Hero Stage: Scales independently (Fit Width)
        Headers: Remain standard responsive (No Zoom)
      */}
      <FixedStage>
        <HeroSection />

        {/* Pricing Section - Row 20 */}
        <div
          className="absolute z-20 w-full left-0"
          style={{ top: "1900px" }}
        >
          <PricingSection />
        </div>

        {/* Rewards Section Background Strip (3310px - 4800px) */}
        <div
          className="absolute z-10 w-full left-0 bg-white"
          style={{
            top: "3310px",
            height: "1490px" // 4800 - 3310
          }}
        />

        {/* Rewards Section - Row 33.1 */}
        <div
          className="absolute z-20 w-full left-0"
          style={{ top: "3410px" }}
        >
          <RewardsSection />
        </div>

        {/* Rewards Section 2 Dark Background (Starts at 4800px) */}
        <div
          className="absolute z-10 w-full left-0 bg-[#00000A]"
          style={{
            top: "4800px",
            height: "1500px" // Estimating height for now
          }}
        />

        {/* Rewards Section Two (Flexible Payouts) - Dark Background */}
        <div
          className="absolute z-20 w-full left-0"
          style={{ top: "4900px" }}
        >
          <RewardsSectionTwo />
        </div>
      </FixedStage>
    </div>
  );
}
