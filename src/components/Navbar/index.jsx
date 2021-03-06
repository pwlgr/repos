import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import messages from '../../messages';
import './index.scss';

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState('');

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <GithubOutlined />
      </div>
      <Input
        onChange={onInputChange}
        placeholder={messages.searchPlaceholder}
      />
      <Button onClick={() => (input ? handleSearch(1, input) : null)}>
        {messages.search}
      </Button>
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
