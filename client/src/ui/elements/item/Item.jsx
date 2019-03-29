import React from 'react';
import styles from './styles.module.scss';

const Item = (props) => {
  const { name, country, date } = props.data;

  return (
    <li className={styles.listItem}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.description}>Country: {country}</div>
      <div className={styles.date}>{date}</div>
    </li>
  )
}

export default Item;