import { renderHook, act } from '@testing-library/react-hooks';
import { useMatrixState } from '../useMatrixState';

describe('useMatrixState', () => {
  it('should initialize colors with white and click order as empty', () => {
    const { result } = renderHook(() => useMatrixState(9));
    expect(result.current[0]).toEqual(Array(9).fill('white'));
    expect(result.current[1]).toBeInstanceOf(Function);
  });

  it('should change the color of a box to green on click', () => {
    const { result } = renderHook(() => useMatrixState(9));
    act(() => result.current ); // Click first box
    expect(result.current[0][0]).toBe('green');
  });

  it('should change all boxes to orange when the last box is clicked', () => {
    const { result } = renderHook(() => useMatrixState(9));
    act(() => result.current ); // Click first box
    act(() => result.current ); // Click last box
    expect(result.current[0].every(color => color === 'orange')).toBe(true);
  });
});
