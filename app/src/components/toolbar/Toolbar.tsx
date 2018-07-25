import React, { SFC } from 'react'
import Filter, { FilterChange, FilterSelected } from './Filter'
import ClearCompleted, { HandleClearCompleted } from './ClearCompleted'
import Counter from './Counter'
import './toolbar.scss'

interface ToolbarProps {
  filterChange: FilterChange
  filterSelected: FilterSelected
  listLength: number
  completed: number
  clearCompleted: HandleClearCompleted
}

const Toolbar: SFC<ToolbarProps> = ({
  filterChange,
  filterSelected,
  listLength,
  completed,
  clearCompleted
}) => {
  if (listLength === 0) return null

  return (
    <div className="toolbar">
      <Counter todo={listLength - completed} />
      <Filter filterChange={filterChange} filterSelected={filterSelected} />
      <ClearCompleted
        completed={completed}
        handleClearCompleted={clearCompleted}
      />
    </div>
  )
}

export default Toolbar
