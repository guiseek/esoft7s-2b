import { container, providers, relations } from './container';
import { Provider } from '../types';
import { provide } from './provide';
import { inject } from '../inject';

export const setup = <T>(provider: Provider<T>) => {
  relations.set(provider.for, (provider.add ?? []).map(inject));
  const { provided, useAs } = provide(provider);
  container.set(provider.for, provided);
  providers.push({ ...provider, useAs });
};
