import React, { Component } from "react"
import "./reset.css"
import "./App.css"

import TabsView from "./views/TabsView"
import AccordionView from "./views/AccordionView"

const initialItems = [
  { id: 0, title: "First", content: "first content", stuff: "asd" },
  { id: 1, title: "Second", content: "second content", stuff: "xdd" },
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <AccordionView initialItems={initialItems} />

        <TabsView initialItems={initialItems} />
      </div>
    )
  }
}

export default App
