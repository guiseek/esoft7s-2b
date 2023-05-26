import { render } from '@testing-library/react';

import DxFeatureDocs from './dx-feature-docs';

describe('DxFeatureDocs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DxFeatureDocs />);
    expect(baseElement).toBeTruthy();
  });
});
