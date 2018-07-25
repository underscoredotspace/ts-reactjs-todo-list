import React, { SFC } from 'react'
import CheckBox from '../CheckBox'
import InputBox from '../InputBox'
import './list-item.scss'

export type HandleDoneChange = (done: boolean, id: string) => void
export type HandleTextChange = (text: string, id: string) => void
export type HandleDelete = (id: string) => void

export interface IListItem {
  id: string
  done: boolean
  text: string
}

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
    <li className={`todo-list__item${listItem.done ? ' done' : ''}`}>
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
    </li>
  )
}

export default ListItem
