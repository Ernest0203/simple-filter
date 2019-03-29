import React from 'react';
import styles from './styles.module.scss';

import Input from '../../../ui/elements/input/Input.jsx';

const Filter = (props) => {
  const applyFilter = (e) => {
    const newFilter = { [e.target.name]: e.target.value };
    const multifilters = [ ...props.multifilters ];
    if (multifilters.length !== 0) {
      const index = multifilters.findIndex((item) => item[e.target.name] !== undefined);
      if (index > -1) { 
        multifilters.splice(index, 1, newFilter);
      } else multifilters.push(newFilter);
      props.applyFilter(multifilters);
    } else {
        multifilters.push(newFilter);
        props.applyFilter(multifilters);
    }
  }

  return (
    <div className={styles.filter}>
       <span>Name: <Input name="name" type="text" onChange={applyFilter}/></span>
       <span>Country: <Input name="country" type="text" onChange={applyFilter}/></span>
    </div>
  );
}

export default Filter;