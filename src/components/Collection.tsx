"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/common/Button";
export default function Collection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [250, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section
      id="collection"
      ref={containerRef}
      className="relative z-10 w-full min-h-screen py-20 flex items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col items-center"
        >
          <h2
            className="text-[20px] md:text-[28px] tracking-[0.1em] text-white uppercase mb-2 font-light"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            MUREC
          </h2>
          <h3
            className="text-[32px] md:text-[46px] tracking-[0.05em] text-white uppercase font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            COLLECTION
          </h3>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl mb-10">
            A portfolio shaped by legacy and guided by vision, the MUREC Collection is where every project reflects our way of building.
          </p>
          <Button href="#discover">
            DISCOVER MORE
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
