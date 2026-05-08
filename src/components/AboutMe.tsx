"use client";

import Image from "next/image";
import { Monitor, Smartphone, Terminal } from "lucide-react";

export default function AboutMe() {
    return (
        <section id="about" className="relative w-full max-w-5xl px-4 sm:px-6 py-16 sm:py-20 mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16">Tentang Saya</h2>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24">
                <div className="flex-1 flex justify-center relative">
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px]">
                        <div className="absolute inset-0 bg-green-500 rounded-full blur-[50px] opacity-20 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-[6px] border-emerald-500/20 overflow-hidden z-10 shadow-2xl shadow-green-500/10">
                            <Image 
                                src="/img-profile/costa3.jpeg" 
                                alt="Profile" 
                                fill 
                                unoptimized
                                priority
                                className="object-cover scale-110" 
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">Saya Costa</h3>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        Seorang siswa Rekayasa Perangkat Lunak yang bersemangat dalam menciptakan aplikasi web dan mobile modern. Saya senang mengubah ide menjadi pengalaman yang fungsional, bersih, dan ramah pengguna menggunakan Laravel, Next.js, dan teknologi modern lainnya.
                    </p>
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
                            <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                <Monitor className="text-green-400" size={24} />
                            </div>
                            <span className="text-white font-medium">Pengembangan Aplikasi Web</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
                            <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                <Smartphone className="text-green-400" size={24} />
                            </div>
                            <span className="text-white font-medium">Pengembangan Aplikasi Mobile</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
                            <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                <Terminal className="text-green-400" size={24} />
                            </div>
                            <span className="text-white font-medium">Pemecahan Masalah</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
