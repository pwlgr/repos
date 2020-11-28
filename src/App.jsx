import React, { useContext } from 'react';
import { Skeleton } from 'antd';

import Navbar from './components/Navbar';
import Repos from './components/Repos';
import Pagination from './components/Pagination';

import messages from './messages';

import './App.css';
import 'antd/dist/antd.css';
import { AppContext } from './providers';
import { getRepos, getReposSuccess, getReposError } from './actions';

const URL = 'https://api.github.com/search/repositories';

const fetchRepos = async (repo, page) => {
  const res = await fetch(`${URL}?q=${repo}&page=${page}`);
  const data = await res.json();
  return data;
};

function App() {
  const { state, dispatch } = useContext(AppContext);

  const handleSearch = async (currentPage = 1, input) => {
    dispatch(getRepos(currentPage, input));

    try {
      const response = await fetchRepos(input, currentPage);
      if (response.total_count) {
        dispatch(getReposSuccess(response.items, response.total_count));
      } else {
        dispatch(getReposError(response.message || messages.noData));
      }
    } catch (e) {
      dispatch(getReposError(messages.error));
    }
  };

  return (
    <div className="App">
      <Navbar handleSearch={handleSearch} />
      {state.repos.loading ? (
        <Skeleton paragraph={{ rows: 10 }} />
      ) : (
        <Repos repos={state.repos.data} error={state.repos.error} />
      )}
      <Pagination
        totalCount={state.repos.totalCount}
        updatePage={handleSearch}
        param={state.query}
      />
    </div>
  );
}

export default App;
