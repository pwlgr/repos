import { GET_REPOS, GET_REPOS_ERROR, GET_REPOS_SUCCESS } from '../types';

export const initialState = {
  repos: {
    data: [],
    totalCount: 0,
    error: '',
    loading: false,
  },
  page: 1,
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: {
          ...state.repos,
          loading: true,
        },
        query: action.query,
        page: action.page,
      };
    case GET_REPOS_ERROR:
      return {
        ...state,
        repos: {
          ...state.repos,
          loading: false,
          error: action.error,
          totalCount: 0,
        },
      };
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        repos: {
          error: '',
          loading: false,
          data: action.data,
          totalCount: action.totalCount,
        },
        param: action.param,
        // currentPage: action.page,
      };
    default:
      return state;
  }
};
