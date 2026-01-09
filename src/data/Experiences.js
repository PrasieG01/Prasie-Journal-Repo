import polaroid1 from '../assets/polaroid1.jpg';
import polaroid2 from '../assets/polaroid2.jpg';
import polaroid3 from '../assets/polaroid3.jpg';
import polaroid4 from '../assets/polaroid4.jpg';

export const experiences = [
  {
    id: 1,
    role: "SDE Intern",
    company: "Amazon",
    date: "May 2025 - August 2025",
    description: "Explored Seattle, worked in AWS",
    image: polaroid1,
    color: "#ffcccc",
    details: [
      "Worked on improving the scalability of AWS Lambda functions.",
      "Collaborated with cross-functional teams to enhance cloud security features.",
      "Optimized data processing pipelines, reducing latency by 15%.",
    ],
  },
  {
    id: 2,
    role: "Tech Development Associate",
    company: "RICH Inc @Queens College",
    date: " Feb 2025 - April 2025",
    description: "Revamped the website for a after-school non-profit org",
    image: polaroid2,
    color: "#ccffcc",
    details: [
      "Developed a web application to streamline student resource management.",
      "Implemented user authentication and authorization features using OAuth2.",
      "Conducted workshops on basic programming skills for new students.",
    ],
  },
  {
    id: 3,
    role: "Data Science Fellow",
    company: "America On Tech",
    date: "Sep 2024 - Dec 2024",
    description: "Developed a ML Model to predict student enterpreneurial success",
    image: polaroid2,
    color: "#ccffcc",
    details: [
      "Analyzed large datasets to extract meaningful insights using Python and R.",
      "Created interactive data visualizations with Tableau and Matplotlib.",
      "Collaborated on a team project to develop a predictive model for customer churn.",
    ],
    link: "https://github.com/PrasieG01/StudentEnterprenuershipPredictionModel",
  },

  {
    id: 4,
    role: "Backend Developer Intern",
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
    id: 5,
    role: "...",
    company: "Humor Project @ Columbia University",
    date: "January 2025 - May 2025",
    description: "Build AI to make people laugh :)",
    image: polaroid4,
    color: "#ffffcc",
    details: [
      "Created a satirical news website using Django and Bootstrap.",
      "Wrote and edited humorous articles that engaged a wide audience.",
      "Collaborated with a team of writers and designers to produce weekly content.",
    ],
  },
];