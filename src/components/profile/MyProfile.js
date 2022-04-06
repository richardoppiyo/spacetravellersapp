import React from 'react';
import { useSelector } from 'react-redux';
import Reservations from './Reservations';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const activeRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="Reservations">
      <Reservations
        reservations={activeRockets}
        object="Rockets"
        message="No rockets reserved"
        type="rocket"
      />
    </div>
  );
};

export default MyProfile;
