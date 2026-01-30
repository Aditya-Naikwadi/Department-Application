"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthView = "login" | "register";

interface AuthContextType {
    isModalOpen: boolean;
    view: AuthView;
    openLogin: () => void;
    openRegister: () => void;
    closeModal: () => void;
    toggleView: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [view, setView] = useState<AuthView>("login");

    const openLogin = () => {
        setView("login");
        setIsModalOpen(true);
    };

    const openRegister = () => {
        setView("register");
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleView = () => {
        setView((prev) => (prev === "login" ? "register" : "login"));
    };

    return (
        <AuthContext.Provider value={{ isModalOpen, view, openLogin, openRegister, closeModal, toggleView }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
