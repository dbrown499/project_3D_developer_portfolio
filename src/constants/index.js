import {
  mobile,
  backend,
  python,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  postgresql,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
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
    name: "PostgresSQL",
    icon: postgresql,
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
];


const projects = [
  {
    name: "Eunoia",
    description:
      "A cross-platform web application for a clothing brand with features like cart management and checkout. Allows users to browse and purchase clothing items, providing a convenient and efficient solution for managing online shopping from both desktop and mobile devices. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresSQL",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/eunoia.png",
    source_code_link: "https://github.com/stars/dbrown499/lists/my-creations",
    link: "https://eunoiaapparel.netlify.app/",
  },
  {
    name: "YumSteppers",
    description:
      "Developed a mobile application that encourages New Yorkers to walk to restaurants instead of ordering delivery, rewarding them with points. Enables users to search for local restaurants, track their steps, and redeem points for exclusive meal discounts.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
     
    ],
    image: "src/assets/yumstepper.png",
    source_code_link: "https://github.com/stars/dbrown499/lists/shared-projects",
    link: "https://drive.google.com/file/d/1llDDPEy1XcT_YQ3qhBTqYvBQQgUMOY65/view",
  },

];

export { services, technologies, projects };
