import React from 'react';
import { Pagination } from '../src';

export default {
  title: 'Component|Pagination',
};

export const Default = () => {
  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <Pagination totalItemsCount={150} />
    </div>
  );
};
