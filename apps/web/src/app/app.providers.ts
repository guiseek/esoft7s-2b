import { register, transfer } from '@esoft7s/shared/util-core';
import { sharedDataAccess } from '@esoft7s/shared/data-access';
import { registerLocaleData } from '@angular/common';
import ptBR from '@angular/common/locales/extra/br';
import pt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';

export const appProviders = () => {

  const { infrastructure } = sharedDataAccess();
  register(...infrastructure);

  registerLocaleData(pt, 'pt-BR', ptBR);
  return [{ provide: LOCALE_ID, useValue: 'pt-BR' }, ...transfer()];
};
