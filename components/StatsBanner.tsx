"use client";

import { motion } from "framer-motion";

const StatsBanner = () => {
    // Use empty array or fetch from props/context
    const stats: { label: string; value: string }[] = [];

    if (stats.length === 0) return null; // Don't show banner if no stats

    return (
        <section className="bg-primary py-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-4"
                        >
                            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-accent font-medium text-lg uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;
