import { createContext, Context } from 'react';

export type RadioItemType = {
  label?: string;
  value?: string;
};

export interface RadioState {
  active?: RadioItemType | RadioItemType[];
}

export interface RadioContextState {
  state?: RadioState;
  dispatch?: React.Dispatch<RadioState>;
}

export const RadioReducer = (oldState: RadioState, newValue: RadioState) => ({ ...oldState, ...newValue });

const RadioContext: Context<RadioContextState> = createContext({});

export default RadioContext;
