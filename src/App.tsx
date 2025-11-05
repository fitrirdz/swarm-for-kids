import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendingCollection from "./components/TrendingCollection";
import TopCreators from "./components/TopCreators";
import BrowseCategories from "./components/BrowseCategories";
import DiscoverMore from "./components/DiscoverMore";
import FeaturedDrop from "./components/FeaturedDrop";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Newsletter from './components/NewsLetter';

export default function App() {
  return (
    <div className="bg-primary-black text-white min-h-screen w-screen font-inter">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-24"> 
        <HeroSection />
        <TrendingCollection />
        <TopCreators />
        <BrowseCategories />
        <DiscoverMore />
        <FeaturedDrop />
        <HowItWorks />
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
