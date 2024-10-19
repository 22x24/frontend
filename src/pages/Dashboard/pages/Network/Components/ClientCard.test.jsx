import React from 'react';
import { render, screen } from '@testing-library/react';
import ClientCard from './ClientCard';

// Set the test environment to jsdom
import '@testing-library/jest-dom/extend-expect';

describe('ClientCard', () => {
  test('renders ClientCard component with correct props', () => {
    const props = {
      name: 'Test Client',
      maxBandwidth: '100 Mbps',
      bandwidthLimit: '50 Mbps',
      isOnline: true,
    };

    render(<ClientCard {...props} />);

    // Check if the client name is rendered
    expect(screen.getByText(/Test Client/i)).toBeInTheDocument();
    
    // Check if max bandwidth is displayed
    expect(screen.getByText(/Max bandwidth : 100 Mbps/i)).toBeInTheDocument();
    
    // Check if bandwidth limit is displayed
    expect(screen.getByText(/Bandwidth limit : 50 Mbps/i)).toBeInTheDocument();
    
    // Check the online status indicator's color (green if online)
    const statusIndicator = screen.getByRole('presentation'); // Assuming the status indicator is the div with the background color
    expect(statusIndicator).toHaveStyle('background-color: green');
  });

  test('displays orange for offline status', () => {
    const props = {
      name: 'Offline Client',
      maxBandwidth: '50 Mbps',
      bandwidthLimit: '25 Mbps',
      isOnline: false,
    };

    render(<ClientCard {...props} />);

    // Check the online status indicator's color (orange if offline)
    const statusIndicator = screen.getByRole('presentation');
    expect(statusIndicator).toHaveStyle('background-color: orange');
  });
});
