import { renderHook, act } from '@testing-library/react-hooks';
import useInput from '../useInput';

describe('useInput', () => {
  it('should initialize with initial values', () => {
    const initialValues = { name: 'Michael', email: 'radmakson@gmail.com' };
    const { result } = renderHook(() => useInput(initialValues));

    expect(result.current.values).toEqual(initialValues);
  });

  it('should update values on handleChange', () => {
    const initialValues = { name: 'Michael', email: 'radmakson@gmail.com' };
    const { result } = renderHook(() => useInput(initialValues));

    act(() => {
      result.current.handleLiteChange({ target: { name: 'name', value: 'Jane' } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values.name).toBe('Jane');
  });
});
