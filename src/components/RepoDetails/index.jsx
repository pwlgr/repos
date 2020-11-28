import React from 'react';
import PropTypes from 'prop-types';
import { Card, Rate, Avatar } from 'antd';

import githubColors from '../../utils/githubColors';
import './index.scss';

const { Meta } = Card;

const RepoDetails = ({ stars, language, description, name, avatar }) => {
  return (
    <Card className="repo" bordered={false}>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={description}
      />
      <div className="repo-stars">
        <Rate count={1} defaultValue={1} />
        {stars}
      </div>
      <div className="repo-language">
        <div
          className="repo-language__label"
          style={{ background: githubColors[language] }}
        />
        {language}
      </div>
    </Card>
  );
};

RepoDetails.defaultProps = {
  stars: 0,
  language: '',
  description: '',
  name: '',
  avatar: '',
};

RepoDetails.propTypes = {
  stars: PropTypes.number,
  language: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default RepoDetails;
