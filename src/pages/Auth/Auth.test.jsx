import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Auth from "./Auth";

test("renders Auth component", () => {
  render(<Auth />);
  const titleElement = screen.getByText(/Network Manager/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders sign in form", () => {
  render(<Auth />);
  const userInput = screen.getByPlaceholderText(/Roza/i);
  const passwordInput = screen.getByPlaceholderText(/Test/i);
  const loginButton = screen.getByText(/Login/i);
  expect(userInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test("updates input values on change", () => {
  render(<Auth />);
  const userInput = screen.getByPlaceholderText(/Roza/i);
  const passwordInput = screen.getByPlaceholderText(/Test/i);
  fireEvent.change(userInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "testpassword" } });
  expect(userInput.value).toBe("testuser");
  expect(passwordInput.value).toBe("testpassword");
});

test("calls handleLogin on form submission", () => {
  const mockHandleLogin = jest.fn();
  render(<Auth />);
  const form = screen.getByRole("form");
  form.onsubmit = mockHandleLogin;
  fireEvent.submit(form);
  expect(mockHandleLogin).toHaveBeenCalledTimes(1);
});