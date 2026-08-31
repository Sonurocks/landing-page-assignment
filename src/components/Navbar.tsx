import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
const sidebarLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "OUR LEGACY", href: "#legacy" },
  { label: "THE MUREC COLLECTION", href: "#collection" },
  { label: "CAREERS", href: "#careers" },
  { label: "MEDIA (NEWS AND INSIGHTS)", href: "#media" },
  { label: "BLOGS", href: "#blogs" },
  { label: "CONTACT US", href: "#contact" },
];
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);
  return (
    <>
      <motion.header
        initial={{ y: -150 }}
        animate={{ y: isVisible ? 0 : -150 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          isScrolled
            ? "bg-black/90 backdrop-blur-md py-3 border-b border-white/10"
            : "py-2 md:py-2 bg-transparent",
        )}
      >
        <div className="max-w-[var(--container-max)]  flex items-center justify-between">
          <div className="w-10 md:w-11"></div>
          <a
            href="#home"
            className="relative z-10 group flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center"
            >
              <Image
                src="/assets/logo.png"
                alt="MUREC Logo"
                width={300}
                height={150}
                className="h-14 md:h-25 w-auto object-contain"
              />
            </motion.div>
          </a>
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="relative z-50 text-[var(--cream)] hover:text-[var(--gold)] transition-colors duration-300"
              aria-label="Open menu"
              id="menu-open-btn"
            >
              <Menu size={34} strokeWidth={1} color="#ffffff" />
            </button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-[60] bg-transparent"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] z-[70] bg-white overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-end px-4 py-1 shrink-0">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-black hover:text-gray-600 transition-colors duration-300 p-2"
                  aria-label="Close menu"
                  id="menu-close-btn"
                >
                  <X size={30} strokeWidth={1.5} />
                </button>
              </div>
              <nav className="murec-sidebar-nav flex-1 w-full px-8 flex flex-col justify-start items-center overflow-y-auto">
                {sidebarLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsSidebarOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="block shrink-0 w-full py-6 sm:py-[16px] text-center text-[14px] sm:text-[18px] leading-normal tracking-[0.25em] text-black hover:text-gray-500 transition-colors duration-300 border-b border-[#eaeaea] last:border-b-0 uppercase"
                    style={{ fontFamily: '"Playfair Display", "Playfair Display Fallback", serif' }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
