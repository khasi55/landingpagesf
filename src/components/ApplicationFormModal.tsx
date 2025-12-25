"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";

interface ApplicationFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export default function ApplicationFormModal({ isOpen, onClose, jobTitle }: ApplicationFormModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Auto close after success
        setTimeout(() => {
            setIsSuccess(false);
            setFileName(null);
            onClose();
        }, 2000);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white rounded-[24px] w-full max-w-[550px] max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl relative">
                            {/* Header */}
                            <div className="sticky top-0 bg-white z-10 px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 font-medium mb-1">Apply for position</p>
                                    <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] text-black pr-8">
                                        {jobTitle}
                                    </h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors absolute right-4 top-4"
                                >
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {isSuccess ? (
                                    <div className="py-12 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-4">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Application Sent!</h4>
                                        <p className="text-gray-500">We've received your application and will get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="col-span-2 md:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#00C2FF] focus:ring-2 focus:ring-[#00C2FF]/20 outline-none transition-all placeholder:text-gray-300"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div className="col-span-2 md:col-span-1">
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#00C2FF] focus:ring-2 focus:ring-[#00C2FF]/20 outline-none transition-all placeholder:text-gray-300"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#00C2FF] focus:ring-2 focus:ring-[#00C2FF]/20 outline-none transition-all placeholder:text-gray-300"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#00C2FF] focus:ring-2 focus:ring-[#00C2FF]/20 outline-none transition-all placeholder:text-gray-300"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Resume/CV</label>
                                            <div
                                                onClick={() => fileInputRef.current?.click()}
                                                className="group w-full border-2 border-dashed border-gray-200 hover:border-[#00C2FF] rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-gray-50/50 hover:bg-[#00C2FF]/5"
                                            >
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                    accept=".pdf,.doc,.docx"
                                                    className="hidden"
                                                    required={!fileName}
                                                />
                                                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                                    <Upload className="w-5 h-5 text-[#00C2FF]" />
                                                </div>
                                                {fileName ? (
                                                    <p className="text-sm font-medium text-[#00C2FF] truncate max-w-[200px]">{fileName}</p>
                                                ) : (
                                                    <div className="text-center">
                                                        <p className="text-sm font-medium text-gray-700">Click to upload resume</p>
                                                        <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Why do you want to join us?</label>
                                            <textarea
                                                rows={3}
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#00C2FF] focus:ring-2 focus:ring-[#00C2FF]/20 outline-none transition-all placeholder:text-gray-300 resize-none"
                                                placeholder="Tell us a bit about yourself..."
                                            />
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00C2FF] to-[#0047FF] text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 active:scale-[0.98] transition-all disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    "Submit Application"
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
