"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    description: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}

const EmptyState = ({ icon: Icon, title, description, action }: EmptyStateProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center p-12 text-center bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-200"
        >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <Icon className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">{description}</p>

            {action && (
                <button
                    onClick={action.onClick}
                    className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                    {action.label}
                </button>
            )}
        </motion.div>
    );
};

export default EmptyState;
