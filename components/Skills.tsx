"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import VideoBackground from "./VideoBackground";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-padding relative" id="services">
      <VideoBackground videoSrc="/background-v3.mp4" opacity={0.25} />
      <div className="container-custom relative z-10 space-y-3 md:space-y-5">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-text-tertiary">
            Dịch vụ & kỹ năng
          </p>
          <h2 className="section-title">Gói giải pháp & triển khai</h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            Cải tiến quy trình, thiết kế luồng, tối ưu vận hành và bảo mật; dùng
            công cụ phù hợp để hỗ trợ bài tập, báo cáo hay đề bài học tập.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.skills.map((category, index) => {
            const isOpen = openIndex === index;
            const tags = category.skills.flatMap((skill) =>
              skill
                .split(";")
                .map((tag) => tag.trim())
                .filter(Boolean)
            );

            return (
              <motion.div
                key={index}
                variants={item}
                className={`rounded-2xl bg-[#0f1115]/90 border border-border shadow-[0_20px_55px_rgba(0,0,0,0.45)] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.55)] ${
                  isOpen ? "lg:col-span-3" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-3 text-left px-4 sm:px-5 py-4 hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent font-semibold text-sm shadow-[0_0_18px_rgba(94,234,212,0.25)]">
                      {index + 1}
                    </div>
                    <span className="text-lg sm:text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {category.category}
                    </span>
                  </div>
                  <motion.span
                    initial={false}
                    animate={{
                      rotate: isOpen ? 90 : 0,
                      scale: isOpen ? 1.05 : 1,
                    }}
                    className="text-text-secondary"
                  >
                    {">"}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden px-4 sm:px-5 pb-4"
                    >
                      <div className="pt-3 border-t border-border/60 grid grid-cols-1 gap-2">
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-sm text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
