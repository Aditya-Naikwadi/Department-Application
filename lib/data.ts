

export interface Faculty {
    id: number;
    name: string;
    designation: string;
    qualification: string;
    experience: string;
    specialization: string;
    email: string;
    phone: string;
    image: string;
    subject: string;
    bio?: string;
    qualifications?: string;
}

export interface Program {
    id: string;
    title: string;
    description: string;
    duration: string;
    seats: string;
    tags: string[];
    image?: string;
    featured?: boolean;
}

export interface LibraryResource {
    id: number;
    title: string;
    category: string;
    date: string;
    size: string;
    type: string;
    downloadUrl: string;
}

import { LucideIcon } from "lucide-react";

export interface GalleryCategory {
    id: string;
    name: string; // Changed from title
    count: string; // Changed from number to string to match usage like "10 Photos"
    icon: LucideIcon; // Changed from any to LucideIcon
}

// Export empty arrays with explicit types
export const facultyData: Faculty[] = [];

export const programsData: { it: Program[]; cs: Program[] } = {
    it: [],
    cs: [],
};

export const libraryResources: LibraryResource[] = [];

export const galleryCategories: GalleryCategory[] = [];
