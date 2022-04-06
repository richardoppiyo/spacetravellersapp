import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

let loadFirstTime = false;

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    if (!loadFirstTime) {
      dispatch(getRockets());
      loadFirstTime = true;
    }
  }, [dispatch]);

  return (
    <ul className="Rockets">
      {rockets.map(({
        image, name, description, id, reserved,
      }) => (
        <Rocket
          id={id}
          key={id}
          image={image}
          name={name}
          description={description}
          reserved={reserved}
        />
      ))}
    </ul>
  );
};

export default Rockets;