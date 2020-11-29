import React, { useContext, useState } from 'react';
import { Result, Modal } from 'antd';

import Repo from '../Repo';

import './index.scss';
import RepoDetails from '../RepoDetails';
import { AppContext } from '../../providers';

const showCardInGrid = (repo, toggleModal) => (
  <Repo
    key={repo.id}
    owner={repo.owner.login}
    name={repo.name}
    handleClick={() => toggleModal(repo)}
    avatar={repo.owner.avatar_url}
    stars={repo.stargazers_count}
    language={repo.language}
  />
);

const Repos = () => {
  const {
    state: {
      repos: { data, error },
    },
  } = useContext(AppContext);
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
      !!data.length &&
      !error && (
        <div className="repos-container">
          {data.map((e) => showCardInGrid(e, toggleModal))}
        </div>
      )
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
            url={activeRepo.html_url}
            watchers={activeRepo.watchers}
            branch={activeRepo.default_branch}
          />
        )}
      </Modal>
    </div>
  );
};

export default Repos;
