import React, { SFC } from 'react'

export type HandleClearCompleted = () => void

interface ClearCompletedPops {
  completed: number
  handleClearCompleted: HandleClearCompleted
}

const ClearCompleted: SFC<ClearCompletedPops> = ({
  completed,
  handleClearCompleted
}) => {
  if (completed === 0) return null

  return (
    <div className="clear-completed">
      <button onClick={handleClearCompleted}>
        Delete {completed} completed items
      </button>
    </div>
  )
}

export default ClearCompleted
