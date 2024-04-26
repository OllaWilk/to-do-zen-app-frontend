export interface Form {
  title: string;
  cathegory: string;
  categoryOption: string[];
  priority: string;
  priorityOption: string[];
  description: string;
  add: string;
  edit: string;
}

export const taskForm: Form = {
  title: 'title',
  cathegory: 'cathegory',
  categoryOption: ['do', 'in progress', 'done'],
  priority: 'priority',
  priorityOption: ['low', 'medium', 'high'],
  description: 'description',
  add: 'add new task',
  edit: 'edit task',
};
