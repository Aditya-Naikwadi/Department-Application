"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/student-hero.png"
                    alt="Student in high-tech classroom"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Subtle Dark Blue Overlay */}
                <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/20" /> {/* Extra dimming for text readability */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold font-serif text-white tracking-tight mb-6 drop-shadow-xl leading-tight">
                        Shape the Future of Technology
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-lg md:text-xl text-gray-100 font-sans font-medium mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md opacity-90">
                        Welcome to the Department of CS & IT at B.K. Birla College. Empowering the next generation with cutting-edge education, research opportunities, and specific industry skills.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="bg-accent hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 tracking-wide uppercase text-sm">
                        Explore Our Programs
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                onClick={scrollToContent}
            >
                <ArrowDown className="w-10 h-10 text-white/80 hover:text-white transition-colors" />
            </motion.div>


        </section>
    );
};

export default Hero;
