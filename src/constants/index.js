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
  cheeseit,
  profanity,
  chatwithpdf,
  demo,
  github,
  githubSocial,
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
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

let socialMedia = [
  {
    title: "Instagram",
    socialLink: "https://github.com/ansarjarvis/",
    icon: githubSocial,
  },
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
    title: "Full Stack Developer",
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
    title: "ML / AI",
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
    title: "Software Developer Intern",
    company_name: "SimplifyNote",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2022 - April 2023",
    points: [
      "Architected and implemented an innovative product that automates note-taking by capturing notes through scrolling and saving them into documents, integrated with OCR to reduce manual note-taking time by 70%",

      "Developed and implemented a new payment processing method using Stripe, increasing successful transactions by 30% and improving overall payment reliability.",

      "Led the development of SimplifyNote’s application using React.js and Node.js, driving a 25% surge in site traffic and enhancing user engagement, significantly contributing to the overall success and growth of the product.",
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
    name: "Chat with PDF",
    description:
      "Led the end-to-end development of a Next.js chat with PDF application, implementing a scalable SaaS modelwith Stripe-powered payment plans. Demonstrated expertise in full-stack development and project management.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
    ],
    image: chatwithpdf,
    source_code_link: "https://github.com/ansarjarvis/chat-with-pdf",
  },
  {
    name: "Profanity API",
    description:
      "Architected and implemented a profanity filtering API leveraging Hono.js for backend serverless functions, improving manual content moderation capabilities for web applications.",
    tags: [
      {
        name: "Hono.js",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: profanity,
    source_code_link: "https://github.com/ansarjarvis/admin_dashboard",
  },
  {
    name: "CheeseIt",
    description:
      "Independently built a Next.js-based App, replicating core functionalities of Reddit. This Next.js application allows users to create, edit and delete subreddits, offering a dynamic user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: cheeseit,
    source_code_link: "https://cheeseit.vercel.app/",
  },
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
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMedia,
};
