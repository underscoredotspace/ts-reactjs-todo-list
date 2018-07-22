import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import NewItem from './components/new/New'
import List from './components/list/List'
import Toolbar from './components/toolbar/Toolbar'
import { IListItem } from './types'

interface TodoListState {
  newItemText: string
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

    this.state = {
      newItemText: '',
      todoList: props.storage.load()
    }
  }

  handleNewItem = () => {
    let { todoList, newItemText } = this.state
    todoList.push({ id: uuid().toString(), done: false, text: newItemText })
    newItemText = ''

    this.setState({ todoList, newItemText })
  }

  handleNewTextChange = (newItemText: string) => {
    this.setState({ newItemText })
  }

  handleDoneChange = (done: boolean, id: string) => {
    const { todoList } = this.state
    const listItem = todoList.find(item => item.id === id)
    if (!listItem) return
    listItem.done = done

    this.setState({ todoList })
  }

  handleTextChange = (text: string, id: string) => {
    const { todoList } = this.state
    const listItem = todoList.find(item => item.id === id)
    if (!listItem) return
    listItem.text = text

    this.setState({ todoList })
  }

  handleDelete = (id: string) => {
    let { todoList } = this.state
    todoList = todoList.filter(listItem => listItem.id !== id)
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
        <NewItem
          text={this.state.newItemText}
          handleNewItemSubmit={this.handleNewItem}
          handleNewTextChange={this.handleNewTextChange}
        />
        <List
          listItems={this.state.todoList}
          handleDoneChange={this.handleDoneChange}
          handleTextChange={this.handleTextChange}
          handleDelete={this.handleDelete}
        />
        <Toolbar />
      </React.Fragment>
    )
  }
}
