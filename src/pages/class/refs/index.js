import React, { Component, createRef } from 'react'
import { Button } from 'antd-mobile'
import Child from './child'
import InputForward from './forward'
export default class Refs extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.domRef = createRef()
    this.childRef = createRef()
    this.inputRef = createRef()
  }

  componentDidMount() {
    console.log(this.domRef.current.innerHTML)
    this.inputRef.current.focus()
  }

  handleChild = str => {
    this.childRef.current.changeText(str)
  }

  render() {
    return (
      <div>
        <h1 ref={this.domRef}>refs text</h1>
        <Child ref={this.childRef} />
        <Button onClick={() => this.handleChild('new Text')}>修改child的值</Button>
        <InputForward ref={this.inputRef} />
      </div>
    )
  }
}
