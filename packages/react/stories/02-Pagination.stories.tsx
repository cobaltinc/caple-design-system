import React from 'react';
import { Pagination } from '../src';

export default {
  title: 'Component|Pagination',
};

export const Default = () => {
  return (
    <>
      <div style={{ padding: '30px 30px 15px 30px', maxWidth: 500 }}>
        <Pagination totalItemsCount={150} />
      </div>
      <div style={{ padding: '15px 30px 15px 30px', maxWidth: 500 }}>
        <Pagination totalItemsCount={150} showFirst={false} showLast={false} />
      </div>
    </>
  );
};
