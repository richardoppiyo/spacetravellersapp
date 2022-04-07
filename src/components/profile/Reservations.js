import React from 'react';
import PropTypes from 'prop-types';
import RocketBtn from '../rockets/RocketBtn';
import './reservations.css';

const Reservations = ({
  reservations, object, message, type,
}) => (
  <div className="Reservations__div">
    <h1 className="rockets-title">
      My
      <br />
      {object}
    </h1>
    {reservations.length ? (
      <ul className="Reservations__div_list">
        {reservations.map(({
          name, id, urlWiki, urlOwn,
        }) => (
          <li className="Reservations__div_list_item" key={id}>
            <h2 className="Reservations__div_list_item_name">
              {name}
              {' '}
              -
              {' '}
              {urlWiki && <a href={urlWiki} target="_blank" rel="noreferrer">Wiki</a>}
              {' '}
              -
              {' '}
              {urlOwn && <a href={urlOwn} target="_blank" rel="noreferrer">Own Site</a>}
              -
              {' '}
            </h2>
            {type === (
              <RocketBtn
                className="Rocket__btn_Cancel"
                text="Cancel Reservation"
                id={id}
              />
            )}
          </li>
        ))}
      </ul>
    ) : (
      <p className="Reservations__div_none">{message}</p>
    )}
  </div>
);

Reservations.propTypes = {
  reservations: PropTypes.instanceOf(Object).isRequired,
  object: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Reservations;
