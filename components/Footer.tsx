"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: College Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-accent">CS & IT Dept.</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            B.K. Birla College (Autonomous), Kalyan. Empowering students with cutting-edge technology education and research opportunities since 1999.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Department", href: "#about" },
                                { name: "Courses Offered", href: "#courses" },
                                { name: "Faculty", href: "#faculty" },
                                { name: "Student Activities", href: "#activities" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">
                                    B.K. Birla College Road, Kalyan (West),<br />
                                    Dist. Thane - 421 304,<br />
                                    Maharashtra, India.
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">+91 123 456 7890</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">csit@bkbirlacollege.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                        <div className="flex space-x-4">
                            {[
                                { icon: Facebook, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Linkedin, href: "#" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                                    aria-label="Social Media Link"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} B.K. Birla College CS & IT Department. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
