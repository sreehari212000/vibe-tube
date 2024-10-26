import { NavLink } from "react-router-dom"

type PROPTYPE = {
    filter: string
}

const FilterBrick = ({filter}:PROPTYPE) => {
  return (
    <NavLink to={'#'} className="py-0.5 px-3 border bg-gray-200 rounded-lg cursor-pointer w-fit ">
        <p className="whitespace-nowrap text-sm font-medium">{filter}</p>
    </NavLink>
  )
}

export default FilterBrick