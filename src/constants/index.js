import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";


export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, TailwdindCSS, and Firebase. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, learn about new technologies and finance, and enjoy playing video games.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Application Developer Analyst",
    company: "Accenture",
    description: `Developing and maintaining single page web applications using JavaScript, React.js. Utilised state management tools, libraries like Context API and Redux. Wrote unit and integration tests using Jest and React Testing Library, ensuring high code coverage and stability. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "Firebase", "Jest"],
  },
  {
    year: "2022 - 2024",
    role: "Software Devloper Intern",
    company: "Capgemini",
    description: `Assisted in the development of user-facing features using React.js, contributing to the timely release of new product updates. Integrated and consumed RESTful APIs to fetch and display data dynamically using the asynchronous operation. Worked on bug fixing and improving the performance of existing React components.`,
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
];

export const PROJECTS = [
  {
    title: "CodeBook E-Commerce Website",
    image: project1,
    description: "CodeBook is an eBook shop built with ReactJS and styled with TailwindCSS. It includes features like authentication, routing, API integration, form handling, and .env configuration. The frontend is deployed on Netlify, while the backend runs on Render.",
    technologies: ["ReactJS", "Redux", "React-Router", "TailwindCSS"],
    demo:"https://codebook-as.netlify.app/",
    github:"https://github.com/AbhishekSadhwani/CodeBook",
  },
  {
    title: "Cinemate ",
    image: project2,
    description: "Cinemate is a movie information web application developed using ReactJS for a responsive user experience, the sleek styling of TailwindCSS, and libraries like React Router for seamless navigation. The goal of this project is to gain an understanding of working with APIs, making fetch calls using async functions, and working with react hooks.",
    technologies: ["ReactJS", "TMDB API", "TailwindCSS", "React-Router"],
    demo:"https://cinemate-as.netlify.app/movies",
    github:"https://github.com/AbhishekSadhwani/Cinemate-React-App",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["ReactJS", "TailwindCSS", "Netlify"],
    demo:"https://abhisheksadhwani.netlify.app/",
    github:"https://github.com/AbhishekSadhwani/Portfolio",
  },
  {
    title: "Broodl",
    image: project4,
    description: "Broodl is a mood tracker app made using Next JS and Firebase.",
    technologies: ["NextJS", "Firebase", "TailwindCSS","Netlify"],
    demo:"https://broodl-as.netlify.app/",
    github:"https://github.com/AbhishekSadhwani/Broodl",
  },
];

export const CONTACT = {
  address: "Jaipur, Rajasthan 302002",
  phoneNo: "+91-9649435730",
  email: "abhisheksadhwani23@gmail.com",
};
