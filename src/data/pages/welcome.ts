interface Welcome {
  header: string;
  button: {
    name: string;
    path: string;
  };
}

export const welcome: Welcome = {
  header:
    'Discover the power of small steps leading to great achievements. With SpaceSteps, your daily to-do list and habits aren’t just tasks to complete—they’re your journey through a universe of possibilities. Start creating, organizing, and tracking your goals today. Master your universe, one step at a time.',

  button: {
    name: 'Start',
    path: 'home',
  },
};
