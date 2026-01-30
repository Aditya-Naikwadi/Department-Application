"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { programsData } from "@/lib/data";
import EmptyState from "./ui/EmptyState";

const ProgramsGrid = () => {
    interface Program {
        title: string;
        description: string;
        duration: string;
        seats: string;
    }

    const [activeTab, setActiveTab] = useState<"it" | "cs">("it");

    return (
        <section id="programs" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-gray-900 inline-block relative pb-2">
                        Our Programs
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full"></span>
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex space-x-8 border-b-2 border-gray-200">
                        <button
                            onClick={() => setActiveTab("it")}
                            className={`pb-4 text-lg font-medium transition-colors relative ${activeTab === "it"
                                ? "text-accent"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            Information Technology
                            {activeTab === "it" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-[-2px] left-0 w-full h-1 bg-accent"
                                />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab("cs")}
                            className={`pb-4 text-lg font-medium transition-colors relative ${activeTab === "cs"
                                ? "text-accent"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            Computer Science
                            {activeTab === "cs" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-[-2px] left-0 w-full h-1 bg-accent"
                                />
                            )}
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {(!programsData[activeTab] || programsData[activeTab].length === 0) ? (
                                <EmptyState
                                    icon={BookOpen}
                                    title={`No ${activeTab === "it" ? "IT" : "CS"} programs found`}
                                    description="Program details will be available soon."
                                />
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {programsData[activeTab].map((program: Program) => (
                                        <motion.div
                                            key={program.title}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            whileHover={{ y: -5 }}
                                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                                        >
                                            <h3 className="text-2xl font-bold text-[#2c3e50] mb-3 group-hover:text-primary transition-colors">{program.title}</h3>
                                            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{program.description}</p>

                                            <div className="space-y-4 mb-8">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <span className="font-bold text-primary">Duration:</span> {program.duration}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <span className="font-bold text-primary">Seats:</span> {program.seats}
                                                </div>
                                            </div>

                                            <button className="w-full py-3 px-6 bg-gray-50 text-gray-700 font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg mt-auto">
                                                View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ProgramsGrid;
