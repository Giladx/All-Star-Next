import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import Branding from './branding'

const Footer = (props) => {
  return (
    <>
      <div
        className={`footer-footer section-container ${props.rootClassName} `}
      >
        <div className="footer-max-width1 max-content-container">
          <div className="footer-top-part">
            <div className="footer-links-container">
              <div className="footer-product-container">
                <span className="footer-text10">
                  {props.text11 ?? (
                    <Fragment>
                      <span className="footer-text19">Product</span>
                    </Fragment>
                  )}
                </span>
                <Link href="/monthly-specials">
                  <a className="footer-link1">
                    {props.text12 ?? (
                      <Fragment>
                        <span className="footer-text18">MONTHLY SPECIALS</span>
                      </Fragment>
                    )}
                  </a>
                </Link>
              </div>
            </div>
            <div className="footer-navigate-container">
              <span className="footer-text11">
                {props.text3 ?? (
                  <Fragment>
                    <span className="footer-text27">Info</span>
                  </Fragment>
                )}
              </span>
              <Link href="/about">
                <a className="footer-link2">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="footer-text28">
                        <span>ABOUT</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/restrictions">
                <a className="footer-link3">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="footer-text25">RESTRICTIONS</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/contact">
                <a className="footer-link4">
                  {props.text6 ?? (
                    <Fragment>
                      <span className="footer-text23">CONTACT</span>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
            <div className="footer-contact-container">
              <span className="footer-text12">
                {props.text7 ?? (
                  <Fragment>
                    <span className="footer-text21">Contact Us</span>
                  </Fragment>
                )}
              </span>
              <a href="tel:7542311631" className="footer-link5">
                {props.text8 ?? (
                  <Fragment>
                    <span className="footer-text24">(754)-231-1631</span>
                  </Fragment>
                )}
              </a>
              <a
                href="mailto:service@ampureservices.com?subject=Site Service Request"
                className="footer-link6"
              >
                {props.text9 ?? (
                  <Fragment>
                    <span className="footer-text22">
                      SERVICE@ALLSTARDUCT.COM
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
            <div className="footer-subscribe-container">
              <span className="footer-text13">
                {props.text10 ?? (
                  <Fragment>
                    <span className="footer-text32">
                      Subscribe to our newsletter
                    </span>
                  </Fragment>
                )}
              </span>
              <input
                type="text"
                id="newsletter"
                placeholder={props.textinputPlaceholder}
                className="footer-textinput input"
              />
              <button className="footer-button button-primary button">
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="footer-text31">Subscribe</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <footer className="footer-max-width2 max-content-container">
          <Branding rootClassName="brandingroot-class-name4"></Branding>
          <span className="footer-text15">
            {props.text ?? (
              <Fragment>
                <span className="footer-text17">
                  All rights reserved @ ALL STAR
                </span>
              </Fragment>
            )}
          </span>
          <a
            href={props.textUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link7"
          >
            {props.text1 ?? (
              <Fragment>
                <span className="footer-text26">Developed by 011.ninja</span>
              </Fragment>
            )}
          </a>
        </footer>
        <a href={props.signatureUrl} target="_blank" rel="noreferrer noopener">
          <div className="footer-signature">
            <span>
              {props.text2 ?? (
                <Fragment>
                  <span className="footer-text20">Bytii Cloud</span>
                </Fragment>
              )}
            </span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .footer-footer {
            position: relative;
          }
          .footer-max-width1 {
            max-width: var(--dl-size-size-maxwidth);
            padding-left: 0px;
            padding-right: 0px;
          }
          .footer-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-links-container {
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-product-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-link1 {
            text-decoration: none;
          }
          .footer-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-link2 {
            text-decoration: none;
          }
          .footer-link3 {
            text-decoration: none;
          }
          .footer-link4 {
            text-decoration: none;
          }
          .footer-contact-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-subscribe-container {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-textinput {
            outline: none;
            align-self: stretch;
            padding-top: 4px;
            border-color: rgba(0, 0, 0, 0.1);
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: 4px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .footer-button {
            background-color: var(--dl-color-primary-main);
          }
          .footer-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .footer-max-width2 {
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-signature {
            left: 5px;
            bottom: 5px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .footer-text17 {
            display: inline-block;
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          .footer-text18 {
            color: var(--dl-color-scheme-darkblue);
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-text19 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text20 {
            color: rgb(201, 206, 218);
            display: inline-block;
            font-style: normal;
            font-weight: 300;
          }
          .footer-text21 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text22 {
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.6;
            letter-spacing: 0.02em;
            text-transform: capitalize;
            text-decoration: none;
          }
          .footer-text23 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-text24 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .footer-text25 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-text26 {
            display: inline-block;
            font-style: normal;
            font-family: 'Rubik';
            font-weight: 300;
            text-decoration: none;
          }
          .footer-text27 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text28 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-text31 {
            display: inline-block;
          }
          .footer-text32 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }

          @media (max-width: 1600px) {
            .footer-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer-contact-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer-text15 {
              width: auto;
              text-align: center;
            }
            .footer-text17 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .footer-max-width1 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .footer-navigate-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer-contact-container {
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer-link5 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-link6 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .footer-text15 {
              width: auto;
              text-align: center;
            }
            .footer-text17 {
              width: auto;
              text-align: center;
            }
            .footer-text22 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
            .footer-text24 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 991px) {
            .footer-text15 {
              text-align: center;
            }
            .footer-link7 {
              text-align: center;
            }
            .footer-text17 {
              text-align: center;
            }
            .footer-text26 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .footer-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .footer-product-container {
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .footer-navigate-container {
              align-self: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-subscribe-container {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .footer-text15 {
              text-align: center;
            }
            .footer-link7 {
              text-align: center;
            }
            .footer-text17 {
              text-align: center;
            }
            .footer-text26 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .footer-top-part {
              align-items: center;
              flex-direction: column;
            }
            .footer-links-container {
              position: relative;
            }
            .footer-product-container {
              width: auto;
            }
            .footer-text10 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
            .footer-navigate-container {
              width: auto;
              align-self: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .footer-text11 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
            .footer-contact-container {
              width: auto;
              align-items: flex-start;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .footer-text12 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
            .footer-link6 {
              font-size: 14px;
              font-style: italic;
              font-family: lora;
              font-weight: 700;
              line-height: 1.6;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              letter-spacing: 0.02em;
              text-transform: capitalize;
              text-decoration: none;
            }
            .footer-text13 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
            .footer-button {
              background-color: var(--dl-color-primary-main);
            }
            .footer-max-width2 {
              flex-direction: column;
            }
            .footer-text15 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-text17 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-text19 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
            .footer-text21 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
            .footer-text22 {
              font-size: 14px;
              font-style: italic;
              font-family: lora;
              font-weight: 700;
              line-height: 1.6;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              letter-spacing: 0.02em;
              text-transform: capitalize;
              text-decoration: none;
            }
            .footer-text27 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text: undefined,
  rootClassName: '',
  text12: undefined,
  textinputPlaceholder: 'Enter your e-mail address',
  text11: undefined,
  text2: undefined,
  text7: undefined,
  text9: undefined,
  text6: undefined,
  signatureUrl: 'https://bytii.cloud',
  text8: undefined,
  text5: undefined,
  text1: undefined,
  text3: undefined,
  text4: undefined,
  button: undefined,
  text10: undefined,
  textUrl: 'https://011.ninja/bio',
}

Footer.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  text12: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  text11: PropTypes.element,
  text2: PropTypes.element,
  text7: PropTypes.element,
  text9: PropTypes.element,
  text6: PropTypes.element,
  signatureUrl: PropTypes.string,
  text8: PropTypes.element,
  text5: PropTypes.element,
  text1: PropTypes.element,
  text3: PropTypes.element,
  text4: PropTypes.element,
  button: PropTypes.element,
  text10: PropTypes.element,
  textUrl: PropTypes.string,
}

export default Footer
