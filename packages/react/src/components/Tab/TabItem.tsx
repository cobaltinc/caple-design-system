import React from 'react';

export interface TabItemProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ title, className = '', style }: TabItemProps) => {
  return null;
};
