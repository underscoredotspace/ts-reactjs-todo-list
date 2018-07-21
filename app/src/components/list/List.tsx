import React, { SFC } from 'react'
import ListItem, { HandleDoneChange, HandleTextChange } from './ListItem'
import { IListItem } from '../../types'

interface ListProps {
  listItems: IListItem[]
  handleDoneChange: HandleDoneChange
  handleTextChange: HandleTextChange
}

const List: SFC<ListProps> = ({
  handleDoneChange,
  handleTextChange,
  listItems = []
}) => {
  if (listItems.length === 0) return null

  return (
    <div className="todo-list">
      {listItems.map(listItem => (
        <ListItem
          key={listItem.id}
          listItem={listItem}
          handleDoneChange={handleDoneChange}
          handleTextChange={handleTextChange}
        />
      ))}
    </div>
  )
}

export default List
