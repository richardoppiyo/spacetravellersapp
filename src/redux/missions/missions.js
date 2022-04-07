import getMissions from './missionapi';

const LOAD = 'spacetravelapp/missions/LOAD';
const TOGGLE = 'spacetravelapp/missions/TOGGLE';

const initialState = [];

export function load(mission) {
  return {
    type: LOAD,
    mission,
  };
}

export function toggleStatus(id) {
  return {
    type: TOGGLE,
    id,
  };
}

export const displayMission = () => async (dispatch) => {
  const missionsArr = await getMissions();
  const missionsTemp = [];

  Object.keys(missionsArr).forEach((id) => {
    missionsTemp.push({
      mission_id: missionsArr[id].mission_id,
      mission_name: missionsArr[id].mission_name,
      description: missionsArr[id].description,
      reserved: false,
    });
  });
  dispatch(load(missionsTemp));
};

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return [...state, ...action.mission];
    case TOGGLE:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });
    default:
      return state;
  }
}
