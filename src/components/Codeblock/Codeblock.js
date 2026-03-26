import React from 'react';
import styles from './codeblock.module.scss';

const Codeblock = ({ snippet = '', language = 'javascript', className = '' }) => {
  return (
    <div className={`${styles.codeblock} ${className}`}>
      <pre className={styles.pre}>
        <code className={styles.code}>
          {snippet.trim()}
        </code>
      </pre>
    </div>
  );
};

export default Codeblock;

