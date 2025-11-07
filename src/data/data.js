import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaPager,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TiThMenu } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";

export const skillsData = [
  {
    id: "frontend",
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, color: "#33A1E0" },
      { name: "JavaScript", icon: FaJs, color: "#FFE100" },
      { name: "HTML5", icon: FaHtml5, color: "#FF9B00" },
      { name: "CSS", icon: FaCss3Alt, color: "#1C6EA4" },
      { name: "Redux", icon: SiRedux, color: "#9929EA" },
      { name: "Tailwind", icon: RiTailwindCssFill, color: "#33A1E0" },
      { name: "Responsive Design", icon: TiThMenu, color: "#333" },
      { name: "Single Page Applications", icon: FaPager, color: "#379777" },
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
    title: "Tic Tac Toe Game",
    description:
      "  An interactive web-based game for two players, featuring a clean interface and responsive design. Tracks turns, detects wins or draws, and allows for quick game restarts.",
    image: "/TicTacToeGame.png",
    link: "https://github.com/Emreert17/Emreert17",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "  A responsive application that retrieves live weather data from an external API, showing temperature, conditions, and location details. Users can search by city name and get instant, accurate forecasts.",
    image: "/WeatherApp.png",
    link: "https://github.com/Emreert17/Emreert17",
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
