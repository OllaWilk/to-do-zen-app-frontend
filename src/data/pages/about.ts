interface About {
  header: string;
  text: string;
  aboutBackend: string;
  aboutFrontend: string;
  end: string;
  buttons: {
    name: string;
    link: string;
  }[];
}

export const about: About = {
  header:
    'Hi, My name is Alex Wilk  and this is my application for managing goals and tasks. ',
  text: 'The application consists of two main parts: the backend and the frontend.',
  aboutBackend:
    'The backend is written in Node.js using TypeScript and is connected to a non-relational MySQL database. It handles POST, EDIT, DELETE, GETALL, and GET ONE requests, with dedicated routes for managing tasks. ',
  aboutFrontend:
    'The frontend is developed using React with TypeScript. From the homepage, users can navigate to the main view where all tasks are displayed. On this view, new tasks can be added. Clicking on a task expands a menu that allows for editing or deleting the task. Going into the task editing section opens a full view of the task, where changes can be made through a form.',
  end: 'This creates a cohesive system that enables effective management of one’s tasks and goals.',
  buttons: [
    { name: 'Check out my github', link: 'https://github.com/OllaWilk' },
    {
      name: 'Check out my linkedIn',
      link: 'https://www.linkedin.com/in/alex-wilk/',
    },
    { name: 'Write to me', link: 'aleksandra.wilk.letkiewicz@gmail.com' },
  ],
};
