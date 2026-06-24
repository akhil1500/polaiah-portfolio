import { getYearsOfExperience, getTotalExperience } from "../utils/experience";

const careerStartDate = "2017-12-22";
const yearsOfExperience = getYearsOfExperience(careerStartDate);
const totalExperince = getTotalExperience(careerStartDate)

const profile = {
  name: "Polaiah Bodeddula",
  shortName: "Polaiah",
  lastName: "Bodeddula",
  role: "Senior Software Engineer",
  openToWork: false,
  careerStartDate: careerStartDate,
  yearsOfExperience: `${yearsOfExperience}+`,
  avatar: "/src/assets/profile.jpg",
  tagline: "Backend engineer specialising in Node.js, RESTful APIs, and distributed systems.",
  description:
    "I've built platforms serving lakhs of users — from government traffic systems to real-time chat at scale.",
  about: [
    "I'm Polaiah Bodeddula, a Senior Backend Engineer based in Hyderabad with 8+ years of experience building production-grade systems that scale.",
    "I've worked across fintech, e-commerce, and SaaS domains — leading cross-functional teams, mentoring engineers, and owning systems from greenfield design through to production rollout",
    "My work includes Bahrain's national traffic management platform, an online exam system serving 4 lakh+ students, and a real-time conversational marketing platform used by sales and support teams globally.",
    "I care deeply about code quality, system observability, and building software that is maintainable long after I've shipped it.",
  ],
  stats: [
    { num: yearsOfExperience, suffix: "+", label: "Years Experience" },
    { num: "4", suffix: "+", label: "Companies" },
    { num: "10", suffix: "+", label: "Projects Delivered" },
    { num: "4L", suffix: "+", label: "Students on CNAPS" },
  ],
  info: [
    { key: "Status", value: "Open to work" },
    { key: "Location", value: "Hyderabad, India" },
    { key: "Experience", value: totalExperince },
    { key: "Current Company", value: "IT People Corp" },
    { key: "Work Mode", value: "On-site / Remote / Hybrid" },
    { key: "Preferred Stack", value: "Javascript / Node.js / AWS" },
    { key: "Education", value: "B.Tech CSE · 8.1 CGPA" },
  ],
  contact: {
    email: "akhilchandu108@gmail.com",
    phone: "+91 9502968503",
    github: "https://github.com/akhil1500",
    portfolio: "https://github.com/akhil1500/polaiah-portfolio",
    linkedIn: "https://www.linkedin.com/in/polaiah-bodeddula/",
    resume: "https://polaiah-assets.s3.ap-south-1.amazonaws.com/POLAIAH_BODEDDULA.pdf"
  },
};

export default profile;