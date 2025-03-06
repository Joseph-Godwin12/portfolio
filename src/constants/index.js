import colorGuess from "../assets/color-g.png"
import textProcessor from "../assets/text-p.png"
import ticketGenerator from "../assets/ticket-g.png"
import todoList from "../assets/Todo-list.png"
import quotes from "../assets/quotes.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated  frontend  developer with a passion for creating efficient and user-friendly web applications. I enjoy transforming ideas into reality using HTML, CSS, JavaScript, and frameworks like React.js, and Tailwindcss.  My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. I enjoy transforming ideas into reality using HTML, CSS, JavaScript, and frameworks like React.js. 
My goal is to craft intuitive, visually appealing interfaces that engage users and provide seamless, functional experiences across devices.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Frontend Developer",
    company: "TechBubble",
    description: `Developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "TailwindCss"],
  },
  
];

export const PROJECTS = [
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
    title: "Todo List App",
    img: todoList,
    description:
      "A simple and efficient todo list application that allows users to add, edit, and delete tasks. It saves tasks to local storage, ensuring data persistence across sessions.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://to-do-list-seven-nu-96.vercel.app",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};