// Structured content sourced verbatim from Samia Rafique's resume PDF
// and her Behance profile (https://www.behance.net/samiarafiq). This is
// the single data source for the About and Portfolio pages, and for
// sitemap generation — nothing here is invented copy.

type EducationEntry = {
  school: string;
  degree: string;
  period: string;
  location?: string;
};

export const education: EducationEntry[] = [
  {
    school: "Sarhad University of Science & Information Technology",
    degree: "M.A Fine Arts",
    period: "August 2024–Present",
    location: "Lahore",
  },
  {
    school: "University of Punjab",
    degree: "Bachelors of Fine Arts",
    period: "2020-2024",
  },
];

type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Design Impressao",
    role: "Graphic Designer",
    period: "August 2024–Present",
    location: "Lahore",
    bullets: [
      "Worked as part of a collaborative team, translating client briefs into creative, professional visual assets for print and digital platforms.",
      "Managed multiple projects simultaneously, producing high-quality designs within tight deadlines.",
      "Engaged with clients throughout the design process to ensure each project reflected their vision and exceeded expectations.",
      "Delivered effective packaging designs, balancing functionality with brand aesthetics to attract and retain customer attention.",
    ],
  },
  {
    company: "7 Technologies",
    role: "Graphic Designer",
    period: "November 2024–January 2025",
    location: "Remote",
    bullets: [
      "Created compelling social media graphics and advertisements to boost online engagement and brand visibility.",
      "Delivered high-quality, print-ready files, coordinating with print vendors to guarantee flawless output.",
      "Ensured seamless communication with clients, providing regular updates and revisions to meet project deadlines.",
    ],
  },
  {
    company: "Freelance Graphic Designer",
    role: "Graphic Designer",
    period: "May 2021-July 2024",
    bullets: [
      "Specialized in creating custom visual assets, including menus, logos, brochures, and social media graphics. Worked closely with clients to deliver brand-aligned designs for print and digital media, using AI tools and trend insights to produce high-quality, innovative visuals.",
    ],
  },
];

export const skills = [
  "Adobe Creative Suite",
  "AI (Midjourney, Ideogram)",
  "Canva",
  "Microsoft Office",
] as const;

export const expertise = [
  "Menu Design",
  "Signage Design",
  "Logo Design",
  "Print & Digital Media Design",
  "Social Media Graphics",
  "Social Media Campaigns",
  "Image Editing and Retouching",
  "Marketing Alignment",
  "Packaging and Product Design",
  "Photo Editing & Retouching",
  "AI-Powered Design Tools (image generation, automated layouts)",
] as const;

export const extraCurricular = [
  "Graphic Design Workshops",
  "Community Projects",
  "Freelance Networking",
  "Photography & Videography",
] as const;

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  behanceUrl: string;
};

// Sourced from https://www.behance.net/samiarafiq
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "pizza-den-grill-branding",
    title: "Pizza Den & Grill — Branding",
    category: "Branding",
    behanceUrl: "https://www.behance.net/gallery/241420599/Pizza-Den-Grill-Branding",
  },
  {
    slug: "kruncheez-branding",
    title: "Kruncheez — Branding",
    category: "Branding",
    behanceUrl: "https://www.behance.net/gallery/241417121/Kruncheez-Branding",
  },
  {
    slug: "portfolio-2025",
    title: "Portfolio 2025",
    category: "Portfolio / General Work",
    behanceUrl: "https://www.behance.net/gallery/241349939/Portfolio-2025",
  },
  {
    slug: "logofolio",
    title: "Logofolio",
    category: "Logo Design",
    behanceUrl: "https://www.behance.net/gallery/216647257/Logofolio",
  },
  {
    slug: "brand-guideline-visual-identity",
    title: "Brand Guideline, Visual Identity",
    category: "Brand Guidelines / Visual Identity",
    behanceUrl: "https://www.behance.net/gallery/216569641/Brand-Guideline-Visual-Identity",
  },
];
