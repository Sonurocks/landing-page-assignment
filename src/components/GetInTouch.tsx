"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
export default function GetInTouch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div 
      ref={ref} 
      className="relative w-full h-[80vh] min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/assets/getbg.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10 w-full max-w-[800px] mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[36px] md:text-[44px] text-white tracking-[0.1em] font-light mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          GET IN TOUCH
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-32 border-t border-[rgba(255,255,255,0.6)] mb-10"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[17px] md:text-[19px] text-white leading-[1.8] mb-12 font-normal"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          <p>Looking to collaborate, invest, or simply know more?</p>
          <p>Reach out and let’s connect.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="#contact" 
            className="inline-block border border-white text-white tracking-[0.15em] text-[13px] px-12 py-[14px] hover:bg-white hover:text-black transition-colors duration-300"
          >
            CONTACT US
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
