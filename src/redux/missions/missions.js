import getMissions from './missionapi';

const LOAD = 'spacetravelapp/missions/LOAD';

const initialState = [];

export function load(mission) {
  return {
    type: LOAD,
    mission,
  };
}

export const displayMission = () => async (dispatch) => {
  const missionsArr = await getMissions();
  const missionsTemp = [];

  Object.keys(missionsArr).forEach((id) => {
    missionsTemp.push({
      mission_id: missionsArr[id].mission_id,
      mission_name: missionsArr[id].mission_name,
      manufacturers: missionsArr[id].manufacturers,
      description: missionsArr[id].description,
    });
  });
  dispatch(load(missionsTemp));
};

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      console.log('inside here!');
      return action.mission;
    default:
      return state;
  }
}
