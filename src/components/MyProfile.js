import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayMission } from '../redux/missions/missions';
import Reservations from './profile/Reservations';
import './Myprofile.css';

const Rockets = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rocketsReducer);
  const activeRockets = rockets.filter((rocket) => rocket.reserved === true);

  const myMissions = missions.filter((mission) => mission.reserved === true);

  useEffect(() => {
    dispatch(displayMission(missions));
  }, []);

  return (
    <>
      <div className="outerbox">
        <div>
          <h1>My mission</h1>
          { myMissions.map((mission) => (
            <div key={mission.mission_id}>
              <ul>
                <li>{mission.mission_name}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="Reservations">
          <Reservations
            reservations={activeRockets}
            object="Rockets"
            message="No rockets reserved"
            type="rocket"
          />
        </div>
      </div>
    </>
  );
};

export default Rockets;
