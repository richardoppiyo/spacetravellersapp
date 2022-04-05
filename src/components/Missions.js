import React, { useEffect } from 'react';
import './Missions.css';
import { useSelector, useDispatch } from 'react-redux';
import { displayMission, toggleStatus } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.mission);
  // const [join, setJoin] = useState(false);
  const dispatch = useDispatch();
  console.log(missions);

  useEffect(() => {
    dispatch(displayMission(missions));
  }, []);

  const setMission = (id) => {
    dispatch(toggleStatus(id));
  };

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
            {/* console.log(`
            {mission}
            `); */}
            <td className="stylus">{mission.mission_name}</td>
            <td className="stylus">{mission.description}</td>
            <td className="stylus">
              {mission.reserved ? 'NOT A MEMBER' : 'MEMBER'}
            </td>
            <td className="stylus">
              <button type="button" onClick={() => setMission(mission.mission_id)}>
                {(!mission.reserved) ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tr>
        ))}
        ;

      </table>

    </>
  );
};

export default Missions;
