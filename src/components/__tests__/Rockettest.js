import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import Rocket from '../rockets/Rocket';

const rockets = [
  {
    id: '9D1B7E0',
    name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    reserved: false,
  },
];

const bookeddRockets = () => {
  rockets[0] = { ...rockets[0], reserved: true };
};

const mockObj = () => {
  render(
    <Provider store={configureStore}>
      <ul className="Rockets">
        {rockets.map(({
          image, name, description, id, reserved,
        }) => (
          <Rocket
            id={id}
            key={id}
            image={image}
            name={name}
            description={description}
            reserved={reserved}
          />
        ))}
      </ul>
    </Provider>,
  );
};

describe('Test Rocket render', () => {
  test('Test Rocket name', () => {
    mockObj();
    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
  });

  test('Test Rocket description', () => {
    mockObj();
    expect(screen.getByText(rockets[0].description)).toBeInTheDocument();
  });
  test('Test Rocket reserve button', () => {
    mockObj();
    expect(screen.getByRole('button')).toHaveTextContent('Reserve Rocket');
  });

  test('Test Rocket cancel reservation', () => {
    bookeddRockets();
    mockObj();
    expect(screen.getByRole('button')).toHaveTextContent('Cancel Reservation');
  });
});
