import TodoListItem from "./TodoListItem"
import { shallowEqual, useSelector } from "react-redux"
import { selectFilteredTodosId } from "./todosSlice";




const TodoList = () => {
    const todos = useSelector(selectFilteredTodosId, shallowEqual)

    const renderListItem = todos.map((id) => (
        < TodoListItem key={id} id={id} />
    ))

    return <ul className="todo-list">{renderListItem}</ul>
}

export default TodoList
