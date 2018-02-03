import React, { Component } from "react"
import PropTypes from "prop-types"

import Tabs from "../components/Tabs"

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

  renderContentView = tab => {
    return (
      <div>
        <input
          name="content"
          value={tab.content}
          onChange={e => this.handleOnContentChange(e, tab.id)}
        />

        <input
          name="stuff"
          value={tab.stuff}
          onChange={e => this.handleOnContentChange(e, tab.id)}
        />
      </div>
    )
  }

  render() {
    return (
      <section className="section">
        <h2>Tabs</h2>

        <Tabs
          tabs={this.state.items}
          renderContentView={this.renderContentView}
        />
      </section>
    )
  }
}

export default TabsView
