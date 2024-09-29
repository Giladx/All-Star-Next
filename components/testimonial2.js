import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Branding from './branding'

const Testimonial2 = (props) => {
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <div className="testimonial2-max-width thq-section-max-width">
          <div className="testimonial2-stars">
            <svg
              viewBox="0 0 1024 1024"
              className="testimonial2-icon10 thq-icon-small"
            >
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="testimonial2-icon12 thq-icon-small"
            >
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="testimonial2-icon14 thq-icon-small"
            >
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="testimonial2-icon16 thq-icon-small"
            >
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="testimonial2-icon18 thq-icon-small"
            >
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
          </div>
          <p>
            {props.review1 ?? (
              <Fragment>
                <p className="testimonial2-text6 thq-body-large">
                  I was amazed by the difference in air quality after All Star
                  Air Duct Cleaning serviced my home. I highly recommend their
                  professional team!
                </p>
              </Fragment>
            )}
          </p>
          <div className="testimonial2-avatar">
            <img
              alt={props.author1Alt}
              src={props.author1Src}
              className="testimonial2-avatar-image thq-img-round thq-img-ratio-1-1"
            />
            <div className="testimonial2-avatar-content">
              <span>
                {props.author1Name ?? (
                  <Fragment>
                    <span className="testimonial2-text5 thq-body-small">
                      Sarah Johnson
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.author1Position ?? (
                  <Fragment>
                    <span className="testimonial2-text4 thq-body-small">
                      Homeowner
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <Branding rootClassName="brandingroot-class-name6"></Branding>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial2-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial2-stars {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial2-icon10 {
            fill: var(--dl-color-primary-main);
          }
          .testimonial2-icon12 {
            fill: var(--dl-color-primary-700);
          }
          .testimonial2-icon14 {
            fill: var(--dl-color-primary-700);
          }
          .testimonial2-icon16 {
            fill: var(--dl-color-primary-700);
          }
          .testimonial2-icon18 {
            fill: var(--dl-color-primary-700);
          }
          .testimonial2-avatar {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
          }
          .testimonial2-avatar-image {
            width: 56px;
            height: 56px;
          }
          .testimonial2-avatar-content {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial2-text4 {
            display: inline-block;
            text-align: left;
          }
          .testimonial2-text5 {
            display: inline-block;
            text-align: left;
            font-weight: 600;
          }
          .testimonial2-text6 {
            display: inline-block;
            text-align: center;
          }
          .testimonial2root-class-name {
            background-color: #f6f5ed;
          }
          @media (max-width: 479px) {
            .testimonial2-avatar {
              flex-direction: column;
            }
            .testimonial2-avatar-content {
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial2.defaultProps = {
  author1Src:
    'https://images.unsplash.com/photo-1615494937430-65d34f6e5aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU2NjgzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  rootClassName: '',
  author1Position: undefined,
  author1Name: undefined,
  review1: undefined,
  author1Alt: 'Sarah Johnson',
}

Testimonial2.propTypes = {
  author1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  author1Position: PropTypes.element,
  author1Name: PropTypes.element,
  review1: PropTypes.element,
  author1Alt: PropTypes.string,
}

export default Testimonial2
