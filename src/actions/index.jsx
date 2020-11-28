import { GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_ERROR } from '../types';

export const getRepos = (page, query) => {
  return {
    type: GET_REPOS,
    query,
    page,
  };
};

export const getReposError = (error) => {
  return {
    type: GET_REPOS_ERROR,
    error,
  };
};

export const getReposSuccess = (data, totalCount) => {
  return {
    type: GET_REPOS_SUCCESS,
    data,
    totalCount,
  };
};
