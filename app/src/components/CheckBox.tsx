import React, { SFC } from 'react'

interface ICheckBoxProps {
  done: boolean
  handleDoneChange: (done: boolean) => void
}

const CheckBox: SFC<ICheckBoxProps> = ({ done, handleDoneChange }) => (
  <input
    type="checkbox"
    checked={done}
    onChange={event => handleDoneChange(event.target.checked)}
  />
)

export default CheckBox
