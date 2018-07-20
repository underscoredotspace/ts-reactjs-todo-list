import React from 'react'
import NewItem from './components/new/New'
import List from './components/list/List'
import Toolbar from './components/toolbar/Toolbar'
import { ListItems } from './types/ListItem'

interface TodoListState {
  todoList: ListItems
}

export default class App extends React.Component<{}, TodoListState> {
  constructor(props) {
    super(props)

    this.state = {
      todoList: [{ done: false, text: 'something' }]
    }
  }

  render() {
    return (
      <React.Fragment>
        <NewItem />
        <List listItems={this.state.todoList} />
        <Toolbar />
      </React.Fragment>
    )
  }
}
