import React from 'react';
import { PageHeader, Input } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import messages from '../../messages';

const { Search } = Input;

const SearchBar = () => (
  <Search
    placeholder={messages.searchPlaceholder}
    allowClear
    enterButton="Search"
    size="large"
  />
);

const Navbar = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title={<GithubOutlined />}
        subTitle={<SearchBar />}
      />
    </div>
  );
};

export default Navbar;
