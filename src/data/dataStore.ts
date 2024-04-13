type WelcomeContent = Record<string, string>;
type TasksContent = Record<string, string>;
type TaskView = Record<string, string>;
type FormContent = Record<string, string | string[]>;

export const welcomeContent: WelcomeContent = {
  title: 'Start',
  text: 'Discover the power of small steps leading to great achievements. With SpaceSteps, your daily to-do list and habits aren’t just tasks to complete—they’re your journey through a universe of possibilities. Start creating, organizing, and tracking your goals today. Master your universe, one step at a time.',
  pathToHome: 'tasks',
};

export const tasksViewContent: TasksContent = {
  userName: 'Hi, Aleksandra Wilk',
  taskHeader: 'Tasks',
  loading: 'Loading...',
};

export const taskView: TaskView = {
  userName: 'Hi, Aleksandra Wilk',
};

export const formContent: FormContent = {
  title: 'title',
  cathegory: 'cathegory',
  categoryOption: ['do', 'in progress', 'done'],
  priority: 'priority',
  priorityOption: ['low', 'medium', 'high'],
  description: 'description',
  add: 'add new task',
  edit: 'edit task',
};
