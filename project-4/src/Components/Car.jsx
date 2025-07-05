import React from 'react'

export const Car = (props) => {
    const { Brand, Model, year } = props;
  return (
    <div>
        <h1>Car Details</h1>
        <p>Brand: {Brand}</p>
        <p>Model: {Model}</p>
        <p>Year: {year}</p>
    </div>
  )
}
