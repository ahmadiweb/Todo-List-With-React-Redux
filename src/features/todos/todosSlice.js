import produce from "immer"
import { statusFilter } from "../filter/filterSlice"

const initState = {
    entities: {
        1: { id: 1, text: 'Design UI', completed: true, color: 'red' },
        2: { id: 2, text: 'test2', completed: false, color: 'blue' },
        3: { id: 3, text: 'test3', completed: false, },
        4: { id: 4, text: 'test4', completed: true, },
        5: { id: 5, text: 'test5', completed: false, },
    }
}
let todoId = 6

const todos = produce((state, action) => {
    switch (action.type) {
        case 'todos/todoAdded':
            const todo = action.payload
            state.entities[todo.id] = todo
            break
        case 'todos/todoToggel':
            const todoToggelId = action.payload
            state.entities[todoToggelId].completed = !state.entities[todoToggelId].completed
            break
        case 'todos/todoDelete':
            const todoDeleteId = action.payload
            delete state.entities[todoDeleteId]
            break
        case 'todos/markAllToCompleted':
            Object.values(state.entities).forEach(todo => {
                state.entities[todo.id].completed = true
            })
            break
        case 'todos/clearCompleted':
            Object.values(state.entities).forEach(todo => {
                if (todo.completed) {
                    delete state.entities[todo.id]
                }
            })
            break
        case 'todos/changeColor':
            const { id, color } = action.payload
            state.entities[id].color = color
    }
}, initState)


export default todos

// export default function todos(state = initState, action) {
//     switch (action.type) {
//         case 'todos/todoAdded':
//             const todo = action.payload
//             return {
//                 ...state,
//                 entities: {
//                     ...state.entities,
//                     [todo.id]: todo
//                 }
//             }

//         case 'todos/todoToggel':
//             const todoToggelId = action.payload
//             const todoToggle = state.entities[todoToggelId]
//             return {
//                 ...state,
//                 entities: {
//                     ...state.entities,
//                     [todoToggelId]: {
//                         ...todoToggle,
//                         completed: !todoToggle.completed
//                     }
//                 }
//             }
//         case 'todos/todoDelete':
//             const todoDeleteId = action.payload
//             const entities = { ...state.entities }
//             delete entities[todoDeleteId]
//             return {
//                 ...state,
//                 entities
//             }

//         default:
//             return state
//     }
// }

export const todoAdded = (text) => (
    {
        type: 'todos/todoAdded',
        payload: {
            id: todoId++,
            text,
            completed: false
        }
    }
)

export const todoToggel = (payload) => (
    {
        type: 'todos/todoToggel',
        payload
    }
)

export const todoDelete = (payload) => (
    {
        type: 'todos/todoDelete',
        payload
    }
)

export const markAllToCompleted = () => (
    {
        type: 'todos/markAllToCompleted',
    }
)
export const clearCompleted = () => (
    {
        type: 'todos/clearCompleted',
    }
)
export const changeColor = (id, color) => (
    {
        type: 'todos/changeColor',
        payload: {
            id,
            color
        }
    }
)



export const selectTodos = state => state.todos.entities


const selectFilteredTodos = state => {
    const todos = Object.values(selectTodos(state))
    const { colors, status } = state.filters

    const showAll = status === statusFilter.All
    if (showAll && colors.length === 0) {
        return todos
    }

    const showCompleted = status === statusFilter.Completed
    return todos.filter(todo => {
        const statusFilter = showAll || todo.completed === showCompleted
        const statusColors = colors.length === 0 || colors.includes(todo.color)
        return statusFilter && statusColors
    })

}

export const selectFilteredTodosId = state => {
    return selectFilteredTodos(state).map(todo => todo.id)
}

const selectItemsRemaining = state => {
    const todos = Object.values(selectTodos(state))
    const completedTodos = todos.filter(todo => !todo.completed)
    return completedTodos

}
export const selectItemsRemainingId = state => {
    return selectItemsRemaining(state).map(item => item.id)
}

