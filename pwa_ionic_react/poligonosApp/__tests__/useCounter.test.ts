const { renderHook, act } = require('testing-library/react-hooks')
import useCounter from '../src/useCounter'

test('should increment counter', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
        result.current.increment()
    })

    expect(result.current.count).toBe(1)
})
