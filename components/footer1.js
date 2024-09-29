import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import Branding from './branding'

const Footer1 = (props) => {
  return (
    <>
      <footer className="footer1-footer">
        <div className="footer1-top">
          <Branding></Branding>
          <nav className="footer1-navigation-links">
            <Link href="/monthly-specials">
              <a>
                {props.link ?? (
                  <Fragment>
                    <span className="footer1-text20 navLink">
                      OUR MONTHLY SPECIALS
                    </span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/monthly-specials">
              <a>
                {props.link1 ?? (
                  <Fragment>
                    <span className="footer1-text19 navLink">SERVICES</span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/">
              <a>
                {props.link2 ?? (
                  <Fragment>
                    <span className="footer1-text10 navLink">BLOG</span>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/about">
              <a>
                {props.link3 ?? (
                  <Fragment>
                    <Link href="/">
                      <a className="footer1-link28 navLink">
                        <span>ABOUT</span>
                        <br></br>
                      </a>
                    </Link>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/contact">
              <a>
                {props.link4 ?? (
                  <Fragment>
                    <Link href="/">
                      <a className="footer1-link26 navLink">
                        <span>CONTACT</span>
                        <br></br>
                      </a>
                    </Link>
                  </Fragment>
                )}
              </a>
            </Link>
            <Link href="/business-relations">
              <a>
                {props.link5 ?? (
                  <Fragment>
                    <Link href="/">
                      <a className="footer1-link24 navLink">
                        <span>BUSINESS RELATIONS</span>
                        <br></br>
                      </a>
                    </Link>
                  </Fragment>
                )}
              </a>
            </Link>
          </nav>
        </div>
        <div className="footer1-middle">
          <a
            href="https://754-231-1631"
            target="_blank"
            rel="noreferrer noopener"
            className="footer1-link22"
          >
            {props.text ?? (
              <Fragment>
                <span className="footer1-text11">
                  754-231-1631 office@allstar.com
                </span>
              </Fragment>
            )}
          </a>
        </div>
        <div className="footer1-bottom">
          <span className="footer1-copyright">
            {props.copyright ?? (
              <Fragment>
                <span className="footer1-text18">
                  © Copyright Company – 2022
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </footer>
      <style jsx>
        {`
          .footer1-footer {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: var(--dl-color-primary-main);
          }
          .footer1-top {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            border-color: #222223;
            border-style: dashed;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .footer1-navigation-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .footer1-middle {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 250px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .footer1-link22 {
            text-decoration: none;
          }
          .footer1-bottom {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #222223;
            border-style: dashed;
            flex-direction: column;
            justify-content: center;
            border-top-width: 1px;
          }
          .footer1-text10 {
            display: inline-block;
            text-decoration: none;
          }
          .footer1-text11 {
            display: inline-block;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-family: 'Lora';
            font-weight: 500;
            line-height: 36px;
          }
          .footer1-link24 {
            display: inline-block;
            text-decoration: none;
          }
          .footer1-link26 {
            display: inline-block;
            text-decoration: none;
          }
          .footer1-link28 {
            display: inline-block;
            text-decoration: none;
          }
          .footer1-text18 {
            color: rgba(0, 0, 0, 0.3);
            width: 100%;
            display: inline-block;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 18px;
          }
          .footer1-text19 {
            display: inline-block;
            text-decoration: none;
          }
          .footer1-text20 {
            display: inline-block;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .footer1-footer {
              width: 100%;
              padding-top: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 767px) {
            .footer1-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .footer1-footer {
              padding-top: var(--dl-space-space-threeunits);
            }
            .footer1-navigation-links {
              flex-direction: column;
            }
            .footer1-link22 {
              font-size: 18px;
              line-height: 40px;
            }
            .footer1-bottom {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .footer1-copyright {
              font-size: 10px;
              line-height: 15px;
            }
            .footer1-text11 {
              font-size: 18px;
              line-height: 40px;
            }
            .footer1-text18 {
              font-size: 10px;
              line-height: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

Footer1.defaultProps = {
  link2: undefined,
  text: undefined,
  link5: undefined,
  link4: undefined,
  link3: undefined,
  copyright: undefined,
  link1: undefined,
  link: undefined,
}

Footer1.propTypes = {
  link2: PropTypes.element,
  text: PropTypes.element,
  link5: PropTypes.element,
  link4: PropTypes.element,
  link3: PropTypes.element,
  copyright: PropTypes.element,
  link1: PropTypes.element,
  link: PropTypes.element,
}

export default Footer1
