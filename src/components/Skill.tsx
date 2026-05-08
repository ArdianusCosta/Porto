"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React.js / Next.js", level: 85 },
  { name: "Laravel / PHP", level: 88 },
  { name: "Tailwind CSS", level: 75 },
  { name: "TypeScript", level: 65 },
  { name: "MySQL / PostgreSQL", level: 85 },
  { name: "Node.js", level: 60 },
  { name: "Git & GitHub", level: 85 },
  { name: "UI/UX Design (Figma)", level: 50 },
];

export default function Skill() {
  return (
    <section id="skills" className="relative z-10 w-full max-w-6xl px-6 py-24 mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Keahlian <span className="text-green-400">Teknis</span>
        </h2>
        <div className="w-16 h-1 bg-green-500 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-end mb-2">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-lg font-medium text-gray-200 group-hover:text-green-400 transition-colors duration-300"
              >
                {skill.name}
              </motion.span>
              <span className="text-green-500 font-mono text-sm font-bold">
                {skill.level}%
              </span>
            </div>
            <div className="relative h-[4px] w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "circOut", delay: index * 0.05 }}
                className="absolute h-full bg-gradient-to-r from-green-600 via-green-400 to-emerald-300 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-500/5 blur-[120px] pointer-events-none -z-10" />
    </section>
  );
}