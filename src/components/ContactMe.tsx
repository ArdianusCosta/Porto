"use client";

import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  Terminal,
  Send,
  CheckCircle2,
  XCircle,
  Loader2,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const contactInfo = [
  {
    icon: <Mail size={16} />,
    label: "Email",
    value: "costaaja017@gmail.com",
    href: "mailto:costaaja017@gmail.com",
  },
  {
    icon: <MapPin size={16} />,
    label: "Lokasi",
    value: "Yogyakarta, Indonesia",
    href: null,
  },
  {
    icon: <Clock size={16} />,
    label: "Respon",
    value: "< 24 jam",
    href: null,
  },
];

const socialLinks = [
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/usernamekamu",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={18} />,
    href: "https://linkedin.com/in/usernamekamu",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram size={18} />,
    href: "https://instagram.com/usernamekamu",
    label: "Instagram",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactMe() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbwVE3sqNzOuaWG4DKVfvbcb-0ceJMYkkinn3Wvo0JZtPttEPV7pNb-mjxVd_X2WaHut/exec";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(form).toString(),
      });

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative z-10 w-full max-w-6xl px-6 py-24 mx-auto"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-16"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-4"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />

            <span className="text-green-400 font-mono text-xs tracking-widest uppercase">
              Kontak
            </span>
          </div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
        >
          Hubungi{" "}
          <span className="text-green-400 relative">
            Saya
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-green-400 to-transparent" />
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-500 max-w-md font-mono text-sm leading-relaxed"
        >
          {`// Punya proyek keren? Butuh kolaborasi?\n// Atau sekadar mau ngobrol? Drop a message!`
            .split("\n")
            .map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-5 gap-8"
      >
        {/* LEFT SIDE */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <div className="rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/20">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />

              <span className="ml-2 text-gray-600 font-mono text-xs">
                contact.sh
              </span>
            </div>

            <div className="p-5 font-mono text-sm space-y-4">
              <div className="text-gray-600">
                <span className="text-green-400">~</span>{" "}
                <span className="text-gray-400">
                  cat contact_info.json
                </span>
              </div>

              <div className="space-y-3">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.4 + i * 0.15,
                      duration: 0.5,
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-500/60">
                      {item.icon}
                    </span>

                    <span className="text-gray-600">
                      {item.label}:
                    </span>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-green-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-300">
                        {item.value}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-1 pt-2">
                <span className="text-green-400">~</span>
                <span className="text-gray-400">▊</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-green-500/10 bg-green-500/5 p-5 flex items-center gap-4">
            <div className="relative">
              <span className="w-3 h-3 rounded-full bg-green-400 block" />

              <span className="w-3 h-3 rounded-full bg-green-400 absolute inset-0 animate-ping opacity-40" />
            </div>

            <div>
              <p className="text-green-400 font-mono text-sm font-semibold">
                Terbuka untuk Peluang
              </p>

              <p className="text-gray-500 text-xs mt-0.5">
                Freelance & Full-time · Siap berkolaborasi
              </p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/30 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-3"
        >
          <div className="rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-black/20">
              <Terminal
                size={14}
                className="text-green-500"
              />

              <span className="text-gray-500 font-mono text-xs">
                send_message.tsx
              </span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    name: "name",
                    label: "Nama",
                    placeholder: "John Doe",
                    type: "text",
                  },
                  {
                    name: "email",
                    label: "Email",
                    placeholder: "john@email.com",
                    type: "email",
                  },
                ].map((field) => (
                  <div
                    key={field.name}
                    className="flex flex-col gap-2"
                  >
                    <label className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                      <span className="text-green-500">
                        const
                      </span>{" "}
                      {field.label}
                    </label>

                    <div
                      className={`relative rounded-lg border transition-all duration-300 ${
                        focused === field.name
                          ? "border-green-500/40 bg-green-500/5"
                          : "border-white/5 bg-white/[0.03]"
                      }`}
                    >
                      <input
                        type={field.type}
                        name={field.name}
                        value={
                          form[
                            field.name as keyof typeof form
                          ]
                        }
                        onChange={handleChange}
                        onFocus={() =>
                          setFocused(field.name)
                        }
                        onBlur={() => setFocused(null)}
                        placeholder={field.placeholder}
                        required
                        className="w-full bg-transparent px-4 py-3 text-sm text-gray-200 placeholder-gray-700 font-mono outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                  <span className="text-green-500">
                    const
                  </span>{" "}
                  Pesan
                </label>

                <div
                  className={`relative rounded-lg border transition-all duration-300 ${
                    focused === "message"
                      ? "border-green-500/40 bg-green-500/5"
                      : "border-white/5 bg-white/[0.03]"
                  }`}
                >
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() =>
                      setFocused("message")
                    }
                    onBlur={() => setFocused(null)}
                    placeholder="Hai! Saya ingin ngobrol tentang..."
                    required
                    rows={5}
                    className="w-full bg-transparent px-4 py-3 text-sm text-gray-200 placeholder-gray-700 font-mono outline-none resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="font-mono text-xs">
                  {status === "success" && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      className="flex items-center gap-2 text-green-400"
                    >
                      <CheckCircle2 size={14} />
                      Pesan terkirim! Terima kasih 🚀
                    </motion.span>
                  )}

                  {status === "error" && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      className="flex items-center gap-2 text-red-400"
                    >
                      <XCircle size={14} />
                      Gagal kirim. Coba lagi ya!
                    </motion.span>
                  )}

                  {status === "idle" && (
                    <span className="text-gray-700">
                      * Semua field wajib diisi
                    </span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={
                    status === "loading" ||
                    status === "success"
                  }
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-semibold transition-all duration-300 ${
                    status === "success"
                      ? "bg-green-500/20 text-green-400 border border-green-500/20 cursor-not-allowed"
                      : status === "loading"
                      ? "bg-green-500/10 text-green-500 border border-green-500/20 cursor-wait"
                      : "bg-green-500 text-black hover:bg-green-400 shadow-lg shadow-green-500/20"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2
                        size={16}
                        className="animate-spin"
                      />
                      Mengirim...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 size={16} />
                      Terkirim!
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Kirim Pesan
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-500/3 blur-[120px] pointer-events-none -z-10 rounded-full" />
    </section>
  );
}
