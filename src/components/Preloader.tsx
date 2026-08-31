"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [counter, setCounter] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 1200);
          }, 400);
          return 100;
        }
        const increment = prev < 30 ? 2 : prev < 70 ? 3 : prev < 90 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#060606] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <span
              className="text-4xl md:text-5xl font-light tracking-[0.4em] text-[var(--cream)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              MUREC
            </span>
            <span className="block text-[0.6rem] tracking-[0.4em] text-[var(--gold)] uppercase mt-1">
              Madhusudan Urban Real Estate Collection
            </span>
          </motion.div>
          <div className="w-48 md:w-64">
            <div className="h-px bg-[var(--charcoal-light)] relative overflow-hidden">
              <motion.div
                className="h-full bg-[var(--gold)]"
                style={{ width: `${counter}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-[0.625rem] tracking-[0.2em] text-[var(--muted)] uppercase">
                Loading
              </span>
              <span className="text-[0.625rem] tracking-[0.2em] text-[var(--gold)] font-mono">
                {counter}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
