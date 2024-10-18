import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

test('renders Sidebar component', () => {
  const mockSetActivePage = jest.fn();
  render(<Sidebar activePage="Users" setActivePage={mockSetActivePage} />);
  const networkManagerText = screen.getByText(/Network Manager/i);
  expect(networkManagerText).toBeInTheDocument();
});

test('calls setActivePage when a nav item is clicked', () => {
  const mockSetActivePage = jest.fn();
  render(<Sidebar activePage="Users" setActivePage={mockSetActivePage} />);
  
  fireEvent.click(screen.getByText('Network'));
  expect(mockSetActivePage).toHaveBeenCalledWith('Network');
  
  fireEvent.click(screen.getByText('Dashboard'));
  expect(mockSetActivePage).toHaveBeenCalledWith('Dashboard');
});