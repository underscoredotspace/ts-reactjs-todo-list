import React, { Component } from 'react'
import InputBox from '../InputBox'
import './new-item.scss'

interface INewItemProps {
  handleNewItemSubmit: (text: string) => void
}

interface INewItemState {
  text: string
}

export default class NewItem extends Component<INewItemProps, INewItemState> {
  constructor(props: INewItemProps) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleEnterKey = (text: string) => {
    const { handleNewItemSubmit } = this.props
    handleNewItemSubmit(text)
    this.setState({ text: '' })
  }

  handleTextChange = (text: string) => {
    this.setState({ text })
  }

  render() {
    return (
      <div>
        <div className="new-item">
          <InputBox
            text={this.state.text}
            handleEnterKey={this.handleEnterKey}
            handleTextChange={this.handleTextChange}
          />
        </div>
      </div>
    )
  }
}
