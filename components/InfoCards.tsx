"use client";

import { Cpu, GraduationCap, Briefcase, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        name: "Advanced Labs",
        description: "State-of-the-art computer labs with high-performance workstations and latest software for hands-on learning.",
        icon: Cpu,
    },
    {
        name: "Expert Faculty",
        description: "Learn from experienced professors and industry experts dedicated to student success and research.",
        icon: GraduationCap,
    },
    {
        name: "Placement Cell",
        description: "Dedicated placement support with top tier recruiters and comprehensive career guidance programs.",
        icon: Briefcase,
    },
    {
        name: "Innovation Hub",
        description: "A collaborative space for students to work on real-world projects, hackathons, and startups.",
        icon: Zap,
    }
];

const InfoCards = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Why Choose Us?
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoCards;
