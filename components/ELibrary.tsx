"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Search, FileText, Download } from "lucide-react";
import clsx from "clsx";
import { libraryResources } from "@/lib/data";

const categories = ["All", "NEWSLETTER", "SYLLABUS", "RESEARCH PAPER", "GUIDE", "REPORT"];

const ELibrary = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredResources = libraryResources.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section id="elibrary" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-gray-900 inline-block relative pb-2">
                        E-Library
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Access important documents, research papers, and department newsletters.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                    {/* Search Bar */}
                    <div className="relative w-full max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent sm:text-sm shadow-sm transition-shadow duration-200"
                            placeholder="Search documents..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className="w-full md:w-48">
                        <select
                            aria-label="Filter by category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="block w-full py-3 px-4 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent shadow-sm text-gray-700 cursor-pointer"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Resource Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredResources.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 flex flex-col"
                            >
                                <div className="p-6 flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className={clsx(
                                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide",
                                            item.category === "NEWSLETTER" ? "bg-blue-100 text-blue-800" :
                                                item.category === "SYLLABUS" ? "bg-purple-100 text-purple-800" :
                                                    item.category === "RESEARCH PAPER" ? "bg-green-100 text-green-800" :
                                                        "bg-gray-100 text-gray-800"
                                        )}>
                                            {item.category}
                                        </span>
                                        <FileText className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium">
                                        {item.date}
                                    </p>
                                </div>

                                <div className="px-6 pb-6 mt-auto">
                                    <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                                        <Download className="h-4 w-4" />
                                        View PDF
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredResources.length === 0 && (
                    <div className="text-center py-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                            <Search className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">No documents found</h3>
                        <p className="mt-1 text-gray-500">
                            Try adjusting your search or category filter.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ELibrary;
