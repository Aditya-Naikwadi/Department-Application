"use client";

import { Calendar } from "lucide-react";

export default function EventsPage() {
    const events = [];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-[#2c3e50] font-serif">Upcoming Events</h1>

            {events.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <Calendar className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">No upcoming events</h3>
                    <p className="text-gray-500 max-w-sm mx-auto mt-2">Stay tuned for new events and workshops.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {/* Map over events here */}
                </div>
            )}
        </div>
    );
}
