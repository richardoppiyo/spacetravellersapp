import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayMission } from '../redux/missions/missions';

const Rockets = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  const myMissions = missions !== null
    ? missions.filter((item) => item.reserved !== false) || []
    : [];

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
        <div>
          <h1>My Rockets</h1>
        </div>
      </div>
    </>
  );
};

export default Rockets;
