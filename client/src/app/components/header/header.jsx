import React from 'react';
import styles from './styles.module.scss';

import Filter from '../../containers/filter.js';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Simple filter</h1>
      <Filter/>
    </header>
  );

}

export default Header;