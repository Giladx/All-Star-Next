import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero7 = (props) => {
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <div className="hero7-max-width thq-section-max-width">
          <div className="hero7-content">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="hero7-text6 thq-heading-1 Heading2">
                    Breathe Clean, Live Healthy
                  </h1>
                </Fragment>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="hero7-text8 thq-body-large">
                    Welcome to Florida&apos;s premier air duct cleaning service.
                    We specialize in improving indoor air quality to create
                    healthier homes and reduce allergens. Our certified
                    technicians use top-tier equipment to provide you with the
                    cleanest air possible.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="hero7-actions">
              <div className="hero7-container1">
                <button className="hero7-button1 thq-button-filled">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="hero7-text7 thq-body-small">
                          Schedule Your Cleaning Today
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="hero7-container2">
                <button className="hero7-button2 thq-button-outline">
                  <span>
                    {props.action2 ?? (
                      <Fragment>
                        <span className="hero7-text5 thq-body-small">
                          Learn More
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero7-max-width {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero7-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 1000px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero7-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero7-container1 {
            display: flex;
            align-items: flex-start;
          }
          .hero7-button1 {
            border-color: var(--dl-color-primary-greenlite);
            background-color: var(--dl-color-primary-main);
          }
          .hero7-container2 {
            display: flex;
            align-items: flex-start;
          }
          .hero7-button2 {
            fill: var(--dl-color-primary-greenlite);
            color: var(--dl-color-primary-greenlite);
            border-color: var(--dl-color-primary-main);
          }
          .hero7-text5 {
            display: inline-block;
            text-align: center;
            font-family: 'Lora';
          }
          .hero7-text6 {
            display: inline-block;
            text-align: center;
          }
          .hero7-text7 {
            display: inline-block;
            text-align: center;
            font-family: 'Lora';
          }
          .hero7-text8 {
            display: inline-block;
            text-align: center;
            font-family: 'Lora';
          }
          .hero7root-class-name {
            background-color: #f6f5ed;
          }
          @media (max-width: 479px) {
            .hero7-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero7-container1 {
              width: 100%;
            }
            .hero7-button1 {
              width: 100%;
            }
            .hero7-container2 {
              width: 100%;
            }
            .hero7-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero7.defaultProps = {
  rootClassName: '',
  action2: undefined,
  heading1: undefined,
  action1: undefined,
  content1: undefined,
}

Hero7.propTypes = {
  rootClassName: PropTypes.string,
  action2: PropTypes.element,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default Hero7
