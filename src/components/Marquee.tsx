"use client";
import { motion } from "framer-motion";
interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}
export default function Marquee({
  text,
  speed = 25,
  direction = "left",
  className = "",
}: MarqueeProps) {
  const items = Array(6).fill(text);
  return (
    <div className={`overflow-hidden whitespace-nowrap py-6 md:py-10 ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="flex gap-8 md:gap-16"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-5xl md:text-7xl lg:text-[6rem] font-light text-transparent tracking-wide shrink-0"
            style={{
              fontFamily: "var(--font-serif)",
              WebkitTextStroke: "1px rgba(201, 169, 110, 0.25)",
            }}
          >
            {item}
            <span className="mx-6 md:mx-12 text-[var(--gold)] opacity-20">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
