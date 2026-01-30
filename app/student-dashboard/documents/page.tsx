"use client";

import { FileText, Upload } from "lucide-react";

export default function DocumentsPage() {
    const documents = [];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[#2c3e50] font-serif">My Documents</h1>
                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-900 transition-colors shadow-sm">
                    <Upload className="w-4 h-4" />
                    Upload New
                </button>
            </div>

            {documents.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">No documents uploaded</h3>
                    <p className="text-gray-500 max-w-sm mx-auto mt-2">Upload your academic documents, certificates, and ID proofs here.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {/* Map over documents here */}
                </div>
            )}

            <div className="mt-8 border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <Upload className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-700">Upload Documents</h3>
                <p className="text-sm text-gray-500 mt-2">Drag and drop files here, or click to select files</p>
                <p className="text-xs text-gray-400 mt-1">Supports PDF, JPG, PNG up to 10MB</p>
            </div>
        </div>
    );
}
