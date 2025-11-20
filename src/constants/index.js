import colorGuess from "../assets/color-g.png"
import textProcessor from "../assets/text-p.png"
import ticketGenerator from "../assets/ticket-g.png"
import neomart from "../assets/neo.png"
import movie from "../assets/movie.png"
import quiz from "../assets/quiz.png"
import dashboard from "../assets/dashboard.png"

export const ABOUT_TEXT = `I am a Frontend and Mobile App Developer passionate about building fast, user-friendly digital experiences. I work with React, NextJs, React Native, JavaScript, TypeScript and Tailwind CSS to turn ideas into clean, functional web and mobile products.

I enjoy collaborating with teams, solving problems, and delivering high-quality interfaces that look great and work smoothly across devices. I’m also expanding into Blockchain and Web3 development to stay ahead in the future of technology.

My focus is simple: create intuitive, visually appealing, and reliable digital experiences.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Frontend Developer",
    company: "TechBubble",
    description: `Developed user interfaces for web applications using React, including the implementation of a secure and responsive login page. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs, improved form validation, and optimized frontend performance.`,
    technologies: ["JavaScript", "React", "Tailwind"],
  },
];


export const PROJECTS = [
  {
    title: "Finance Tracker",
    img: dashboard,
    description: "A modern finance tracking app that helps users manage their income, expenses, budgets, and financial goals. It features interactive charts, clean UI, and a dashboard that gives users full visibility into their spending habits. Built with React + TypeScript, Recharts, Tailwind CSS, and Lucide React.",
    technologies: ["React", "TypeScript", "Tailwind"],
    link: "https://finance-tracker-sigma-silk.vercel.app/",
    githubLink: "https://github.com/Joseph-Godwin12/Finance-tracker.git"

  },

  {
    title: "E-commerce Website",
    img: neomart,
    description:
      "A modern e-commerce website built with React and Tailwind CSS. It features a responsive design, product listings, a shopping cart, and a checkout process. The site is optimized for performance and provides a seamless user experience across devices.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://neomart-mu.vercel.app/",
    githubLink: "https://github.com/Joseph-Godwin12/Neomart.git"

  },
  {
    title: "Movie App",
    img: movie,     
    description:
      "A web application that allows users to search for movies, view details, and get recommendations. It uses the TMDB API to fetch movie data and provides a user-friendly interface.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://movie-hub-nine-gamma.vercel.app/",
    githubLink: "https://github.com/Joseph-Godwin12/MovieHub.git"
  },
  {
    title: "Text Processor",
    img: textProcessor,
    description:
      "A tool that translates text from one language to another, providing accurate and fast translations for various languages.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://text-processor-chi.vercel.app",
    githubLink: "https://github.com/Joseph-Godwin12/Text-processor.git"
  },
  {
    title: "Colour Guessing Game",
    img: colorGuess,
    description:
      "A fun and interactive game where users guess the color based on the given RGB values. It helps in learning and understanding color theory.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://color-guess-game-six.vercel.app",
    githubLink: "https://github.com/Joseph-Godwin12/Color-guess-game.git"
  },
  {
    title: "Ticket Generator",
    img: ticketGenerator,
    description:
      "A tool designed to generate tickets for events, support, or any other purpose. It includes features like ticket creation, customization, and management.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: " https://ticket-generator-steel.vercel.app",
    githubLink: "https://github.com/Joseph-Godwin12/ticket-generator.git"
  },
  
];
