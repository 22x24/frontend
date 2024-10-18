import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('renders UserList component', () => {
  render(<UserList />);
  const nameText = screen.getAllByText(/Name/i);
  expect(nameText.length).toBeGreaterThan(0);
});

test('renders correct number of UserListItem components', () => {
  render(<UserList />);
  const bandwidthLimits = screen.getAllByText('0.5 Mbps');
  expect(bandwidthLimits.length).toBe(8);
});