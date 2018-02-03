import React, { Component } from "react"
import PropTypes from "prop-types"

class ItemEditView extends Component {
  static propTypes = {
    initialItem: PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      stuff: PropTypes.string.isRequired,
    }).isRequired,
  }

  state = {
    item: this.props.initialItem,
  }

  handleOnInputChange = e => {
    const { name, value } = e.target

    this.setState({
      item: {
        ...this.state.item,
        [name]: value,
      }
    })
  }

  render() {
    return (
      <div>
        <input
          name="content"
          value={this.state.item.content}
          onChange={this.handleOnInputChange}
        />

        <input
          name="stuff"
          value={this.state.item.stuff}
          onChange={this.handleOnInputChange}
        />
      </div>
    )
  }
}

export default ItemEditView
