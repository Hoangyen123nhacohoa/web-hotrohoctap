"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import VideoBackground from "./VideoBackground";

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section
      className="section-padding relative bg-bg-secondary"
      id="experience"
    >
      <VideoBackground videoSrc="/background-v3.mp4" opacity={0.4} />
      <div className="container-custom relative z-10">
        <h2 className="section-title">Kinh nghiệm</h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative pl-0 md:pl-20 mb-12 last:mb-0"
              >
                {/* Timeline marker */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-accent rounded-full border-4 border-bg-secondary hidden md:block z-10" />

                <div className="bg-bg-tertiary border border-border rounded-lg p-6">
                  <div className="flex flex-wrap gap-2 items-baseline mb-4">
                    <h3 className="text-xl font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <span className="text-accent font-medium">
                      {exp.company}
                    </span>
                    <span className="text-text-tertiary text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-3 leading-relaxed">
                    <strong className="text-text-primary">Phạm vi:</strong>{" "}
                    {exp.scope}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Tác động:</strong>{" "}
                    {exp.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
