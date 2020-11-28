import React, { useState } from 'react';
import { Result, Modal } from 'antd';
import PropTypes from 'prop-types';

import Repo from '../Repo';

import './index.scss';
import RepoDetails from '../RepoDetails';

const Repos = ({ repos, error }) => {
  const [modal, setModal] = useState(false);
  const [activeRepo, setActiveRepo] = useState(null);

  const toggleModal = (repo) => {
    setModal((prevModal) => !prevModal);
    setActiveRepo(repo);
  };

  const showResult = () => {
    if (error) {
      return <Result title={error} />;
    }
    return (
      !!repos.length &&
      !error &&
      repos.map((e) => (
        <Repo name={e.name} handleClick={() => toggleModal(e)} />
      ))
    );
  };

  return (
    <div className="repos">
      {showResult()}
      <Modal footer={null} visible={modal} onCancel={() => toggleModal(null)}>
        {activeRepo && (
          <RepoDetails
            name={activeRepo.name}
            stars={activeRepo.stargazers_count}
            language={activeRepo.language}
            description={activeRepo.description}
            avatar={activeRepo.owner.avatar_url}
          />
        )}
      </Modal>
    </div>
  );
};

Repos.defaultProps = {
  repos: [],
  error: '',
};

Repos.propTypes = {
  repos: PropTypes.instanceOf(Array),
  error: PropTypes.string,
};

export default Repos;
