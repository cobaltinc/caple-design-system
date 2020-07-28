import { createContext, Context } from 'react';

export type SelectOptionType = {
  id: string;
  title: string;
  value: string;
};

export interface FloatingLabelSelectState {
  active?: SelectOptionType;
}

export interface FloatingLabelSelectContextState {
  state?: FloatingLabelSelectState;
  dispatch?: React.Dispatch<FloatingLabelSelectState>;
}

export const FloatingLabelSelectReducer = (oldState: FloatingLabelSelectState, newValue: FloatingLabelSelectState) => ({ ...oldState, ...newValue });

const FloatingLabelSelectContext: Context<FloatingLabelSelectContextState> = createContext({});

export default FloatingLabelSelectContext;
