"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

const projects = [
    { 
        id: 1, 
        title: "Immanuel Community", 
        tech: "PHP + Tailwind CSS", 
        img: "/img-project/immanuelcomunity.png", 
        desc: "Website resmi gereja yang menyajikan jadwal ibadah, kumpulan khotbah pendeta, serta berbagai kesaksian iman dari jemaat.", 
        link: "https://immanuel.id/" 
    },
    { 
        id: 2, 
        title: "SaaSykit", 
        tech: "Laravel + Filament", 
        img: "/img-project/saasykit.png", 
        desc: "Solusi platform SaaS (Software as a Service) modern yang dirancang untuk mempercepat pengembangan bisnis digital.", 
        link: "https://saasykit.com/" 
    },
    { 
        id: 3, 
        title: "Shorrli", 
        tech: "Filament + Vue.js", 
        img: "/img-project/shorrli.png", 
        desc: "Aplikasi konsultasi inovatif yang memudahkan pengguna untuk terhubung dan berkonsultasi dengan para profesional.", 
        link: "https://www.shorrli.com/" 
    },
];

export default function Project() {
    return (
        <section id="projects" className="relative z-10 w-full max-w-7xl px-6 py-32 mx-auto">
            <div className="text-center mb-20">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    Proyek <span className="text-green-400">Unggulan</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-400 max-w-2xl mx-auto"
                >
                    Kumpulan proyek yang telah saya bangun menggunakan teknologi web modern.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#161B17] rounded-3xl border border-white/10 overflow-hidden hover:border-green-500/50 transition-all duration-500 shadow-xl"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-video overflow-hidden">
                            <Image 
                                src={project.img} 
                                alt={project.title} 
                                fill 
                                unoptimized
                                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#161B17] to-transparent opacity-60" />
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 bg-green-500/10 rounded-lg">
                                    <Code2 className="text-green-400" size={18} />
                                </div>
                                <span className="text-xs font-mono text-green-400 uppercase tracking-widest">{project.tech}</span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                {project.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                {project.desc}
                            </p>

                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white font-semibold bg-white/5 px-4 py-2 rounded-xl border border-white/10 hover:bg-green-500 hover:border-green-500 transition-all duration-300"
                            >
                                Demo Langsung <ExternalLink size={16} />
                            </a>
                        </div>

                        {/* Hover Border Effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500/30 rounded-3xl pointer-events-none transition-all duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
