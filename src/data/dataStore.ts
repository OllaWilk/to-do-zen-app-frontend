type TextContent = Record<string, string | string[]>;
type TextStrings = Record<string, string>;

export const welcomeContent: TextStrings = {
  title: 'Start',
  text: 'Discover the power of small steps leading to great achievements. With SpaceSteps, your daily to-do list and habits aren’t just tasks to complete—they’re your journey through a universe of possibilities. Start creating, organizing, and tracking your goals today. Master your universe, one step at a time.',
  pathToHome: 'tasks',
};

export const infoContent: TextStrings = {
  title: ' about SpaceSteps',
  text: 'Our application in its first version offers a simple to-do list that allows users to add, edit, and delete tasks. Thanks to an intuitive interface, users can easily manage their daily duties by setting priorities and updating the status of individual tasks as they progress. This application is aimed at those looking for a simple, yet effective tool to organize their time and tasks.',
  pathToHome: 'tasks',
};

export const tasksViewContent: TextStrings = {
  userName: 'Hi, Aleksandra Wilk',
  taskHeader: 'Tasks',
  loading: 'Loading...',
};

export const taskView: TextStrings = {
  userName: 'Hi, Aleksandra Wilk',
  cathegoryLabel: 'Cathegory:',
  priorityLabel: 'Priority: ',
  noTask:
    'The task you’re looking for isn’t here or doesn’t exist. But don’t worry—just navigate back to the task list page to find your way.',
};

export const formContent: TextContent = {
  title: 'title',
  cathegory: 'cathegory',
  categoryOption: ['do', 'in progress', 'done'],
  priority: 'priority',
  priorityOption: ['low', 'medium', 'high'],
  description: 'description',
  add: 'add new task',
  edit: 'edit task',
};

export const notFoundContent: TextStrings = {
  notFoundMessage:
    'Upss... It looks like you’ve drifted off course into the cosmos!',
  return: ' Return to the main cockpit',
  url: 'tasks',
};
