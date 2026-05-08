"use client";

import Image from "next/image";
import { FileJson, Code2, Globe } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative z-10 flex flex-col-reverse gap-12 md:flex-row w-full max-w-5xl px-4 sm:px-6 pt-32 sm:pt-40 md:pt-80 pb-20 mx-auto">
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
                    Halo, Saya <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Costa</span>
                </h2>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6">Pengembang Full Stack</h3>
                <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">Mengubah ide menjadi pengalaman digital modern.</p>
                <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center md:justify-start gap-4">
                    <a 
                        href="/Ardianus Caesar Emanual Ruicosta Du'u - CV_20260507_222435_0000.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        download="CV_Ardianus_Caesar.pdf"
                        className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-green-500/50 text-green-400 rounded-full font-medium hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg shadow-green-500/10 text-center"
                    >
                        Unduh CV ↓
                    </a>
                    <div className="flex items-center justify-center gap-4">
                        <div className="group relative flex items-center justify-center p-2 text-yellow-400 border border-yellow-500/20 bg-yellow-500/5 rounded-xl transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500/10">
                            <FileJson size={22} />
                            <span className="absolute -top-8 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-white">JS</span>
                        </div>
                        <div className="group relative flex items-center justify-center p-2 text-indigo-400 border border-indigo-500/20 bg-indigo-500/5 rounded-xl transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-500/10">
                            <Code2 size={22} />
                            <span className="absolute -top-8 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-white">PHP</span>
                        </div>
                        <div className="group relative flex items-center justify-center p-2 text-orange-400 border border-orange-500/20 bg-orange-500/5 rounded-xl transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/10">
                            <Globe size={22} />
                            <span className="absolute -top-8 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-white">HTML</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center relative">
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-emerald-500/30 overflow-hidden shadow-2xl shadow-emerald-500/20">
                    <Image src="/img-profile/costa2.jpeg" alt="Profile" fill className="object-cover" />
                </div>
                <div className="absolute -inset-4 border border-dashed border-gray-600 rounded-full animate-spin"></div>
            </div>
        </section>
    );
}
