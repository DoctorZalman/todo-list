import { makeStyles } from '@mui/styles';
//
export const useStyles = makeStyles({
  todoContainer: {
    padding: 40,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 21,
    padding: 14,
    height: 56,
    border: '1px solid',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.3);',
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
