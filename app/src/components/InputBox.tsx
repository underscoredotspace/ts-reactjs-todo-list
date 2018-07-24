import React, { SFC } from 'react'
import './input-box.scss'

interface IInputBoxProps {
  text: string
  handleEnterKey?: (text: string) => void
  handleTextChange?: (text: string) => void
}

const InputBox: SFC<IInputBoxProps> = ({
  text,
  handleTextChange = () => {},
  handleEnterKey = () => {}
}) => {
  function handleKeyDown(key: string, text: string) {
    if (key === 'Enter') {
      handleEnterKey(text)
    }
  }

  return (
    <input
      className="input-box"
      type="text"
      value={text}
      onChange={event => handleTextChange(event.target.value)}
      onKeyDown={event => handleKeyDown(event.key, text)}
      placeholder="What needs to be done?"
    />
  )
}

export default InputBox
