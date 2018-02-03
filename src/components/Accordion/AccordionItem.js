import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  title: PropTypes.string.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

const AccordionItem = props => {
  return (
    <div className="accordion--item">
      <header className="accordion--item--header" onClick={props.onHeaderClick}>
        {props.title}
      </header>

      {
        props.children &&
          <div className="accordion--item--content">
            {props.children}
          </div>
      }
    </div>
  )
}

AccordionItem.propTypes = propTypes

export default AccordionItem
