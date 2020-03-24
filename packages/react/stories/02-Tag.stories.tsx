import React from 'react';
import { Tag } from '../src';

export default {
  title: 'Component|Tag',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Tag name="Tag" />
    </div>
  );
};

export const Size = () => {
  return (
    <div style={{ padding: 30 }}>
      <Tag name="Tag" size="small" style={{ marginRight: 10 }} />
      <Tag name="Tag" size="normal" style={{ marginRight: 10 }} />
      <Tag name="Tag" size="large" />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 30 }}>
      <Tag name="Tag" disabled />
    </div>
  );
};

export const Closable = () => {
  const { useState } = React;
  const [tags, setTags] = useState<string[]>(Array.apply(null, Array(6)).map((_, index) => `Tag ${index}`));

  const handleClose = (name: string) => {
    setTags(tags.filter(tag => tag !== name));
  };

  return (
    <div style={{ padding: 30 }}>
      {tags.map((name, index) => {
        return <Tag name={name} key={index} closable onClose={handleClose} style={{ marginRight: 10 }} />;
      })}
    </div>
  );
};
