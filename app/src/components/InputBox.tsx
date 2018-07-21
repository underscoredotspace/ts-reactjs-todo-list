import React, { SFC } from 'react'

interface IInputBoxProps {
  text: string
  handleTextChange: (text: string) => void
}

const InputBox: SFC<IInputBoxProps> = ({ text, handleTextChange }) => (
  <input
    type="text"
    value={text}
    onChange={event => handleTextChange(event.target.value)}
  />
)

export default InputBox
