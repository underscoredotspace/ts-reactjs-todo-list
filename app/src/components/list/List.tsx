import React, { SFC } from 'react'
import ListItem, { HandleDoneChange } from './ListItem'
import { IListItem } from '../../types'

interface ListProps {
  listItems: IListItem[]
  handleDoneChange: HandleDoneChange
}

const List: SFC<ListProps> = ({ handleDoneChange, listItems = [] }) => {
  if (listItems.length === 0) return null

  return (
    <div className="todo-list">
      {listItems.map(listItem => (
        <ListItem
          key={listItem.id}
          listItem={listItem}
          handleDoneChange={handleDoneChange}
        />
      ))}
    </div>
  )
}

export default List
