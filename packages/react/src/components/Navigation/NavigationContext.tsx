import { createContext, Context } from 'react';

export interface NavigationState {
  active?: string;
}

export interface NavigationContextState {
  state?: NavigationState;
  dispatch?: React.Dispatch<NavigationState>;
}

export const NavigationReducer = (oldState: NavigationState, newValue: NavigationState) => ({ ...oldState, ...newValue });

const NavigationContext: Context<NavigationContextState> = createContext({});

export default NavigationContext;
