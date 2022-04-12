import * as React from 'react';
import { Canvas as SBCanvas, DocsContext } from '@storybook/addon-docs';

import { viewports } from '/.storybook/viewports';

export const Canvas = (props) => {
  // You can access `parameters` from DocsContext
  const context = React.useContext(DocsContext);

  /**
   * If `parameters.viewport.defaultViewport is set to a key of `viewports`,
   * apply that width to the rendered Canvas
   */
  const viewport = context.parameters?.viewport?.defaultViewport;
  const width = viewports[viewport]?.styles.width;

  return <SBCanvas {...props} style={{ width }} />;
};
