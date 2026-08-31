"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="about"
      ref={ref}
      className="relative py-[var(--section-padding)] overflow-hidden"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-[var(--gold)]" />
              <p className="heading-sm">Our Mission</p>
            </div>
            <h2
              className="text-2xl lg:text-3xl font-light text-[var(--cream)] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Blending legacy with innovation, turning values into{" "}
              <span className="text-[var(--gold)]">living spaces</span> that
              endure for generations.
            </h2>
            <p className="body-text">
              Guided by transparency, uncompromising quality, and the promise of
              trust, we aim to build not just projects, but lasting
              relationships. For us, real estate is an opportunity to serve, to
              inspire, and to build with conscience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-[var(--gold)]" />
              <p className="heading-sm">Our Vision</p>
            </div>
            <h2
              className="text-2xl lg:text-3xl font-light text-[var(--cream)] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Redefining real estate by carrying forward the Madhusudhan
              family&apos;s heritage of{" "}
              <span className="text-[var(--gold)]">integrity and fairness</span>.
            </h2>
            <p className="body-text">
              We aspire to create homes where pride is natural, trust is
              unquestioned, and design is timeless; spaces that honor the past
              while embracing the possibilities of tomorrow.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(201,169,110,0.1)]"
        >
          {[
            { value: "78+", label: "Years of Legacy" },
            { value: "1000+", label: "Families Impacted" },
            { value: "8+", label: "Sectors of Operation" },
            { value: "97", label: "Exclusive Villas" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              className="bg-[var(--background)] p-8 lg:p-12 text-center"
            >
              <span
                className="text-4xl lg:text-5xl font-light text-[var(--gold)] block mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {stat.value}
              </span>
              <span className="text-[0.6875rem] tracking-[0.2em] text-[var(--muted)] uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
