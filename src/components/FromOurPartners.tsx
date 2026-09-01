"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partnersData = [
  {
    id: 1,
    name: "Bobby Mukherrji",
    image: "/assets/team_2.png",
    logo: "/assets/05.png",
    text: "“We are engaged to conceptualize the interiors for Murec’s clubhouse and tower lobbies, with a focus on refined luxury and strong spatial identity.”",
  },
  {
    id: 2,
    name: "Goonmeet Ji",
    image: "/assets/team_3.png",
    logo: "/assets/o6.png",
    text: "“We are engaged to sculpt the architectural vision for Murec as a contemporary residential landmark—an address conceived for refined urban living, where design elegance is thoughtfully interwoven with functional planning to shape a premium high-rise environment of enduring character and aspiration.”",
  },
];

export default function FromOurPartners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === partnersData.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? partnersData.length - 1 : prev - 1));
  };

  return (
    <div ref={ref} className="w-full min-h-[90vh] bg-[#f4f4f4] flex flex-col justify-center py-20 overflow-hidden">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[32px] md:text-[40px] text-[#111] uppercase tracking-[0.15em] font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            From Our Partners
          </h2>
        </motion.div>

        {/* Mobile View - State Based Carousel with Framer Motion */}
        <div className="block lg:hidden w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col overflow-hidden w-full"
            >
              <div className="w-full min-h-[350px] relative group">
                <Image
                  src={partnersData[currentIndex].image}
                  alt={partnersData[currentIndex].name}
                  width={800}
                  height={800}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer z-10 opacity-90 shadow-lg"
                  onClick={prevCard}
                >
                  <ChevronLeft className="text-white w-6 h-6" />
                </div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer z-10 opacity-90 shadow-lg"
                  onClick={nextCard}
                >
                  <ChevronRight className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="w-full p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-[24px] md:text-[20px] text-[#333] font-medium mb-3" style={{ fontFamily: "var(--font-sans, sans-serif)" }}>
                    {partnersData[currentIndex].name}
                  </h3>
                  <p className="text-[#555] text-[15px] md:text-[14px] leading-[1.7] mb-8">
                    {partnersData[currentIndex].text}
                  </p>
                </div>
                <div style={{ marginTop: "20px", width: "100%", height: "60px", display: "flex", alignItems: "center" }}>
                  <img src={partnersData[currentIndex].logo} alt={partnersData[currentIndex].name} style={{ maxHeight: "100%", maxWidth: "200px", objectFit: "contain" }} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop View - Standard Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-16">
          {partnersData.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
              className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] grid grid-cols-[40%_1fr] gap-12 min-h-[380px] overflow-hidden"
            >
              <div className="w-full h-full relative">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={800}
                  height={800}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full py-12 pr-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-[20px] text-[#333] font-medium mb-3" style={{ fontFamily: "var(--font-sans, sans-serif)" }}>
                    {partner.name}
                  </h3>
                  <p className="text-[#555] text-[14px] leading-[1.7] mb-8">
                    {partner.text}
                  </p>
                </div>
                <div style={{ marginTop: "20px", width: "100%", height: "60px", display: "flex", alignItems: "center" }}>
                  <img src={partner.logo} alt={partner.name} style={{ maxHeight: "100%", maxWidth: "200px", objectFit: "contain" }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
