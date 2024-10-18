import React from "react";
import { render, screen } from "@testing-library/react";
import LoginButton from "./LoginButton";

test("renders LoginButton component", () => {
  render(<LoginButton />);
  const buttonElement = screen.getByText(/Login/i);
  expect(buttonElement).toBeInTheDocument();
});

test("LoginButton has correct attributes", () => {
  render(<LoginButton />);
  const buttonElement = screen.getByText(/Login/i);
  expect(buttonElement).toHaveAttribute("type", "submit");
  expect(buttonElement).toHaveClass("bg-indigo-500");
});