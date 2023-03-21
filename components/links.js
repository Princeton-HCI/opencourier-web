import React from 'react'

import PropTypes from 'prop-types'

const Links = (props) => {
  return (
    <>
      <nav className="links-links">
        <button className="links-button button">
          <span>{props.text}</span>
        </button>
        <button className="links-button1 button">
          <span>{props.text1}</span>
        </button>
        <button className="links-button2 button">{props.button}</button>
      </nav>
      <style jsx>
        {`
          .links-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .links-button {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .links-button1 {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .links-button2 {
            color: rgb(18, 40, 33);
            font-size: 18px;
            font-family: Lato;
            line-height: 27px;
            padding-top: var(--dl-space-space-halfunit);
            border-color: rgba(18, 40, 33, 1);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
            border-left-width: 1px;
          }
        `}
      </style>
    </>
  )
}

Links.defaultProps = {
  button: 'Menu',
  text: 'Our offers',
  text1: 'Get a fast quote',
}

Links.propTypes = {
  button: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Links
