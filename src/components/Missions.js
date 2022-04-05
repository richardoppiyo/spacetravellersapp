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
        <tr className="styluse">
          <th className="stylus">Mission</th>
          <th className="stylus">Description</th>
          <th className="stylus">Status</th>
          <th className="stylus"> </th>
        </tr>

        {missions.map((mission) => (
          <tr key={mission.mission_id} className="myown">
            {/* console.log(`
            {mission}
            `); */}
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
                onClick={() => setMission(mission.mission_id)}
                className={!mission.reserved ? 'mission-join' : 'mission-leave'}
              >
                {(mission.reserved) ? 'Leave Mission' : 'Join Mission'}
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
