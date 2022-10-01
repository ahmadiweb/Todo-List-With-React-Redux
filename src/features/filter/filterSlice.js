import produce from "immer"

export const statusFilter = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
}

const initState = {
    status: statusFilter.All,
    colors: []
}

const filters = produce((state, action) => {
    switch (action.type) {
        case 'filters/changeStatusFilter':
            state.status = action.payload
            break
        case 'filtres/changeColorFilter':
            const { color, changeType } = action.payload
            switch (changeType) {
                case 'added':
                    state.colors.push(color)
                    break;
                case 'removed':
                    state.colors = state.colors.filter(c => c !== color)
                    break

            }
    }

}, initState)

export const changeStatusFilter = (status) => (
    {
        type: 'filters/changeStatusFilter',
        payload: status
    }
)
export const changeColorFilter = (color, changeType) => (
    {
        type: 'filtres/changeColorFilter',
        payload: {
            color,
            changeType
        }
    }
)

export const selectStatusFilters = state => state.filters.status

export const selectColorFilters = state => state.filters.colors

export default filters