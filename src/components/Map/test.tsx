import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Cristo Redentor',
      slug: 'cristo-redentor',
      location: {
        latitude: -22,
        longitude: -43
      }
    };

    const place2 = {
      id: '2',
      name: 'Muralha da China',
      slug: 'muralha-da-china',
      location: {
        latitude: 40.4319,
        longitude: 116.5704
      }
    };

    render(<Map places={[place, place2]} />);

    expect(screen.getByTitle(/Cristo Redentor/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Muralha da China/i)).toBeInTheDocument();
  });
});
