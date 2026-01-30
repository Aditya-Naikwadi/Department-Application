"use client";

import { Calendar } from "lucide-react";

export default function CalendarPage() {
    const schedule = [];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[#2c3e50] font-serif">Schedule</h1>
                <div className="bg-white border border-gray-200 rounded-lg p-1 flex text-sm">
                    <button className="px-3 py-1 bg-primary text-white rounded shadow-sm">List</button>
                    <button className="px-3 py-1 text-gray-500 hover:bg-gray-50 rounded">Month</button>
                </div>
            </div>

            {schedule.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <Calendar className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">No classes scheduled</h3>
                    <p className="text-gray-500 max-w-sm mx-auto mt-2">Your schedule is currently empty. Classes will appear here once assigned.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Map over schedule here */}
                </div>
            )}
        </div>
    );
}
