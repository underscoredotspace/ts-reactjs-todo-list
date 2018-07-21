import React, { SFC } from 'react'
import { IListItem } from '../../types'
import CheckBox from '../CheckBox'

export type HandleDoneChange = (done: boolean, id: number) => void

interface ListItem {
  listItem: IListItem
  handleDoneChange: HandleDoneChange
}

const ListItem: SFC<ListItem> = ({ listItem, handleDoneChange }) => {
  return (
    <div className="todo-list__item">
      <CheckBox
        done={listItem.done}
        handleDoneChange={done => handleDoneChange(done, listItem.id)}
      />
      <input
        type="text"
        value={listItem.text}
        onChange={e => console.log(e.target.value)}
      />
    </div>
  )
}

export default ListItem
