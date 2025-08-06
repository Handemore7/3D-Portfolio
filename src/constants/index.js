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
  quire,
  bancoW,
  confiabogado
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "navbar.about",
  },
  {
    id: "work",
    title: "navbar.work",
  },
  {
    id: "contact",
    title: "navbar.contact",
  },
];

const services = [
  {
    title: "services.webDeveloper",
    icon: web,
    reference: "https://github.com/Handemore7/"
  },
  {
    title: "services.uiuxDesigner",
    icon: mobile,
    reference: "https://www.behance.net/handemore74403"
  },
  {
    title: "services.dataAnalyst",
    icon: backend,
    reference: ''
  },
  {
    title: "services.contentCreator",
    icon: creator,
    reference: "https://www.youtube.com/@blurelle"
  },
];

const technologies = [
  {
    name: "tech.html",
    icon: html,
  },
  {
    name: "tech.css",
    icon: css,
  },
  {
    name: "tech.javascript",
    icon: javascript,
  },
  {
    name: "tech.typescript",
    icon: typescript,
  },
  {
    name: "tech.react",
    icon: reactjs,
  },
  {
    name: "tech.redux",
    icon: redux,
  },
  {
    name: "tech.tailwind",
    icon: tailwind,
  },
  {
    name: "tech.node",
    icon: nodejs,
  },
  {
    name: "tech.mongodb",
    icon: mongodb,
  },
  {
    name: "tech.threejs",
    icon: threejs,
  },
  {
    name: "tech.git",
    icon: git,
  },
  {
    name: "tech.figma",
    icon: figma,
  },
  {
    name: "tech.photoshop",
    icon: photoshop
  },
  {
    name: "tech.premiere",
    icon: premiere
  }
];

const experiences = [
  {
    title: "experience.0.title",
    company_name: "experience.0.company_name",
    icon: confiabogado,
    iconBg: "#E6DEDD",
    date: "experience.0.date",
    intro: "experience.0.intro",
    points: [
      "experience.0.point0",
      "experience.0.point1",
      "experience.0.point2",
      "experience.0.point3"
    ],
  },
  {
    title: "experience.1.title",
    company_name: "experience.1.company_name",
    icon: agm,
    iconBg: "#383E56",
    date: "experience.1.date",
    intro: "experience.1.intro",
    points: [
      "experience.1.point0",
      "experience.1.point1"
    ],
  },
  {
    title: "experience.2.title",
    company_name: "experience.2.company_name",
    icon: qentaz,
    iconBg: "#E6DEDD",
    date: "experience.2.date",
    intro: "experience.2.intro",
    points: [
      "experience.2.point0",
      "experience.2.point1"
    ],
  },
  {
    title: "experience.3.title",
    company_name: "experience.3.company_name",
    icon: bancoW,
    iconBg: "#fff",
    date: "experience.3.date",
    intro: "experience.3.intro",
    points: [
      "experience.3.point0",
      "experience.3.point1",
      "experience.3.point2"
    ],
  },
];

const projects = [
  {
    name: "projects.0.name",
    description: "projects.0.description",
    tags: [
      {
        name: "projects.0.tag0",
        color: "blue-text-gradient",
      },
      {
        name: "projects.0.tag1",
        color: "green-text-gradient",
      },
      {
        name: "projects.0.tag2",
        color: "pink-text-gradient",
      },
    ],
    image: openai,
    source_code_link: "https://github.com/Handemore7/AiGenerateApp",
    project_link: "https://createimagesai.netlify.app"
  },
  {
    name: "projects.1.name",
    description: "projects.1.description",
    tags: [
      {
        name: "projects.1.tag0",
        color: "blue-text-gradient",
      },
      {
        name: "projects.1.tag1",
        color: "green-text-gradient",
      },
      {
        name: "projects.1.tag2",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceTemplate,
    source_code_link: "https://github.com/Handemore7/Ecommerce_Sanity-stripe",
    project_link: "https://ecommerce-tienda-7537axpgt-handemore7.vercel.app/"
  },
  {
    name: "projects.2.name",
    description: "projects.2.description",
    tags: [
      {
        name: "projects.2.tag0",
        color: "blue-text-gradient",
      },
      {
        name: "projects.2.tag1",
        color: "green-text-gradient",
      },
      {
        name: "projects.2.tag2",
        color: "pink-text-gradient",
      },
    ],
    image: quire,
    source_code_link: "https://github.com/Handemore7/PDG",
    project_link: "https://handemore7.github.io/PDG/index.html"
  },
];

export { services, technologies, experiences, projects };