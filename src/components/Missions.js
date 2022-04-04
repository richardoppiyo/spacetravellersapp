import React, { useEffect } from 'react';
import './Missions.css';
import { useSelector, useDispatch } from 'react-redux';
import { displayMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  console.log(missions);
  console.log('my missiom');
  useEffect(() => {
    console.log(missions);
    dispatch(displayMission());
  }, []);

  return (
    <>
      <p>Table with colgroup</p>
      <table className="table-style">
        <colgroup span="4" />
        <tr className="stylus">
          <th className="stylus">Mission</th>
          <th className="stylus">Description</th>
          <th className="stylus">Status</th>
          <th className="stylus"> </th>
        </tr>

        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="stylus">{mission.mission_name}</td>
            <td className="stylus">{mission.description}</td>
            <td className="stylus">{mission.manufacturers}</td>
            <td className="stylus">
              <button type="button">JOIN Mission</button>
            </td>
          </tr>
        ))}
        ;

      </table>

    </>
  );
};

export default Missions;
