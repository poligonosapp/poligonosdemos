// test-utils.js
import { render, queries } from '@testing-library/react';
import * as customQueries from './custom-queries';

const customRender = (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>, options: any[]) =>
    render(ui, { queries: { ...queries, ...customQueries }, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
