import React from 'react';

export { default as GUID } from './GUID';

export const tuple = <T extends string[]>(...args: T) => args;

export const warning = (title: string, body: string) => console.warn(`%c ${title}\n\n`, 'font-weight: bold; font-size: 16px;', body);

export const camelToSnake = (camel: string) => camel.replace(/[\w]([A-Z])/g, s => `${s[0]}-${s[1]}`).toLowerCase();

export const convertReactNodeTo = <T>(parentName: string, childName: string, reactNode: React.ReactNode) => {
  return React.Children.toArray(reactNode).filter(element => {
    if (React.isValidElement<T>(element) === false) {
      console.warn(`%c ${parentName}\n\n`, 'font-weight: bold; font-size: 16px;', `Only accepts ${childName} as it's children`);
      return false;
    }

    return true;
  });
};

export const concatReactNodeToString = (reactNode: React.ReactNode) => {
  return React.Children.toArray(reactNode)
    .filter(element => {
      return typeof element === 'string';
    })
    .concat()
    .toString();
};
