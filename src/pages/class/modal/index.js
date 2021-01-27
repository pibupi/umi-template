import React, { Component } from 'react'
// import CreatePortal from '@/components/CreatePortal'
import { Button } from 'antd-mobile'
import Modal from '@/components/Modal'
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  handleClose = () => {
    this.setState({
      show: false,
    })
  }

  handleClick = () => {
    this.setState({
      show: true,
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          modal
        </Button>
        <Modal onClose={this.handleClose} show={this.state.show}>
          modal
        </Modal>
      </div>
    )
  }
}
