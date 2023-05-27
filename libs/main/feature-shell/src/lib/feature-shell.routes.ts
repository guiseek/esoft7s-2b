import { FeatureShellContainer } from './feature-shell.container';
import { Route } from '@angular/router';

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
      {
        path: 'search',
        loadChildren: () =>
          import('@esoft7s/search/feature-search').then(
            (m) => m.FeatureSearchModule
          ),
      },
      {
        path: 'collection',
        loadChildren: () =>
          import('@esoft7s/collection/feature-collection').then(
            (m) => m.FeatureCollectionModule
          ),
      },
    ],
  },
];
