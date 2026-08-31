"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <footer
      ref={ref}
      className="relative bg-black text-white border-t border-[#1a1a1a]"
    >
      <div className="w-full px-6 md:px-12 lg:px-24 pt-[70px] pb-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-[40px]"
        >
          <h2 className="text-[28px] md:text-[32px] text-white uppercase tracking-wide font-medium" style={{ fontFamily: '"Playfair Display", "Playfair Display Fallback"' }}>
            The Murec Team
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-start gap-6"
          >
            <MapPin size={34} strokeWidth={1} className="text-white shrink-0 mt-1" />
            <div>
              <h3 className="text-[15px] md:text-[16px] text-white uppercase font-medium tracking-wide mb-1" style={{ fontFamily: '"Playfair Display", "Playfair Display Fallback"' }}>Corporate Address:</h3>
              <p className="text-[16px] md:text-[18px] text-[#cccccc] leading-normal font-light" style={{ fontFamily: '"Playfair Display", "Playfair Display Fallback"' }}>
                Madhusudan, 2nd Floor, Riana Towers, 51-52,<br />
                Noida Sector 136, Uttar Pradesh - 201301
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start gap-6"
          >
            <Mail size={34} strokeWidth={1} className="text-white shrink-0 mt-1" />
            <div>
              <h3 className="text-[15px] md:text-[16px] text-white uppercase font-medium tracking-wide mb-1" style={{ fontFamily: '"Playfair Display", "Playfair Display Fallback"' }}>Email</h3>
              <a href="mailto:info@murec.com" className="text-[16px] md:text-[18px] text-[#cccccc] font-light hover:text-white transition-colors" style={{ fontFamily: '"Playfair Display", "Playfair Display Fallback"' }}>
                info@murec.com
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-start gap-6"
          >
            <Phone size={34} strokeWidth={1} className="text-white shrink-0 mt-1" />
            <div>
              <h3 className="text-[15px] md:text-[16px] text-white uppercase font-medium tracking-wide mb-1" style={{ fontFamily: '"Playfair Display", "Playfair Display Fallback"' }}>Phone Number</h3>
              <a href="tel:+919717773229" className="text-[16px] md:text-[18px] text-[#cccccc] font-light hover:text-white transition-colors" style={{ fontFamily: '"Playfair Display", "Playfair Display Fallback"' }}>
                +91 97177 73229
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-[60px]"
        >
          <p className="text-[15px] md:text-[16px] text-[#b3b3b3] leading-normal font-light max-w-[95%]" style={{ fontFamily: 'Outfit, "Outfit Fallback", system-ui, sans-serif' }}>
            This website is purely conceptual and not a legal document. All layouts, specifications, amenities, and visuals are subject to change as may be decided by MUREC or the competent authority. No information herein shall be construed as an offer, solicitation, or invitation to purchase. Interested parties are requested to verify all details, including approvals, specifications, and prices, directly with MUREC before making any commitments.
          </p>
        </motion.div>
      </div>
      <div className="w-full bg-[#111111] px-6 md:px-12 lg:px-24 py-2 border-t border-[#222]">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-4">
          <p className="text-[14px] text-white/90 font-light justify-self-center md:justify-self-start text-center md:text-left">Powered by Propacity</p>
          <p className="text-[14px] text-white/90 font-light justify-self-center text-center">Copyright © 2026 | Privacy Policy</p>
          <div className="flex items-center gap-3 justify-self-center md:justify-self-end">
            <a href="#" className="w-[32px] h-[32px] rounded-full border border-white/40 flex items-center justify-center text-white/90 hover:bg-white hover:text-black hover:border-white transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-[32px] h-[32px] rounded-full border border-white/40 flex items-center justify-center text-white/90 hover:bg-white hover:text-black hover:border-white transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="#" className="w-[32px] h-[32px] rounded-full border border-white/40 flex items-center justify-center text-white/90 hover:bg-white hover:text-black hover:border-white transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
