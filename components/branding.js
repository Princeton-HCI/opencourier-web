import React from 'react'

import PropTypes from 'prop-types'

const Branding = (props) => {
  return (
    <>
      <div className={`branding-branding ${props.rootClassName} `}>
        <img
          alt={props.Logo_alt}
          src={props.Logo}
          loading="lazy"
          className="branding-image"
        />
      </div>
      <style jsx>
        {`
          .branding-branding {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .branding-image {
            width: auto;
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
          }
          .branding-root-class-name {
            height: var(--dl-size-size-xsmall);
          }
        `}
      </style>
    </>
  )
}

Branding.defaultProps = {
  Logo: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  Logo_alt: 'image',
}

Branding.propTypes = {
  Logo: PropTypes.string,
  rootClassName: PropTypes.string,
  Logo_alt: PropTypes.string,
}

export default Branding
