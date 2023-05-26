import { container } from './internal/container';
import { ProviderKey } from './types';

export const inject = <T>(type: ProviderKey<T>): T => {
  try {
    return container.get(type);
  } catch {
    throw `Provider ${type.name} não registrado`;
  }
};
