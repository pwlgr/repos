import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
// import messages from '../../messages';

import './index.scss';

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState('');
  // const [repos, setRepos] = useState([]);
  // const [totalPages, setTotalPages] = useState(1);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="navbar">
      <GithubOutlined />
      <Input onChange={(e) => onInputChange(e)} />
      <Button onClick={() => handleSearch(1, input)}>Go</Button>
    </div>
  );
};

Navbar.defaultProps = {
  handleSearch: () => null,
};

Navbar.propTypes = {
  handleSearch: PropTypes.func,
};

export default Navbar;
