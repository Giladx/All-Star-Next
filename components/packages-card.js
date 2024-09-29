import React from 'react'

import PropTypes from 'prop-types'

const PackagesCard = (props) => {
  return (
    <>
      <div
        data-aos="fade-down"
        className={`packages-card-services-card services-card ${props.rootClassName} `}
      >
        <span className="packages-card-title">{props.title}</span>
        <span className="packages-card-price">{props.price}</span>
        <span className="packages-card-text">{props.start}</span>
        <div className="packages-card-features">
          <span className="packages-card-details1">{props.details111}</span>
          <span className="packages-card-details2">{props.details}</span>
          <span className="packages-card-details3">{props.details1}</span>
          <span className="packages-card-details4">{props.details11}</span>
          <span className="packages-card-details5">{props.details1111}</span>
        </div>
        <div className="packages-card-button-res">
          <a
            href={props.buttonUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="packages-card-link button"
          >
            {props.buttonLink}
          </a>
          <span className="packages-card-restrictions1">{props.form}</span>
          <span className="packages-card-restrictions2">{props.form1}</span>
        </div>
      </div>
      <style jsx>
        {`
          .packages-card-services-card {
            height: auto;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 0px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .packages-card-title {
            width: 100%;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-price {
            width: 100%;
            font-size: 34px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 0px;
            background-image: linear-gradient(
              319deg,
              rgb(74, 193, 153) 0%,
              rgb(81, 199, 244) 57%,
              rgb(0, 116, 240) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: rgba(255, 255, 255, 0);
          }
          .packages-card-text {
            width: 100%;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .packages-card-features {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xxlarge);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .packages-card-details1 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details2 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details3 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details4 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details5 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .packages-card-button-res {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .packages-card-link {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            width: 100%;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
            background-color: var(--dl-color-primary-greenlite);
          }
          .packages-card-link:hover {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            background-color: var(--dl-color-scheme-green);
          }
          .packages-cardroot-class-name {
            display: none;
          }
          .packages-cardroot-class-name1 {
            display: none;
          }
          @media (max-width: 1200px) {
            .packages-card-title {
              width: 100%;
              text-align: center;
            }
            .packages-card-price {
              width: 100%;
              font-size: 34px;
              text-align: center;
              margin-bottom: 0px;
            }
            .packages-card-text {
              width: 100%;
              font-style: normal;
              text-align: center;
              font-weight: 300;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .packages-card-details1 {
              width: 100%;
              text-align: center;
            }
            .packages-card-details2 {
              width: 100%;
              text-align: center;
            }
            .packages-card-details3 {
              width: 100%;
              text-align: center;
            }
            .packages-card-details4 {
              width: 100%;
              text-align: center;
            }
            .packages-card-details5 {
              width: 100%;
              text-align: center;
            }
            .packages-card-link {
              color: var(--dl-color-scheme-green);
              width: 100%;
              border-color: var(--dl-color-scheme-green);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .packages-card-restrictions1 {
              margin-top: var(--dl-space-space-unit);
            }
            .packages-card-restrictions2 {
              margin-top: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

PackagesCard.defaultProps = {
  price: '149$',
  form: '* Fill an Order Form',
  title: 'Dryer vent',
  rootClassName: '',
  details1111: '',
  buttonUrl: 'https://www.teleporthq.io',
  details11: '',
  buttonLink: 'Order Now',
  start: 'Starting at',
  details111: '',
  details1: '',
  details:
    'Create your ubest unique App development, crafted for your business needs.Create your ubest unique App development, crafted for your business needs.',
  form1: '** “Restrictions May Apply”',
}

PackagesCard.propTypes = {
  price: PropTypes.string,
  form: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  details1111: PropTypes.string,
  buttonUrl: PropTypes.string,
  details11: PropTypes.string,
  buttonLink: PropTypes.string,
  start: PropTypes.string,
  details111: PropTypes.string,
  details1: PropTypes.string,
  details: PropTypes.string,
  form1: PropTypes.string,
}

export default PackagesCard
