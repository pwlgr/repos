import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';

const Repo = ({ name, owner, handleClick }) => {
  return (
    <>
      <Card extra={<Button onClick={handleClick}>More</Button>} title={name}>
        <p>{owner}</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
};

Repo.defaultProps = {
  name: '',
  owner: '',
  handleClick: () => null,
};

Repo.propTypes = {
  name: PropTypes.string,
  owner: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Repo;
