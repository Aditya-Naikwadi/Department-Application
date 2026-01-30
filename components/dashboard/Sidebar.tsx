"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    BookOpen,
    Calendar,
    FileText,
    Users,
    MessageSquare,
    Award,
    Briefcase,
    GraduationCap,
    LogOut,
    X,
    User,
    Search,
    CalendarDays,
    Building2
} from "lucide-react";
import clsx from "clsx";
import { useDashboard } from "@/context/DashboardContext";

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { isSidebarOpen, closeSidebar } = useDashboard();

    const handleLogout = () => {
        // In a real app, clear auth tokens here
        router.push("/");
    };

    const navItems = [
        { name: "Overview", href: "/student-dashboard", icon: LayoutDashboard },
        { name: "My Courses", href: "/student-dashboard/courses", icon: BookOpen },
        { name: "Course Catalog", href: "/student-dashboard/catalog", icon: Search },
        { name: "My Documents", href: "/student-dashboard/documents", icon: FileText },
        { name: "Alumni Directory", href: "/student-dashboard/alumni", icon: Users },
        { name: "Calendar", href: "/student-dashboard/calendar", icon: Calendar },
        { name: "Messages", href: "/student-dashboard/messages", icon: MessageSquare },
        { name: "Events", href: "/student-dashboard/events", icon: CalendarDays },
        { name: "My Projects", href: "/student-dashboard/projects", icon: Briefcase },
        { name: "Achievements", href: "/student-dashboard/achievements", icon: Award },
        { name: "Internships", href: "/student-dashboard/internships", icon: GraduationCap },
        { name: "Placements", href: "/student-dashboard/placements", icon: Building2 },
    ];

    return (
        <>
            {/* Mobile Backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={clsx(
                    "fixed top-0 left-0 z-50 h-[100dvh] w-64 bg-[#1f2937] text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto flex flex-col shadow-xl font-sans",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Header */}
                <div className="p-6 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-white font-serif tracking-wide">Student Panel</h1>
                    <button
                        onClick={closeSidebar}
                        className="lg:hidden p-1 text-gray-400 hover:text-white transition-colors"
                        aria-label="Close sidebar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    {/* Desktop Hamburger Icon Placeholder if needed, but usually hidden on sidebar itself */}
                    {/* The screenshot shows a hamburger on the right, which might be the menu trigger when sidebar is closed, 
                        BUT inside the sidebar header it serves as a close button or just decoration. 
                        Given the screenshot is likely the open state, we'll keep it simple. */}
                </div>

                {/* Nav Items */}
                <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => closeSidebar()}
                                className={clsx(
                                    "flex items-center gap-4 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg",
                                    isActive
                                        ? "bg-[#d97706] text-[#1f2937]"
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <item.icon
                                    className={clsx(
                                        "w-5 h-5",
                                        isActive ? "text-[#1f2937]" : "text-gray-300"
                                    )}
                                />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer / User Area */}
                <div className="p-4 border-t border-gray-700/30 space-y-2 mb-2">
                    <Link
                        href="/student-dashboard/profile"
                        onClick={() => closeSidebar()}
                        className="flex items-center gap-4 px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                        <User className="w-5 h-5" />
                        Profile
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-4 px-4 py-3 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 w-full rounded-lg transition-colors text-left"
                    >
                        <LogOut className="w-5 h-5 transform rotate-180" />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
