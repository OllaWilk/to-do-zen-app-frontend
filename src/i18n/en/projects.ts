import { gitProjects } from '../../images/gitProjects/index';

type Project = {
  id: string;
  title: string;
  description: string;
  liveLink?: string;
  repoLink: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 'rainbowl',
    title: 'App for odred meals and booking tables',
    description:
      'This project is a custom-built website for "Rainbowl" restaurant, focused on healthy meals like oatmeal, soups, and puddings. I hand-coded everything using vanilla JavaScript with an emphasis on OOP, and designed the HTML/SCSS from scratch to ensure a modern, responsive user experience. The backend is being developed in NestJS, with plans to include a specialized section for waitstaff to manage orders efficiently, streamlining restaurant operations.',
    liveLink: 'https://rainbowl-qhbyoj46u-ollawilk.vercel.app',
    repoLink:
      'https://github.com/OllaWilk/rainbowl-app-for-order-meals-and-booking-tables',
    image: gitProjects.rainbowl,
  },
  {
    id: 'smartqube',
    title: ' SMARTqube',
    description:
      'SMARTqube is an innovative engineering company focused on designing and implementing advanced industrial solutions. As a strategic extension of ICEqube in the USA, SMARTqube serves the European and Middle Eastern markets from its headquarters in Wrocław. I was responsible for developing the website, which showcases solutions in industrial automation, climate control, and system integration. The project emphasized collaboration with an international team, while managing technical and legal aspects. Key tasks also included deploying the website on external servers and optimizing SEO.',
    liveLink: 'https://www.smartqube.com/home',
    repoLink: 'https://github.com/OllaWilk/smartqubeapp',
    image: gitProjects.smartqube,
  },
  {
    id: 'ameriqube',
    title: ' AMERIqube',
    description:
      'AMERIqube is a Pennsylvania-based company that serves as the parent organization for IceQube and Smart Qube. This application supports and streamlines operations for AMERIqube and its subsidiaries, leveraging cutting-edge solutions to optimize business processes. Key responsibilities in the project included creating a user-friendly interface, ensuring multilingual support, and applying best practices for code structure and project management.',
    liveLink: 'https://ameriqubeapp.vercel.app/',
    repoLink: 'https://github.com/OllaWilk/ameriqubeapp',
    image: gitProjects.ameriqube,
  },
  {
    id: 'jogaimasaz',
    title: 'Joga i masaż Anna Gidzińska',
    description:
      'This one-page web application showcases the professional yoga and massage services of Anna Gidzińska. Built using React and styled with SCSS, the site emphasizes simplicity, a calming user experience, and smooth navigation. Key features include a detailed services section, client testimonials, course information, and a contact form powered by EmailJS. Key Responsibilities included creating a minimalistic design, implementing smooth navigation, and ensuring mobile responsiveness. Additionally, I managed client communication, handled time-sensitive requests, and integrated third-party services.',
    liveLink: 'https://jogaimasaz.vercel.app',
    repoLink: 'https://github.com/OllaWilk/yoga-massage-anna-gidzinska-website',
    image: gitProjects.jogaimasaz,
  },
  {
    id: 'HeadHunter',
    title: 'HeadHunter MegaK team project',
    description:
      'Application as a recruitment platform. It connects the participants of the MegaK course and potential employers. The purpose of the app is to help students find their first job as a developer.',
    repoLink: ' https://github.com/Jutrzenka/HeadHunterG11-FR',
    image: gitProjects.HeadHunter,
  },
  {
    id: 'kgp',
    title: 'Korona Gór Polski',
    description:
      'The Korona Gór Polski Blog is an interactive web application for hiking enthusiasts who want to explore the Crown of Polish Mountains. Built with JavaScript and Handlebars, the blog offers a dynamic platform for browsing articles, filtering content by tags or authors, and enjoying a responsive design optimized for all devices. Key responsibilities included implementing dynamic article rendering, responsive design, and interactive filtering using JavaScript. I also utilized Handlebars for templating to ensure clean separation of structure and content.',
    liveLink: 'https://ollawilk.github.io/korona-gor-polski-blog/',
    repoLink: 'https://github.com/OllaWilk/korona-gor-polski-blog',
    image: gitProjects.kgp,
  },
  {
    id: 'game',
    title: 'Rock, Paper, Scissors',
    description:
      'This "Rock, Paper, Scissors" web game is an interactive project built with JavaScript, HTML5, and SCSS. The game features a simple user interface where players compete against a randomly-generated AI opponent. It tracks scores, displays round results, and offers an option to reset the game at any time. The project emphasizes core web development skills, including DOM manipulation, event handling, and responsive design. Key Responsibilities included developing game logic, creating a user-friendly interface, and ensuring the game’s functionality through JavaScript. I also focused on maintaining clean, modular code for scalability.',
    liveLink: 'https://ollawilk.github.io/rock-paper-scissors-game/',
    repoLink: 'https://github.com/OllaWilk/rock-paper-scissors-game',
    image: gitProjects.game,
  },
  {
    id: 'kodilla',
    title: ' Kodilla team project',
    description:
      'This is project for furniture store. It consists of many sections regarding: Hot deals, Features, New Furniture, Gallery, Feedback, Brands... RWD has been implemented for most sections and its mode is saved in the Redux application state. It is possible to add furniture product to "favorites" and this will also be saved in the application state.',
    repoLink: 'https://github.com/OllaWilk/Kodilla-team-project',
    image: gitProjects.kodilla,
  },
  {
    id: 'florist',
    title: 'My first website',
    description:
      'This project showcases my ability to build a fully responsive website using HTML5 and CSS3. It focuses on creating a well-structured, modern webpage with semantic HTML elements and responsive design techniques to ensure optimal viewing across all devices. The project was part of my bootcamp experience, emphasizing best practices in web development. Key Responsibilities included designing intuitive navigation, implementing a contact form with validation, and ensuring responsive styling using SCSS.',
    liveLink: 'https://ollawilk.github.io/my-first-website/',
    repoLink: 'https://github.com/OllaWilk/my-first-website/',
    image: gitProjects.florist,
  },
  {
    id: 'creativeAgency',
    title: 'Creative Agency',
    description:
      'This responsive webpage showcases a creative agency, built using HTML5, SCSS, and JavaScript. The site features a mobile-friendly design, interactive navigation, an animated header, and a portfolio section. It utilizes Flexbox for a flexible layout and media queries to ensure optimal viewing on all devices. The project highlights my ability to create modern, user-friendly websites with engaging animations and functional elements like a contact form. Key Responsibilities included implementing responsive design, creating interactive elements, and ensuring clean, maintainable code with SCSS and semantic HTML5.',
    liveLink: 'https://github.com/OllaWilk/creative-agency-rwd-business-card',
    repoLink: 'https://ollawilk.github.io/creative-agency-rwd-business-card/',
    image: gitProjects.creativeAgency,
  },
  {
    id: 'bootstrap',
    title: 'MILOLOVE',
    description:
      'MILOLOVE is a modern, responsive e-commerce homepage built with Bootstrap 4, SCSS, and HTML5. The site utilizes Bootstrap’s grid system and Flexbox to create a clean, mobile-optimized layout that adapts seamlessly to different screen sizes. Key features include an interactive navbar, product carousel, and custom product cards for a smooth user experience. Key Responsibilities included implementing a fully responsive design, customizing Bootstrap with SCSS, and optimizing the user interface for both desktop and mobile devices.',
    liveLink: 'https://ollawilk.github.io/bootstrap-home-page-shop/',
    repoLink: 'https://github.com/OllaWilk/bootstrap-home-page-shop',
    image: gitProjects.bootstrap,
  },
];
