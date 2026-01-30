"use client";

import { MessageSquare } from "lucide-react";

export default function MessagesPage() {
    const messages = [];

    return (
        <div className="flex h-[calc(100vh-8rem)] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Sidebar list would go here */}
            {messages.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-400">
                        <MessageSquare className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">No messages</h3>
                    <p className="max-w-xs mx-auto mt-2">Your inbox is empty. Start a conversation with faculty or peers.</p>
                </div>
            ) : (
                <>
                    {/* Chat UI would go here */}
                </>
            )}
        </div>
    );
}
