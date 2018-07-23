import React, { SFC } from 'react'
import './input-box.scss'

interface IInputBoxProps {
  text?: string
  handleEnterKey?: () => void
  handleTextChange: (text: string) => void
}

const InputBox: SFC<IInputBoxProps> = ({
  text = '',
  handleTextChange,
  handleEnterKey = () => {}
}) => {
  function handleKeyDown(key: string) {
    if (key === 'Enter') {
      handleEnterKey()
    }
  }

  return (
    <input
      className="input-box"
      type="text"
      value={text}
      onChange={event => handleTextChange(event.target.value)}
      onKeyDown={event => handleKeyDown(event.key)}
      placeholder="What needs to be done?"
    />
  )
}

export default InputBox
