"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
export default function FromOurPartners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="w-full min-h-[90vh] bg-[#f4f4f4] flex flex-col justify-center py-20">
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
        <div className="w-full grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] grid sm:grid-cols-[40%_1fr] gap-0 sm:gap-8 lg:gap-12 min-h-[380px] overflow-hidden"
          >
            <div className="w-full min-h-[300px] sm:min-h-0 sm:h-full relative">
              <Image
                src="/assets/team_2.png"
                alt="Bobby Mukherrji"
                width={800}
                height={800}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full p-8 sm:py-8 sm:pr-8 sm:pl-0 lg:py-12 lg:pr-10 flex flex-col justify-between">
              <div>
                <h3 className="text-[20px] text-[#333] font-medium mb-3" style={{ fontFamily: "var(--font-sans, sans-serif)" }}>
                  Bobby Mukherrji
                </h3>
                <p className="text-[#555] text-[14px] leading-[1.7] mb-8">
                  “We are engaged to conceptualize the interiors for Murec’s clubhouse and tower lobbies, with a focus on refined luxury and strong spatial identity.”
                </p>
              </div>
              <div>
                <Image src="/assets/05.png" alt="Bobby Mukherrji Architects" width={300} height={100} className="h-[40px] w-auto object-contain object-left" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] grid sm:grid-cols-[40%_1fr] gap-0 sm:gap-8 lg:gap-12 min-h-[380px] overflow-hidden"
          >
            <div className="w-full min-h-[300px] sm:min-h-0 sm:h-full relative">
              <Image
                src="/assets/team_3.png"
                alt="Goonmeet Ji"
                width={800}
                height={800}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full p-8 sm:py-8 sm:pr-8 sm:pl-0 lg:py-12 lg:pr-10 flex flex-col justify-between">
              <div>
                <h3 className="text-[20px] text-[#333] font-medium mb-3" style={{ fontFamily: "var(--font-sans, sans-serif)" }}>
                  Goonmeet Ji
                </h3>
                <p className="text-[#555] text-[14px] leading-[1.7] mb-8">
                  “We are engaged to sculpt the architectural vision for Murec as a contemporary residential landmark—an address conceived for refined urban living, where design elegance is thoughtfully interwoven with functional planning to shape a premium high-rise environment of enduring character and aspiration.”
                </p>
              </div>
              <div>
                <Image src="/assets/o6.png" alt="Design Forum International" width={300} height={100} className="h-[40px] w-auto object-contain object-left" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
