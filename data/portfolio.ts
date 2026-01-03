export interface Highlight {
  icon: string; // Biểu tượng/emoji nhỏ
  title: string; // Tiêu đề điểm nổi bật
  description: string; // Mô tả ngắn gọn (ưu tiên số liệu)
}

export interface CaseStudy {
  id: string;
  title: string; // Tên dự án
  year: string; // Năm thực hiện
  context: string; // Bối cảnh / nhu cầu
  problem: string; // Vấn đề cần giải quyết
  role: string; // Vai trò
  scope: string; // Phạm vi công việc
  approach: string; // Cách tiếp cận / quyết định chính
  implementation: string[]; // Chi tiết triển khai kỹ thuật
  results: string; // Kết quả (nên có KPI/metrics)
  lessons: string; // Bài học rút ra
  techStack: string[]; // Công nghệ sử dụng
  imageUrl?: string; // Ảnh minh họa (tùy chọn)
}

export interface Experience {
  role: string; // Chức danh
  company: string; // Đơn vị / dự án / nhóm
  period: string; // Thời gian
  scope: string; // Mô tả công việc/chịu trách nhiệm
  impact: string; // Tác động / thành tựu (ưu tiên số liệu)
}

export interface SkillCategory {
  category: string; // Nhóm kỹ năng
  skills: string[]; // Danh sách kỹ năng
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string; // Vai trò chính
    avatar?: string; // Đường dẫn ảnh hồ sơ trong thư mục public (ví dụ: /profile.jpg)
    gallery?: { src: string; label?: string }[]; // Danh sách ảnh bổ sung (FB, Zalo, avatar khác)
    headline: string; // Câu đinh đầu
    valueProposition: string; // Đề xuất giá trị (bạn mang lại gì)
    email: string;
    zalo?: string;
    facebook?: string;
    linkedin: string;
    github: string;
    cvUrl: string; // Link CV
  };
  highlights: Highlight[];
  caseStudies: CaseStudy[];
  experience: Experience[];
  skills: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Tên: Hoàng Yếnn",
    avatar: "/profile.jpg",
    gallery: [
      { src: "/avatar-fb.jpg", label: "Facebook" },
      { src: "/avatar-zalo.jpg", label: "Zalo" },
    ],
    role: "Hỗ trợ học tập cho sinh viên đại học",
    headline:
      "Xây hệ thống tin cậy, an toàn, hiệu năng cao và sẵn sàng mở rộng.",
    valueProposition:
      "Minh bạch, không cọc. Sửa đến khi ổn. Làm việc có tâm, đúng tiến độ. Hạn chế công cụ tự động, bám sát yêu cầu môn học. Đồng hành và hỗ trợ sinh viên hết mình.",
    zalo: "https://zaloapp.com/qr/p/28hv09lxbt0s",
    facebook: "https://www.facebook.com/share/1CCwW5gnN1/",
    email: "your-email@example.com",
    linkedin: "",
    github: "",
    cvUrl: "",
  },

  highlights: [
    {
      icon: "⚡",
      title: "Hiệu năng",
      description:
        "Giảm thời gian phản hồi ~[X]% nhờ tối ưu kiến trúc, truy vấn và cache theo ngữ cảnh.",
    },
    {
      icon: "🛡️",
      title: "Bảo mật-by-design",
      description:
        "Áp dụng nguyên tắc bảo mật (validate input, phân quyền chặt, safe defaults), giảm rủi ro lỗi phổ biến ~[Y]%.",
    },
    {
      icon: "📈",
      title: "Khả năng mở rộng",
      description:
        "Thiết kế luồng dữ liệu và phân tách module giúp hệ thống chịu tải ~[Z] người dùng đồng thời, uptime mục tiêu [99.X]%.",
    },
    {
      icon: "🚀",
      title: "Triển khai & bàn giao",
      description:
        "Hoàn thiện và bàn giao [N] hạng mục/dự án theo mốc, rút ngắn thời gian release ~[A]% nhờ quy trình rõ ràng.",
    },
    {
      icon: "🧭",
      title: "Dễ bảo trì",
      description:
        "Thiết lập chuẩn code + cấu trúc sạch, giúp review nhanh hơn ~[B]%, giảm lỗi phát sinh khi thay đổi tính năng.",
    },
  ],

  caseStudies: [
    {
      id: "project-1",
      title: "[Tên dự án 1]",
      year: "[Năm]",
      context:
        "Mô tả ngắn bối cảnh và nhu cầu: tình huống ban đầu, vì sao cần làm dự án này.",
      problem:
        "Nêu rõ vấn đề: pain point, ràng buộc, yêu cầu quan trọng cần giải quyết.",
      role: "[Vai trò: Lead / Architect / Full-stack / Frontend / Backend]",
      scope: "Phạm vi: chịu trách nhiệm phần nào, quyết định gì, làm tới đâu.",
      approach:
        "Cách tiếp cận: tư duy giải quyết, quyết định kiến trúc chính, trade-off cần nhắc.",
      implementation: [
        "Chi tiết 1: ví dụ thiết kế API, phân quyền, cache, mô hình dữ liệu, UI system.",
        "Chi tiết 2: tối ưu truy vấn, logging/monitoring, xử lý lỗi.",
        "Chi tiết 3: CI/CD, test, bảo mật input.",
      ],
      results:
        "Kết quả đo lường: cải thiện X%, đạt Y người dùng, Z giao dịch/ngày, giảm lỗi W%.",
      lessons:
        "Bài học: điều hiệu quả, điều cần làm khác đi, kinh nghiệm rút ra.",
      techStack: [
        "[Công nghệ 1]",
        "[Công nghệ 2]",
        "[Công nghệ 3]",
        "[Công nghệ 4]",
      ],
    },
    {
      id: "project-2",
      title: "[Tên dự án 2]",
      year: "[Năm]",
      context: "Mô tả bối cảnh ngắn.",
      problem: "Nêu vấn đề cần giải quyết.",
      role: "[Vai trò]",
      scope: "[Phạm vi]",
      approach: "[Cách tiếp cận]",
      implementation: ["Chi tiết triển khai 1", "Chi tiết triển khai 2"],
      results: "Kết quả kèm số liệu.",
      lessons: "Bài học rút ra.",
      techStack: ["[Công nghệ 1]", "[Công nghệ 2]", "[Công nghệ 3]"],
    },
    {
      id: "project-3",
      title: "[Tên dự án 3]",
      year: "[Năm]",
      context: "Mô tả bối cảnh ngắn.",
      problem: "Nêu vấn đề cần giải quyết.",
      role: "[Vai trò]",
      scope: "[Phạm vi]",
      approach: "[Cách tiếp cận]",
      implementation: ["Chi tiết triển khai 1", "Chi tiết triển khai 2"],
      results: "Kết quả kèm số liệu.",
      lessons: "Bài học rút ra.",
      techStack: ["[Công nghệ 1]", "[Công nghệ 2]", "[Công nghệ 3]"],
    },
  ],

  experience: [
    {
      role: "[Chức danh / Vai trò]",
      company: "[Công ty / Nhóm / Dự án]",
      period: "[Bắt đầu] - [Kết thúc]",
      scope:
        "Mô tả trách nhiệm: bạn làm gì, phụ trách phần nào, phạm vi ảnh hưởng.",
      impact:
        "Thành tựu / tác động: nên có số liệu (tăng/giảm %, tiết kiệm thời gian, giảm lỗi...).",
    },
    {
      role: "[Chức danh / Vai trò]",
      company: "[Công ty / Nhóm / Dự án]",
      period: "[Bắt đầu] - [Kết thúc]",
      scope: "Mô tả ngắn.",
      impact: "Thành tựu chính.",
    },
    {
      role: "[Chức danh / Vai trò]",
      company: "[Công ty / Nhóm / Dự án]",
      period: "[Bắt đầu] - [Kết thúc]",
      scope: "Mô tả ngắn.",
      impact: "Thành tựu chính.",
    },
  ],

  skills: [
    {
      category: "Kinh tế và kinh doanh",
      skills: [
        "Kinh tế; Quản trị kinh doanh; Marketing; Thương mại điện tử; Quản trị nhân lực",
        "Kinh doanh quốc tế; Thương mại quốc tế; Quản trị thương mại; Quản trị dịch vụ",
        "Quản trị chất lượng; Quản trị chuỗi cung ứng; Quản trị khởi nghiệp; Quản trị dự án",
        "Quản trị sản xuất và vận hành; Quản trị khách sạn; Quản trị nhà hàng và dịch vụ ăn uống; Kinh doanh số",
      ],
    },
    {
      category: "Tài chính và kế toán",
      skills: [
        "Tài chính ngân hàng; Tài chính doanh nghiệp; Tài chính công; Đầu tư tài chính",
        "Chứng khoán; Bảo hiểm; Kế toán; Kế toán doanh nghiệp; Kế toán kiểm toán; Kiểm toán",
        "Phân tích tài chính; Quản trị tài chính; Thuế; Hải quan",
      ],
    },
    {
      category: "Logistics và vận hành",
      skills: [
        "Logistics và quản lý chuỗi cung ứng; Quản trị logistics; Quản trị kho vận",
        "Vận tải và logistics; Kinh tế vận tải; Quản lý cảng và logistics; Khai thác vận tải",
      ],
    },
    {
      category: "Công nghệ thông tin",
      skills: [
        "CNTT; Kỹ thuật phần mềm; Khoa học máy tính; An toàn thông tin",
        "Trí tuệ nhân tạo và khoa học dữ liệu; Hệ thống thông tin; Hệ thống thông tin quản lý",
        "Khoa học dữ liệu; Kỹ thuật máy tính; Mạng máy tính và truyền thông dữ liệu",
        "Điện toán đám mây; Internet vạn vật; Phát triển ứng dụng di động; Thiết kế game; Thương mại điện tử hướng công nghệ",
      ],
    },
    {
      category: "Du lịch và dịch vụ",
      skills: [
        "Du lịch; Quản trị dịch vụ du lịch và lữ hành; Quản trị khách sạn; Quản trị nhà hàng và dịch vụ ăn uống",
        "Hướng dẫn du lịch; Quản trị sự kiện; Quản trị resort; Du lịch lữ hành; Du lịch quốc tế; Du lịch điện tử",
      ],
    },
    {
      category: "Ngôn ngữ và văn học",
      skills: [
        "Ngôn ngữ và văn học Việt Nam; Ngôn ngữ Anh; Ngôn ngữ Trung; Ngôn ngữ Hàn; Ngôn ngữ Nhật; Ngôn ngữ Pháp; Ngôn ngữ Đức; Ngôn ngữ Nga",
        "Ngôn ngữ Tây Ban Nha; Ngôn ngữ Ý; Ngôn ngữ Bồ Đào Nha; Ngôn ngữ Ả Rập; Ngôn ngữ Thái; Ngôn ngữ Khmer",
        "Ngôn ngữ học; Ngôn ngữ học ứng dụng; Biên phiên dịch; Phiên dịch; Biên dịch; Sư phạm tiếng Anh",
        "Quốc tế học; Đông phương học; Nhật Bản học; Hàn Quốc học; Trung Quốc học",
      ],
    },
    {
      category: "Truyền thông và sáng tạo",
      skills: [
        "Truyền thông đa phương tiện; Quan hệ công chúng; Thiết kế đồ họa; Báo chí; Truyền thông số; Marketing truyền thông; Quảng cáo; Tổ chức sự kiện",
        "Thiết kế thời trang; Thiết kế nội thất; Nhiếp ảnh; Điện ảnh và truyền hình; Dựng phim; Thiết kế game; Thiết kế UI/UX; Sản xuất nội dung số",
      ],
    },
    {
      category: "Luật",
      skills: [
        "Luật; Luật kinh tế; Luật thương mại; Luật quốc tế; Luật dân sự; Luật hình sự; Luật hành chính; Luật lao động; Luật đất đai",
        "Luật sở hữu trí tuệ; Luật tài chính ngân hàng; Luật thuế; Luật môi trường; Luật hôn nhân và gia đình; Luật tố tụng và giải quyết tranh chấp; Luật CNTT và an ninh mạng",
      ],
    },
  ],
};
