import React from 'react';
import { render, screen } from '@testing-library/react';
import UserListItem from './UserListItem';

test('renders UserListItem component', () => {
  const props = {
    name: 'Test User',
    maxBandwidth: '10 Mbps',
    bandwidthLimit: '5 Mbps'
  };
  render(<UserListItem {...props} />);
  
  const nameText = screen.getByText(/Test User/i);
  expect(nameText).toBeInTheDocument();
  expect(screen.getByText('10 Mbps')).toBeInTheDocument();
  expect(screen.getByText('5 Mbps')).toBeInTheDocument();
});