import React, { Component } from "react"
import PropTypes from "prop-types"

import "./Accordion.css"

import AccordionItem from "./AccordionItem"

class Accordion extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired,
      }).isRequired,
    ).isRequired,
    renderItemContent: PropTypes.func.isRequired,
  }

  state = {
    openItems: [this.props.items[0].id],
  }

  setOpenItem = id => {
    let newOpenItems = this.state.openItems
    const itemIndex = this.state.openItems.indexOf(id)

    if(itemIndex >= 0) {
      newOpenItems = [
        ...this.state.openItems.slice(0, itemIndex),
        ...this.state.openItems.slice(itemIndex + 1),
      ]
    } else {
      newOpenItems = [
        ...this.state.openItems.slice(0, itemIndex),
        id,
        ...this.state.openItems.slice(itemIndex),
      ]
    }

    this.setState({ openItems: newOpenItems })
  }

  render() {
    return (
      <div className="accordion">
        {
          this.props.items.map(item => (
            <AccordionItem
              title={item.title}
              onHeaderClick={() => this.setOpenItem(item.id)}
              key={item.id}
            >
              {
                this.state.openItems.includes(item.id)
                  ? this.props.renderItemContent(item)
                  : null
              }
            </AccordionItem>
          ))
        }
      </div>
    )
  }
}

export default Accordion
