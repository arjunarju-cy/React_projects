import React from 'react'

export const Car = ({onGreet}) => {

  return (
    <div>
        <button onClick={onGreet}>Click Here</button>
    </div>
  );
};
export default Car;
