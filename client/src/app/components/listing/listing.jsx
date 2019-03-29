import React, { Component } from 'react';
import styles from './styles.module.scss';

import Item from '../../../ui/elements/item/Item.jsx';
import Pagination from '../../../ui/elements/pagination/Pagination.jsx';

class Listing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      itemsPerPage: 5
    }
  }

  componentDidMount() {
    this.props.fetchData();
  }

  handleClick = (number) => {
    this.setState({currentPage: number})
  }

  render () {
    const { currentPage, itemsPerPage } = this.state;
    const { data } = this.props;

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentItems = data.slice(indexOfFirst, indexOfLast);
    
    const renderList = currentItems.map((item, index) => {
      return <Item key={index} data={item}/>;
    });

    return (
      <div>
        <ul className={styles.list}>
          {renderList}
        </ul>
        <Pagination count={data.length} itemsPerPage={5} currentPage={currentPage} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Listing;