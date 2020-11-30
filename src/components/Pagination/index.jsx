import React from 'react';
import { Pagination as AntPagination } from 'antd';
import PropTypes from 'prop-types';

import './index.scss';

const Pagination = ({ totalCount, param, updatePage }) => {
  const onShowSizeChange = (page) => {
    updatePage(page, param);
  };

  return (
    <AntPagination
      showSizeChanger={false}
      onChange={onShowSizeChange}
      defaultCurrent={1}
      total={totalCount}
      pageSize={30}
    />
  );
};

Pagination.defaultProps = {
  totalCount: 1,
  updatePage: () => null,
  param: '',
};

Pagination.propTypes = {
  totalCount: PropTypes.number,
  updatePage: PropTypes.func,
  param: PropTypes.string,
};

export default Pagination;
