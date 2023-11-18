import { render, screen } from '@testing-library/react';
import { render1, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText("Counter");
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText("+");
  const countElement = screen.getByTestId("count");

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText("-");
  const countElement = screen.getByTestId("count");

  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent("-1");
});