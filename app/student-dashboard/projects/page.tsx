"use client";

import { GitBranch, Plus } from "lucide-react";

export default function ProjectsPage() {
    const projects = [];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[#2c3e50] font-serif">My Projects</h1>
                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-900 transition-colors shadow-sm">
                    <Plus className="w-4 h-4" />
                    Add Project
                </button>
            </div>

            {projects.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <GitBranch className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">No projects added</h3>
                    <p className="text-gray-500 max-w-sm mx-auto mt-2">Showcase your academic and personal projects here.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Map over projects here */}
                </div>
            )}
        </div>
    );
}
