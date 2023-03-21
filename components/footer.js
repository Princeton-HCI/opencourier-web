import React from 'react'

import PropTypes from 'prop-types'

import Branding from './branding'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer">
        <div className="footer-information">
          <div className="footer-content">
            <div className="footer-contact-list">
              <div className="footer-contact">
                <img
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="footer-image"
                />
                <span className="footer-text">{props.text11}</span>
              </div>
              <div className="footer-contact1">
                <img
                  alt={props.image_alt11}
                  src={props.image_src11}
                  className="footer-image1"
                />
                <span className="footer-text01">{props.text21}</span>
              </div>
            </div>
            <div className="footer-contact-list1">
              <div className="footer-contact2">
                <img
                  alt={props.image_alt}
                  src={props.open_source_logo}
                  className="footer-image2"
                />
              </div>
              <div className="footer-contact3">
                <img
                  alt={props.image_alt1}
                  src={props.non_profit_logo}
                  className="footer-image3"
                />
              </div>
              <div className="footer-contact4">
                <img
                  alt={props.image_alt12}
                  src={props.carbon_neutral_logo}
                  className="footer-image4"
                />
              </div>
            </div>
          </div>
          <div className="footer-container">
            <Branding
              Logo="/playground_assets/open-deli-200h.png"
              rootClassName="branding-root-class-name"
            ></Branding>
            <span className="footer-copyright">{props.Copyright}</span>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <span className="link">{props.Text}</span>
            <span className="link">{props.Text1}</span>
            <span className="link">{props.Text2}</span>
            <span className="link">{props.Text3}</span>
            <span className="link">{props.Text4}</span>
            <span className="link">{props.Text5}</span>
          </div>
          <div className="footer-column1">
            <span className="link">{props.Text6}</span>
            <span className="link">{props.Text7}</span>
            <span className="link">{props.Text8}</span>
            <span className="link">{props.Text9}</span>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-information {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-content {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-contact-list {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-contact {
            gap: 11px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-image {
            width: auto;
            height: var(--dl-size-size-small);
            object-fit: cover;
          }
          .footer-text {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 18px;
            font-family: Lato;
            line-height: 18px;
          }
          .footer-contact1 {
            gap: 11px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-image1 {
            width: auto;
            height: var(--dl-size-size-small);
            object-fit: cover;
            margin-left: 3px;
            margin-right: 3px;
          }
          .footer-text01 {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 18px;
            font-family: Lato;
            line-height: 18px;
          }
          .footer-contact-list1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
          }
          .footer-contact2 {
            gap: 11px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-image2 {
            width: auto;
            height: var(--dl-size-size-small);
            object-fit: cover;
          }
          .footer-contact3 {
            gap: 11px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-image3 {
            width: auto;
            height: var(--dl-size-size-small);
            object-fit: cover;
            margin-left: 3px;
            margin-right: 3px;
          }
          .footer-contact4 {
            gap: 11px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-image4 {
            width: auto;
            height: var(--dl-size-size-small);
            object-fit: cover;
            margin-left: 3px;
            margin-right: 3px;
          }
          .footer-container {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .footer-copyright {
            color: rgb(18, 40, 33);
            width: 100%;
            font-size: 14px;
            font-family: Lato;
            line-height: 21px;
          }
          .footer-links {
            gap: 110px;
            display: flex;
            align-items: flex-start;
            padding-right: 135px;
            flex-direction: row;
          }
          .footer-column {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-column1 {
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .footer-footer {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer-contact-list1 {
              flex-direction: column;
              background-color: transparent;
            }
            .footer-copyright {
              display: none;
            }
            .footer-links {
              gap: var(--dl-space-space-threeunits);
              padding-right: 0px;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  image_alt12: 'image',
  Text5: 'Contact',
  Text9: 'Facebook',
  Text1: 'Contribute',
  text21: 'Join our Discord community',
  Copyright: 'Open Deli Foundation.',
  image_alt: 'image',
  carbon_neutral_logo: '/playground_assets/carbon-neutral-logo-dark.svg',
  Text: 'About',
  open_source_logo: '/playground_assets/open-source-black.svg',
  Text3: 'Changelog',
  image_src2: '/playground_assets/githublogo.svg',
  text11: 'Start a discussion',
  Text8: 'Twitter',
  Text4: 'Mastodon',
  image_alt11: 'image',
  Text6: 'Linkedin',
  Text2: 'Releases',
  image_alt2: 'image',
  image_alt1: 'image',
  image_src11: '/playground_assets/discordlogo.svg',
  non_profit_logo: '/playground_assets/non-prodit-black.svg',
  Text7: 'Instagram',
}

Footer.propTypes = {
  image_alt12: PropTypes.string,
  Text5: PropTypes.string,
  Text9: PropTypes.string,
  Text1: PropTypes.string,
  text21: PropTypes.string,
  Copyright: PropTypes.string,
  image_alt: PropTypes.string,
  carbon_neutral_logo: PropTypes.string,
  Text: PropTypes.string,
  open_source_logo: PropTypes.string,
  Text3: PropTypes.string,
  image_src2: PropTypes.string,
  text11: PropTypes.string,
  Text8: PropTypes.string,
  Text4: PropTypes.string,
  image_alt11: PropTypes.string,
  Text6: PropTypes.string,
  Text2: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src11: PropTypes.string,
  non_profit_logo: PropTypes.string,
  Text7: PropTypes.string,
}

export default Footer
