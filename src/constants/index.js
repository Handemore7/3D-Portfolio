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
  openai,
  ecommerceTemplate,
  quire
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
    reference: "https://github.com/Handemore7/"
  },
  {
    title: "UI / UX Designer",
    icon: mobile,
    reference: "https://www.behance.net/handemore74403"
  },
  {
    title: "Data analyst",
    icon: backend,
    reference: ''
  },
  {
    title: "Content Creator (editor)",
    icon: creator,
    reference: "https://www.youtube.com/@blurelle"
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
    title: "Desarrollador Front-end",
    company_name: "Confiabogado",
    icon: qentaz,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Ago 2025",
    intro: "Se incrementó en un 20% la captación y retención de clientes mediante la optimización de la plataforma web y el desarrollo de nuevos servicios digitales, adaptando soluciones y tecnologías según las necesidades emergentes de la startup. ",
    points: [
      "Implementación de mejoras de diseño y optimización de formularios en la página web, logrando un aumento del 20% en leads en 4 meses",
      "Se lideró el desarrollo de un proyecto paralelo, ofreciendo a los usuarios herramientas como creador de CV y un hub de empleos, incrementando el tiempo de vida de los usuarios en nuestros servicios en un 25%.",
      "Gestion e integración de conexiones con herramientas de analítica como Google Tag Manager, Microsoft Clarity, Facebook Pixel y Google Ads para el seguimiento de métricas clave.",
      "Adaptación rápida a nuevas tecnologías para responder a desafíos y necesidades emergentes del negocio, mostrando flexibilidad y aprendizaje continuo en entornos de alta exigencia."
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "Agriglobal Market",
    icon: agm,
    iconBg: "#383E56",
    date: "Nov 2022 - May 2023",
    intro: "Se mejoró la experiencia de compra y la eficiencia operativa en el e-commerce agrícola a través de la optimización del backend y la actualización de interfaces clave.",
    points: [
      "Optimización de procesos en el backend y renovación de varias pantallas del e-commerce, logrando que los usuarios completaran sus compras un 10% más rápido.",
      "Se implementó una mejora de la arquitectura web, facilitando una navegación más ágil y segura para los clientes.",
    ],
  },
  {
    title: "Software developer",
    company_name: "Qentaz",
    icon: qentaz,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - May 2022",
    intro: "Automatizar procesos internos y desarrollar soluciones de inteligencia artificial para reducir tareas manuales y mejorar la eficiencia del equipo.",
    points: [
      "Automatización de procesos internos, mejorando la comunicación y eliminando acciones manuales repetitivas, aumentando la productividad del equipo.",
      "Implementación de un bot con IA para la clasificación automática de transacciones, agilizando el procesamiento y análisis de datos.",
    ],
  },
  {
    title: "Desarrollador / Scrum Master",
    company_name: "Banco W",
    icon: qentaz,
    iconBg: "#E6DEDD",
    date: "Jul 2020 - Dic 2020",
    intro: "Identificar insights clave mediante el manejo de grandes bases de datos y el desarrollo de soluciones web, aplicando metodologías ágiles en un entorno real con cliente.",
    points: [
      "Lider del equipo de desarrollo en la gestión e interpretación de bases de datos, utilizando redes neuronales para extraer insights relevantes para el proyecto.",
      "Coordinación, desarrollo y entrega de una página web demo funcional, aplicando metodologías ágiles/Scrum en todas las fases del proyecto.",
      "Presentación de resultados y recomendaciones al cliente, contribuyendo a la toma de decisiones estratégica.",
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
  {
    name: "E-commerce templates",
    description:
      "I made various types of templates for E-commerce projects, including payment, shopping cart and product detail",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceTemplate,
    source_code_link: "https://github.com/Handemore7/Ecommerce_Sanity-stripe",
    project_link: "https://ecommerce-tienda-7537axpgt-handemore7.vercel.app/"
  },
  {
    name: "Quire",
    description:
      "This was a project that I made with my partner Michelle Fernandez as thesis for the university, we created a web app that stimates the UX resources needed in a project.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "Sort Algorithm",
        color: "pink-text-gradient",
      },
    ],
    image: quire,
    source_code_link: "https://github.com/Handemore7/PDG",
    project_link: "https://handemore7.github.io/PDG/index.html"
  },
];

export { services, technologies, experiences, projects };