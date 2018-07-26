import React, { SFC } from 'react'

interface CounterProps {
  todo: number
}

const Counter: SFC<CounterProps> = ({ todo }) => {
  return (
    <div className="counter">
      {todo} item{todo !== 1 ? 's' : ''} left
    </div>
  )
}

export default Counter
