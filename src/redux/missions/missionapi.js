const getMissions = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await res.json();
  return data;
};

export default getMissions;
