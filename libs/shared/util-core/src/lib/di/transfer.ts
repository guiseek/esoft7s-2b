import { providers } from './internal/container';

export const transfer = () => {
  return providers.map(({ for: provide, use, add: deps = [], useAs }) => {
    return { provide, deps, [useAs]: use };
  });
};
