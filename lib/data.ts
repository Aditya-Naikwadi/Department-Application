

export interface Faculty {
    id: number;
    _id: string; // For backward compatibility
    name: string;
    designation: string;
    qualification: string;
    experience: string;
    specialization: string;
    email: string;
    phone: string;
    image: string;
    subjects: string; // Changed from subject to matches component
    achievements: string;
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
export const facultyData: Faculty[] = [
    {
        id: 1,
        _id: "25",
        name: "Esmita Gupta",
        designation: "Vice Principal",
        qualification: "Not Provided",
        experience: "Not Provided",
        specialization: "IT",
        email: "Not Provided",
        phone: "Not Provided",
        image: "/faculty/esmita-gupta.jpg",
        subjects: "IT",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT.",
        qualifications: "Not Provided"
    },
    {
        id: 2,
        _id: "23",
        name: "Vinod Rajput",
        designation: "Assistant Professor",
        qualification: "Not Provided",
        experience: "Not Provided",
        specialization: "CS",
        email: "Not Provided",
        phone: "Not Provided",
        image: "/faculty/vinod-rajput.jpg",
        subjects: "CS",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in CS.",
        qualifications: "Not Provided"
    },
    {
        id: 3,
        _id: "3",
        name: "Akash Kamble",
        designation: "Assistant Professor",
        qualification: "MSc IT",
        experience: "11",
        specialization: "Cyber Security",
        email: "akash.kamble@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/akash-kamble.jpg",
        subjects: "Cyber Security",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in Cyber Security.",
        qualifications: "MSc IT"
    },
    {
        id: 4,
        _id: "7",
        name: "Ashwini Kulkarni",
        designation: "Assistant Professor",
        qualification: "BE, MCA",
        experience: "14",
        specialization: "IT/Cs Programming",
        email: "ashwini.kulkarni@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/ashwini-kulkarni.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "BE, MCA"
    },
    {
        id: 5,
        _id: "24",
        name: "Kajal Jaisinghani",
        designation: "Assistant Professor CS, Coordinator of DS",
        qualification: "MCA, MSc IT, MA(Economics), PhD (Pursuing)",
        experience: "10",
        specialization: "CS",
        email: "kajal.jaisinghani@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/kajal-jaisinghani.jpg",
        subjects: "CS",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in CS.",
        qualifications: "MCA, MSc IT, MA(Economics), PhD (Pursuing)"
    },
    {
        id: 6,
        _id: "26",
        name: "Pritam Kamble",
        designation: "Assistant Professor",
        qualification: "Not Provided",
        experience: "Not Provided",
        specialization: "CS",
        email: "Not Provided",
        phone: "Not Provided",
        image: "/faculty/pritam-kamble.jpg",
        subjects: "CS",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in CS.",
        qualifications: "Not Provided"
    },
    {
        id: 7,
        _id: "15",
        name: "Vandana Maurya",
        designation: "Assistant Professor",
        qualification: "BE, ME, NET",
        experience: "12",
        specialization: "IT/Cs Programming",
        email: "vandana.maurya@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/vandana-maurya.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "BE, ME, NET"
    },
    {
        id: 8,
        _id: "19",
        name: "Anjali Bunker",
        designation: "Assistant Professor",
        qualification: "UGC NET, MSc IT",
        experience: "3+",
        specialization: "IT",
        email: "anjali.bunker@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/anjali-bunker.jpg",
        subjects: "IT",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT.",
        qualifications: "UGC NET, MSc IT"
    },
    {
        id: 9,
        _id: "2",
        name: "Saba Shaikh",
        designation: "Assistant Professor",
        qualification: "MSc Comp Sci",
        experience: "7",
        specialization: "Programming",
        email: "saba.shaikh@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/saba-shaikh.jpg",
        subjects: "Programming",
        achievements: "1",
        bio: "Dedicated faculty member with expertise in Programming.",
        qualifications: "MSc Comp Sci"
    },
    {
        id: 10,
        _id: "9",
        name: "Rohini Patil",
        designation: "Assistant Professor",
        qualification: "Not Provided",
        experience: "9",
        specialization: "IT/Cs Programming",
        email: "rohini.patil@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/rohini-patil.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "Not Provided"
    },
    {
        id: 11,
        _id: "6",
        name: "Hemangi Talele",
        designation: "Assistant Professor",
        qualification: "MSc CS, Mathematics, NET, PhD (Pursuing)",
        experience: "11",
        specialization: "Programming",
        email: "hemangi.rane@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/hemangi-talele.jpg",
        subjects: "Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in Programming.",
        qualifications: "MSc CS, Mathematics, NET, PhD (Pursuing)"
    },
    {
        id: 12,
        _id: "13",
        name: "Neha Chhatwani",
        designation: "Assistant Professor",
        qualification: "BSc IT, MCA, B.Ed",
        experience: "5",
        specialization: "IT/Cs Programming",
        email: "neha.chhatwani@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/neha-chhatwani.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "BSc IT, MCA, B.Ed"
    },
    {
        id: 13,
        _id: "10",
        name: "Vrinda Patil",
        designation: "Assistant Professor",
        qualification: "MSc IT",
        experience: "5",
        specialization: "IT/Cs Programming",
        email: "vrunda.patil@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/vrinda-patil.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "MSc IT"
    },
    {
        id: 14,
        _id: "5",
        name: "Prachi Adhiraj",
        designation: "Assistant Professor",
        qualification: "MSc CS",
        experience: "4",
        specialization: "IT/Cs Programming",
        email: "prachi.adhiraj@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/prachi-adhiraj.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "MSc CS"
    },
    {
        id: 15,
        _id: "8",
        name: "Preeti Pareek",
        designation: "Assistant Professor",
        qualification: "MSc CS",
        experience: "1",
        specialization: "IT/Cs Programming",
        email: "preeti.pareek@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/preeti-pareek.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "MSc CS"
    },
    {
        id: 16,
        _id: "18",
        name: "Zunaria Ansari",
        designation: "Assistant Professor",
        qualification: "MSc CS",
        experience: "1",
        specialization: "IT/Cs Csf Programming",
        email: "zunaria.ansari@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/zunaria-ansari.jpg",
        subjects: "IT/Cs Csf Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Csf Programming.",
        qualifications: "MSc CS"
    },
    {
        id: 17,
        _id: "1",
        name: "Mayuri Bhosale",
        designation: "Assistant Professor",
        qualification: "MSc Maths, SET",
        experience: "8",
        specialization: "Maths & Statistics",
        email: "mayuribhosale@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/mayuri-bhosale.jpg",
        subjects: "Maths & Statistics",
        achievements: "No",
        bio: "Dedicated faculty member with expertise in Maths & Statistics.",
        qualifications: "MSc Maths, SET"
    },
    {
        id: 18,
        _id: "16",
        name: "Aakarshita Pandey",
        designation: "Assistant Professor",
        qualification: "MSc Comp Sci",
        experience: "1+",
        specialization: "IT/Cs Csf Programming",
        email: "aakarshita.pandey@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/aakarshita-pandey.jpg",
        subjects: "IT/Cs Csf Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Csf Programming.",
        qualifications: "MSc Comp Sci"
    },
    {
        id: 19,
        _id: "20",
        name: "Deepmala Maity",
        designation: "Assistant Professor",
        qualification: "MSc IT",
        experience: "3",
        specialization: "IT/Cs Programming",
        email: "deepmala.maity@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/deepmala-maity.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "MSc IT"
    },
    {
        id: 20,
        _id: "27",
        name: "Vimmi Gajbhije",
        designation: "Assistant Professor",
        qualification: "BE(IT), ME(CSE)",
        experience: "8.5+",
        specialization: "IT/CS",
        email: "vimmi.gajbhije@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/vimmi-gajbhije.jpg",
        subjects: "IT/CS",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/CS.",
        qualifications: "BE(IT), ME(CSE)"
    },
    {
        id: 21,
        _id: "11",
        name: "Shreya Tiwari",
        designation: "Assistant Professor",
        qualification: "MSc IT",
        experience: "3",
        specialization: "IT/Cs Programming",
        email: "shreya.tiwari@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/shreya-tiwari.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "MSc IT"
    },
    {
        id: 22,
        _id: "4",
        name: "Kalpesh Gaikwad",
        designation: "Assistant Professor",
        qualification: "MSc Maths, B.Ed (Mathematics & Science)",
        experience: "11",
        specialization: "Mathematics & Statistics",
        email: "kalpesh.gaikwad@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/kalpesh-gaikwad.jpg",
        subjects: "Mathematics & Statistics",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in Mathematics & Statistics.",
        qualifications: "MSc Maths, B.Ed (Mathematics & Science)"
    },
    {
        id: 23,
        _id: "12",
        name: "Gauri Shirsat",
        designation: "Assistant Professor",
        qualification: "MCA",
        experience: "10",
        specialization: "IT/Cs Programming",
        email: "gauri.shirsat@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/gauri-shirsat.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "MCA"
    },
    {
        id: 24,
        _id: "21",
        name: "Manasi Mali",
        designation: "Assistant Professor",
        qualification: "MSc AI",
        experience: "1",
        specialization: "IT/Cs Programming",
        email: "manasi.mali@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/manasi-mali.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "MSc AI"
    },
    {
        id: 25,
        _id: "22",
        name: "Rajeshwari Mistri",
        designation: "Assistant Professor",
        qualification: "MSc AI",
        experience: "1",
        specialization: "IT/Cs Programming",
        email: "rajeshwari.mistriv@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/rajeshwari-mistri.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "MSc AI"
    },
    {
        id: 26,
        _id: "17",
        name: "Omkar Patil",
        designation: "Assistant Professor",
        qualification: "MSc Data Science",
        experience: "1",
        specialization: "IT/Cs Csf Programming",
        email: "omkar.patil@bkbck.edu.in",
        phone: "Not Provided",
        image: "/faculty/omkar-patil.jpg",
        subjects: "IT/Cs Csf Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Csf Programming.",
        qualifications: "MSc Data Science"
    },
    {
        id: 27,
        _id: "14",
        name: "Kiara Sangtani",
        designation: "Assistant Professor",
        qualification: "BCA, MCA",
        experience: "7",
        specialization: "IT/Cs Programming",
        email: "kiara.sangtani@bkbirlacollegekalyan.com",
        phone: "Not Provided",
        image: "/faculty/kiara-sangtani.jpg",
        subjects: "IT/Cs Programming",
        achievements: "Not Provided",
        bio: "Dedicated faculty member with expertise in IT/Cs Programming.",
        qualifications: "BCA, MCA"
    },
];

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
