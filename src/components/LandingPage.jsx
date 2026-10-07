import HeroSection from "./sections/HeroSection";
import FlowerSection from "./sections/FlowerSection";
import LetterSection from "./sections/LetterSection";
import GallerySection from "./sections/GallerySection";
import MemoriesSection from "./sections/MemoriesSection";
import MusicSection from "./sections/MusicSection";
import GratitudeJarSection from "./sections/GratitudeJarSection";
import ClosingSection from "./sections/ClosingSection";
import FinalCardSection from "./sections/FinalCardSection";

export default function LandingPage() {
    return (
        <div className="bg-maroon-950 text-blush">
            <HeroSection />
            <FlowerSection />
            <LetterSection />
            <GallerySection />
            <MemoriesSection />
            <MusicSection />
            <GratitudeJarSection />
            <ClosingSection />
            <FinalCardSection />
        </div>
    );
}