import { makeStyles } from '@mui/styles';
//Todo List Item
export const useStyles = makeStyles({
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
  itemDone: {
    textDecoration: 'line-through',
    opacity: '0.5',
  },
});
