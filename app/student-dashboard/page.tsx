"use client";

import { motion } from "framer-motion";
import { BookOpen, ListTodo, Bell, Calendar, ArrowRight } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-8 max-w-7xl mx-auto font-sans text-gray-800">
            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-[#2c3e50] font-serif mb-2">Welcome Back, Aditya! 👋</h1>
                <p className="text-gray-500 text-lg">You have some important updates for today.</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Enrolled Courses */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-5"
                >
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <BookOpen className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">5</h3>
                        <p className="text-gray-500 text-xs font-bold tracking-wider uppercase">Active Courses</p>
                    </div>
                </motion.div>

                {/* Upcoming Assignments */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-5"
                >
                    <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                        <ListTodo className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">3</h3>
                        <p className="text-gray-500 text-xs font-bold tracking-wider uppercase">Pending Tasks</p>
                    </div>
                </motion.div>

                {/* Unread Notifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-5"
                >
                    <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                        <Bell className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">12</h3>
                        <p className="text-gray-500 text-xs font-bold tracking-wider uppercase">New Notices</p>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Notifications */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-[#e6b422]" />
                            <h2 className="text-xl font-bold text-[#2c3e50] font-serif">Recent Notice Board</h2>
                        </div>
                        <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-gray-800 mb-1">Exam Schedule Released</h4>
                                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">New</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">The end semester examination schedule for B.Sc. IT (Sem V) has been published.</p>
                            <p className="text-xs text-gray-400">2 hours ago</p>
                        </div>

                        <div className="p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                            <h4 className="font-bold text-gray-800 mb-1">Guest Lecture on AI</h4>
                            <p className="text-sm text-gray-600 mb-2">Join us for an interactive session with Dr. Anjali Gupta on Future of AI.</p>
                            <p className="text-xs text-gray-400">Yesterday</p>
                        </div>

                        <div className="p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                            <h4 className="font-bold text-gray-800 mb-1">Library Due Date Extended</h4>
                            <p className="text-sm text-gray-600 mb-2">All books due this week can be returned by next Monday without fine.</p>
                            <p className="text-xs text-gray-400">2 days ago</p>
                        </div>
                    </div>
                </motion.section>

                {/* What's Next / Timeline */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-[#2c3e50] text-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="flex items-center gap-3 mb-8 relative z-10">
                        <Calendar className="w-5 h-5 text-[#e6b422]" />
                        <h2 className="text-xl font-bold font-serif text-white">Upcoming Events</h2>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 bg-[#e6b422] rounded-full ring-4 ring-white/10"></div>
                                <div className="w-0.5 h-full bg-white/10 my-1"></div>
                            </div>
                            <div className="pb-6">
                                <p className="text-xs font-medium text-[#e6b422] mb-1">Tomorrow, 10:00 AM</p>
                                <h4 className="font-bold text-white text-lg leading-tight mb-1">Project Review</h4>
                                <p className="text-sm text-gray-300">Phase 1 submission and presentation to guide.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 bg-blue-400 rounded-full ring-4 ring-white/10"></div>
                                <div className="w-0.5 h-full bg-white/10 my-1"></div>
                            </div>
                            <div className="pb-6">
                                <p className="text-xs font-medium text-blue-300 mb-1">Jan 30, 2:00 PM</p>
                                <h4 className="font-bold text-white text-lg leading-tight mb-1">Coding Hackathon</h4>
                                <p className="text-sm text-gray-300">Annual departmental hackathon registration ends.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 bg-purple-400 rounded-full ring-4 ring-white/10"></div>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-purple-300 mb-1">Feb 05</p>
                                <h4 className="font-bold text-white text-lg leading-tight mb-1">Cultural Fest</h4>
                                <p className="text-sm text-gray-300">Udaan 2026 Opening Ceremony.</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full mt-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 group">
                        View Full Calendar
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.section>
            </div>
        </div>
    );
}
