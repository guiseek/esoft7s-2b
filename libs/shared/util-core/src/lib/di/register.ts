import { setup } from './internal/setup';
import { Provider } from './types';

export const register = (...providers: Provider[]) => providers.forEach(setup);
