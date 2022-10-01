import { useDispatch, useSelector } from 'react-redux'
import { changeStatusFilter, selectStatusFilters, statusFilter } from '../filter/filterSlice'



const StatusFilter = () => {

    const status = useSelector(selectStatusFilters)
    const dispatch = useDispatch()

    const handleChangeStatus = (status) => {
        dispatch(changeStatusFilter(status))
    }
    const renderedFilters = Object.keys(statusFilter).map((key) => {
        const value = statusFilter[key]
        const className = value === status ? 'selected' : ''


        return (
            <li key={value}>
                <button
                    className={className}
                    onClick={() => handleChangeStatus(value)}
                >
                    {key}
                </button>
            </li>
        )
    })

    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>{renderedFilters}</ul>
        </div>
    )
}

export default StatusFilter