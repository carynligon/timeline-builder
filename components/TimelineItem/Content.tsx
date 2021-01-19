import React from 'react';

const Content = ({ content }: { content: string }): JSX.Element => {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
};

export default Content;
