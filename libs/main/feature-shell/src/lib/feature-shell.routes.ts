import { Route } from '@angular/router';
import { FeatureShellContainer } from './feature-shell.container';

export const featureShellRoutes: Route[] = [
  {
    path: '',
    component: FeatureShellContainer,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@esoft7s/main/feature-home').then((m) => m.FeatureHomeModule),
      },
    ],
  },
];
