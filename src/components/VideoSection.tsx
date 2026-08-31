"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
interface VideoSectionProps {
  src: string;
  className?: string;
}
export default function VideoSection({ src, className }: VideoSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className={cn("w-full h-screen overflow-hidden bg-black", className)}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-90"
      >
        <source src={src} type="video/mp4" />
      </video>
    </section>
  );
}
