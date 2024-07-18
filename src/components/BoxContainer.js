import React, { useState } from 'react';
import { BoxContainerWrapper, BoxStyled, Title } from '../styles/BoxContainerStyles';

const BoxContainer = () => {
  const [colors, setColors] = useState(Array(9).fill('white')); // Initialize with 9 white boxes
  const [clickOrder, setClickOrder] = useState([]);

  const changeColor = (index) => {
    if (index === 8) { // Check if last box is clicked
      // Create a new array with colors for only the clicked boxes set to orange
      const updatedColors = colors.map((color, i) =>
        clickOrder.includes(i) ? 'orange' : color
      );
      setColors(updatedColors);
      setClickOrder([]);
    } else {
      // Change the clicked box color to green and update click order
      setColors((prevColors) =>
        prevColors.map((color, i) => (i === index ? 'green' : color))
      );
      setClickOrder((prevOrder) => [...prevOrder, index]);
    }
  };

  return (
    <>
      <Title>COLORED BOXES</Title> 
      <BoxContainerWrapper>
        {colors.map((color, index) => (
          <BoxStyled
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => changeColor(index)}
          />
        ))}
      </BoxContainerWrapper>
    </>
  );
};

export default BoxContainer;
