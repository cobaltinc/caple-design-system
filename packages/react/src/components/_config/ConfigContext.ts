import config from './config';
import { createContext, Context } from 'react';

export interface ConfigContextState {
  prefix: string;
  theme?: string;
}

const ConfigContext: Context<ConfigContextState> = createContext({
  prefix: config.prefix,
});

export default ConfigContext;
