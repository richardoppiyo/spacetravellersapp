import fetchDataRocket from './funcApi';

const END_POINT = 'rockets';

const fetchRockets = () => fetchDataRocket(END_POINT);

export default fetchRockets;
