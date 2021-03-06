import { ITodo } from '../../interfaces/interface';

export interface TodoListProps {
  todo: ITodo;
  onChange: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, value: string) => void;
  // setEditMode: () => void;
}
