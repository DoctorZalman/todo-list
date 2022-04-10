import AlbumsTypes from './actionTypes';
import { IAlbum } from '../../interfaces/album';

export const getAlbums = (payload: number) => ({ type: AlbumsTypes.GET_ALBUMS, payload });
export const getAlbumsSuccess = (payload: IAlbum[]) => ({ type: AlbumsTypes.GET_ALBUMS_SUCCESS, payload });
export const getAlbumsError = (payload: string) => ({ type: AlbumsTypes.GET_ALBUMS_ERROR, payload });
