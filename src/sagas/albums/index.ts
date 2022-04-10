import { call, put } from 'typed-redux-saga';
import { albumsAPI } from '../../api';
import { getAlbumsError, getAlbumsSuccess } from '../../redux/albums/actionCreators';
import { IWorkerProps } from '../../interfaces/interface';

export function* workerGetAlbums({ payload }: IWorkerProps) {
  try {
    const { data } = yield call(albumsAPI.getImageAlbum, payload);

    yield put(getAlbumsSuccess(data));
  } catch ({ message }) {
    yield put(getAlbumsError(message as string));
  }
}
