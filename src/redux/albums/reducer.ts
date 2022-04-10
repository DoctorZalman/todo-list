import AlbumsTypes from './actionTypes';

const initialState = {
  albums: [],
  isLoading: false,
  error: null,
};

const albumsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case AlbumsTypes.GET_ALBUMS:
      return { ...state, isLoading: true };

    case AlbumsTypes.GET_ALBUMS_SUCCESS:
      return { ...state, isLoading: false, albums: payload };

    case AlbumsTypes.GET_ALBUMS_ERROR:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};

export default albumsReducer;
