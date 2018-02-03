import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  title: PropTypes.string.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
}

const AccordionItem = props => {
  const iconClass = props.open ? "fa-chevron-down" : "fa-chevron-right"

  return (
    <div className="accordion--item">
      <header className="accordion--item--header" onClick={props.onHeaderClick}>
        <span>{props.title}</span>
        <i className={`fa ${iconClass} accordion--item--header--icon`} aria-hidden="true"></i>
      </header>

      {
        props.open &&
          <div className="accordion--item--content">
            {props.children}
          </div>
      }
    </div>
  )
}

AccordionItem.propTypes = propTypes

export default AccordionItem
