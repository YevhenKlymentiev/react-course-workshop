import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';

import Welcome from './Welcome';

let container,
    root;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});
afterEach(() => {
  act(() => {
    root.unmount();
  });
  container.remove();
  container = null;
  root = null;
});

it("Renders with or without a name", () => {
  act(() => {
    root.render(<Welcome />);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    root.render(<Welcome name="Jenny" />);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    root.render(<Welcome name="Margaret" />);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
  // expect(container).toHaveTextContent("Hello, Margaret!");
});
