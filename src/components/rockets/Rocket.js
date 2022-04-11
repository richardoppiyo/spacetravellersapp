import React from 'react';
import PropTypes from 'prop-types';
import RocketBtn from './RocketBtn';
import './Rockets.css';

const Rocket = ({
  image, name, description, id, reserved,
}) => (
  <li className="Rocket">
    <div className="Rocket-Card">
      <img className="Rocket__img" src={image} alt="rocket-img" />
      <div className="Rocket__div">
        <h1 className="Rocket__name">{name}</h1>
        <div className="Rocket__badge_desc_div">
          {reserved && <span className="Rocket__reserved_badge">Reserved</span>}
          <p className="Rocket__description">{description}</p>
        </div>
        {reserved ? (
          <RocketBtn
            className="Rocket__btn_Cancel"
            text="Cancel Reservation"
            id={id}
          />
        ) : (
          <RocketBtn
            className="Rocket__btn_Reserve"
            text="Reserve Rocket"
            id={id}
          />
        )}
      </div>
    </div>
  </li>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;
