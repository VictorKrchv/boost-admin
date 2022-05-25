import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import { Header } from '@widgets/header';
import { withProviders } from './providers';
import { Pages } from '@pages/pages';

import './index.css';
import { Sidemenu } from '@widgets/sidemenu';

const App = () => {
  return (
    <Layout>
      <Sidemenu />
      <Layout.Content>
        <Header />
        <Pages />
      </Layout.Content>
    </Layout>
  );
};

export default withProviders(App);
