"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormState({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-[var(--section-padding)] overflow-hidden"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-sm mb-5"
            >
              Connect
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-lg mb-8"
            >
              Get In <span className="text-[var(--gold)]">Touch</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="body-text mb-12"
            >
              Looking to collaborate, invest, or simply know more? Reach out
              and let&apos;s connect.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-8"
            >
              <div className="flex gap-4 group">
                <div className="w-10 h-10 border border-[var(--charcoal-light)] flex items-center justify-center shrink-0 group-hover:border-[var(--gold)] transition-colors duration-300">
                  <MapPin
                    size={16}
                    strokeWidth={1.5}
                    className="text-[var(--gold)]"
                  />
                </div>
                <div>
                  <p className="text-[0.6875rem] tracking-[0.15em] text-[var(--muted)] uppercase mb-1">
                    Corporate Address
                  </p>
                  <p className="text-sm text-[var(--silver)] leading-relaxed">
                    Madhusudan, 2nd Floor, Riana Towers,
                    <br />
                    51-52, Noida Sector 136,
                    <br />
                    Uttar Pradesh - 201301
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 border border-[var(--charcoal-light)] flex items-center justify-center shrink-0 group-hover:border-[var(--gold)] transition-colors duration-300">
                  <Mail
                    size={16}
                    strokeWidth={1.5}
                    className="text-[var(--gold)]"
                  />
                </div>
                <div>
                  <p className="text-[0.6875rem] tracking-[0.15em] text-[var(--muted)] uppercase mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@murec.com"
                    className="text-sm text-[var(--silver)] hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    info@murec.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 border border-[var(--charcoal-light)] flex items-center justify-center shrink-0 group-hover:border-[var(--gold)] transition-colors duration-300">
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                    className="text-[var(--gold)]"
                  />
                </div>
                <div>
                  <p className="text-[0.6875rem] tracking-[0.15em] text-[var(--muted)] uppercase mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919717773229"
                    className="text-sm text-[var(--silver)] hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    +91 97177 73229
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="border border-[rgba(201,169,110,0.15)] p-8 lg:p-12 space-y-8"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[0.6875rem] tracking-[0.2em] text-[var(--muted)] uppercase mb-3"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className="w-full bg-transparent border-b border-[var(--charcoal-light)] text-[var(--cream)] py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-300 placeholder:text-[var(--charcoal-light)]"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[0.6875rem] tracking-[0.2em] text-[var(--muted)] uppercase mb-3"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className="w-full bg-transparent border-b border-[var(--charcoal-light)] text-[var(--cream)] py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-300 placeholder:text-[var(--charcoal-light)]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-[0.6875rem] tracking-[0.2em] text-[var(--muted)] uppercase mb-3"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[var(--charcoal-light)] text-[var(--cream)] py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-300 placeholder:text-[var(--charcoal-light)]"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[0.6875rem] tracking-[0.2em] text-[var(--muted)] uppercase mb-3"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-transparent border-b border-[var(--charcoal-light)] text-[var(--cream)] py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-300 resize-none placeholder:text-[var(--charcoal-light)]"
                  placeholder="Tell us about your interest..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center"
                id="contact-submit-btn"
              >
                <span>{isSubmitted ? "Thank You!" : "Send Message"}</span>
                <span className="relative z-1">
                  {isSubmitted ? (
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  ) : (
                    <Send size={16} strokeWidth={1.5} />
                  )}
                </span>
              </button>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-[var(--gold)]"
                >
                  We&apos;ll get back to you shortly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
