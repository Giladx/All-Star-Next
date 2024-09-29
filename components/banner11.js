import React from 'react'

import PropTypes from 'prop-types'

const Banner11 = (props) => {
  return (
    <>
      <a href="tel:7542311631">
        <div
          className={`banner11-banner section-container ${props.rootClassName} `}
        >
          <div className="banner11-max-width max-content-container">
            <span className="banner11-text1">{props.text}</span>
            <h2 className="banner11-text2 Heading2">
              <span className="banner11-text3">CALL US NOW</span>
              <br className="Heading2"></br>
              <span className="Heading2">(754)-231-1631</span>
            </h2>
            <button className="banner11-primary button-lg button-secondary-white button">
              {props.primary}
            </button>
          </div>
        </div>
      </a>
      <style jsx>
        {`
          .banner11-banner {
            cursor: pointer;
            position: relative;
            text-decoration: none;
            background-color: #f6f5ed;
          }
          .banner11-max-width {
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .banner11-max-width:hover {
            cursor: pointer;
          }
          .banner11-text1 {
            color: var(--dl-color-scheme-darkblue);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .banner11-text2 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            width: 100%;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .banner11-text3 {
            font-weight: 900;
          }
          .banner11-primary {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .banner11root-class-name {
            width: 100%;
            align-self: center;
          }

          .banner11root-class-name2 {
            width: 100%;
          }
          .banner11root-class-name3 {
            width: 100%;
          }
          .banner11root-class-name4 {
            width: 100%;
            background-color: var(--dl-color-primary-700);
          }

          .banner11root-class-name6 {
            width: 100%;
          }
          .banner11root-class-name7 {
            display: none;
          }
          .banner11root-class-name8 {
            display: none;
          }
          .banner11root-class-name9 {
            width: 100%;
          }
          .banner11root-class-name10 {
            width: 100%;
          }
          .banner11root-class-name11 {
            width: 100%;
          }
          .banner11root-class-name12 {
            width: 100%;
          }
          .banner11root-class-name13 {
            width: 100%;
          }
          .banner11root-class-name14 {
            width: 100%;
          }
          .banner11root-class-name15 {
            width: 100%;
          }
          .banner11root-class-name16 {
            width: 100%;
          }
          .banner11root-class-name17 {
            width: 100%;
          }
          .banner11root-class-name18 {
            width: 100%;
            align-self: center;
          }
          .banner11root-class-name19 {
            width: 100%;
          }
          .banner11root-class-name20 {
            width: 100%;
          }
          .banner11root-class-name21 {
            width: 100%;
          }
          .banner11root-class-name22 {
            width: 100%;
          }
          .banner11root-class-name23 {
            width: 100%;
          }
          .banner11root-class-name24 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            background-color: #f6f5ed;
          }
          @media (max-width: 1200px) {
            .banner11-banner {
              width: 100%;
            }
            .banner11-text2 {
              color: var(--dl-color-scheme-white);
              font-size: 46px;
              font-family: Rubik;
              line-height: 63px;
              letter-spacing: 0.01em;
              text-decoration: none;
            }
            .banner11-text3 {
              font-weight: 900;
            }
          }
          @media (max-width: 479px) {
            .banner11-text2 {
              font-family: Lora;
            }
          }
        `}
      </style>
    </>
  )
}

Banner11.defaultProps = {
  rootClassName: '',
  primary: 'Contact us',
  text: 'what are you waiting for?',
}

Banner11.propTypes = {
  rootClassName: PropTypes.string,
  primary: PropTypes.string,
  text: PropTypes.string,
}

export default Banner11
