import { useState, useCallback } from 'react';

export function useMatrixState(num) {
  const [colors, setColors] = useState(Array.from({ length: num }, () => 'white'));
  const [clickOrder, setClickOrder] = useState([]);

  const changeColor = useCallback((index) => {
    if (index === num - 1) {
      const newColors = [...colors];
      clickOrder.forEach((i) => {
        newColors[i] = 'orange';
      });
      setColors(newColors);
    } else {
      const newColors = [...colors];
      newColors[index] = 'green';
      setColors(newColors);
      setClickOrder([...clickOrder, index]);
    }
  }, [colors, clickOrder, num]);

  return [colors, changeColor];
}
