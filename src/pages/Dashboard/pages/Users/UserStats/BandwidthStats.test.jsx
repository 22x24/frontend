import React from 'react';
import { render, screen } from '@testing-library/react';
import BandwidthStats from './BandwidthStats';

test('renders BandwidthStats component', () => {
  render(<BandwidthStats />);
  const maxBandwidthElement = screen.getByText(/Max bandwidth/i);
  const bandwidthLimitElement = screen.getByText(/Bandwidth limit/i);
  const highestMIRElement = screen.getByText(/Highest MIR reached/i);
  expect(maxBandwidthElement).toBeInTheDocument();
  expect(bandwidthLimitElement).toBeInTheDocument();
  expect(highestMIRElement).toBeInTheDocument();
});