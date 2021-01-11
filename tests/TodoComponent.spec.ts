import {useTodoStore} from '../store/todoStore'

it('handleAddTask', () => 
{
    // const { result } = renderHook(() => useTodoStore())
    // act(() => result.current.increment(2))
    // act(() => result.current.decrement(2))

    useTodoStore().handleAddTask

    expect(useTodoStore().value).toBe(0)

})