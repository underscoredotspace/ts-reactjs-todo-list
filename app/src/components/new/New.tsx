import React, { SFC } from 'react'
import InputBox from '../InputBox'

interface NewItemProps {
  text: string
  handleNewItemSubmit: () => void
  handleNewTextChange: (text: string) => void
}

const NewItem: SFC<NewItemProps> = ({
  text,
  handleNewItemSubmit,
  handleNewTextChange
}) => (
  <div>
    <InputBox
      text={text}
      handleEnterKey={handleNewItemSubmit}
      handleTextChange={handleNewTextChange}
    />
  </div>
)

export default NewItem
