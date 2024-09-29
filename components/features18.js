import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Features18 = (props) => {
  return (
    <>
      <div
        className={`features18-layout349 thq-section-padding ${props.rootClassName} `}
      >
        <div className="features18-max-width thq-section-max-width">
          <div className="features18-content1">
            <div className="features18-section-title">
              <span>
                {props.feature1Slogan ?? (
                  <Fragment>
                    <span className="features18-text5 Content thq-body-small">
                      Breathe Clean, Live Healthy
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="features18-content2">
                <h2>
                  {props.feature1Title ?? (
                    <Fragment>
                      <h2 className="features18-text6 Heading2">
                        Professional Air Duct Cleaning
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <p>
                  {props.feature1Description ?? (
                    <Fragment>
                      <p className="features18-text4 thq-body-large Content">
                        Our expert team provides thorough air duct cleaning
                        services to remove dust, debris, and allergens, ensuring
                        cleaner indoor air quality for a healthier living
                        environment.
                      </p>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="features18-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features18-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features18-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .features18-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .features18-text4 {
            display: inline-block;
          }
          .features18-text5 {
            display: inline-block;
          }
          .features18-text6 {
            display: inline-block;
            text-transform: none;
          }
          .features18root-class-name {
            background-color: var(--dl-color-primary-main);
          }
          @media (max-width: 991px) {
            .features18-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
          }
        `}
      </style>
    </>
  )
}

Features18.defaultProps = {
  feature1ImageAlt: 'Air Duct Cleaning Service',
  feature1Description: undefined,
  feature1Slogan: undefined,
  rootClassName: '',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU2NjgzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
}

Features18.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Slogan: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
}

export default Features18
