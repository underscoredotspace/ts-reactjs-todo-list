import React, { SFC } from 'react'

export type HandleClearCompleted = () => void

interface ClearCompletedProps {
  completed: number
  handleClearCompleted: HandleClearCompleted
}

const ClearCompleted: SFC<ClearCompletedProps> = ({
  completed,
  handleClearCompleted
}) => {
  return (
    <div className="clear-completed">
      <button
        onClick={handleClearCompleted}
        disabled={completed > 0 ? false : true}
      >
        Delete {completed} completed item{completed !== 1 ? 's' : ''}
      </button>
    </div>
  )
}

export default ClearCompleted
