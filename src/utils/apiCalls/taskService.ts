import { TaskEntity } from 'types';

const BASE_URL = 'http://localhost:3001/tasks/';

const createOrUodateTask = async (
  task: Omit<TaskEntity, 'id' | 'time'>,
  taskId?: string
) => {
  const url = taskId ? `${BASE_URL}${taskId}` : BASE_URL;

  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const body = JSON.stringify({ ...task });

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return await res.json();
  } catch (error) {
    console.error('Failded to save the task', error);
    throw error;
  }
};

export { createOrUodateTask };
