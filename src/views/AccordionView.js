import React, { Component } from "react"
import PropTypes from "prop-types"

import Accordion from "../components/Accordion"

class TabsView extends Component {
  static propTypes = {
    initialItems: PropTypes.array.isRequired,
  }

  state = {
    items: this.props.initialItems,
  }

  handleOnContentChange = (e, id) => {
    const { name, value } = e.target

    const newItems = this.state.items.map(item => {
      if(item.id !== id) {
        return item
      }

      return {
        ...item,
        [name]: value,
      }
    })

    this.setState({ items: newItems })
  }

  renderItemContent = item => {
    return (
      <div>
        <input
          name="content"
          value={item.content}
          onChange={e => this.handleOnContentChange(e, item.id)}
        />

        <input
          name="stuff"
          value={item.stuff}
          onChange={e => this.handleOnContentChange(e, item.id)}
        />
      </div>
    )
  }

  render() {
    return (
      <section className="section">
        <h2>Accordion</h2>

        <Accordion
          items={this.state.items}
          renderItemContent={this.renderItemContent}
        />
      </section>
    )
  }
}

export default TabsView
