import { Route, Link, Outlet } from 'react-router-dom';

import './dx-feature-docs.scss';

/* eslint-disable-next-line */
export interface DxFeatureDocsProps {}

export function DxFeatureDocs(props: DxFeatureDocsProps) {
  return (
    <div>
      <h1>DxFeatureDocs</h1>

      <Outlet />
    </div>
  );
}

export default DxFeatureDocs;
