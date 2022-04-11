import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  header_container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 40,
    borderWidth: 1,
    borderBottom: 1,
    maxWidth: 300,
    margin: 0 + ' auto',
  },
  button: {
    height: 50,
    width: 100,
    '& a': {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'black',
      opacity: '0.7',
      '&:active': {
        color: 'black',
        opacity: 1,
      },
    },
  },
});
