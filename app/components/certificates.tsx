"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Award,
  ShieldCheck,
  Cloud,
  FileSpreadsheet,
  Table,
  BadgeCheck,
  Network,
  Server,
  TrendingUp,
  Layers,
  Binary,
} from "lucide-react";
import { FaAws } from "react-icons/fa";
import { SiHtml5, SiCss, SiJavascript, SiDocker } from "react-icons/si";
import Image from "next/image";

// Reusable tags with icons
const T = {
  excel: { name: "Microsoft Excel", icon: <FileSpreadsheet size={14} className="text-[#217346]" /> },
  spreadsheets: { name: "Spreadsheets", icon: <Table size={14} className="text-[#E8A33D]" /> },
  iso: { name: "ISO 9001:2015", icon: <BadgeCheck size={14} className="text-[#E8A33D]" /> },
  cloud: { name: "Cloud Architecting", icon: <Cloud size={14} className="text-[#38BDF8]" /> },
  aws: { name: "AWS Services", icon: <FaAws className="text-[#FF9900]" /> },
  distributed: { name: "Distributed Systems", icon: <Network size={14} className="text-[#00BCD4]" /> },
  virtualization: { name: "Virtualization", icon: <Server size={14} className="text-[#A78BFA]" /> },
  scaling: { name: "Scaling", icon: <TrendingUp size={14} className="text-[#4ADE80]" /> },
  html: { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  css: { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
  js: { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  mern: { name: "MERN Stack", icon: <Layers size={14} className="text-[#47A248]" /> },
  devops: { name: "DevOps", icon: <SiDocker className="text-[#2496ED]" /> },
  dsa: { name: "DSA", icon: <Binary size={14} className="text-[#E8A33D]" /> },
};

const certificates = [
  {
    title: "Microsoft Excel",
    organization: "Skill Course (ISO 9001:2015)",
    date: "08 - Oct - 2026",
    icon: <FileSpreadsheet className="text-[#E8A33D]" />,
    image: "/certificates-images/excel.png",
    tags: [T.excel, T.spreadsheets, T.iso],
    verifyLink: "https://edu.skillcourse.in/view-certificate/SC-1I4TWFRDF4",
  },
  {
    title: "AWS Academy Graduate",
    organization: "AWS Academy",
    date: "09 - Nov - 2025",
    icon: <Cloud className="text-[#E8A33D]" />,
    image: "/certificates-images/aws.png",
    tags: [T.cloud, T.aws],
    verifyLink: "https://www.credly.com/badges/7b92f015-e6fd-4e7b-b2ed-6b4b85f9a17c/linked_in_profile",
  },
  {
    title: "Cloud Computing (NPTEL)",
    organization: "IIT Kharagpur",
    date: "Jul - Oct 2025",
    icon: <ShieldCheck className="text-[#E8A33D]" />,
    image: "/certificates-images/nptel.png",
    tags: [T.distributed, T.virtualization, T.scaling],
    verifyLink: "https://drive.google.com/file/d/10rA8xpujhkxIuzI0q4pavUi-xrW2ZHAH/view?usp=drivesdk",
  },
  {
    title: "Frontend Hackathon",
    organization: "Sheryians Coding School",
    date: "26 - July - 2025",
    icon: <Award className="text-[#E8A33D]" />,
    image: "/certificates-images/sheryians-hackathon.png",
    tags: [T.html, T.css, T.js],
    verifyLink: "https://drive.google.com/file/d/13Mx3er0g1mzQTu6tIgGcWFAGazs-YQ-g/view?usp=sharing",
  },
  {
    title: "Job Ready Cohort",
    organization: "Sheryians Coding School",
    date: "Jan - Sep 2025",
    icon: <Award className="text-[#E8A33D]" />,
    image: "/certificates-images/sheryians.png",
    tags: [T.mern, T.devops, T.dsa],
    verifyLink: "https://drive.google.com/file/d/1m7dLbmEnVu_8KDc1nbMb65C3QAjnfwhy/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#E8A33D] text-xs font-mono font-bold uppercase tracking-[0.3em] mb-2">
            // Verified credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold uppercase text-white/85 mb-4">
            Certifications
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Professional validations of my technical expertise in Full Stack Development, Cloud Infrastructure, and Emerging Technologies.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/40 border border-white/10 rounded-[1rem] overflow-hidden backdrop-blur-xl hover:border-[#E8A33D]/30 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row items-stretch">

                <div className="lg:w-72">
                  <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        {cert.icon}
                      </div>
                      
                      <span className="text-[10px] md:text-xs font-mono font-bold bg-white/5 backdrop-blur-md border border-white/10 rounded-[0.5rem] text-[#E8A33D] px-3 py-1 select-none whitespace-nowrap">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#E8A33D] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 font-medium italic">
                      {cert.organization}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.tags.map((tag) => (
                        <span 
                          key={tag.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-semibold bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-zinc-200 [&>svg]:text-sm"
                        >
                          {tag.icon}
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white font-small hover:gap-3 transition-all group/btn"
                  >
                    Verify Credential 
                    <ExternalLink size={14} className="text-[#E8A33D] group-hover/btn:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;