"use client";

import { usePathname } from "next/navigation";

interface HideOnRoutesProps {
    children: React.ReactNode;
    routes: string[];
}

export default function HideOnRoutes({ children, routes }: HideOnRoutesProps) {
    const pathname = usePathname();

    // Check if the current path starts with any of the routes to hide
    const shouldHide = routes.some((route) => pathname?.startsWith(route));

    if (shouldHide) {
        return null;
    }

    return <>{children}</>;
}
