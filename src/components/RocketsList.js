import React from 'react';
import PropTypes from 'prop-types';

const RocketsList = () => ({
image, name, description,
}) => (
    <li>
       <img className="Rocket__img" src={image} alt="rocket-img" />
       <div className="Rocket__div">
           <h1 className="Rocket__name">{name}</h1>
           <div className="Rocket__badge_desc_div">
               <p className="Rocket__description">{description}</p>
           </div>
       </div>
    </li>
);

RocketsList.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default RocketsList;
