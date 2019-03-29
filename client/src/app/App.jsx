import React, { Component } from 'react';
import styles from './styles.module.scss';

import Header from './components/header/header.jsx';
import Listing from './containers/listing.js';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <Listing />
        </div>
      </div>
    );
  }
}

export default App;
