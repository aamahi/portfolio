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
        "Developing and maintaining web applications using React.js, Angular and other related technologies.",
        "Collaborating with cross-functional teams including Clint, Designers, Business Analyst, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
          "Write Test Cases for unit testing and integration testing."
      ],
    },
    {
      title: "Web Application Developer",
      company_name: "WPXPO",
      icon: wpxpo,
      iconBg: "#FFFFFF",
      date: "September 2021 - October 2021",
      points:[
       "Developing and Designing Gutenberg Gutenberg Dynamic Site Builder Plugin.",
        "Collaborating with cross-functional teams including Tech Lead, Support Engineer, Designer, Marketing team and other developers to create high-quality WordPress Plugin.",
        "Fixing bugs and adding new features to the plugin.",]
    },
    {
      title: "Software Engineer Trainee ",
      company_name: "WeDevs",
      icon: wedevs,
      iconBg: "#FFFFFF",
      date: "February 2021 - July 2021",
      points: [
        "I have a good command of WordPress, and I have completed a five-month-long internship in WeDevs Limited as well as I have successfully come through different levels of assignments ranging from advance to mediocre were supervised by excellent engineers in WeDevs. Moreover, I had a part to play a conducive role as a junior apprentice with accomplishing a wordpress plugin assignment.",
        "WordPress Plugin Development.",
        "WooCommerce Development.",
        "WordPress REST API Development."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "He is a great guy for developing frontend applications and turning designs provided UX Engineers into web pages.",
      name: "Artful Islam",
      designation: "Senior Engineering Manager",
      company: "Selise Digital Platform",
      image: arif,
    },
    {
      testimonial:
          "Mahi’s expertise in software engineering is truly exceptional.His dedication to delivering high-quality, efficient solutions is evident in every project they undertake.",
      name: "Ratul Hasan",
      designation: "Software Engineer",
      company: "WeDevs",
      image: ratul,
    },
    {
      testimonial:
        "He is an extremely talented programmer and software developer. He always deliver what he promise, both when it comes to quality and time.",
      name: "Bipro Sharma",
      designation: "Software Engineer",
      company: "Selise Digital Platform",
      image: bipro,
    },
  ];
  
  const projects = [

    {
      name: "Task.ai",
      description:
        "Transform your task management with the versatility of Tasks AI. Generate collaborative tasks and to-do lists." ,
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
        "Chronoswiss is a Swiss watch manufacturer based in Lucerne. This is a clone of the website.",
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
          "An eBook store is simply an online bookstore from where one can download eBooks into eBook readers.",
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
