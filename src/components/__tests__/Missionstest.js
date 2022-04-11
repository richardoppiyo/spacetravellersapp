import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';

const missions = [
  {
    mission_name: 'Thaicom',
    mission_id: '9D1B7E0',
    description:
        'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: false,
  },
];

const reservedMissions = () => {
  missions[0] = { ...missions[0], reserved: true };
};

const mockObj = () => {
  render(
    <Provider store={configureStore}>
      <table className="table-style">
        <colgroup span="4" />
        <tr className="styluse">
          <th className="stylus">Mission</th>
          <th className="stylus">Description</th>
          <th className="stylus">Status</th>
          <th className="stylus"> </th>
        </tr>

        {missions.map((mission) => (
          <tr key={mission.mission_id} className="myown">
            <td className="stylusa">{mission.mission_name}</td>
            <td className="stylusb">{mission.description}</td>
            <td className="stylusc">
              <span className={!mission.reserved ? 'mission-not-member' : 'mission-member'}>
                {!mission.reserved ? 'NOT A MEMBER' : 'MEMBER'}
              </span>
            </td>
            <td className="stylusd">
              <button
                type="button"
                className={!mission.reserved ? 'mission-join' : 'mission-leave'}
              >
                {(mission.reserved) ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tr>
        ))}
      </table>
    </Provider>,
  );
};

describe('Test Missions render', () => {
  test('Test Mission name', () => {
    mockObj();
    expect(screen.getByText('Thaicom')).toBeInTheDocument();
  });

  test('Test Mission description', () => {
    mockObj();
    expect(screen.getByText(missions[0].description)).toBeInTheDocument();
  });
  test('Test Mission join button', () => {
    mockObj();
    expect(screen.getByRole('button')).toHaveTextContent('Join Mission');
  });

  test('Test Mission leave button', () => {
    reservedMissions();
    mockObj();
    expect(screen.getByRole('button')).toHaveTextContent('Leave Mission');
  });
});
