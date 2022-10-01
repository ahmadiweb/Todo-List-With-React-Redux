import { useDispatch } from 'react-redux'
import { clearCompleted, markAllToCompleted } from '../todos/todosSlice'

export default function Actions() {

    const dispatch = useDispatch()

    const onMarkAllCompletedClick = () => dispatch(markAllToCompleted())
    const onClearCompletedClick = () => dispatch(clearCompleted())


    return (
        <div className="actions">
            <h5>Actions</h5>
            <button onClick={onMarkAllCompletedClick} className="button">
                Mark All Completed
            </button>
            <button onClick={onClearCompletedClick} className="button" >
                Clear Completed
            </button>
        </div>
    )
}
