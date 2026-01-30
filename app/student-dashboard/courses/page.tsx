"use client";

import { BookOpen } from "lucide-react";

export default function CoursesPage() {
    const courses = [];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[#2c3e50] font-serif">My Courses</h1>
                <button className="text-sm font-medium text-primary hover:underline">View All Schedule</button>
            </div>

            {courses.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">No courses enrolled</h3>
                    <p className="text-gray-500 max-w-sm mx-auto mt-2">You haven&apos;t enrolled in any courses yet. Browse the catalog to find comments.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Map over courses here if they existed */}
                </div>
            )}
        </div>
    );
}
