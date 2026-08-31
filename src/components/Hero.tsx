"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-black ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/assets/Vid2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex flex-col items-center text-center"
        >
          <p
            className="font-light text-white tracking-[0.15em] mb-8 md:mb-10 uppercase text-center pt-36"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
          >
            <span className="text-5xl md:text-7xl lg:text-[5.5rem] mr-3 md:mr-4 inline-block align-middle">
              <span className="font-semibold" style={{ fontWeight: 500 }}>
                78
              </span>
              <span>+</span>
            </span>
            <span className="text-xl md:text-3xl lg:text-5xl inline-block align-middle mt-1">
              YEARS OF LEGACY
            </span>
          </p>
          <div className="relative w-72 md:w-[28rem] lg:w-[37rem] mb-10">
            <Image
              src="/assets/madhusudan.png"
              alt="Madhusudan"
              width={800}
              height={200}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
          <a
            href="#legacy"
            className="flex items-center gap-2 text-xs md:text-sm tracking-[0.25em] text-white/80 hover:text-white transition-colors uppercase group"
          >
            Learn More
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
