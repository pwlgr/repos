import React, { useState } from 'react';
import { Skeleton } from 'antd';

import Navbar from './components/Navbar';
import Repos from './components/Repos';

import messages from './messages';

import './App.css';
import 'antd/dist/antd.css';

const URL = 'https://api.github.com/search/repositories';

const fetchRepos = async (repo, page) => {
  const res = await fetch(`${URL}?q=${repo}&page=${page}`);
  const data = await res.json();
  return data;
};

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (currentPage = 1, input) => {
    setLoading(true);

    try {
      const response = await fetchRepos(input, currentPage);
      if (response.total_count) {
        setRepos(response.items);
        setError('');
      } else {
        setError(messages.noData);
      }
    } catch (e) {
      setError(messages.error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar handleSearch={handleSearch} />
      {loading ? (
        <Skeleton paragraph={{ rows: 10 }} />
      ) : (
        <Repos repos={repos} error={error} />
      )}
    </div>
  );
}

export default App;
