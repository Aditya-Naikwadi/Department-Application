"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { galleryCategories } from "@/lib/data";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-gray-900 inline-block relative pb-2">
                        Gallery
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Explore the vibrant life of our department. Click on any section to see a detailed gallery of our events, achievements, and community highlights.
                    </p>
                </div>

                {/* Gallery Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {galleryCategories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={itemVariants}
                            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            className="bg-white rounded-xl p-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] cursor-pointer group border border-transparent hover:border-accent/10 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Decorative background circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors duration-300" />

                            <div className="relative flex flex-col items-center text-center z-10">
                                <div className="mb-6 p-4 rounded-full bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                                    <category.icon className="w-10 h-10" />
                                </div>

                                <h3 className="text-xl font-bold text-primary mb-2">
                                    {category.name}
                                </h3>

                                <span className="text-sm font-medium text-gray-400 group-hover:text-gray-500 transition-colors">
                                    {category.count}
                                </span>

                                {/* Hover indicator */}
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowRight className="w-5 h-5 text-accent" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Gallery;
