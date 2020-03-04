import React from 'react';

export interface SelectOptionProps {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export default ({ children, value, disabled = false }: SelectOptionProps) => {
  return null;
};
