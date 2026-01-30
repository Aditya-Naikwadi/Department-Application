"use client";

import { GraduationCap } from "lucide-react";

export default function AlumniPage() {
    const alumni = [];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-[#2c3e50] font-serif">Alumni Directory</h1>

            {alumni.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <GraduationCap className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">No alumni found</h3>
                    <p className="text-gray-500 max-w-sm mx-auto mt-2">Connect with successful graduates from our department.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Map over alumni here */}
                </div>
            )}
        </div>
    );
}
