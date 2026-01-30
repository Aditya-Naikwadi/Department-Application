"use client";

import { Bell, Menu, Search } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";

const DashboardHeader = () => {
    const { toggleSidebar } = useDashboard();

    return (
        <header className="bg-white/80 backdrop-blur-md px-6 md:px-8 h-20 flex items-center justify-between sticky top-0 z-30 border-b border-gray-100 transition-all">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Toggle Sidebar"
                    aria-label="Toggle Sidebar"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Mobile Search - Optional or hidden */}
                <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 w-64 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-full transition-all duration-200">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white shimmer">
                        <span className="sr-only">Notifications</span>
                    </span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-gray-900 leading-tight">Aditya Naikwadi</p>
                        <p className="text-xs text-gray-500 font-medium">B.Sc. IT</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-white cursor-pointer hover:shadow-lg transition-shadow">
                        AN
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
