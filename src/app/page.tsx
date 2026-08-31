"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Legacy from "@/components/Legacy";
import Principles from "@/components/Principles";
import Collection from "@/components/Collection";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import Zones from "@/components/Zones";
import Partners from "@/components/Partners";
import FromOurPartners from "@/components/FromOurPartners";
import GetInTouch from "@/components/GetInTouch";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Preloader = dynamic(() => import("@/components/Preloader"), {
  ssr: false,
});
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <main className="flex-1">
        <Navbar />
        <Hero />
        <div className="relative">
          <VideoSection src="/assets/m1.mp4" className="sticky top-0 z-0" />
          <Legacy />
        </div>
        <div className="relative">
          <VideoSection src="/assets/v2.mp4" className="sticky top-0 z-0" />
          <Principles />
        </div>
        <div className="relative">
          <VideoSection src="/assets/v3.mp4" className="sticky top-0 z-0" />
          <Collection />
        </div>
        <div className="relative">
          <VideoSection src="/assets/home.mp4" className="sticky top-0 z-0" />
          <DesignPhilosophy />
        </div>
        <Partners />
        <FromOurPartners />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
}
