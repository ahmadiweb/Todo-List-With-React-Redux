import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as TimesSolid } from './times-solid.svg'
import { changeColor, todoDelete, todoToggel } from './todosSlice'


export const availableColors = ['green', 'blue', 'orange', 'purple', 'red']
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

const TodoListItem = ({ id }) => {

    const dispatch = useDispatch()

    const todo = useSelector(state => state.todos.entities[id])

    const { text, completed, color } = todo
    const colorOptions = availableColors.map((c) => (
        <option key={c} value={c}>
            {capitalize(c)}
        </option>
    ))

    const handleChangeColor = (e) => {
        dispatch(changeColor(id, e.target.value))
    }

    const handleToggel = () => {
        dispatch(todoToggel(id))
    }

    const handleTodoDelete = () => {
        dispatch(todoDelete(id))
    }

    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input
                        className="toggle"
                        type="checkbox"
                        onChange={handleToggel}
                        checked={completed}
                    />
                    <div className="todo-text">{text}</div>
                </div>
                <div className="segment buttons">
                    <select
                        className="colorPicker"
                        defaultValue={color}
                        style={{ color }}
                        onChange={(e) => handleChangeColor(e)}
                    >
                        <option value=""></option>
                        {colorOptions}
                    </select>
                    <button
                        className="destroy"
                        onClick={handleTodoDelete}
                    >
                        <TimesSolid />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem
