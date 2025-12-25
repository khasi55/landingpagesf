"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ApplicationFormModal from "./ApplicationFormModal";

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
}

const jobs: Job[] = [
    {
        id: "1",
        title: "Senior Frontend Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
    },
    {
        id: "2",
        title: "Product Designer",
        department: "Design",
        location: "London, UK",
        type: "Full-time",
    },
    {
        id: "3",
        title: "Growth Marketing Manager",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
    },
    {
        id: "4",
        title: "Customer Success Specialist",
        department: "Support",
        location: "New York, USA",
        type: "Full-time",
    },
];

export default function JobOpenings() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    return (
        <section className="w-full py-24 bg-white text-black relative z-20">
            <div className="w-full max-w-[1200px] mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)] mb-4">
                        Open Positions
                    </h2>
                    <p className="text-[#595959] text-lg">
                        Find your perfect role and help us shape the future.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-[#00C2FF]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedJob(job)}
                        >
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] group-hover:text-[#0047FF] transition-colors">
                                    {job.title}
                                </h3>
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <span>{job.department}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span>{job.location}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span>{job.type}</span>
                                </div>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedJob(job);
                                }}
                                className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-medium text-[#0047FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                            >
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ApplicationFormModal
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
                jobTitle={selectedJob?.title || ""}
            />
        </section>
    );
}
