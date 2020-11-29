import React from 'react';
import PropTypes from 'prop-types';
import { Card, Rate, Avatar } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

import githubColors from '../../utils/githubColors';
import './index.scss';

const { Meta } = Card;

const RepoDetails = ({
  stars,
  language,
  description,
  name,
  avatar,
  url,
  watchers,
}) => {
  return (
    <Card className="repo" bordered={false}>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={description}
      />
      <div className="repo-details">
        <div className="repo-details__stars">
          <Rate count={1} defaultValue={1} />
          {stars}
        </div>
        <div className="repo-details__watchers">
          <EyeOutlined />
          &nbsp;
          {watchers}
        </div>
        <div className="repo-details__language">
          <div
            className="repo-details__language__label"
            style={{ background: githubColors[language] }}
          />
          {language}
        </div>
      </div>
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </Card>
  );
};

RepoDetails.defaultProps = {
  stars: 0,
  language: '',
  description: '',
  name: '',
  avatar: '',
  url: '',
  watchers: 0,
};

RepoDetails.propTypes = {
  stars: PropTypes.number,
  language: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  url: PropTypes.string,
  watchers: PropTypes.number,
};

export default RepoDetails;
