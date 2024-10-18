import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";

test("renders InputField component", () => {
  render(<InputField label="Test Label" placeholder="Test Placeholder" />);
  const labelElement = screen.getByText(/Test Label/i);
  const inputElement = screen.getByPlaceholderText(/Test Placeholder/i);
  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test("renders password input when type is password", () => {
  render(<InputField label="Password" placeholder="Enter password" type="password" />);
  const inputElement = screen.getByPlaceholderText(/Enter password/i);
  expect(inputElement).toHaveAttribute("type", "password");
});

test("calls onChange handler when input value changes", () => {
  const mockOnChange = jest.fn();
  render(<InputField label="Test" placeholder="Test" onChange={mockOnChange} />);
  const inputElement = screen.getByPlaceholderText(/Test/i);
  fireEvent.change(inputElement, { target: { value: "new value" } });
  expect(mockOnChange).toHaveBeenCalledTimes(1);
});