import './main.global.css';
import { hot } from "react-hot-loader/root";
import React from 'react';

import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { Content } from './shared/Content';
import {CardsList} from "./shared/CardsList";





function AppComponent() {
  return (
    <Layout>
      <Header/>
      <Content>
        <CardsList/>
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent); 