import { Routes, Route, Link } from 'react-router-dom';
import { DxFeatureDashboard } from '@esoft7s/dx/feature-dashboard';
import { DxFeatureDocs } from '@esoft7s/dx/feature-docs';

import './dx-feature-shell.scss';

/* eslint-disable-next-line */
export interface DxFeatureShellProps {}

export function DxFeatureShell(props: DxFeatureShellProps) {
  return (
    <div>
      <h1>Welcome to DxFeatureShell!</h1>

      <ul>
        <li>
          <Link to="/">dashboard</Link>
        </li>
        <li>
          <Link to="/docs">docs</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<DxFeatureDashboard />} />
        <Route path="/docs" element={<DxFeatureDocs />} />
          {/* <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} /> */}
      </Routes>
    </div>
  );
}

export default DxFeatureShell;
