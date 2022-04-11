export enum StatusFilter {
  ALL = 'all',
  TODO = 'todo',
  DONE = 'done',
}

export interface ITodo {
  valueTodo: string;
  id: number;
  status: StatusFilter;
}

export interface IWorkerProps {
  payload: number;
}
