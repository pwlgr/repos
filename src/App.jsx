import React, { useContext, useState } from 'react';
import { Skeleton } from 'antd';

import Navbar from './components/Navbar';
import Repos from './components/Repos';
import Pagination from './components/Pagination';

import messages from './messages';

import './App.scss';
import 'antd/dist/antd.css';
import { AppContext } from './providers';
import { getRepos, getReposSuccess, getReposError } from './actions';

import apiConfig from './api';

const { fetchRepos } = apiConfig;

function App() {
  const { state, dispatch } = useContext(AppContext);
  const [welcome, setWelcome] = useState(true);

  const handleSearch = async (currentPage = 1, input) => {
    dispatch(getRepos(currentPage, input));
    if (welcome) setWelcome(false);
    try {
      const response = await fetchRepos({ q: input, page: currentPage });
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
      {welcome && <h1 className="welcome">Welcome!</h1>}
      {state.repos.loading ? (
        <div className="loader">
          <Skeleton avatar active />
          <Skeleton avatar active />
        </div>
      ) : (
        <Repos repos={state.repos.data} error={state.repos.error} />
      )}
      {!!state.repos.totalCount && (
        <Pagination
          totalCount={state.repos.totalCount}
          updatePage={handleSearch}
          param={state.query}
        />
      )}
    </div>
  );
}

export default App;
