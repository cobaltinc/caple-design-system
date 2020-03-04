import { Context } from 'react';
export interface ConfigContextState {
    prefix: string;
    theme?: string;
}
declare const ConfigContext: Context<ConfigContextState>;
export default ConfigContext;
