import polaroid1 from "../assets/polaroid1.jpg";
import polaroid2 from "../assets/polaroid2.jpg";
import polaroid3 from "../assets/polaroid3.jpg";
import polaroid4 from "../assets/polaroid4.jpg";
import polaroid5 from "../assets/polaroid5.jpg";
import polaroid6 from "../assets/polaroid6.jpg";

/*stickers*/
import aot from "../assets/aot.png";
import bc from "../assets/barnard.png";
import aws from "../assets/aws1.png";
import avatar from "../assets/avatar.png";
import rich from "../assets/rich.png";

export const experiences = [
  {
    id: 1,
    role: "Academic Computing Expert",
    company: "BCIT",
    date: "August 2025 - Present",
    image: polaroid4,
    details: [
      "Provide on-call technical support to students, resolving software, hardware, account, and device issues; managed 100+ IT tickets in TDX.",
      "Configured and imaged 50+ faculty laptops for deployment and assisted with device setup and transportation.",
      "Maintain and troubleshoot lab equipment, printers, and classroom technology, including resolving paper jams, replenishing supplies, and reporting device issues.",
    ],
    tags: ["Customer Service", "IT Support", "Device Imaging", "Technical Troubleshooting"],
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
    date: "May 2026 - August 2026",
    image: polaroid4,
    details: [
      "Architected an isolated, production-faithful test environment for an MLflow data plane, validating end-to-end against live API test suites.",
      "Built an AWS fault-injection and load-testing framework to simulate database outages and fleet failures, unlocking automated recovery validation.",
      "Onboarded 10+ engineers across 2 teams to local E2E data plane testing, eliminating shared Beta/Gamma environment bottlenecks and slashing triage time by 70%.",
    ],
    tags: ["AWS", "MLflow", "End-to-End Testing", "Load Testing", "Distributed Systems"],
    companyUrl: "https://aws.amazon.com/sagemaker/ai/mlops/?trk=1a84fd07-e681-41eb-8d84-062020330b11&sc_channel=ps&ef_id=Cj0KCQjwt9jVBhDXARIsAFSP-6fnM3X9jBCs6hxVLXdcZwKjv02WvxEkBikoEq2cUPL7CRsAPnlgSz4aAkdfEALw_wcB:G:s&gads_camp=23532472786&gads_ag=198506981653&gads_ad=818613729722&gads_kw=mlflow%20aws&gads_matchtype=e&gads_network=g&gads_device=c&gads_geo=9073502&gad_campaignid=23532472786&gbraid=0AAAAADjHtp-0nZck3Mi83W8fkAm4ENrf-&gclid=Cj0KCQjwt9jVBhDXARIsAFSP-6fnM3X9jBCs6hxVLXdcZwKjv02WvxEkBikoEq2cUPL7CRsAPnlgSz4aAkdfEALw_wcB",
    sticker: aws,
    stickerStyle: { 
      height: "75px",       
      marginLeft: "240px",   
      marginTop: "-5px"     
    },
  },

  {
    id: 3,
    role: "SDE Intern",
    company: "Amazon",
    date: "May 2025 - August 2025",
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
    id: 4,
    role: "Tech Development Associate",
    company: "RICH Inc @Queens College",
    date: " Feb 2025 - April 2025",
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
    id: 5,
    role: "Data Science Fellow",
    company: "America On Tech",
    date: "Sep 2024 - Dec 2024",
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
    id: 6,
    role: "UX/UI Designer",
    company: "Avatar Buddy LLC",
    date: "Jan 2026 - May 2026",
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
    id: 7,
    role: "AI Researcher",
    company: "Humor Project at Computational Design Lab Columbia University",
    date: "Jan 2026 - May 2026",
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
