import React from 'react';
import styles from './TimelineItem.module.css';
import Header from './Header';
import Content from './Content';
import Media from './Media';

const TimelineItem = ({
  alignment,
  title,
  content,
  src,
}: {
  alignment: string;
  title: string;
  content: string;
  src?: string;
}): JSX.Element => {
  return (
    <div className={`${styles.container} ${styles[alignment]}`}>
      <Header title={title} />
      <Content content={content} />
      {src && <Media src={src} />}
    </div>
  );
};

export default TimelineItem;
