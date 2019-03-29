import React from 'react';
import styles from './styles.module.scss';

const Input = (props) => {
  const { name, type, placeholder, onChange } = props;
  return (
      <input className={styles.input} name={name} type={type} placeholder={placeholder} onChange={(e) => onChange(e)}></input>
  );
}

export default Input;