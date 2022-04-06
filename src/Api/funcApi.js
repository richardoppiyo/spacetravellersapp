const GET_API = 'https://api.spacexdata.com/v3/';

const fetchDataRocket = async (END_POINT) => {
  const data = await fetch(`${GET_API}${END_POINT}`);
  const dataResult = await data.json();
  return dataResult;
};

export default fetchDataRocket;
