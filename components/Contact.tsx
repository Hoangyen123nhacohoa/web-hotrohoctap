"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import VideoBackground from "./VideoBackground";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const commitments = [
    "Hỗ trợ minh bạch, không phát sinh cọc.",
    "Chỉnh sửa linh hoạt đến khi hài lòng.",
    "Ưu tiên chất lượng, giữ đúng deadline.",
    "Tập trung nội dung, dùng công cụ hợp lý.",
    "Đồng hành sát sao, giúp bạn yên tâm.",
  ];

  const contactMethods = [
    {
      key: "zalo",
      label: "Zalo",
      link: portfolioData.personal.zalo,
      qr: "/qr-zalo.png",
      helper: "Phản hồi nhanh nhất qua Zalo.",
    },
    {
      key: "facebook",
      label: "Facebook",
      link: portfolioData.personal.facebook,
      qr: "/qr-facebook.png",
      helper: "Kết nối và cập nhật tiến độ.",
    },
  ].filter((method) => method.link);

  const copyLink = async (link: string, label: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.log("Copy failed", err);
    }
  };

  return (
    <section className="section-padding relative pb-24 scroll-mt-24" id="contact">
      <VideoBackground videoSrc="/background-v3.mp4" opacity={0.25} />
      <div className="container-custom relative z-10 space-y-6 md:space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.18em] text-text-tertiary">
              Liên hệ
            </p>
            <h2 className="section-title mb-0">Nhận tư vấn nhanh</h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              Chọn kênh phù hợp, scan QR hoặc mở link trực tiếp. Nếu cần gấp,
              nhắn tin rõ deadline và phạm vi để được ưu tiên.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(94,234,212,0.6)] animate-pulse" />
            Sẵn sàng hỗ trợ
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-5 sm:gap-6 lg:grid-cols-[1.05fr,0.95fr]"
        >
          <div className="p-5 sm:p-6 md:p-8 rounded-2xl border border-border bg-[#0f1115]/90 backdrop-blur-sm shadow-[0_25px_80px_rgba(0,0,0,0.45)] space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.18em] text-text-tertiary">
                Hoàng Yến - Hỗ trợ học tập
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-snug">
                Xây hệ thống tin cậy, an toàn, hiệu năng cao và sẵn sàng mở rộng.
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Rõ ràng phạm vi, bàn giao đúng công việc, luôn được hỗ trợ trên cơ sở thỏa thuận.
              </p>
            </div>

            <ul className="space-y-3">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-text-primary/90"
                >
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-[#06241d] border border-accent/40 shadow-[0_0_14px_rgba(94,234,212,0.25)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-3.5 w-3.5"
                      aria-hidden
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <span className="leading-relaxed text-text-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {["Sinh viên", "Bài tập / tiểu luận", "Thuyết trình", "Tư vấn quy trình"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-text-secondary"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="p-5 sm:p-6 md:p-8 rounded-2xl border border-border bg-gradient-to-br from-[#0b0d10] via-[#0f1115] to-[#0b0d10] shadow-[0_25px_80px_rgba(0,0,0,0.45)] space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-text-tertiary uppercase tracking-[0.15em]">
                Kênh liên hệ
              </p>
              <p className="text-text-secondary leading-relaxed">
                Scan QR hoặc mở link trực tiếp. Nhấn "Sao chép" nếu muốn gửi qua ứng dụng khác.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method) => (
                <div
                  key={method.key}
                  className="rounded-xl border border-border bg-[#0f1115]/90 p-4 shadow-[0_16px_45px_rgba(0,0,0,0.35)] flex flex-col gap-3 hover:-translate-y-1 hover:border-accent/35 transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-text-primary font-semibold">
                      {method.label}
                    </p>
                    {copied === method.key && (
                      <span className="text-accent text-xs font-semibold">
                        Đã sao chép
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={method.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover text-sm font-semibold underline"
                    >
                      Mở link
                    </a>
                    <button
                      onClick={() => copyLink(method.link as string, method.key)}
                      className="text-text-secondary text-sm hover:text-text-primary"
                    >
                      Sao chép
                    </button>
                  </div>

                  <div className="rounded-lg bg-white/5 border border-white/10 p-3 flex-1 flex items-center justify-center min-h-[180px]">
                    <img
                      src={method.qr}
                      alt={`Mã QR ${method.label}`}
                      className="max-h-40 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>

                  <p className="text-xs text-text-secondary">{method.helper}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
