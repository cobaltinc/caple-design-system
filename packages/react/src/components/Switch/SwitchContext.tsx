import { createContext, Context } from 'react';

export type SwitchItemType = {
  id: string;
  title: string;
  value: string;
};

export interface SwitchState {
  multiple: boolean;
  active?: SwitchItemType | SwitchItemType[];
}

export interface SwitchContextState {
  state?: SwitchState;
  dispatch?: React.Dispatch<SwitchState>;
}

export const SwitchReducer = (oldState: SwitchState, newValue: SwitchState) => ({ ...oldState, ...newValue });

const SwitchContext: Context<SwitchContextState> = createContext({});

export default SwitchContext;
