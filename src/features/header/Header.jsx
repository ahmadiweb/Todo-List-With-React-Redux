import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoAdded } from '../todos/todosSlice';

export default function Header() {
    const [taskValue, setTaskValue] = useState('')
    const dispatch = useDispatch();

    const handleText = (e) => {
        if (e.code === 'Enter' && taskValue !== '') {
            dispatch(todoAdded(taskValue))

            setTaskValue('')

        }
    }

    return (
        <header className="header">
            <input
                className="new-todo"
                placeholder='What needs to be done?'
                value={taskValue}
                onChange={(e) => setTaskValue(e.target.value)}
                onKeyDown={(e) => handleText(e)}
            />
        </header>
    )
}
