import { TaskEntity } from 'types';

const BASE_URL = 'http://localhost:3001/tasks/';

export const createOrUodateTask = async (
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
      method: taskId ? 'PATCH' : 'POST',
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

export const deleteTask = async (taskId: string) => {
  const url = `${BASE_URL}${taskId}`;

  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to delete the task');
    }
  } catch (error) {
    console.error('Error deleting the task:', error);
    throw error;
  }
};
