"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Quy trình làm việc như thế nào?",
    answer:
      "Thu thập yêu cầu rõ ràng, xác nhận timeline, chốt phạm vi/kết quả. Gửi bản để xem, sửa theo feedback. Bản ổn thì bàn giao full file + ghi chú hướng dẫn.",
  },
  {
    question: "Nếu cần gấp thì sao?",
    answer:
      "Ưu tiên yêu cầu khẩn, đưa ra plan rút gọn. Sẽ thông báo rõ thời gian hỗ trợ tối thiểu và các mốc giao giữa.",
  },
  {
    question: "Có hỗ trợ chỉnh sửa sau khi bàn giao không?",
    answer:
      "Có. Bảo hành sửa đổi trong phạm vi đã chốt. Nếu phát sinh phần mới sẽ thống nhất lại phạm vi và chi phí (nếu có).",
  },
  {
    question: "Có giữ thông tin bí mật không?",
    answer:
      "Tất cả tài liệu chỉ dùng để hỗ trợ bạn, không chia sẻ ra ngoài. File được lưu trữ riêng và xóa sau khi hoàn tất nếu bạn yêu cầu.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative" id="faq">
      <div className="container-custom space-y-3 md:space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-text-tertiary">
            FAQ
          </p>
          <h2 className="section-title">Câu hỏi thường gặp</h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            Các nguyên tắc làm việc minh bạch: rõ phạm vi, rõ timeline, ưu tiên chất lượng và sự thoải mái khi cộng tác.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="border border-border rounded-2xl bg-[#0f1115]/90 shadow-[0_18px_50px_rgba(0,0,0,0.4)] hover:border-accent/35 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left px-4 sm:px-5 py-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold text-text-primary">
                    {item.question}
                  </span>
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-text-secondary text-xl"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden px-4 sm:px-5 pb-4"
                    >
                      <p className="text-text-secondary leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
