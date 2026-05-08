import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
    return (
        <div className="relative flex flex-col min-h-screen items-center font-mono bg-[#0B0F0C] overflow-hidden">
            <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-green-500 blur-[80px] sm:blur-[120px] md:blur-[150px] opacity-20 top-[-50px] sm:top-[-80px] md:top-[-100px] left-[-50px] sm:left-[-80px] md:left-[-100px] rounded-full" />
            <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-emerald-400 blur-[60px] sm:blur-[100px] md:blur-[120px] opacity-10 bottom-[-50px] sm:bottom-[-80px] md:bottom-[-100px] right-[-50px] sm:right-[-80px] md:right-[-100px] rounded-full" />
            <Navbar />
            <Hero />
            <AboutMe />
            <Skill/>
            <Project />
            <ContactMe />
            <Footer />
        </div>
    );
}
