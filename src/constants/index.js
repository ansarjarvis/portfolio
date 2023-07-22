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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dashboard,
  homerai,
  sociopedia,
  nextjs,
  graphql,
  postgresql,
  instagram,
  linkedin,
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

let socialMedia = [
  {
    title: "Instagram",
    socialLink: "https://www.instagram.com/ansar_jarvis/",
    icon: instagram,
  },
  {
    title: "LinkedIn",
    socialLink: "https://www.linkedin.com/in/ansarjarvis/",
    icon: linkedin,
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Node Developer",
    icon: backend,
  },
  {
    title: "Computer Vision",
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
    name: "Next JS",
    icon: nextjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgre SQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "graphQL",
    icon: graphql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Something",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Software Developer",
    company_name: "SimplifyNote",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sarah",
    designation: "CDO",
    company: "jamia ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Saif Haider",
    designation: "CFO",
    company: "HSBC",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Arif Mirza",
    designation: "CTO",
    company: "KPMG",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce Dashboard",
    description:
      "Web-based Dashboard that allow the admin to see all the sales and transactions of products and also can visualize the sales graphically.",
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
    image: dashboard,
    source_code_link: "https://github.com/ansarjarvis/admin_dashboard",
  },
  {
    name: "Homer AI (DALL-E)",
    description:
      "Homer ai is clone inspired by OpenAI's DALL·E  With the ability to understand and translate textual prompts into visually stunning images.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: homerai,
    source_code_link: "https://github.com/ansarjarvis/ai_image_generator",
  },
  {
    name: "Social Media App",
    description:
      "This Social Media App is a vibrant and dynamic platform designed to connect people, foster meaningful interactions, and share moments that matter. With a user-friendly interface and a wide array of features",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: sociopedia,
    source_code_link: "https://github.com/ansarjarvis/sociopedia",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMedia,
};
