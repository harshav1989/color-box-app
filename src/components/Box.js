import React from 'react';
import PropTypes from 'prop-types';
import { BoxContainer } from '../styles/BoxStyles';

function Box({ index, color, changeColor }) {
  return (
    <BoxContainer
      role="button"
      tabIndex={0}
      aria-label={`Box ${index + 1}`}
      onClick={() => changeColor(index)}
      onKeyDown={(e) => e.key === 'Enter' && changeColor(index)}
      style={{ backgroundColor: color }}
    />
  );
}

Box.propTypes = {
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired,
};

export default Box;
