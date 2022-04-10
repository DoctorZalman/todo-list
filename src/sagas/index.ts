import albumsWatcher from './albums/sagasWatcher';
import { all } from 'typed-redux-saga';

export function* rootSaga() {
  yield all([...albumsWatcher]);
}
