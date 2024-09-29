import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <span className="Navigation-LinkLaptopMobile navigation-links1-text1">
          {props.link1}
        </span>
        <span className="navigation-links1-text2 Navigation-LinkLaptopMobile">
          {props.link2}
        </span>
        <span className="navigation-links1-link Navigation-LinkLaptopMobile">
          {props.link21}
        </span>
        <span className="navigation-links1-text3 Navigation-LinkLaptopMobile">
          {props.link3}
        </span>
        <span className="navigation-links1-text4 Navigation-LinkLaptopMobile">
          {props.link4}
        </span>
        <span className="navigation-links1-text5 Navigation-LinkLaptopMobile">
          {props.link5}
        </span>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            min-width: var(--dl-size-size-xxlarge);
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-text2 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links1-link {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links1-text3 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links1-text4 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links1-text5 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }

          .navigation-links1root-class-name8 {
            width: auto;
            min-width: auto;
            margin-right: 0px;
          }
          .navigation-links1root-class-name9 {
            width: auto;
            min-width: auto;
            margin-right: 0px;
          }
          .navigation-links1root-class-name17 {
            width: auto;
            min-width: auto;
            margin-right: 0px;
          }
          @media (max-width: 1600px) {
            .navigation-links1-text2 {
              margin-left: 15px;
            }
            .navigation-links1-link {
              margin-left: 15px;
            }
            .navigation-links1-text3 {
              margin-left: 15px;
            }
            .navigation-links1-text4 {
              margin-left: 15px;
            }
            .navigation-links1-text5 {
              margin-left: 15px;
              margin-right: 15px;
            }
          }
          @media (max-width: 991px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-text1 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text2 {
              margin-left: 0px;
              margin-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link {
              margin-left: 0px;
              margin-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text3 {
              margin-left: 0px;
              margin-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text4 {
              margin-left: 0px;
              margin-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text5 {
              margin-left: 0px;
              margin-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-text1 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text2 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text3 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text4 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text5 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navigation-links1-text1 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  link21: 'BLOG',
  link2: 'SERVICES',
  link1: 'OUR MONTHLY SPECIALS',
  rootClassName: '',
  link5: 'BUSINESS RELATIONS',
  link4: 'CONTACT',
  link3: 'ABOUT',
}

NavigationLinks1.propTypes = {
  link21: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
  rootClassName: PropTypes.string,
  link5: PropTypes.string,
  link4: PropTypes.string,
  link3: PropTypes.string,
}

export default NavigationLinks1
