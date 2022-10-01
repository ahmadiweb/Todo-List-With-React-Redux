import { shallowEqual, useSelector } from "react-redux"
import { selectItemsRemainingId } from "../todos/todosSlice"

const RemainingTodos = () => {
    const todos = useSelector(selectItemsRemainingId, shallowEqual)
    let count = todos.length
    const suffix = count <= 1 ? '' : 's'

    return (
        <div className="todo-count">
            <h5>Remaining Todos</h5>
            <strong>{count}</strong> item{suffix} left
        </div>
    )
}

export default RemainingTodos