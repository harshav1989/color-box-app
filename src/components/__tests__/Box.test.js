import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from '../Box';

describe('Box Component', () => {
  it('should render with correct color', () => {
    const { getByRole } = render(<Box index={0} color="red" changeColor={() => {}} />);
    const box = getByRole('button');
    expect(box).toHaveStyle('background-color: red');
  });

  it('should call changeColor function on click', () => {
    const mockChangeColor = jest.fn();
    const { getByRole } = render(<Box index={0} color="white" changeColor={mockChangeColor} />);
    const box = getByRole('button');
    fireEvent.click(box);
    expect(mockChangeColor).toHaveBeenCalledWith(0);
  });
});
