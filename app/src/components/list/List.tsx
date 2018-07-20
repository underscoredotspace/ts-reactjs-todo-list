import React from 'react'
import ListItem from './ListItem'
import { IListItem } from '../../types'

interface ListProps {
  listItems: IListItem[]
  handleDoneChange: (done: boolean, id: number) => void
}

const List: React.SFC<ListProps> = ({ handleDoneChange, listItems = [] }) => {
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
