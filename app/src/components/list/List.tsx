import React from 'react'
import { ListItems } from '../../types/ListItem'

interface ListProps {
  listItems: ListItems
}

const List: React.SFC<ListProps> = ({ listItems = [] }) => {
  if (listItems.length === 0) return null

  return (
    <React.Fragment>
      {listItems.map(listItem => <div>{listItem.text}</div>)}
    </React.Fragment>
  )
}

export default List
