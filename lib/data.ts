

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
    it: [
        {
            id: "bscit",
            title: "B.Sc.I.T.",
            description: "A comprehensive undergraduate program focusing on Information Technology, software development, and database management.",
            duration: "3 Years",
            seats: "60",
            tags: ["Java", "Python", "SQL", "Web Dev"]
        },
        {
            id: "bca",
            title: "BCA (AICTE)",
            description: "Bachelor of Computer Applications program approved by AICTE, providing a strong foundation in computer applications and software.",
            duration: "3 Years",
            seats: "60",
            tags: ["C++", "Data Structures", "DBMS"]
        },
        {
            id: "mscit-cloud",
            title: "M.Sc.I.T. with Cloud Computing specialization",
            description: "A postgraduate program with a specialization in Cloud Computing technologies, architecture, and services.",
            duration: "2 Years",
            seats: "40",
            tags: ["AWS", "Azure", "Virtualization", "DevOps"],
            featured: true
        },
        {
            id: "msc-data-science",
            title: "M.Sc. (Data Science & Big Data Analytics)",
            description: "In association with Group Data Analytic Cell, Aditya Birla Management Ltd., and TCS iON, this program focuses on data analysis, machine learning, and big data technologies.",
            duration: "2 Years",
            seats: "40",
            tags: ["Machine Learning", "Big Data", "R", "Tableau"]
        },
        {
            id: "mca",
            title: "MCA (AICTE)",
            description: "Master of Computer Applications program approved by AICTE, for advanced studies in software development and computer applications.",
            duration: "2 Years",
            seats: "60",
            tags: ["Advanced Java", "Software Engineering", "Mobile Dev"]
        }
    ],
    cs: [
        {
            id: "bvoc-cyber",
            title: "B.Voc. (Cyber Security and Forensic)",
            description: "A skill-based program under UGC (NSQF), New Delhi, focusing on the principles and practices of cyber security and digital forensics.",
            duration: "3 Years",
            seats: "50",
            tags: ["Ethical Hacking", "Forensics", "Network Security"]
        },
        {
            id: "bsc-cyber",
            title: "B.Sc. Cyber Security",
            description: "An undergraduate degree dedicated to the specialization of cyber security, network defense, and information protection.",
            duration: "3 Years",
            seats: "60",
            tags: ["Cryptography", "Risk Management", "Penetration Testing"]
        },
        {
            id: "msc-cyber",
            title: "M.Sc. Cyber Security",
            description: "An advanced postgraduate degree program focusing on specialized areas of cyber security and information assurance.",
            duration: "2 Years",
            seats: "40",
            tags: ["Advanced Ethical Hacking", "IoT Security", "Blockchain"]
        }
    ],
};

export const libraryResources: LibraryResource[] = [];

export const galleryCategories: GalleryCategory[] = [];
