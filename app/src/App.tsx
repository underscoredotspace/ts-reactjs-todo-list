import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import NewItem from './components/new/New'
import List from './components/list/List'
import Toolbar from './components/toolbar/Toolbar'
import { IListItem } from './types'
import { FilterSelected } from './components/toolbar/Filter'

interface TodoListState {
  newItemText: string
  todoList: IListItem[]
  filter?: FilterSelected
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
      todoList: props.storage.load(),
      filter: undefined
    }
  }

  handleNewItem = () => {
    let { todoList, newItemText } = this.state
    newItemText = newItemText.trim()
    if (newItemText.length === 0) return

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

  filterChange = (filter: object) => {
    this.setState({ filter })
  }

  deleteCompleted = () => {
    let { todoList } = this.state
    todoList = todoList.filter(listItem => listItem.done === false)
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
          filter={this.state.filter}
        />
        <Toolbar
          listLength={
            this.state.todoList.filter(listItem => listItem.done === false)
              .length
          }
          completed={
            this.state.todoList.filter(listItem => listItem.done === true)
              .length
          }
          filterChange={this.filterChange}
          filterSelected={this.state.filter}
          clearCompleted={this.deleteCompleted}
        />
      </React.Fragment>
    )
  }
}
