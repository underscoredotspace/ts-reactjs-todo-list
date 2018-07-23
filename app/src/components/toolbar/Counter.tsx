import React, { SFC } from 'react'

interface CounterPops {
  listLength: number
}

const Counter: SFC<CounterPops> = ({ listLength }) => {
  if (listLength === 0) return null

  return <div className="counter">{listLength} items left</div>
}

export default Counter
