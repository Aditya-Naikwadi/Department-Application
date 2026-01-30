import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { DashboardProvider } from "@/context/DashboardContext";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardProvider>
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out">
                    <DashboardHeader />
                    <main className="flex-1 p-4 md:p-8 overflow-y-auto scroll-smooth">
                        {children}
                    </main>
                </div>
            </div>
        </DashboardProvider>
    );
}
