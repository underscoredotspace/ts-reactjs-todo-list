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
  filter?: object
}

const List: SFC<ListProps> = ({
  handleDoneChange,
  handleTextChange,
  handleDelete,
  listItems = [],
  filter
}) => {
  if (listItems.length === 0) return null

  if (filter) {
    listItems = listItems.filter(
      listItem => listItem[Object.keys(filter)[0]] === Object.values(filter)[0]
    )
  }

  return (
    <ul className="todo-list">
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
    </ul>
  )
}

export default List
