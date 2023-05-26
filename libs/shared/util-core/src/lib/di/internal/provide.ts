import { ProvidedAs, Provider, Type } from '../types';
import { relations } from './container';

export const provide = <T>({ for: key, use }: Provider<T>): ProvidedAs<T> => {
  const concrete = use ?? key;
  if (typeof concrete === 'function') {
    const dependencies = relations.get(key);
    try {
      const clazz = concrete as Type<typeof use>;
      const provided = new clazz(...dependencies) as T;
      return { provided, useAs: 'useClass' };
    } catch {
      const factory = concrete as <R>(...params: unknown[]) => R;
      const provided = factory<T>(...dependencies);
      return { provided, useAs: 'useFactory' };
    }
  }

  return { provided: concrete as T, useAs: 'useValue' };
};
