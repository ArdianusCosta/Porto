"use client";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
      href: "https://github.com/ArdianusCosta",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      href: "https://instagram.com/costaaja02",
    },
    {
      name: "Mail",
      icon: <MdMail size={20} />,
      href: "mailto:costaaja017@gmail.com",
    },
  ];

  return (
    <footer className="relative z-10 w-full border-t border-white/5 bg-black/20 backdrop-blur-md py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Terminal
                className="text-green-500"
                size={20}
              />
              <h2 className="text-2xl font-bold text-white tracking-tighter">
                DEV
                <span className="text-green-500">
                  PORTFOLIO
                </span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">
              Membangun solusi digital yang efisien dan estetik
              melalui Rekayasa Perangkat Lunak.
            </p>
          </div>
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-mono tracking-widest text-gray-600 uppercase">
          <p>
            © {currentYear} — Costaaja
          </p>
          <div className="flex gap-4">
            <span className="hover:text-green-500 transition-colors cursor-pointer">
              Dibangun dengan Next.js
            </span>
            <span className="text-gray-800">•</span>
            <span className="hover:text-green-500 transition-colors cursor-pointer">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-green-500/5 blur-[100px] pointer-events-none -z-10" />
    </footer>
  );
}