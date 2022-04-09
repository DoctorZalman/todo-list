import { makeStyles } from '@mui/styles';
//
export const useStyles = makeStyles({
  todoContainer: {
    padding: 40,
  },
  addTodo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    '& input': {},
  },
  addTodoInput: {
    fontSize: 16,
    width: 500,
  },
  filterButton: {
    width: 60,
    height: 57,
  },
});
