import { render } from '@testing-library/react';

import DxFeatureShell from './dx-feature-shell';

describe('DxFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DxFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
