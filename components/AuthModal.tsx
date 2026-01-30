"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

// Inner component to handle form state and logic
// This ensures state resets automatically when the modal re-opens (re-mounts)
const AuthForm = ({ onClose }: { onClose: () => void }) => {
    const router = useRouter();
    const { view, toggleView } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [role, setRole] = useState("Student");
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: boolean } = {};

        if (!email) newErrors.email = true;
        if (!password) newErrors.password = true;

        if (view === "register") {
            if (!fullName) newErrors.fullName = true;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Mock success
        console.log("Form Submitted:", { email, password, fullName, role, view });

        onClose();

        if (role === "Student") {
            router.push("/student-dashboard");
        } else {
            // Placeholder for other roles
            router.push("/");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-2">
                            {view === "login" ? "Welcome Back" : "Create Account"}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            {view === "login"
                                ? "Enter your credentials to access your dashboard."
                                : "Join our community today."}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {view === "register" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-5 overflow-hidden"
                            >
                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className={clsx("h-5 w-5", errors.fullName ? "text-red-400" : "text-gray-400")} />
                                        </div>
                                        <input
                                            type="text"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className={clsx(
                                                "block w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-gray-900 placeholder-gray-400 sm:text-sm",
                                                errors.fullName ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-gray-200"
                                            )}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">I am a...</label>
                                    <div className="relative">
                                        <select
                                            aria-label="Select role"
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                            className="block w-full pl-3 pr-10 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-gray-900 sm:text-sm appearance-none bg-white"
                                        >
                                            <option>Student</option>
                                            <option>Faculty</option>
                                            <option>Alumni</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <ChevronDown className="h-4 w-4 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className={clsx("h-5 w-5", errors.email ? "text-red-400" : "text-gray-400")} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={clsx(
                                        "block w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-gray-900 placeholder-gray-400 sm:text-sm",
                                        errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-gray-200"
                                    )}
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className={clsx("h-5 w-5", errors.password ? "text-red-400" : "text-gray-400")} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={clsx(
                                        "block w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-gray-900 placeholder-gray-400 sm:text-sm",
                                        errors.password ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "border-gray-200"
                                    )}
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            {view === "login" ? "Login" : "Create Account"}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        {view === "login" ? (
                            <>
                                Don&apos;t have an account?{" "}
                                <button
                                    onClick={toggleView}
                                    className="font-bold text-accent hover:text-amber-700 transition-colors"
                                >
                                    Register here
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <button
                                    onClick={toggleView}
                                    className="font-bold text-accent hover:text-amber-700 transition-colors"
                                >
                                    Login here
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const AuthModal = () => {
    const { isModalOpen, closeModal } = useAuth();

    return (
        <AnimatePresence>
            {isModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
                    />
                    <AuthForm onClose={closeModal} />
                </>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;
