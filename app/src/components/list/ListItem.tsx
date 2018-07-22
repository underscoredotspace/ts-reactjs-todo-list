import React, { SFC } from 'react'
import { IListItem } from '../../types'
import CheckBox from '../CheckBox'
import InputBox from '../InputBox'

export type HandleDoneChange = (done: boolean, id: string) => void
export type HandleTextChange = (text: string, id: string) => void
export type HandleDelete = (id: string) => void

interface ListItem {
  listItem: IListItem
  handleDoneChange: HandleDoneChange
  handleTextChange: HandleTextChange
  handleDelete: HandleDelete
}

const ListItem: SFC<ListItem> = ({
  listItem,
  handleDoneChange,
  handleTextChange,
  handleDelete
}) => {
  return (
    <div className="todo-list__item">
      <CheckBox
        done={listItem.done}
        handleDoneChange={done => handleDoneChange(done, listItem.id)}
      />
      <InputBox
        text={listItem.text}
        handleTextChange={text => handleTextChange(text, listItem.id)}
      />
      <button className="delete-item" onClick={() => handleDelete(listItem.id)}>
        X
      </button>
    </div>
  )
}

export default ListItem
