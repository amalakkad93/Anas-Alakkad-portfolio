import {
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  redux,
  postgresql,
  docker,
  python,
  flask,
  express,
  sqlalchemy,
  sqlite,
  pytest,
  aws,
  embeddedC,
  assembly,
  gcp,
  verilog,
  matlab,
  email,
  calpolyLogo,
  ceravoLogo,
  mtSacLogo,
  starco,
  pixelPond,
  phone,
  linkedin,
  githubIcon,
  frontend,
  backend,
  ux,
  prototyping,
  creator,
  mobile,
  mentorPromiseLogo,
  tailwind,
  vite,
  nextJs,
  nginx
} from "../assets";

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

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
  {
    id: "resume",
    title: "Resume",
    url: "https://raw.githubusercontent.com/amalakkad93/amalakkad93.github.io/main/Anas_Alakkad_Resume.pdf",
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
    name: "Google Cloud",
    icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
  },
  {
    name: "C++ tool",
    icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Nginx",
    icon: nginx,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "SQLAlchemy",
    icon: sqlalchemy,
  },
  {
    name: "SQLite",
    icon: sqlite,
  },
  {
    name: "Pytest",
    icon: pytest,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Next.js",
    icon: nextJs,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const frontendTechnologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Next.js", icon: nextJs },
  { name: "Vite", icon: vite },
  { name: "Tailwind CSS", icon: tailwind },
];
const backendTechnologies = [
  { name: "Node JS", icon: nodejs },
  { name: "Python", icon: python },
  { name: "Flask", icon: flask },
  { name: "Express", icon: express },
];
const databaseTechnologies = [
  { name: "PostgreSQL", icon: postgresql },
  { name: "SQLite", icon: sqlite },
];
const otherTechnologies = [
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Nginx", icon: nginx },
  { name: "Google Cloud", icon: "https://img.icons8.com/color/480/000000/google-cloud.png" },
  { name: "AWS", icon: aws },
  { name: "C++ tool", icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png" },
  { name: "Matlab", icon: matlab },
  { name: "Assembly", icon: assembly },
  { name: "Verilog", icon: verilog },
  { name: "Embedded C", icon: embeddedC },
  { name: "SQLAlchemy", icon: sqlalchemy },
  { name: "Pytest", icon: pytest },
  { name: "Embedded C", icon: embeddedC },
  {
    name: "C++ tool",
    icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  },
  {
    name: "Google Cloud",
    icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
  },
  {
    name: "Assembly",
    icon: assembly,
  },
  {
    name: "Verilog",
    icon: verilog,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Matlab",
    icon: matlab,
  },
];

const projects = [
  {
    id: "project-1",
    name: "StarcoEat",
    description:
      "StarcoEat is a meticulously engineered clone of the famous food delivery platform UberEats, blending a robust Flask backend with a dynamic React frontend, managed efficiently through Redux. This platform revolutionizes the food delivery experience by offering a rich array of features, allowing users to easily browse through a diverse selection of restaurants and view detailed information about each, including menus and user reviews. Additionally, users can personalize their experience by marking their favorite restaurants, adding a layer of engagement to their browsing journey. Starco's advanced search functionality stands out, offering dual-mode capabilities for users to find restaurants either by geographical location or city-based search, simplifying discovery while adding depth to the search experience. The platform also encourages community interaction with a dynamic review system, enabling users to leave, update, or remove reviews, ensuring feedback remains relevant and current. At its core, StarcoEat boasts a streamlined order management system, where users can navigate menus, add items to their cart, and experience a simulated checkout process, showcasing the potential of real-world transaction processing. The integration of Flask and React, enhanced by Redux, ensures a responsive and intuitive user interface, making the platform user-friendly for both tech-savvy individuals and newcomers to online food ordering. Overall, StarcoEat is more than just an UberEats clone; it's a testament to sophisticated web application development, demonstrating comprehensive functionality and attention to detail, essential for modern food delivery services.",
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
    image: starco,
    repo: "https://github.com/amalakkad93/StarcoEat",
    demo: "https://gotham-eat.onrender.com",
  },
  {
    id: "project-2",
    name: "PixelPond",
    description:
      "PixelPond, as a meticulously crafted clone of Flickr, offers a robust platform for photo sharing and management. It stands out for its comprehensive features, enabling users to not only upload and organize their photography but also to engage in a community-driven environment. Users can comment on photos, initiating interactive dialogues and connections. These comments are dynamic, with the flexibility for editing or removal, fostering a lively and evolving conversation. A highlight of PixelPond's user-centric approach is its advanced search mechanism. Unlike basic search functionalities, it goes a step further by incorporating both user and tag-based filtering. This dual-mode search system allows users to find photos with precision, either by searching for specific users or by exploring tags associated with the photos. This feature makes navigating through the vast array of images both intuitive and efficient, enhancing the user's journey through the platform. The seamless integration of Flask's powerful backend with React's responsive frontend, augmented by Redux for effective state management, positions PixelPond as a prime example of sophisticated web application development. The attention to detail in replicating Flickr's celebrated functionalities, coupled with additional user-friendly features, underscores PixelPond's commitment to delivering a superior photo-sharing experience.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: pixelPond,
    repo: "https://github.com/amalakkad93/PixelPond",
    // demo: "https://pixelpond-rhct.onrender.com",
    demo: "https://pixelpond-yu4i.onrender.com",
  },
];

// const experiences = [
//   {
//     title: "Transportation Manager",
//     company_name: "Ceravo Care",
//     icon: ceravoLogo,
//     iconBg: "#383E56",
//     date: "Aug 2017 - Present",
//     link: "",
//     points: [
//       "Led a transportation team, enhancing performance and efficiency, impacting 30+ team members.",
//       "Overhauled trip routing, achieving a 20% improvement in operational efficiency.",
//       "Spearheaded staff management, reducing turnover by 15%.",
//     ],
//   },
//   {
//     title: "Teacher Assistant (Volunteer)",
//     company_name: "California State Polytechnic University, Pomona",
//     icon: calpolyLogo,
//     iconBg: "#383E56",
//     date: "Mar 2022 - Oct 2023",
//     link: "",
//     points: [
//       "Enhanced student understanding in Microcontroller & Digital Logics Design, yielding a 10% rise in average grades.",
//       "Led multiple tutorial sessions, showcasing organizational and time management skills, benefiting over 30 students.",
//     ],
//   },
// ];
const experiences = [
  {
    title: "Software Engineer",
    company_name: "Ceravo Care",
    icon: ceravoLogo,
    iconBg: "#383E56",
    date: "Aug 2017 - Current",
    link: "",
    points: [
      "Architected RouteWizard, a HIPAA-ready SaaS platform for NEMT providers, integrating a real-time Vite/React dispatcher dashboard, Expo React Native driver app, and scalable Flask backend.",
      "Engineered real-time trip dispatching and live driver tracking with WebSockets, Google Maps, and GPS for minute-by-minute fleet visibility and automated assignment.",
      "Automated Excel/CSV ingestion with an AI-powered pipeline leveraging a RandomForest ML model, streamlining data normalization and column mapping.",
      "Delivered a modular microservices backend (Flask, Celery, SQLAlchemy, Redis, PostgreSQL) supporting multi-tenant SaaS and robust task orchestration.",
      "Implemented async file upload and scalable background processing using Redis APIs and status endpoints, supporting seamless bulk data imports with real-time progress feedback.",
      "Built an enterprise-grade dispatcher UI with live map tracking, route filters, analytics, and CSV reporting.",
      "Drove feature development and maintenance of the Expo React Native driver mobile app, delivering real-time trip workflows, offline GPS caching, socket chat, notifications, and shift inspection forms for field reliability.",
      "Orchestrated CI/CD and Dockerized deployments with Nginx, HTTPS, persistent Redis, scalable Gunicorn, and Prometheus/Grafana monitoring.",
      "Championed observability and compliance by centralizing logs and automating inspection/shift reporting.",
      "Increased dispatch efficiency by 30% via optimized trip assignment algorithms.",
      "Developed a secure, scalable real-time chat system enabling instant communication between dispatchers and drivers, with delivery receipts and presence indicators, integrated seamlessly across web and mobile.",
      "Led technical architecture, DevOps, and platform operations as founding engineer.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Mentor A Promise, Inc",
    icon: mentorPromiseLogo,
    iconBg: "#383E56",
    date: "Mar 2024 - Dec 2024",
    link: "",
    points: [
      "Architected a microservices application with Next.js (auth/users) and separate Flask backends for shifts and chat. Deployed using AWS EC2, LightSail, and managed with Portainer Docker.",
      "Improved performance and SEO with server-side rendering in Next.js, reducing load times and enhancing user experience. Developed dynamic UIs with React, PostgreSQL, and Tailwind CSS, boosting user engagement by 40%.",
      "Collaborated with cross-functional teams to diagnose and resolve complex technical issues, streamlining processes and reducing resolution times by 25%, ensuring high service quality and customer satisfaction.",
      "Implemented WebSocket technology to ensure real-time updates across the entire site, eliminating the need for page refreshes and enhancing user experience.",
    ],
  },
  {
    title: "Teacher Assistant (Volunteer)",
    company_name: "California State Polytechnic University, Pomona",
    icon: calpolyLogo,
    iconBg: "#383E56",
    date: "Mar 2022 - Oct 2023",
    link: "",
    points: [
      "Enhanced student understanding in Microcontroller & Digital Logics Design, yielding a 10% rise in average grades.",
      "Led multiple tutorial sessions, showcasing organizational and time management skills, benefiting over 30 students.",
    ],
  },
];

const educations = [
  {
    degree: "Bachelor of Science",
    branch: "Computer Engineering",
    gpa: "GPA: 3.62",
    name: "California State Polytechnic University, Pomona",
    year: "(2019-2022)",
    image: calpolyLogo,
    academicDistinctions: ["Dean’s Honor List, 2021"],
  },
  {
    degree: "CSU General Education Certification",
    branch: "",
    name: "Mt. San Antonio College",
    year: "(2016-2019)",
    image: mtSacLogo,
    academicDistinctions: [
      "Dean’s Honor List, 2017",
      "President’s Honor List, 2018",
    ],
  },
];

const contacts = [
  {
    src: email,
    alt: "Email Me",
    a: "amalakkad93@outlook.com",
    contactType: "email",
  },
  {
    src: phone,
    alt: "Call Me",
    a: "+1-805-270-9284",
    contactType: "phone",
  },
  {
    src: linkedin,
    alt: "My LinkedIn",
    a: "https://www.linkedin.com/in/anas-alakkad-a0b9371b3",
  },
  {
    src: githubIcon,
    alt: "Github",
    a: "https://github.com/amalakkad93",
  },
];

export {
  services,
  technologies,
  frontendTechnologies,
  backendTechnologies,
  databaseTechnologies,
  otherTechnologies,
  experiences,
  educations,
  projects,
  contacts,
};
