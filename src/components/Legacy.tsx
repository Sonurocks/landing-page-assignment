"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/common/Button";
export default function Legacy() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [250, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section
      id="legacy"
      ref={containerRef}
      className="relative z-10 w-full min-h-screen py-20 flex items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col items-center"
        >
          <h2
            className="text-[20px] md:text-[28px] tracking-[0.1em] text-white uppercase mb-2 font-light"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            THE LEGACY
          </h2>
          <h3
            className="text-[32px] md:text-[46px] tracking-[0.05em] text-white uppercase font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            BEYOND COMPARE
          </h3>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mb-10">
            For over seven decades, we stood for perseverance, integrity, and
            nation-building through enterprise. Every step was guided by one oath:
            quality before profit, trust before everything.
          </p>
          <Button href="#history">
            OUR HISTORY
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
