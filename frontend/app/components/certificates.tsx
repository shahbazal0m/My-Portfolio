"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, ShieldCheck, Cloud, Link2 } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    title: "Job Ready Cohort",
    organization: "Sheryians Coding School",
    date: "Jan - Sep 2025",
    icon: <Award className="text-purple-400" />,
    image: "/certificates-images/sheryians.png",
    tags: ["MERN Stack", "DevOps", "DSA"],
    verifyLink: "https://drive.google.com/file/d/1m7dLbmEnVu_8KDc1nbMb65C3QAjnfwhy/view?usp=sharing", 
  },
  {
    title: "AWS Academy Graduate",
    organization: "AWS Academy",
    date: "Nov 2025",
    icon: <Cloud className="text-blue-400" />,
    image: "/certificates-images/aws.png",
    tags: ["Cloud Architecting", "AWS Services"],
    verifyLink: "https://www.credly.com/badges/7b92f015-e6fd-4e7b-b2ed-6b4b85f9a17c/linked_in_profile",
  },
  {
    title: "Cloud Computing (NPTEL)",
    organization: "IIT Kharagpur",
    date: "Jul - Oct 2025",
    icon: <ShieldCheck className="text-lime-400" />,
    image: "/certificates-images/nptel.png",
    tags: ["Distributed Systems", "Virtualization", "Scaling"],
    verifyLink: "https://drive.google.com/file/d/10rA8xpujhkxIuzI0q4pavUi-xrW2ZHAH/view?usp=drivesdk",
  },
  {
    title: "Hashgraph Developer",
    organization: "The Hashgraph Association",
    date: "Dec 2025",
    icon: <Link2 className="text-indigo-400" />,
    image: "/certificates-images/Hashgraphh.png",
    tags: ["DLT", "Hedera", "Smart Contracts"],
    verifyLink: "https://drive.google.com/file/d/1un2lXML7KnmlSbGuA6L1Ryzg_Ty9lOQX/view?usp=sharing",
  },
];



const Certifications = () => {
  return (
    <section id="certifications" className="py-6 px-6 md:px-24 relative overflow-hidden w-full max-w-[1400px] mx-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold uppercase text-white/85 mb-4">
            Certifications & <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-lime-400">Credentials</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
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
              className="group relative bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-white/20 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row h-full">
                
                {/* Updated Image Container for better visibility */}
                <div className="relative w-full lg:w-56 h-100 lg:h-auto bg-zinc-800/50 flex items-center justify-center p-1">
                  <div className="relative w-full h-full aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        {cert.icon}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold bg-white/5 px-2 py-1 rounded">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 font-medium italic">
                      {cert.organization}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.tags.map((tag, tIndex) => (
                        <span 
                          key={tIndex}
                          className="text-[10px] px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white font-semibold hover:gap-3 transition-all group/btn"
                  >
                    Verify Credential 
                    <ExternalLink size={14} className="text-lime-400 group-hover/btn:rotate-12 transition-transform" />
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