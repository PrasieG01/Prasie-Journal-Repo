import polaroid1 from "../assets/polaroid1.jpg";
import polaroid2 from "../assets/polaroid2.jpg";
import polaroid3 from "../assets/polaroid3.jpg";
import polaroid4 from "../assets/polaroid4.jpg";

export const experiences = [
  {
    id: 1,
    role: "Academic Computing Expert",
    company: "BCIT",
    date: "September 2025 - Present",
    description: "IT support for students",
    image: polaroid1,
    color: "#ffcccc",
    details: [
      "Provide on-call technical support to students; troubleshoot software, hardware, and account issues.",
      "Create and manage IT tickets to track and resolve technical requests efficiently.",
      "Configure devices and maintain lab equipment, printers, and classroom technology across campus.",
    ],
  },

  {
    id: 2,
    role: "SDE Intern",
    company: "Amazon",
    date: "May 2025 - August 2025",
    description: "Explored Seattle, worked in AWS",
    image: polaroid1,
    color: "#ffcccc",
    details: [
      "Designed and deployed a custom tool that automated visual data processing, reducing manual review time by over 60%",
      "Utilized technologies such as Python, AWS, and internal developer tools to implement backend features",
      "Participated in daily Agile stand-ups, code reviews, and sprint planning to contribute to the full software development lifecycle",
    ],
  },
  {
    id: 3,
    role: "Tech Development Associate",
    company: "RICH Inc @Queens College",
    date: " Feb 2025 - April 2025",
    description: "Revamped the website for a after-school non-profit org",
    image: polaroid2,
    color: "#ccffcc",
    details: [
      "Led website redesign, improving accessibility and integrating updated content",
      "Optimized performance and ensure full mobile responsiveness",
      "Managed Google Classroom, moderating content and lesson plans for educators",
    ],
  },
  {
    id: 4,
    role: "Data Science Fellow",
    company: "America On Tech",
    date: "Sep 2024 - Dec 2024",
    description:
      "Developed a ML Model to predict student enterpreneurial success",
    image: polaroid2,
    color: "#ccffcc",
    details: [
      "Completed a 4-month Data Science Fellowship, mastering 9 modules in ML, data analysis, and predictive modeling with Python.",
      "Built a high-accuracy ML model using Scikit-learn and XGBoost to predict student entrepreneurial trends from behavioral data.",
      "Performed EDA and statistical modeling on large datasets using Pandas, NumPy, and Seaborn; presented insights to stakeholders.",
    ],
    link: "https://github.com/PrasieG01/StudentEnterprenuershipPredictionModel",
  },

  {
    id: 5,
    role: "Full-Stack Developer Intern",
    company: "Sara Technology",
    date: "Nov 2025 - Present",
    description: "Worked backend to support mobile applications",
    image: polaroid3,
    color: "#ccccff",
    details: [
      "Developed RESTful APIs using Node.js and Express to support mobile applications.",
      "Integrated third-party services and APIs to enhance application functionality.",
      "Optimized database queries, improving response times by 20%.",
    ],
  },

  {
    id: 6,
    role: "AI Researcher",
    company: "Humor Project at Computational Design Lab Columbia University",
    date: "January 2026 - Present",
    description: "Build AI to make people laugh :)",
    image: polaroid4,
    color: "#ffffcc",
  },
];
