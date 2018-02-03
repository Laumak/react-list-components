import React, { Component } from "react"
import PropTypes from "prop-types"

import ItemEditView from "./ItemEditView"

import Accordion from "../components/Accordion"

const newItem = {
  id: 99,
  title: "New title",
  content: "New content",
  stuff: "New stuff",
}

class TabsView extends Component {
  static propTypes = {
    initialItems: PropTypes.array.isRequired,
  }

  state = {
    createModalVisible: false,
  }

  toggleCreateModal = () => {
    this.setState({ createModalVisible: !this.state.createModalVisible })
  }

  render() {
    return (
      <section className="section">
        <h2>Accordion</h2>

        <Accordion
          items={this.props.initialItems}
          renderItemContent={item => <ItemEditView initialItem={item} />}
        />

        <br />

        <button onClick={this.toggleCreateModal}>Toggle create modal</button>

        {
          this.state.createModalVisible && (
            <div style={{ marginTop: 20 }}>
              <ItemEditView initialItem={newItem} />
            </div>
          )
        }
      </section>
    )
  }
}

export default TabsView
