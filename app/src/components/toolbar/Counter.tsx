import React, { SFC } from 'react'

interface CounterPops {
  todo: number
}

const Counter: SFC<CounterPops> = ({ todo }) => {
  return (
    <div className="counter">
      {todo} item{todo !== 1 ? 's' : ''} left
    </div>
  )
}

export default Counter
