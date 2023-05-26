import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@esoft7s/main/feature-shell').then((m) => m.FeatureShellModule),
  },
];
