import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import Branding from './branding'

const NavbarInteractive = (props) => {
  return (
    <>
      <div className={`navbar-interactive-container1 ${props.rootClassName} `}>
        <header
          data-thq="thq-navbar"
          className="navbar-interactive-navbar-interactive"
        >
          <Branding rootClassName="brandingroot-class-name2"></Branding>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="navbar-interactive-desktop-menu"
          >
            <div className="navbar-interactive-links1">
              <Link href="/">
                <a>
                  {props.link ?? (
                    <Fragment>
                      <span className="navbar-interactive-text12 navLink">
                        OUR MONTHLY SPECIALS
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/">
                <a>
                  {props.link1 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text20 navLink">
                        BLOG
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/">
                <a>
                  {props.link2 ?? (
                    <Fragment>
                      <span className="navbar-interactive-text25 navLink">
                        ABOUT
                      </span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/">
                <a>
                  {props.link3 ?? (
                    <Fragment>
                      <Link href="/">
                        <a className="navbar-interactive-link39 navLink">
                          <span>CONTACT</span>
                          <br></br>
                        </a>
                      </Link>
                    </Fragment>
                  )}
                </a>
              </Link>
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-interactive-burger-menu"
          >
            <button className="button">
              <svg
                viewBox="0 0 1024 1024"
                className="navbar-interactive-icon10"
              >
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navbar-interactive-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="navbar-interactive-nav"
            >
              <div className="navbar-interactive-container2">
                <Branding rootClassName="brandingroot-class-name3"></Branding>
                <div
                  data-thq="thq-close-menu"
                  className="navbar-interactive-menu-close"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon12"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="navbar-interactive-links2">
                <Link href="/">
                  <a className="navbar-interactive-link19">
                    {props.link4 ?? (
                      <Fragment>
                        <Link href="/">
                          <a className="navbar-interactive-link37 navLink">
                            <span>OUR MONTHLY SPECIALS</span>
                            <br></br>
                          </a>
                        </Link>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <Link href="/">
                  <a className="navbar-interactive-link21">
                    {props.link5 ?? (
                      <Fragment>
                        <span className="navbar-interactive-text19 navLink">
                          SERVICES
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <Link href="/">
                  <a className="navbar-interactive-link23">
                    {props.link6 ?? (
                      <Fragment>
                        <Link href="/">
                          <a className="navbar-interactive-link41 navLink">
                            <span>BLOG</span>
                            <br></br>
                          </a>
                        </Link>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <Link href="/">
                  <a className="navbar-interactive-link25">
                    {props.link7 ?? (
                      <Fragment>
                        <Link href="/">
                          <a className="navbar-interactive-link33 navLink">
                            <span>ABOUT</span>
                            <br></br>
                          </a>
                        </Link>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <Link href="/">
                  <a className="navbar-interactive-link27">
                    {props.link8 ?? (
                      <Fragment>
                        <Link href="/">
                          <a className="navbar-interactive-link35 navLink">
                            <span>CONTACT</span>
                            <br></br>
                          </a>
                        </Link>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <Link href="/business-relations">
                  <a className="navbar-interactive-link29">
                    {props.link9 ?? (
                      <Fragment>
                        <Link href="/">
                          <a className="navbar-interactive-link31 navLink">
                            <span>BUSINESS RELATIONS</span>
                            <br></br>
                          </a>
                        </Link>
                      </Fragment>
                    )}
                  </a>
                </Link>
              </div>
              <div className="navbar-interactive-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="navbar-interactive-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="navbar-interactive-icon16"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="navbar-interactive-icon18"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-interactive-container1 {
            width: 100%;
            display: flex;
            position: relative;
          }
          .navbar-interactive-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-interactive-desktop-menu {
            display: flex;
          }
          .navbar-interactive-links1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-interactive-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-interactive-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-interactive-nav {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .navbar-interactive-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-interactive-links2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .navbar-interactive-link29 {
            text-decoration: none;
          }
          .navbar-interactive-icon-group {
            display: flex;
          }
          .navbar-interactive-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-interactive-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-interactive-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-interactive-link31 {
            display: inline-block;
            text-decoration: none;
          }
          .navbar-interactive-text12 {
            display: inline-block;
            text-decoration: none;
          }
          .navbar-interactive-link33 {
            display: inline-block;
            text-decoration: none;
          }
          .navbar-interactive-link35 {
            display: inline-block;
            text-decoration: none;
          }
          .navbar-interactive-link37 {
            display: inline-block;
            text-decoration: none;
          }
          .navbar-interactive-text19 {
            display: inline-block;
            text-decoration: none;
          }
          .navbar-interactive-text20 {
            display: inline-block;
            text-decoration: none;
          }
          .navbar-interactive-link39 {
            display: inline-block;
            text-decoration: none;
          }
          .navbar-interactive-link41 {
            display: inline-block;
            text-decoration: none;
          }
          .navbar-interactive-text25 {
            display: inline-block;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .navbar-interactive-navbar-interactive {
              gap: 0;
              justify-content: space-between;
            }
            .navbar-interactive-links1 {
              display: none;
            }
            .navbar-interactive-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navbar-interactive-navbar-interactive {
              gap: 0;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .navbar-interactive-desktop-menu {
              display: none;
            }
            .navbar-interactive-burger-menu {
              display: flex;
            }
            .navbar-interactive-link19 {
              text-decoration: none;
            }
            .navbar-interactive-link21 {
              text-decoration: none;
            }
            .navbar-interactive-link23 {
              text-decoration: none;
            }
            .navbar-interactive-link25 {
              text-decoration: none;
            }
            .navbar-interactive-link27 {
              text-decoration: none;
            }
            .navbar-interactive-link29 {
              text-decoration: none;
            }
            .navbar-interactive-link31 {
              text-decoration: none;
            }
            .navbar-interactive-link33 {
              text-decoration: none;
            }
            .navbar-interactive-link35 {
              text-decoration: none;
            }
            .navbar-interactive-link37 {
              text-decoration: none;
            }
            .navbar-interactive-text19 {
              text-decoration: none;
            }
            .navbar-interactive-link41 {
              text-decoration: none;
            }
          }
          @media (max-width: 479px) {
            .navbar-interactive-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar-interactive-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

NavbarInteractive.defaultProps = {
  link9: undefined,
  link: undefined,
  link7: undefined,
  link8: undefined,
  link4: undefined,
  link5: undefined,
  link1: undefined,
  link3: undefined,
  link6: undefined,
  link2: undefined,
  rootClassName: '',
}

NavbarInteractive.propTypes = {
  link9: PropTypes.element,
  link: PropTypes.element,
  link7: PropTypes.element,
  link8: PropTypes.element,
  link4: PropTypes.element,
  link5: PropTypes.element,
  link1: PropTypes.element,
  link3: PropTypes.element,
  link6: PropTypes.element,
  link2: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default NavbarInteractive
