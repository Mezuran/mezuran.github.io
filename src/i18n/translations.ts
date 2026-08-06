export type Lang = 'en' | 'id' | 'zh';

// Flat key -> { en, id, zh } map for client-side lookup
export const translationMap: Record<string, Record<Lang, string>> = {
  // Nav
  'nav.about': { en: 'About', id: 'Tentang', zh: '关于' },
  'nav.skills': { en: 'Skills', id: 'Keahlian', zh: '技能' },
  'nav.experience': { en: 'Experience', id: 'Pengalaman', zh: '经验' },
  'nav.education': { en: 'Education', id: 'Pendidikan', zh: '教育' },
  'nav.projects': { en: 'Projects', id: 'Proyek', zh: '项目' },
  'nav.contact': { en: 'Contact', id: 'Kontak', zh: '联系' },

  // Hero
  'hero.greeting': { en: "Hi, I'm Kai 👋", id: 'Hai, saya Kai 👋', zh: '你好，我是 Kai 👋' },
  'hero.titlePrefix': { en: 'I build things for the', id: 'Saya membuat sesuatu untuk', zh: '我为以下平台构建东西' },
  'hero.subtitle': {
    en: "Self-taught full-stack developer with 5 years of hands-on learning across web, game, and mobile stacks. I build web apps, tinker with DevOps infrastructure, and make games on the side.",
    id: 'Full-stack developer otodidak dengan 5 tahun pengalaman praktis di web, game, dan mobile. Saya membuat aplikasi web, bereksperimen dengan infrastruktur DevOps, dan membuat game di sampingnya.',
    zh: '自学全栈开发者，拥有 5 年 Web、游戏和移动端实战经验。我构建 Web 应用，钻研 DevOps 基础设施，还兼职做游戏。',
  },
  'hero.contactMe': { en: 'Contact Me', id: 'Hubungi Saya', zh: '联系我' },
  'hero.viewLinkedIn': { en: 'View LinkedIn', id: 'Lihat LinkedIn', zh: '查看 LinkedIn' },

  // About
  'about.title': { en: 'About', id: 'Tentang', zh: '关于' },
  'about.p1': {
    en: "Self-taught full-stack developer with 5 years of hands-on, practice-driven learning across the web, game, and mobile stacks — from front-end frameworks and authentication to server deployment and DevOps. Comfortable working independently, picking up new tools quickly, and delivering working software end to end.",
    id: 'Full-stack developer otodidak dengan 5 tahun pengalaman belajar praktis di web, game, dan mobile — dari framework front-end dan autentikasi hingga deployment server dan DevOps. Nyaman bekerja secara mandiri, cepat mempelajari tools baru, dan menghasilkan software yang berfungsi dari awal hingga akhir.',
    zh: '自学全栈开发者，拥有 5 年 Web、游戏和移动端实战学习经验——从前端框架和身份验证到服务器部署和 DevOps。擅长独立工作，快速学习新工具，端到端交付可用软件。',
  },
  'about.p2': {
    en: 'I value comfort and flexibility in how I work. I can be a bit awkward meeting new people, but I get past that by just showing up and interacting consistently. I\'m not fixated on doing things at a "perfect" pace — I make up for it with results I\'m proud of.',
    id: 'Saya menghargai kenyamanan dan fleksibilitas dalam cara kerja saya. Saya mungkin sedikit canggung saat bertemu orang baru, tapi saya mengatasinya dengan terus hadir dan berinteraksi secara konsisten. Saya tidak terpaku pada kecepatan yang "sempurna" — saya menebusnya dengan hasil yang saya banggakan.',
    zh: '我重视工作中的舒适和灵活性。遇到新朋友时可能有点尴尬，但我通过持续出现和互动来克服。我不执着于以"完美"的节奏做事——我用令自己骄傲的成果来弥补。',
  },

  // Skills
  'skills.title': { en: 'Skills', id: 'Keahlian', zh: '技能' },

  // Experience
  'experience.title': { en: 'Experience', id: 'Pengalaman', zh: '经验' },
  'experience.role': { en: 'DevOps Engineer', id: 'Insinyur DevOps', zh: 'DevOps 工程师' },
  'experience.company': { en: 'Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR)', id: 'Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR)', zh: '公共工程和公共住房部 (PUPR)' },
  'experience.period': { en: 'Late Aug – Early Dec 2024', id: 'Akhir Ags – Awal Des 2024', zh: '2024年8月底 – 12月初' },
  'experience.location': { en: 'Central Jakarta, Indonesia', id: 'Jakarta Pusat, Indonesia', zh: '雅加达中部，印度尼西亚' },
  'experience.bullet1': { en: 'Deployed a production website using the NGINX web server', id: 'Mendeploys website produksi menggunakan web server NGINX', zh: '使用 NGINX Web 服务器部署生产网站' },
  'experience.bullet2': { en: 'Migrated a large volume of data from Excel spreadsheets into a relational DBMS', id: 'Migrasi data dalam jumlah besar dari spreadsheet Excel ke DBMS relasional', zh: '将大量 Excel 数据迁移到关系型数据库管理系统' },
  'experience.bullet3': { en: 'Secured server access using SSH and a private VPN (Twingate)', id: 'Mengamankan akses server menggunakan SSH dan VPN privat (Twingate)', zh: '使用 SSH 和私有 VPN (Twingate) 保障服务器访问安全' },
  'experience.bullet4': { en: 'Mirrored a GitHub repository to the production server for streamlined deployment', id: 'Mirror repository GitHub ke server produksi untuk deployment yang lebih efisien', zh: '将 GitHub 仓库镜像到生产服务器以优化部署流程' },

  // Education
  'education.title': { en: 'Education', id: 'Pendidikan', zh: '教育' },
  'education.school': { en: 'Universitas Komputer Indonesia (UNIKOM)', id: 'Universitas Komputer Indonesia (UNIKOM)', zh: '印度尼西亚计算机大学 (UNIKOM)' },
  'education.degree': {
    en: 'Bachelor of Engineering, Informatics — 2024–2028 (in progress)',
    id: 'Sarjana Teknik, Informatika — 2024–2028 (sedang berlangsung)',
    zh: '工程学士，信息学 — 2024–2028（在读）',
  },

  // Certifications
  'certifications.title': { en: 'Certifications', id: 'Sertifikasi', zh: '认证' },

  // Projects
  'projects.title': { en: 'Projects', id: 'Proyek', zh: '项目' },
  'projects.code': { en: 'Code', id: 'Kode', zh: '代码' },
  'projects.live': { en: 'Live', id: 'Live', zh: '在线' },
  'projects.deployedOn': { en: 'Deployed on', id: 'Dideploy di', zh: '部署于' },
  'projects.gorHamesDesc': {
    en: 'Badminton court booking & management system with real-time scheduling and reservations, used by venues nationwide across Indonesia.',
    id: 'Sistem pemesanan & manajemen lapangan bulu tangkis dengan penjadwalan dan reservasi real-time, digunakan oleh venue di seluruh Indonesia.',
    zh: '羽毛球馆预订与管理系统，支持实时排班与预约，已被印尼全国场馆使用。',
  },
  'projects.kasKelasDesc': {
    en: 'Class treasury management app for a single class, tracking income, expenses, and balances.',
    id: 'Aplikasi pengelolaan kas kelas untuk satu kelas, melacak pemasukan, pengeluaran, dan saldo.',
    zh: '班级财务管理系统，追踪收入、支出和余额。',
  },
  'projects.piringRasaDesc': {
    en: 'A food discovery and recipe sharing platform.',
    id: 'Platform pencarian makanan dan berbagi resep.',
    zh: '美食发现与食谱分享平台。',
  },

  // Contact
  'contact.title': { en: "Let's talk", id: 'Mari bicara', zh: '聊聊吧' },
  'contact.location': { en: 'Bandung, West Java, Indonesia', id: 'Bandung, Jawa Barat, Indonesia', zh: '万隆，西爪哇，印度尼西亚' },
  'contact.email': { en: 'Email', id: 'Email', zh: '邮箱' },
  'contact.formName': { en: 'Name', id: 'Nama', zh: '姓名' },
  'contact.formNamePlaceholder': { en: 'Your name', id: 'Nama Anda', zh: '您的姓名' },
  'contact.formEmail': { en: 'Email', id: 'Email', zh: '邮箱' },
  'contact.formEmailPlaceholder': { en: 'you@example.com', id: 'anda@contoh.com', zh: 'you@example.com' },
  'contact.formMessage': { en: 'Message', id: 'Pesan', zh: '消息' },
  'contact.formMessagePlaceholder': { en: "What's on your mind?", id: 'Apa yang ingin Anda sampaikan?', zh: '您想说些什么？' },
  'contact.formSend': { en: 'Send Message', id: 'Kirim Pesan', zh: '发送消息' },

  // Footer
  'footer': { en: 'Built with Astro.', id: 'Dibuat dengan Astro.', zh: '使用 Astro 构建。' },

  // GitHub
  'github.title': { en: 'GitHub Activity', id: 'Aktivitas GitHub', zh: 'GitHub 动态' },
  'github.repos': { en: 'Repositories', id: 'Repositori', zh: '仓库' },
  'github.prs': { en: 'Pull Requests', id: 'Pull Requests', zh: '拉取请求' },
  'github.commits': { en: 'Commits', id: 'Komit', zh: '提交' },
  'github.viewOnGithub': { en: 'View on GitHub', id: 'Lihat di GitHub', zh: '在 GitHub 查看' },

  // Social
  'social.linkedin': { en: 'LinkedIn', id: 'LinkedIn', zh: 'LinkedIn' },
  'social.github': { en: 'GitHub', id: 'GitHub', zh: 'GitHub' },
  'social.twitter': { en: 'Twitter / X', id: 'Twitter / X', zh: 'Twitter / X' },
  'social.discord': { en: 'Discord', id: 'Discord', zh: 'Discord' },
  'social.instagram': { en: 'Instagram', id: 'Instagram', zh: 'Instagram' },
};
