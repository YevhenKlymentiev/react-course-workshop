import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';

import Timer from './Timer';

let container,
    root;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  jest.useFakeTimers();
});
afterEach(() => {
  act(() => {
    root.unmount();
  });
  container.remove();
  container = null;
  root = null;
  jest.useRealTimers();
});

it("Should select null after timing out", () => {
  const onSelect = jest.fn();
  act(() => {
    root.render(<Timer onSelect={onSelect} />);
  });
  // move ahead in time by 100ms
  act(() => {
    jest.advanceTimersByTime(100);
  });
  expect(onSelect).not.toHaveBeenCalled();
  // and then move ahead by 5 seconds
  act(() => {
    jest.advanceTimersByTime(10000);
  });
  expect(onSelect).toHaveBeenCalledWith(null);
});

it("Should cleanup on being removed", () => {
  const onSelect = jest.fn();
  act(() => {
    root.render(<Timer onSelect={onSelect} />);
  });
  act(() => {
    jest.advanceTimersByTime(100);
  });
  expect(onSelect).not.toHaveBeenCalled();
  // unmount the app
  act(() => {
    root.render(null);
  });
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  expect(onSelect).not.toHaveBeenCalled();
});

it("Should accept selections", () => {
  const onSelect = jest.fn();
  act(() => {
    root.render(<Timer onSelect={onSelect} />);
  });
  act(() => {
    container
      .querySelector("[data-testid='2']")
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onSelect).toHaveBeenCalledWith(2);
});
