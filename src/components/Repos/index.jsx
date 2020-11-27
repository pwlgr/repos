import React from 'react';
import { Result } from 'antd';
import PropTypes from 'prop-types';

const Repos = ({ repos, error }) => {
  if (error) {
    return <Result title={error} />;
  }
  return (
    !!repos.length && !error && repos.map((e) => <p key={e.id}>{e.name}</p>)
  );
};

Repos.propTypes = {
  repos: PropTypes.instanceOf(Array),
  error: PropTypes.string,
};

export default Repos;
