import { Outlet } from 'react-router-dom';

import './dx-feature-dashboard.scss';

/* eslint-disable-next-line */
export interface DxFeatureDashboardProps {}

export function DxFeatureDashboard(props: DxFeatureDashboardProps) {
  return (
    <div>
      <h1>DxFeatureDashboard</h1>

      <Outlet />
    </div>
  );

}

export default DxFeatureDashboard;
