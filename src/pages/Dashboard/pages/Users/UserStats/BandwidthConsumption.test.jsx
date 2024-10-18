import React from 'react';
import { render, screen } from '@testing-library/react';
import BandwidthConsumption from './BandwidthConsumption';

test('renders BandwidthConsumption component', () => {
  render(<BandwidthConsumption />);
  const mirElement = screen.getByText(/MIR/i);
  expect(mirElement).toBeInTheDocument();
});