import { HeroSection } from "@/components/HeroSection";
import { ImageSlider } from "@/components/ImageSlider";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@components/Footer";
import GallerySection from "@components/GallerySection";

// HOME PAGE
const Home = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
      <HeroSection />
      <GallerySection />
      <TestimonialSection />
      <Footer />
    </div>
  )
}

export default Home;