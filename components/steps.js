import React from 'react'

import PropTypes from 'prop-types'

import Number from './number'

const Steps = (props) => {
  return (
    <>
      <div className="steps-steps-list">
        <div className="steps-list">
          <div className="steps-section1">
            <Number></Number>
            <span className="steps-caption1">{props.caption4}</span>
          </div>
          <div className="steps-divider1"></div>
          <div className="steps-section2">
            <Number value="2" rootClassName="numberroot-class-name"></Number>
            <span className="steps-caption2">{props.caption41}</span>
          </div>
          <div className="steps-divider2"></div>
          <div className="steps-section3">
            <Number value="3" rootClassName="numberroot-class-name1"></Number>
            <span className="steps-caption3">{props.caption411}</span>
          </div>
          <div className="steps-divider3"></div>
          <div className="steps-section4">
            <Number value="4" rootClassName="numberroot-class-name2"></Number>
            <span className="steps-caption4">{props.caption4111}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps-steps-list {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .steps-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steps-section1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .steps-caption1 {
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
          }
          .steps-divider1 {
            height: 60px;
            display: flex;
            align-items: center;
            margin-left: 40px;
            border-color: #222223;
            border-style: dotted;
            border-width: 2px;
            margin-right: 40px;
            flex-direction: column;
            justify-content: space-between;
          }
          .steps-section2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .steps-caption2 {
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
          }
          .steps-divider2 {
            height: 60px;
            display: flex;
            align-items: center;
            margin-left: 40px;
            border-color: #222223;
            border-style: dotted;
            border-width: 2px;
            margin-right: 40px;
            flex-direction: column;
            justify-content: space-between;
          }
          .steps-section3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .steps-caption3 {
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
          }
          .steps-divider3 {
            height: 60px;
            display: flex;
            align-items: center;
            margin-left: 40px;
            border-color: #222223;
            border-style: dotted;
            border-width: 2px;
            margin-right: 40px;
            flex-direction: column;
            justify-content: space-between;
          }
          .steps-section4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .steps-caption4 {
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
          }
          @media (max-width: 767px) {
            .steps-steps-list {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .steps-caption1 {
              font-size: 16px;
              line-height: 40px;
            }
            .steps-divider1 {
              height: 40px;
              margin-left: 20px;
              margin-right: 20px;
            }
            .steps-caption2 {
              font-size: 16px;
              line-height: 40px;
            }
            .steps-divider2 {
              height: 40px;
              margin-left: 20px;
              margin-right: 20px;
            }
            .steps-caption3 {
              font-size: 16px;
              line-height: 40px;
            }
            .steps-divider3 {
              height: 40px;
              margin-left: 20px;
              margin-right: 20px;
            }
            .steps-caption4 {
              font-size: 16px;
              line-height: 40px;
            }
          }
        `}
      </style>
    </>
  )
}

Steps.defaultProps = {
  caption4111: "Florida's Clean Air Experts",
  caption41: 'Breathe Easy, Live Healthy',
  caption4: 'Dirty Ducts = Health Risks',
  caption411: 'Clean Air, Happy Home',
}

Steps.propTypes = {
  caption4111: PropTypes.string,
  caption41: PropTypes.string,
  caption4: PropTypes.string,
  caption411: PropTypes.string,
}

export default Steps
