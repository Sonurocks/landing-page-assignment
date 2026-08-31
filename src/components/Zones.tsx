"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TreePine, Droplets, Palmtree } from "lucide-react";
const zones = [
  {
    id: "A",
    icon: TreePine,
    title: "The Hidden Forest",
    tagline: "Zone A",
    description:
      "A secluded entry wrapped in dense greenery, sculptural elements, skywalks, and mountain-inspired trails. Your welcome begins in silence.",
    features: [
      "Dense green canopy entry",
      "Sculptural garden elements",
      "Elevated skywalks",
      "Mountain-inspired trails",
    ],
  },
  {
    id: "B",
    icon: Droplets,
    title: "The Water Miracle",
    tagline: "Zone B",
    description:
      "Stepped water bodies, interactive nozzles, sculptural animal landmarks, and cooling landscapes that transform space into therapy.",
    features: [
      "Stepped water bodies",
      "Interactive water nozzles",
      "Sculptural animal landmarks",
      "Cooling therapeutic landscapes",
    ],
  },
  {
    id: "C",
    icon: Palmtree,
    title: "The Street Forest",
    tagline: "Zone C",
    description:
      "Palm-lined medians, shaded pathways, textured paving, and integrated green benches redefine urban movement. Daily life, naturally elevated.",
    features: [
      "Palm-lined medians",
      "Shaded pedestrian pathways",
      "Textured artisan paving",
      "Integrated green benches",
    ],
  },
];
export default function Zones() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeZone, setActiveZone] = useState(0);
  return (
    <section
      id="zones"
      ref={ref}
      className="relative py-[var(--section-padding)] bg-[var(--charcoal)]"
    >
      <div className="divider" />
      <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-10 pt-[var(--section-padding)]">
        <div className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-sm mb-5"
          >
            Experiential Living
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-lg mb-6"
          >
            A Masterplan That{" "}
            <span className="text-[var(--gold)]">Flows Like a Forest</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="body-text mx-auto text-center max-w-2xl"
          >
            Three immersive experiential zones, each designed to evoke emotion,
            exploration, and everyday wellness.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-2 md:gap-4 mb-12 lg:mb-16"
        >
          {zones.map((zone, i) => (
            <button
              key={zone.id}
              onClick={() => setActiveZone(i)}
              className={`px-4 md:px-8 py-3 md:py-4 text-[0.75rem] tracking-[0.15em] uppercase font-medium transition-all duration-500 border ${
                activeZone === i
                  ? "border-[var(--gold)] text-[var(--gold)] bg-[rgba(201,169,110,0.08)]"
                  : "border-[var(--charcoal-light)] text-[var(--muted)] hover:border-[var(--muted)]"
              }`}
              aria-label={`Select ${zone.title}`}
            >
              <span className="hidden md:inline">{zone.title}</span>
              <span className="md:hidden">Zone {zone.id}</span>
            </button>
          ))}
        </motion.div>
        <motion.div
          key={activeZone}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border border-[var(--gold)] flex items-center justify-center">
                {(() => {
                  const Icon = zones[activeZone].icon;
                  return (
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-[var(--gold)]"
                    />
                  );
                })()}
              </div>
              <span className="heading-sm">{zones[activeZone].tagline}</span>
            </div>
            <h3
              className="heading-md mb-6"
            >
              {zones[activeZone].title}
            </h3>
            <p className="body-text mb-10">
              {zones[activeZone].description}
            </p>
            <ul className="space-y-4">
              {zones[activeZone].features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-px bg-[var(--gold)]" />
                  <span className="text-sm text-[var(--silver)]">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-center justify-center">
            <span
              className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-light text-transparent leading-none select-none"
              style={{
                fontFamily: "var(--font-serif)",
                WebkitTextStroke: "1px rgba(201, 169, 110, 0.15)",
              }}
            >
              {zones[activeZone].id}
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              {(() => {
                const Icon = zones[activeZone].icon;
                return (
                  <Icon
                    size={80}
                    strokeWidth={0.5}
                    className="text-[var(--gold)] opacity-30"
                  />
                );
              })()}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="divider mt-[var(--section-padding)]" />
    </section>
  );
}
