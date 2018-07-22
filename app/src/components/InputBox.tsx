import React, { SFC } from 'react'

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
      type="text"
      value={text}
      onChange={event => handleTextChange(event.target.value)}
      onKeyDown={event => handleKeyDown(event.key)}
      placeholder="What needs to be done?"
    />
  )
}

export default InputBox
