import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar, Button } from 'antd';
import messages from '../../messages';

const Repo = ({ name, owner, handleClick, avatar, stars, language }) => {
  return (
    <List.Item
      actions={[<Button onClick={handleClick}>{messages.more}</Button>]}>
      <List.Item.Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={`${owner}/ ${language || '-'} / ${stars}`}
      />
    </List.Item>
  );
};

Repo.defaultProps = {
  name: '',
  owner: '',
  handleClick: () => null,
  avatar: '',
  stars: PropTypes.string,
  language: PropTypes.string,
};

Repo.propTypes = {
  name: PropTypes.string,
  owner: PropTypes.string,
  handleClick: PropTypes.func,
  avatar: PropTypes.string,
  stars: PropTypes.number,
  language: PropTypes.string,
};

export default Repo;
