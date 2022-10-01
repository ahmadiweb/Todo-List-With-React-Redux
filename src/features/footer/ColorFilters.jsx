import { useDispatch, useSelector } from "react-redux"
import { changeColorFilter, selectColorFilters } from "../filter/filterSlice"

export const availableColors = ['green', 'blue', 'orange', 'purple', 'red']

const ColorFilters = () => {
    const colors = useSelector(selectColorFilters)
    const dispatch = useDispatch()


    const handleChangeColor = (color, changeType) => {
        dispatch(changeColorFilter(color, changeType))
    }
    const renderedColors = availableColors.map((color) => {
        const checked = colors.includes(color)
        const changeType = checked ? 'removed' : 'added'

        return (
            <label key={color}>
                <input
                    type="checkbox"
                    name={color}
                    defaultChecked={checked}
                    onChange={() => handleChangeColor(color, changeType)}
                />
                <span
                    className="color-block"
                    style={{
                        backgroundColor: color,
                    }}
                ></span>
                {color}
            </label>
        )
    })

    return (
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">{renderedColors}</form>
        </div>
    )
}

export default ColorFilters
