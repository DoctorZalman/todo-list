import { takeEvery } from 'typed-redux-saga';
import AlbumsTypes from '../../redux/albums/actionTypes';
import { workerGetAlbums } from './index';

// @ts-ignore
const albumsWatcher = [takeEvery(AlbumsTypes.GET_ALBUMS, workerGetAlbums)];

export default albumsWatcher;
