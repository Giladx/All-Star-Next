import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Branding = (props) => {
  return (
    <>
      <div className={`branding-branding ${props.rootClassName} `}>
        <Link href="/">
          <a className="branding-link">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="branding-logo"
            />
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .branding-branding {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .branding-link {
            display: contents;
          }
          .branding-logo {
            width: 80px;
            cursor: pointer;
            height: 80px;
            object-fit: cover;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .branding-logo {
              width: 80px;
              height: 80px;
            }
          }
          @media (max-width: 479px) {
            .branding-logo {
              width: 80px;
              height: 80px;
            }
          }
        `}
      </style>
    </>
  )
}

Branding.defaultProps = {
  logoAlt: 'image',
  rootClassName: '',
  logoSrc: '/allstar1-200h.png',
}

Branding.propTypes = {
  logoAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  logoSrc: PropTypes.string,
}

export default Branding
