import React, { SFC } from 'react'
import Filter, { FilterChange, FilterSelected } from './Filter'

interface ToolbarProps {
  filterChange: FilterChange
  filterSelected: FilterSelected
}

const Toolbar: SFC<ToolbarProps> = ({ filterChange, filterSelected }) => {
  return (
    <div className="toolbar">
      <Filter filterChange={filterChange} filterSelected={filterSelected} />
    </div>
  )
}

export default Toolbar
