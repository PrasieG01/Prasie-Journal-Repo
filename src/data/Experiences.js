import polaroid1 from "../assets/polaroid1.jpg";
import polaroid2 from "../assets/polaroid2.jpg";
import polaroid3 from "../assets/polaroid3.jpg";
import polaroid4 from "../assets/polaroid4.jpg";
import polaroid5 from "../assets/polaroid5.jpg";
import polaroid6 from "../assets/polaroid6.jpg";

/*stickers*/
import aot from "../assets/aot.png";
import bc from "../assets/bc.png";
import aws from "../assets/aws.png";
import avatar from "../assets/avatar.png";
import rich from "../assets/rich.png";
// import humor from "../assets/humor.png";

export const experiences = [
  {
    id: 1,
    role: "Academic Computing Expert",
    company: "BCIT",
    date: "September 2025 - Present",
    description: "IT support for students",
    image: polaroid4,
    details: [
      "Provide on-call technical support to students; troubleshoot software, hardware, and account issues.",
      "Create and manage IT tickets to track and resolve technical requests efficiently.",
      "Configure devices and maintain lab equipment, printers, and classroom technology across campus.",
    ],
    tags: ["XGBoost", "Scikit-Learn", "Pandas", "Machine Learning"],
    companyUrl: "https://barnard.edu/bcit",
    sticker: bc,
    stickerStyle: { 
      height: "75px",       
      marginLeft: "240px",   
      marginTop: "-5px"     
    },
  },

  {
    id: 2,
    role: "SDE Intern",
    company: "Amazon",
    date: "May 2025 - August 2025",
    description: "Explored Seattle, worked in AWS",
    image: polaroid1,
    details: [
      "Designed and deployed a custom tool that automated visual data processing, reducing manual review time by over 60%",
      "Utilized technologies such as Python, AWS, and internal developer tools to implement backend features",
      "Participated in daily Agile stand-ups, code reviews, and sprint planning to contribute to the full software development lifecycle",
    ],
    tags: ["XGBoost", "Scikit-Learn", "Pandas", "Machine Learning"],
    companyUrl: "https://aws.amazon.com/ai/machine-learning/amis/",
    sticker: aws,
    stickerStyle: { 
      height: "85px",       
      marginLeft: "200px",   
      marginTop: "-5px"     
    },
  },
  {
    id: 3,
    role: "Tech Development Associate",
    company: "RICH Inc @Queens College",
    date: " Feb 2025 - April 2025",
    description: "Revamped the website for a after-school non-profit org",
    image: polaroid2,
    details: [
      "Led website redesign, improving accessibility and integrating updated content",
      "Optimized performance and ensure full mobile responsiveness",
      "Managed Google Classroom, moderating content and lesson plans for educators",
    ],
    tags: ["XGBoost", "Scikit-Learn", "Pandas", "Machine Learning"],
    companyUrl: "https://www.richinc.org/RICH/",
    sticker: rich,
    stickerStyle: { 
      height: "95px",       
      marginLeft: "10px",   
      marginTop: "-5px"     
    },
  },
  {
    id: 4,
    role: "Data Science Fellow",
    company: "America On Tech",
    date: "Sep 2024 - Dec 2024",
    description:
      "Developed a ML Model to predict student enterpreneurial success",
    image: polaroid5,
    details: [
      "Completed a 4-month Data Science Fellowship, mastering 9 modules in ML, data analysis, and predictive modeling with Python.",
      "Built a high-accuracy ML model using Scikit-learn and XGBoost to predict student entrepreneurial trends from behavioral data.",
      "Performed EDA and statistical modeling on large datasets using Pandas, NumPy, and Seaborn; presented insights to stakeholders.",
    ],
    tags: ["XGBoost", "Scikit-Learn", "Pandas", "Machine Learning"],
    link: "https://github.com/PrasieG01/StudentEnterprenuershipPredictionModel",
    companyUrl: "https://www.americaontech.org/",
    sticker: aot,
    stickerStyle: { 
      height: "95px",       
      marginLeft: "90px",   
      marginTop: "-5px"     
    },
  },

  {
    id: 5,
    role: "UX/UI Designer",
    company: "Avatar Buddy LLC",
    date: "Jan 2026 - May 2026",
    description: "Build AI to make people laugh :)",
    image: polaroid3,
    details: [
      "Completed a 4-month Data Science Fellowship, mastering 9 modules in ML, data analysis, and predictive modeling with Python.",
      "Built a high-accuracy ML model using Scikit-learn and XGBoost to predict student entrepreneurial trends from behavioral data.",
      "Performed EDA and statistical modeling on large datasets using Pandas, NumPy, and Seaborn; presented insights to stakeholders.",
    ],
    tags: ["XGBoost", "Scikit-Learn", "Pandas", "Machine Learning"],
    companyUrl: "https://avatarbuddy.co/",
    sticker: avatar,
    stickerStyle: { 
      height: "75px",       
      marginLeft: "95px",   
      marginTop: "-5px"     
    },
  },

  {
    id: 6,
    role: "AI Researcher",
    company: "Humor Project at Computational Design Lab Columbia University",
    date: "Jan 2026 - May 2026",
    description: "Build AI to make people laugh :)",
    image: polaroid6,
    details: [
      "Completed a 4-month Data Science Fellowship, mastering 9 modules in ML, data analysis, and predictive modeling with Python.",
      "Built a high-accuracy ML model using Scikit-learn and XGBoost to predict student entrepreneurial trends from behavioral data.",
      "Performed EDA and statistical modeling on large datasets using Pandas, NumPy, and Seaborn; presented insights to stakeholders.",
    ],
    tags: ["XGBoost", "Scikit-Learn", "Pandas", "Machine Learning"],
    link: "https://github.com/PrasieG01/StudentEnterprenuershipPredictionModel",
    companyUrl: "https://aws.amazon.com",
    sticker: aws,
    stickerStyle: { 
      height: "45px",       
      marginLeft: "10px",   
      marginTop: "-5px"     
    },
  },

];
