import React, { SFC } from 'react'
import ListItem, {
  HandleDoneChange,
  HandleTextChange,
  HandleDelete
} from './ListItem'
import { IListItem } from '../../types'

interface ListProps {
  listItems: IListItem[]
  handleDoneChange: HandleDoneChange
  handleTextChange: HandleTextChange
  handleDelete: HandleDelete
}

const List: SFC<ListProps> = ({
  handleDoneChange,
  handleTextChange,
  handleDelete,
  listItems = []
}) => {
  if (listItems.length === 0) return null

  return (
    <div className="todo-list">
      {listItems
        .slice()
        .reverse()
        .map(listItem => (
          <ListItem
            key={listItem.id}
            listItem={listItem}
            handleDoneChange={handleDoneChange}
            handleTextChange={handleTextChange}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  )
}

export default List
