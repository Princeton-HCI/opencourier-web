import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <div className={`card-card card ${props.rootClassName} `}>
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="card-image"
        />
        <div className="card-header">
          <img alt="image" src={props.Icon} className="card-icon" />
          <h3 className="card-heading">{props.Title}</h3>
        </div>
        <p className="card-text">{props.Description}</p>
        <p className="card-text1">{props.Description1}</p>
      </div>
      <style jsx>
        {`
          .card-card {
            position: relative;
          }
          .card-image {
            width: var(--dl-size-size-xxlarge);
            height: auto;
            align-self: center;
            object-fit: cover;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .card-header {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card-icon {
            height: 50px;
            object-fit: cover;
          }
          .card-heading {
            color: rgb(18, 40, 33);
            font-size: 24px;
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .card-text {
            color: rgb(18, 40, 33);
            max-width: 600px;
            font-family: Lato;
            line-height: 24px;
          }
          .card-text1 {
            color: rgb(18, 40, 33);
            max-width: 600px;
            font-family: Lato;
            line-height: 24px;
          }
          .card-root-class-name {
            background-color: rgba(66, 125, 182, 0.5);
          }
          .card-root-class-name1 {
            background-color: rgba(250, 228, 142, 0.5);
          }
          .card-root-class-name2 {
            background-color: rgba(168, 88, 34, 0.5);
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  Icon: '/playground_assets/statue-of-liberty_1f5fd-200h.png',
  Title: 'High-impact business services',
  rootClassName: '',
  image_alt1: 'image',
  Description1:
    "OpenDeli gives drivers more freedom. Our decentralized, open-source software enables local businesses to cooperate in their best interests. What's more, our powerful system enables groups of drivers to become co-owners with companies, cooperatives and non-profit organizations.   With OpenDeli, drivers can advocate for their rights at the local level. Local governments can also use our powerful software. Using OpenDeli, they can provide drivers with free services and ensure they receive fair pay.",
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  Description:
    'With OpenDeli, drivers can advocate for their rights at the local level. Local governments can also use our powerful software. Using OpenDeli, they can provide drivers with free services and ensure they receive fair pay.',
}

Card.propTypes = {
  Icon: PropTypes.string,
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  Description1: PropTypes.string,
  image_src1: PropTypes.string,
  Description: PropTypes.string,
}

export default Card
