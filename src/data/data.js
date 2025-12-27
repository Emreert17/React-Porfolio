import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiRedux, SiSap } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { PiBracketsCurly } from "react-icons/pi";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import { VscCode } from "react-icons/vsc";
import {
  LuFolderOpen,
  LuMail,
  LuGraduationCap,
  LuBriefcase,
} from "react-icons/lu";
import opetLogo from "/Opet_logo.svg";
import enocaLogo from "/enoca_logo.jpg";

export const links = [
  { id: "home", label: "home", icon: IoIosHome },
  { id: "projects", label: "projects", icon: LuFolderOpen },
  { id: "skills", label: "skills", icon: VscCode },
  { id: "experience", label: "experience", icon: LuBriefcase },
  { id: "education", label: "education", icon: LuGraduationCap },
  { id: "contact", label: "contact", icon: LuMail },
];

export const intro_info = [
  {
    description:
      "Hi, I'm Emre! I'm a Senior Software Engineering student at Istanbul Aydın University, mainly focused on frontend development. I work with HTML, CSS, JavaScript, and React and I also have a solid background in Java. I love creating clean, modern, and user-centered web interfaces that solve real problems.",
    image: "/intro-pic.jpg",
    imageDesc: "profile-picture",
    links: [
      {
        id: 1,
        title: "Github",
        icon: FaGithub,
        link: "https://github.com/Emreert17",
      },
      {
        id: 2,
        title: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/emre-ertu%C4%9Frul-3403592b2/",
      },
    ],
  },
];

export const projects_Data = [
  {
    id: 1,
    title: "Food Delivery App",
    description:
      "Food Delivery App built with React and Redux featuring user authentication, dynamic menus, and cart management. Users can log in, browse dishes, filter and sort items. ",
    image: "/FoodApp.png",
    link: "https://github.com/Emreert17/React-Redux-FoodDeliveryApp",
    isRedux: true,
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "Track income and expenses, categorize spending, set budget goals, and get a clear overview of your finances. Built with a clean, interactive React interface for a seamless user experience.",
    image: "/budgetapp.png",
    link: "https://github.com/Emreert17/React-Redux-Expense-Tracker",
    isRedux: true,
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "  A responsive application that retrieves live weather data from an external API, showing temperature, conditions, and location details. Users can search by city name and get instant, accurate forecasts.",
    image: "/WeatherApp.png",
    link: "https://github.com/Emreert17/React-Redux-Query-WeatherApp",
    isRedux: true,
  },
  {
    id: 4,
    title: "To-Do List",
    description:
      "  A task management app designed to help users organize and prioritize daily activities. Supports adding, editing, and deleting tasks, with a simple, intuitive, and clutter-free interface.",
    image: "/ToDoList.png",
    link: "https://github.com/Emreert17/React-ToDoList2",
  },
  {
    id: 5,
    title: "Quiz App",
    description:
      " A simple and interactive Quiz Application built with React.Users can test their knowledge by answering multiple-choice questions, track their score in real-time, and review their selected answers at the end of the quiz.",
    image: "/QuizApp.png",
    link: "https://github.com/Emreert17/React-QuizApp",
  },
];

export const skillsData = [
  {
    id: "frontend",
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, color: "#33A1E0" },
      { name: "JavaScript", icon: FaJs, color: "#FFE100" },
      { name: "Next.js", icon: RiNextjsFill, color: "#333" },
      { name: "TypeScript", icon: BiLogoTypescript, color: "#1C6EA4" },
      { name: "HTML5", icon: FaHtml5, color: "#FF9B00" },
      { name: "CSS", icon: FaCss3Alt, color: "#1C6EA4" },
      { name: "Redux", icon: SiRedux, color: "#9929EA" },
      { name: "Tailwind", icon: RiTailwindCssFill, color: "#33A1E0" },
    ],
  },
  {
    id: "tools",
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#DC2525" },
      { name: "GitHub", icon: FaGithub, color: "#333" },
    ],
  },
];

export const experience_Data = [
  {
    id: 1,
    date: "November 2025 - Present",
    title: "Frontend Internship",
    subtitle: "enoca",
    description:
      "Gained practical experience in React frontend development, focusing on UI components and basic state management. Assisted in building and updating user interfaces by working with reusable components and handling simple application state.",
    logo: enocaLogo,
    icon: PiBracketsCurly,
    logoStyle: { borderRadius: "999px" },
  },
  {
    id: 2,
    date: "July 2024 - August 2024",
    title: "SAP Internship",
    subtitle: "Opet Headquarters",
    description:
      "Received introductory training and briefings on SAP systems. Participated in internal corporate meetings. Contributed to ongoing projects by providing assistance in various tasks.",
    logo: opetLogo,
    icon: SiSap,
  },
];

export const education_details = [
  {
    image: "/iauLogo.png",
    degree: "Bachelor’s Degree in Software Engineering",
    university: "Istanbul Aydın University",
    graduate: "Expected Graduation: 2026",
    description:
      "Focused on the foundations of computer science, software design, and web development. Gained strong analytical and research skills through coursework and projects. Developed effective communication and teamwork abilities by collaborating on group assignments and presentations.",
    skills: [
      "Analytical Thinking & Problem Solving",
      "Research & Communication Skills",
      "Data Structures & Algorithms",
      "Software Development Lifecycle",
      "Web Development",
    ],
  },
];
