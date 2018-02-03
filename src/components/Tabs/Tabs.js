import React, { Component } from "react"
import PropTypes from "prop-types"

import "./tabs.css"

class Tabs extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired,
      }).isRequired,
    ).isRequired,
  }

  state = {
    openTab: this.props.tabs[0].id,
  }

  setOpenTab = id => {
    this.setState({ openTab: id })
  }

  isOpenTab = tab => {
    return this.state.openTab === tab.id
  }

  renderHeadings = () => {
    return this.props.tabs.map(t =>
      <li
        className={this.isOpenTab(t) ? "active" : ""}
        onClick={() => this.setOpenTab(t.id)}
        key={t.id}
      >
        {t.title}
      </li>
    )
  }

  render() {
    return (
      <div className="tabs">
        <header>
          <ul>
            {this.renderHeadings()}
          </ul>
        </header>

        <div className="tabs--item">
          {
            this.props.tabs.map(tab => {
              if(tab.id !== this.state.openTab) {
                return null
              }

              return (
                <div key={tab.id}>
                  {this.props.renderContentView(tab)}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Tabs
