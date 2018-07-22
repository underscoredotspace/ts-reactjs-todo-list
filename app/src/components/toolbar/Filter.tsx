import React, { SFC } from 'react'

export type FilterChange = (filter?: object) => void
export type FilterSelected = { done?: boolean } | undefined

interface FilterProps {
  filterChange: FilterChange
  filterSelected?: FilterSelected
}

const Filter: SFC<FilterProps> = ({ filterChange, filterSelected }) => {
  return (
    <div className="filter">
      <button
        className={`${!filterSelected ? 'selected' : ''}`}
        onClick={() => filterChange()}
      >
        All
      </button>
      <button
        className={`${
          filterSelected && filterSelected.done === false ? 'selected' : ''
        }`}
        onClick={() => filterChange({ done: false })}
      >
        Active
      </button>
      <button
        className={`${
          filterSelected && filterSelected.done === true ? 'selected' : ''
        }`}
        onClick={() => filterChange({ done: true })}
      >
        Done
      </button>
    </div>
  )
}

export default Filter
