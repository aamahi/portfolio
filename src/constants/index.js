import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  docker,
  selise,
  wpxpo,
  wedevs,
  Next,
  Azure,
  wordpress,
  Angular,
  bipro,
  ratul,
  arif,
  ReactNative,
  chronSwiss,
  ebookStore, taskAi
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Mobile App Developer",
      icon: creator,
    },
    {
      title: "WordPress Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "NextJs",
      icon: Next,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: Angular,
    },
    {
      name: "React Native",
      icon: ReactNative,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "wordpress",
      icon: wordpress,
    },
    {
      name: "Azure",
      icon: Azure,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Selise Digital Platform",
      icon: selise,
      iconBg: "#FFFFFF",
      date: "October 2021 - Running",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Application Developer",
      company_name: "WPXPO",
      icon: wpxpo,
      iconBg: "#FFFFFF",
      date: "August 2021 - October 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer Trainee ",
      company_name: "WeDevs",
      icon: wedevs,
      iconBg: "#FFFFFF",
      date: "February 2021 - July 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "He is a great guy for developing frontend applications and turning designs provided UX Engineers into web pages",
      name: "Artful Islam",
      designation: "Senior Engineering Manager",
      company: "Selise Digital Platform",
      image: arif,
    },
    {
      testimonial:
        "He is an extremely talented programmer and software developer. He always deliver what he promise, both when it comes to quality and time.",
      name: "Bipro Sharma",
      designation: "Software Engineer",
      company: "Selise Digital Platform",
      image: bipro,
    },
    {
      testimonial:
          "He is an extremely talented programmer and software developer. He always deliver what he promise, both when it comes to quality and time.",
      name: "Ratul Hasan",
      designation: "Software Engineer",
      company: "WeDevs",
      image: ratul,
    },
  ];
  
  const projects = [

    {
      name: "Task.ai",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "graphQL",
          color: "pink-text-gradient",
        },
        {
          name: "scss",
          color: "blue-text-gradient",
        },
      ],
      image: taskAi,
      source_code_link: "https://github.com/aamahi",
    },
    {
      name: "Chron Swiss",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: chronSwiss,
      source_code_link: "https://github.com/aamahi",
    },
    {
      name: "Ebook Store",
      description:
          "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ebookStore,
      source_code_link: "https://github.com/aamahi",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
