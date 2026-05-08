"use client"

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="max-w-6xl mx-auto mt-4 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg">
                <h1 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">CST</h1>
                <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-300 font-medium">
                    {[
                        { label: "Beranda", id: "Home" },
                        { label: "Tentang", id: "about" },
                        { label: "Keahlian", id: "skills" },
                        { label: "Proyek", id: "projects" },
                        { label: "Kontak", id: "contact" }
                    ].map((item) => (
                        <li key={item.id}>
                            <Link href={item.id === "Home" ? "/" : `#${item.id}`} className="relative group hover:text-white transition duration-300">
                                {item.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
