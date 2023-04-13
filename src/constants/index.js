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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    photoshop,
    premiere,
    qentaz,
    agm,
    agency,
    openai
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI / UX Designer",
      icon: mobile,
    },
    {
      title: "Data analyst",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: 'photoshop',
      icon: photoshop
    },
    {
      name: 'premiere',
      icon: premiere
    }
  ];
  
  const experiences = [
    {
      title: "Software developer",
      company_name: "Qentaz",
      icon: qentaz,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - May 2022",
      points: [
        "Developing and maintaining web applications using Javascript and other related technologies as Node.js, MongoDB, OpenAi, etc.",
        "Collaborating with cross-functional teams including designers, product managers, sells team, and other developers to create a high-quality service.",
        "Participating in code reviews and providing constructive feedback and innovative ideas to other developers.",
        "Automatization of different processes of different teams"
      ],
    },
    {
      title: "React templates developer",
      company_name: "Web design Agency Cali",
      icon: agency,
      iconBg: "#383E56",
      date: "Feb 2022 - Aug 2022",
      points: [
        "Developing React.js templates for E-commerce web applications",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in UX investigation to develop a custom product to the user",
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "Agriglobal Market",
      icon: agm,
      iconBg: "#383E56",
      date: "Aug 2022 - Feb 2023",
      points: [
        "Developing and maintaining web pages using React.js and other related technologies as Redux, Tailwind, etc.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Helped in the connection between front and back-end",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Create images with AI",
      description:
        "Web app that is a social network that allows you to create images with openAI api and share them with the rest of the world. All with just a prompt and some clicks",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI",
          color: "pink-text-gradient",
        },
      ],
      image: openai,
      source_code_link: "https://github.com/Handemore7/AiGenerateApp",
      project_link: "https://createimagesai.netlify.app"
    },
  ];
  
  export { services, technologies, experiences, projects };