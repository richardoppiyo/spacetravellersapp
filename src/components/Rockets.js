import React, { useEffect, useState } from 'react';

const Rockets = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then((res) => res.json())
      .then((response) => {
        setRockets(response);
      });
  }, []);
  return (
    <div>
      {
       rockets.map((rocket) => (
         <div key={rocket.id}>
           {rocket.rocke_name}
         </div>
       ))
     }
    </div>
  );
};
export default Rockets;
