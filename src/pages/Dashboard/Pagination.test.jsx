import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

test('renders Pagination component', () => {
  render(<Pagination />);
  const pageNumber = screen.getByText('1');
  expect(pageNumber).toBeInTheDocument();
});

test('renders previous and next buttons', () => {
  render(<Pagination />);
  const prevButton = screen.getByLabelText('Previous page');
  const nextButton = screen.getByLabelText('Next page');
  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});