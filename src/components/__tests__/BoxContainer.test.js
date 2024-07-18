import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxContainer from '../BoxContainer';

describe('BoxContainer Component', () => {
  it('should render 9 boxes initially with white color', () => {
    const { getAllByRole } = render(<BoxContainer />);
    const boxes = getAllByRole('button');
    expect(boxes).toHaveLength(9);
    boxes.forEach(box => expect(box).toHaveStyle('background-color: white'));
  });

  it('should change a box color to green when clicked', () => {
    const { getAllByRole } = render(<BoxContainer />);
    const boxes = getAllByRole('button');
    fireEvent.click(boxes[0]); // Click the first box
    expect(boxes[0]).toHaveStyle('background-color: green');
  });

  it('should change all boxes to orange when the last box is clicked', () => {
    const { getAllByRole } = render(<BoxContainer />);
    const boxes = getAllByRole('button');
    fireEvent.click(boxes[0]); // Click the first box
    fireEvent.click(boxes[8]); // Click the last box
    // Ensure all boxes are orange
    boxes.forEach(box => expect(box).toHaveStyle('background-color: orange'));
  });

  it('should change the last box to green and reset all previously clicked boxes to orange in order', () => {
    const { getAllByRole } = render(<BoxContainer />);
    const boxes = getAllByRole('button');

    // Click some boxes before the last one
    fireEvent.click(boxes[0]); // Click the first box
    fireEvent.click(boxes[1]); // Click the second box
    fireEvent.click(boxes[2]); // Click the third box

    // Verify the colors of the clicked boxes
    expect(boxes[0]).toHaveStyle('background-color: green');
    expect(boxes[1]).toHaveStyle('background-color: green');
    expect(boxes[2]).toHaveStyle('background-color: green');

    // Click the last box
    fireEvent.click(boxes[8]);

    // Verify the last box is green
    expect(boxes[8]).toHaveStyle('background-color: green');

    // Verify that all previously clicked boxes are turned to orange
    expect(boxes[0]).toHaveStyle('background-color: orange');
    expect(boxes[1]).toHaveStyle('background-color: orange');
    expect(boxes[2]).toHaveStyle('background-color: orange');

    // Verify that all other boxes are unchanged (still white)
    boxes.forEach((box, index) => {
      if (![0, 1, 2, 8].includes(index)) {
        expect(box).toHaveStyle('background-color: white');
      }
    });
  });
  
});
