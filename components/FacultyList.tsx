"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Image import removed as we are using a div placeholder
import { Search, X, Mail, GraduationCap, Briefcase, Users } from "lucide-react";
import { facultyData } from "@/lib/data";
import EmptyState from "./ui/EmptyState";

const FacultyList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFaculty, setSelectedFaculty] = useState<typeof facultyData[0] | null>(null);

    const filteredFaculty = facultyData.filter((member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section id="faculty" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-gray-900 inline-block relative pb-2">
                        Our Faculty
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Meet the dedicated mentors shaping the future of technology with their expertise and passion.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent sm:text-sm shadow-sm transition-all duration-200"
                            placeholder="Search by name or subject..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Conditional rendering for empty facultyData */}
                {/* Conditional rendering for empty facultyData */}
                {facultyData.length === 0 ? (
                    <EmptyState
                        icon={Users}
                        title="No faculty members found"
                        description="Faculty information will be updated soon. Please check back later."
                    />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                        {filteredFaculty.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedFaculty(member)}
                                className="group flex flex-col items-center text-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 cursor-pointer"
                            >
                                <div className="relative mb-4">
                                    <div className="w-24 h-24 rounded-full bg-gray-200 border-2 border-accent/20 p-1 group-hover:border-accent transition-colors duration-300">
                                        {/* Placeholder for Profile Image */}
                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-2xl font-serif font-bold text-gray-400">
                                            {member.name.charAt(0)}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-xs text-accent font-medium mt-1">
                                    {member.designation}
                                </p>
                                <span className="mt-2 inline-block px-2 py-1 bg-gray-50 text-[10px] uppercase tracking-wider text-gray-500 rounded-md">
                                    {member.subject}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Details Modal */}
                <AnimatePresence>
                    {selectedFaculty && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedFaculty(null)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                            />

                            {/* Card Content */}
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 pointer-events-auto relative overflow-hidden"
                                >
                                    {/* Top Pattern */}
                                    <div className="absolute top-0 left-0 w-full h-24 bg-primary" />

                                    <button
                                        onClick={() => setSelectedFaculty(null)}
                                        aria-label="Close modal"
                                        className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors z-10"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>

                                    <div className="relative z-10 flex flex-col items-center -mt-4 text-center">
                                        <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gray-200 overflow-hidden mb-4">
                                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-4xl font-serif font-bold text-gray-400">
                                                {selectedFaculty.name.charAt(0)}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-serif font-bold text-gray-900">
                                            {selectedFaculty.name}
                                        </h3>
                                        <p className="text-accent font-medium mb-1">
                                            {selectedFaculty.designation}
                                        </p>

                                        <div className="mt-6 w-full space-y-4 text-left">
                                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                                <Briefcase className="w-5 h-5 text-gray-400 mt-1" />
                                                <div>
                                                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Expertise</span>
                                                    <p className="text-sm font-semibold text-gray-900">{selectedFaculty.subject}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                                <GraduationCap className="w-5 h-5 text-gray-400 mt-1" />
                                                <div>
                                                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Qualifications & Experience</span>
                                                    <p className="text-sm text-gray-700">{selectedFaculty.qualifications} • {selectedFaculty.experience}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                                <Mail className="w-5 h-5 text-gray-400 mt-1" />
                                                <div>
                                                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Contact</span>
                                                    <a href={`mailto:${selectedFaculty.email}`} className="text-sm text-primary hover:underline">
                                                        {selectedFaculty.email}
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="pt-2">
                                                <p className="text-sm text-gray-600 italic leading-relaxed">
                                                    &quot;{selectedFaculty.bio}&quot;
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default FacultyList;
