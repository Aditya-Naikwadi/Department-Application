"use client";

import { MessageCircle, Send, Minimize2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RAGService } from "@/lib/rag-service";
import clsx from "clsx";

interface Message {
    id: number;
    role: "user" | "assistant";
    content: string;
}

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, role: "assistant", content: "Hello! I'm the Department AI. Ask me anything about our faculty, programs, or resources." }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now(), role: "user", content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await RAGService.generateResponse(userMsg.content);
            const aiMsg: Message = { id: Date.now() + 1, role: "assistant", content: response };
            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { id: Date.now() + 1, role: "assistant", content: "Sorry, I encountered an error processing your request." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-8 z-50 w-full max-w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <h3 className="font-bold text-sm">Department AI</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Minimize Chat"
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <Minimize2 className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 min-h-[300px]">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={clsx(
                                        "flex w-full",
                                        msg.role === "user" ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            "max-w-[85%] p-3 text-sm rounded-2xl whitespace-pre-wrap",
                                            msg.role === "user"
                                                ? "bg-accent text-white rounded-tr-none"
                                                : "bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm"
                                        )}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75" />
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about faculty, syllabus..."
                                className="flex-1 bg-gray-100 text-gray-800 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
                            />
                            <button
                                type="submit"
                                aria-label="Send Message"
                                disabled={isLoading || !input.trim()}
                                className="bg-primary text-white p-2 rounded-full hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="fixed bottom-8 right-8 z-40">
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setIsOpen(true)}
                        aria-label="Open Chat"
                        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-colors duration-300 group relative"
                    >
                        <MessageCircle className="w-7 h-7 text-white fill-current" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                    </motion.button>
                )}
            </div>
        </>
    );
};

export default ChatWidget;
