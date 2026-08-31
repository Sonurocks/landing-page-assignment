"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/common/Button";
export default function DesignPhilosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [250, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section
      id="design-philosophy"
      ref={containerRef}
      className="relative z-10 w-full min-h-screen py-20 flex items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col items-center"
        >
          <h2
            className="text-[28px] md:text-[36px] tracking-[0.05em] text-white uppercase mb-2 font-light"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            IGBC CERTIFIED
          </h2>
          <h3
            className="text-[32px] md:text-[46px] tracking-[0.05em] text-white uppercase font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            DESIGN PHILOSOPHY
          </h3>
          <p className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-3xl mb-12">
            The first MUREC collection is envisioned to align with the IGBC
            certification standards, reflecting a commitment to responsible
            development. From efficient resource planning to healthier living
            environments, the project integrates sustainability as a core design
            principle, thoughtfully, quietly, and with long-term impact in mind.
          </p>
          <Button href="#discover">
            DISCOVER MORE
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
