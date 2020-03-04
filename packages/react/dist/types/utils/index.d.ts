import React from 'react';
export { default as GUID } from './GUID';
export declare const tuple: <T extends string[]>(...args: T) => T;
export declare const warning: (title: string, body: string) => void;
export declare const camelToSnake: (camel: string) => string;
export declare const convertReactNodeTo: <T>(parentName: string, childName: string, reactNode: React.ReactNode) => (string | number | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal)[];
export declare const concatReactNodeToString: (reactNode: React.ReactNode) => string;
