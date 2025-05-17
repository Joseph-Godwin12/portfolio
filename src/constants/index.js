import colorGuess from "../assets/color-g.png"
import textProcessor from "../assets/text-p.png"
import ticketGenerator from "../assets/ticket-g.png"
import todoList from "../assets/Todo-list.png"
import movie from "../assets/movie.png"
import quiz from "../assets/quiz.png"

export const ABOUT_TEXT = `I am a dedicated  frontend  developer with a passion for creating efficient and user-friendly web applications. I enjoy transforming ideas into reality using HTML, CSS, JavaScript, and frameworks like React.js, and Tailwindcss.  My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. I enjoy transforming ideas into reality using HTML, CSS, JavaScript, and frameworks like React.js. 
My goal is to craft intuitive, visually appealing interfaces that engage users and provide seamless, functional experiences across devices.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Frontend Developer",
    company: "TechBubble",
    description: `Developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React", "Tailwind"],
  },
  
];

export const PROJECTS = [
  {
    title: "Movie App",
    img: movie,     
    description:
      "A web application that allows users to search for movies, view details, and get recommendations. It uses the TMDB API to fetch movie data and provides a user-friendly interface.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://movie-hub-nine-gamma.vercel.app/",
  },
  {
    title: "Text Processor",
    img: textProcessor,
    description:
      "A tool that translates text from one language to another, providing accurate and fast translations for various languages.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://text-processor-chi.vercel.app",
  },
  {
    title: "Colour Guessing Game",
    img: colorGuess,
    description:
      "A fun and interactive game where users guess the color based on the given RGB values. It helps in learning and understanding color theory.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://color-guess-game-six.vercel.app",
  },
  {
    title: "Ticket Generator",
    img: ticketGenerator,
    description:
      "A tool designed to generate tickets for events, support, or any other purpose. It includes features like ticket creation, customization, and management.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: " https://ticket-generator-steel.vercel.app",
  },
  {
    title: "Quiz App",
    img: quiz,
    description:
      "The Tech Professions Quiz App is a responsive web application built with React and Tailwind CSS. It allows users to test their knowledge across various tech fields like frontend, backend, data science, and more. Each session presents 10 random questions from a curated set, with score tracking and smooth navigation.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://quiz-app-lake-two.vercel.app/",
  },
];
