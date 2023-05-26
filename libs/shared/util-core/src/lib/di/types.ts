import { Token } from './token';

export type AbstractType<T> = abstract new (...params: unknown[]) => T;

export interface Type<T> extends Function {
  new (...params: unknown[]): T;
}

export type ProviderKey<T> = AbstractType<T> | Token<T>;

export type ProviderImpl<T> = T | Type<T>;

export interface Provider<T = unknown> {
  for: ProviderKey<T>;
  use?: ProviderImpl<T>;
  add?: ProviderKey<T>[];
}

export type UseAs = 'useValue' | 'useClass' | 'useFactory';

export interface ProviderItem<T = unknown> extends Provider<T> {
  useAs: UseAs;
}

export interface ProvidedAs<T> {
  provided: ProviderImpl<T>;
  useAs: UseAs;
}
