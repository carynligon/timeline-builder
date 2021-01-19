import React from 'react';
import styles from './TimelineItem.module.css';

const Media = ({ src }: { src: string }): JSX.Element => {
  return (
    <div className={styles.media}>
      <img src={src} />
    </div>
  );
};

export default Media;
