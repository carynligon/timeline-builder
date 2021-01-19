import React, { useEffect, useState } from 'react';
import styles from '../../styles/Timeline.module.css';
import timelineData from '../../data/timeline_data.json';
import BuilderDialog from '../../components/BuilderDialog';
import TimelineItem from '../../components/TimelineItem';
import storage from '../../utils/storage';

const BuildPage = (): JSX.Element => {
  const [timelineItems, updateTimelineItems] = useState([]);

  useEffect(() => {
    const storedItems = storage.local.getItem('timeline_items');
    if (storedItems) {
      updateTimelineItems(storedItems);
    }
  }, []);

  return (
    <div className={styles.container}>
      <BuilderDialog updateTimelineItems={updateTimelineItems} />
      <div className={styles.line}></div>
      {Object.entries(timelineItems).map(([key, item]) => {
        const parsedItem = JSON.parse(item);
        return (
          <TimelineItem
            key={`${parsedItem.title}-timeline-item`}
            alignment={parsedItem.alignment}
            title={parsedItem.title}
            content={parsedItem.content}
            src={parsedItem.src}
          />
        );
      })}
    </div>
  );
};

export default BuildPage;
