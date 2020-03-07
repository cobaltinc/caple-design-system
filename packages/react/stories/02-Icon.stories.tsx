import React from 'react';
import {
  Header,
  Text,
  Spacer,
  Icon
} from '../src';

import * as Icons from '@caple-ui/icons-react';
import FeatherIcons from 'feather-icons/dist/icons.json';

export default {
  title: 'Icon',
};

export const Default = () => {
  const DisplayStand = ({ children, name }: any) => (
    <div style={{display: 'inline-block', width: 100, height: 88, margin: 10, textAlign: 'center', borderRadius: 4, backgroundColor: '#fff', border: '1px solid #c4cdd5', overflow: 'hidden', fontSize: 12}}>
      <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 60, borderBottom: '1px solid #c4cdd6', marginBottom: 6}}>
        {children}
      </div>
      <Text strong size="small">{name}</Text>
    </div>
  );

  const toKebab = (str: string): string => (
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
      .map((s: string) => s.toLowerCase())
      .join('-')
  );

  return (
    <div style={{padding: 20}}>
      <Header level={2}>Caple Icons</Header>
      {
        Object.keys(Icons).map((key, index) => {
          return (
            <DisplayStand name={key} key={index}>
              <Icon type={toKebab(key)} size={40} color="#212b36" />
            </DisplayStand>
          )
        })
      }
    </div>
  )
};

export const Feather = () => {
  const DisplayStand = ({ children, name }: any) => (
    <div style={{display: 'inline-block', width: 140, height: 88, margin: 10, textAlign: 'center', borderRadius: 4, backgroundColor: '#fff', border: '1px solid #c4cdd5', overflow: 'hidden', fontSize: 12}}>
      <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 60, borderBottom: '1px solid #c4cdd6', marginBottom: 6}}>
        {children}
      </div>
      <Text strong size="small">{name}</Text>
    </div>
  );

  return (
    <div style={{padding: 20}}>
      <Header level={2}>Feather Icons</Header>
      {
        Object.keys(FeatherIcons).map((key, index) => {
          return (
            <DisplayStand name={key} key={index}>
              <Icon.Feather type={key} size={40} color="#212b36" />
            </DisplayStand>
          )
        })
      }
    </div>
  )
};

export const Color = () => {
  return (
    <div style={{padding: 20}}>
      <Icon type="alert-circle" size={60} color="#637381" />
      <Icon type="close-circle" size={60} color="#BF1D08" />
      <Icon type="check-circle" size={60} color="#5C6AC4" />
    </div>
  )
};

export const Rotate = () => {
  return (
    <div style={{padding: 20}}>
      <Icon type="arrow-right" size={80} rotate={45} />
    </div>
  )
};

export const Spin = () => {
  return (
    <div style={{padding: 20}}>
      <Icon type="gear" size={80} spin />
    </div>
  )
};