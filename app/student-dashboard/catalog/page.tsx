"use client";

import { Search, Filter, BookOpen } from "lucide-react";

export default function CatalogPage() {
    const catalogCourses = [];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <h1 className="text-3xl font-bold text-[#2c3e50] font-serif">Course Catalog</h1>
                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                        />
                    </div>
                    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50" aria-label="Filter">
                        <Filter className="w-4 h-4 text-gray-600" />
                    </button>
                </div>
            </div>

            {catalogCourses.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">No courses available</h3>
                    <p className="text-gray-500 max-w-sm mx-auto mt-2">Check back later for new course offerings.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Map over catalogCourses here */}
                </div>
            )}
        </div>
    );
}
