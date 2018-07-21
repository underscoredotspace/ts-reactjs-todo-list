import React, { Component } from 'react'
import NewItem from './components/new/New'
import List from './components/list/List'
import Toolbar from './components/toolbar/Toolbar'
import { IListItem } from './types'

interface TodoListState {
  todoList: IListItem[]
}

interface TodoListProps {
  storage: {
    load: () => IListItem[]
    save: (list: IListItem[]) => boolean
  }
}

export default class App extends Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props)
    // this.props.storage.save([{ id: 1, done: false, text: 'something' }])

    this.state = {
      todoList: props.storage.load()
    }
  }

  handleDoneChange = (done: boolean, id: number) => {
    const { todoList } = this.state
    const listItem = todoList.find(item => item.id === id)
    if (!listItem) return
    listItem.done = done

    this.setState({ todoList })
  }

  shouldComponentUpdate({}, nextState: TodoListState) {
    const saved = this.props.storage.save(nextState.todoList)
    if (!saved) {
      console.error('Error saving list!')
    }

    return saved
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
