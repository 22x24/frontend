import React from 'react';
import { render, screen } from '@testing-library/react';
import MIRGraph from './MIRGraph';

test('renders MIRGraph component', () => {
  render(<MIRGraph />);
  const mirTitleElement = screen.getByText(/MIR/i);
  const timeElement = screen.getByText(/Time/i);
  expect(mirTitleElement).toBeInTheDocument();
  expect(timeElement).toBeInTheDocument();
});

test('renders custom title', () => {
  render(<MIRGraph title="Custom Title" />);
  const customTitleElement = screen.getByText(/Custom Title/i);
  expect(customTitleElement).toBeInTheDocument();
});

test('renders custom y-axis labels', () => {
  const customLabels = ['20 Mbps', '15 Mbps', '10 Mbps', '5 Mbps', '0 Mbps'];
  render(<MIRGraph yAxisLabels={customLabels} />);
  customLabels.forEach(label => {
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });
});