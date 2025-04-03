import EuphoricBackground from "@/components/EuphoricBackground";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MovingCard from "@/components/MovingCard";
import MyCardStack from "@/components/MyCardStack";
import MyInstructorTooltip from "@/components/MyInstructorTooltip";
import MyWavyBackground from "@/components/MyWavyBackground";

import StickyScroolReveal from "@/components/StickyScroolReveal";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased">
        <HeroSection />
        <FeaturedCourses />
        <StickyScroolReveal />
        <EuphoricBackground />
        <MovingCard />
        <UpcomingWebinars/>
        
        <MyInstructorTooltip/>
        <Footer/>
      </main>
    </>
  );
}
