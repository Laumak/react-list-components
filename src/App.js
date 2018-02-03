import React, { Component } from "react"
import "./reset.css"
import "./App.css"

import TabsView from "./views/TabsView"

const initialTabsItems = [
  { id: 0, title: "First", content: "first content", stuff: "asd" },
  { id: 1, title: "Second", content: "second content", stuff: "xdd" },
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="app-header">
          <h1>React stuff</h1>
        </header>

        <TabsView initialItems={initialTabsItems} />
      </div>
    )
  }
}

export default App
