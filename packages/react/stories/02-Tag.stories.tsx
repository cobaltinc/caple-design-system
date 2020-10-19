import React from 'react';
import { Tag, Spacer } from '../src';

export default {
  title: 'Component|Tag',
};

export const Default = () => {
  return (
    <div style={{ padding: 30 }}>
      <Spacer>
        <Tag text="Lightgreen" color="lightgreen" />
        <Tag text="Blue" color="blue" />
        <Tag text="Indigo" color="indigo" />
        <Tag text="Amber" color="amber" />
        <Tag text="Red" color="red" />
        <Tag text="IndigoDark" color="indigodark" />
        <Tag text="CyanLight" color="cyanlight" />
        <Tag text="IndigoLight" color="indigolight" />
      </Spacer>
    </div>
  );
};
