import { IAlbum } from '../../interfaces/album';
import { get } from '../../http';

export const getImageAlbum = async (id: number): Promise<IAlbum> => await get('photos', { params: { albumId: id } });
