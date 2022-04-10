import React, { ChangeEvent, useState } from 'react';
import { useStyles } from './styles';
import { Box, Button, CircularProgress, ImageList, ImageListItem, TextField } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../../redux/albums/actionCreators';
import { albumSelector } from '../../redux/selectors';
import { IAlbum } from '../../interfaces/album';

const Photos = () => {
  const classes = useStyles();
  const [getId, setGetId] = useState<string | number>('');
  const { albums, isLoading } = useSelector(albumSelector, shallowEqual);
  const dispatch = useDispatch();
  const handleEnterValue = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = +event.target.value;

    if (value >= 1 && value <= 100) {
      setGetId(value);
    }
  };

  const handleChangeButton = (): void => {
    dispatch(getAlbums(+getId));
    setGetId('');
  };

  return (
    <Box className={classes.photosContainer}>
      <Box className={classes.inputBlock}>
        <TextField label="enter the number" value={getId} type="number" onChange={handleEnterValue} />
        <Button
          className={classes.getImage}
          disabled={+getId === albums[0]?.albumId}
          variant="outlined"
          onClick={handleChangeButton}>
          GET PHOTOS
        </Button>
      </Box>
      <Box className={classes.imageColection}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <ImageList cols={4}>
            {albums.map(({ id, url, title }: IAlbum) => (
              <ImageListItem key={id}>
                <img className={classes.img} src={url} alt={title} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Box>
    </Box>
  );
};

export default Photos;
