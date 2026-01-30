"use client";

import { User, Phone, MapPin, Edit, Mail } from "lucide-react";

export default function ProfilePage() {

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            {/* Header / Banner */}
            <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-[#2c3e50] font-serif">My Profile</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Personal Info Card */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4 border-4 border-white shadow-sm overflow-hidden">
                                <User className="w-16 h-16" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Aditya Naik</h2>
                            <p className="text-primary font-medium">Computer Science • Semester 6</p>

                            <button className="mt-6 flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                                <Edit className="w-4 h-4" /> Edit Profile
                            </button>

                            <div className="w-full border-t border-gray-100 my-6"></div>

                            <div className="w-full space-y-4 text-left">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    <span>aditya.naik@student.bkbirlacollege.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    <span>+91 98765 43210</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <span>Kalyan, Maharashtra</span>
                                </div>
                            </div>
                        </div>

                        {/* Academic & Stats */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Academic Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Roll Number</label>
                                        <p className="font-semibold text-gray-900">CS21045</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Enrollment Year</label>
                                        <p className="font-semibold text-gray-900">2023</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Current CGPA</label>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-primary">9.2</span>
                                            <span className="text-xs text-gray-400">(Up to Sem 5)</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Total Credits</label>
                                        <p className="font-semibold text-gray-900">120 / 140</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Performance</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 rounded-l-lg">Subject</th>
                                                <th className="px-4 py-3">Code</th>
                                                <th className="px-4 py-3 text-center">Grade</th>
                                                <th className="px-4 py-3 rounded-r-lg text-right">Credits</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Advanced Java</td>
                                                <td className="px-4 py-3 text-gray-500">CS501</td>
                                                <td className="px-4 py-3 text-center text-green-600 font-bold">O</td>
                                                <td className="px-4 py-3 text-right">4</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Data Structures</td>
                                                <td className="px-4 py-3 text-gray-500">CS502</td>
                                                <td className="px-4 py-3 text-center text-blue-600 font-bold">A+</td>
                                                <td className="px-4 py-3 text-right">4</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-gray-900">Operating Systems</td>
                                                <td className="px-4 py-3 text-gray-500">CS503</td>
                                                <td className="px-4 py-3 text-center text-blue-600 font-bold">A</td>
                                                <td className="px-4 py-3 text-right">4</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
