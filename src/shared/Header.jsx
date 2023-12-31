import { hot } from 'react-hot-loader/root'
import * as React from 'react';
import styles from './header.less';

function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.example}>Reddit for our own</h1>
      <input></input>
    </header>
  )
}

export const Header = hot(HeaderComponent);