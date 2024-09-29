import React from 'react'

import PropTypes from 'prop-types'

import PackagesCard from './packages-card'

const Packages = (props) => {
  return (
    <>
      <div
        className={`packages-services section-container ${props.rootClassName} `}
      >
        <div className="packages-max-width max-content-container">
          <div className="packages-heading-container">
            <div className="packages-text-container">
              <span className="packages-text1">{props.ourServices}</span>
              <h2>
                <span>Air Duct Cleaning Services</span>
                <br></br>
              </h2>
            </div>
            <div className="packages-controls">
              <button
                id="slideItLeft"
                type="button"
                aria-label="slide-left"
                className="control-btn"
              >
                <svg viewBox="0 0 1024 1024" className="packages-icon1">
                  <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                </svg>
                {props.buttonLeft}
              </button>
              <button
                id="slideItRight"
                type="button"
                aria-label="slide-right"
                className="control-btn"
              >
                <svg viewBox="0 0 1024 1024" className="packages-icon3">
                  <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                </svg>
                {props.buttonRight}
              </button>
            </div>
          </div>
          <div id="items" className="packages-cards-container items">
            <PackagesCard
              details=" "
              className="packages-component1"
            ></PackagesCard>
            <PackagesCard
              price="149$"
              start="Air Duct Cleaning"
              title="Premium"
              details="Vacuum up to 12 supply vents "
              details1="Camera inspection"
              imageSrc="/external/file-document-200h-200h.webp"
              className="packages-component2"
            ></PackagesCard>
            <PackagesCard
              price="249$"
              start="Air Duct Cleaning"
              title="Duct Cleaning"
              details="Negative pressure connection to the main supply line and main return line. "
              details1="Dryer vent cleaning from outside (1st-floor exit only) "
              imageSrc="/external/dice-5-200h-200h.webp"
              details11="Basic furnace cleaning"
              details1111="Camera inspection"
              className="packages-component3"
            ></PackagesCard>
            <PackagesCard
              price="100$ OFF"
              start="Air Duct Cleaning"
              title="Deep cleaning"
              details="Negative pressure connection to the main supply line and main return line. "
              details1="Dryer vent cleaning from outside (1st-floor exit only) "
              imageSrc="/external/dice-5-200h-200h.webp"
              details11="Basic furnace cleaning -Camera inspection"
              buttonLink="Order Now"
              details111="Deep cleaning vents and returns "
              details1111="Camera inspection"
              className="packages-component4"
            ></PackagesCard>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .packages-services {
            display: flex;
            position: relative;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: var(--dl-color-primary-main);
          }
          .packages-max-width {
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .packages-heading-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .packages-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .packages-text1 {
            fill: var(--dl-color-gray-white);
            color: var(--dl-color-gray-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .packages-controls {
            display: grid;
            grid-gap: 12px;
            grid-template-columns: 1fr 1fr;
          }
          .packages-icon1 {
            width: 16px;
            height: 16px;
          }
          .packages-icon3 {
            width: 16px;
            height: 16px;
          }
          .packages-cards-container {
            height: auto;
            overflow: hidden;
          }
          .packages-component1 {
            text-decoration: none;
          }
          .packages-component2 {
            text-decoration: none;
          }
          .packages-component3 {
            text-decoration: none;
          }
          .packages-component4 {
            text-decoration: none;
          }
          .packagesroot-class-name {
            background-color: var(--dl-color-primary-greenlite);
          }
        `}
      </style>
    </>
  )
}

Packages.defaultProps = {
  buttonRight: '',
  ourServices: 'our services',
  buttonLeft: '',
  rootClassName: '',
}

Packages.propTypes = {
  buttonRight: PropTypes.string,
  ourServices: PropTypes.string,
  buttonLeft: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Packages
