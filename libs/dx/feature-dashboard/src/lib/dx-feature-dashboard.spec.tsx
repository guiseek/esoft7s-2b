import { render } from '@testing-library/react';

import DxFeatureDashboard from './dx-feature-dashboard';

describe('DxFeatureDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DxFeatureDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
