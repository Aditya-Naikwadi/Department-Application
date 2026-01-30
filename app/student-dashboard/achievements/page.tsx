"use client";

import { Trophy } from "lucide-react";

export default function AchievementsPage() {
    const achievements = [];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-[#2c3e50] font-serif">Achievements</h1>

            {achievements.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <Trophy className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">No achievements yet</h3>
                    <p className="text-gray-500 max-w-sm mx-auto mt-2">Participate in events and competitions to earn recognition.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {/* Map over achievements here */}
                </div>
            )}
        </div>
    );
}
