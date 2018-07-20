import React, { Component } from 'react'
import NewItem from './components/new/New'
import List from './components/list/List'
import Toolbar from './components/toolbar/Toolbar'
import { IListItem } from './types'

interface TodoListState {
  todoList: IListItem[]
}

export default class App extends Component<{}, TodoListState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      todoList: [{ id: 1, done: false, text: 'something' }]
    }
  }

  handleDoneChange = (done: boolean, id: number) => {
    const { todoList } = this.state
    const listItem = todoList.find(item => item.id === id)
    if (!listItem) return
    listItem.done = done

    this.setState({ todoList })
  }

  render() {
    return (
      <React.Fragment>
        <NewItem />
        <List
          listItems={this.state.todoList}
          handleDoneChange={this.handleDoneChange}
        />
        <Toolbar />
      </React.Fragment>
    )
  }
}
