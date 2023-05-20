import React from 'react';
import styles from './index.module.css';

export function Button(props) {
  return (
    <div id={styles.buttons} className={props.className}>
      <button onClick={props.onClick}>{props.texto}</button>
    </div>
  );
}
