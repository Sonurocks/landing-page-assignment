"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [250, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section id="partners" className="relative w-full overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover grayscale opacity-50"
        style={{ backgroundImage: "url('/assets/associations/buildingbg.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div
        ref={containerRef}
        className="relative z-10 w-full min-h-[80vh] flex flex-col items-center justify-center py-32"
      >
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          <h2
            className="text-4xl md:text-5xl text-white mb-20 uppercase tracking-widest font-light text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Associations
          </h2>
          <div className="w-full overflow-hidden flex relative">
            <motion.div
              className="flex items-center gap-16 md:gap-32 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 md:gap-32">
                  <Image
                    src="/assets/associations/02.png"
                    alt="Bobby Mukherji"
                    width={200}
                    height={100}
                    className="h-12 md:h-16 w-auto object-contain brightness-0 invert"
                  />
                  <Image
                    src="/assets/associations/designform.png"
                    alt="Design Forum"
                    width={200}
                    height={100}
                    className="h-12 md:h-16 w-auto object-contain brightness-0 invert"
                  />
                  <Image
                    src="/assets/associations/bajaj.png"
                    alt="Bajaj Housing"
                    width={200}
                    height={100}
                    className="h-12 md:h-16 w-auto object-contain brightness-0 invert"
                  />
                  <Image
                    src="/assets/associations/tq.png"
                    alt="TQ Cert"
                    width={200}
                    height={100}
                    className="h-12 md:h-16 w-auto object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
