import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Banner from '../components/banner'
import Branding from '../components/branding'
import Footer from '../components/footer'

const Restrictions = (props) => {
  return (
    <>
      <div className="restrictions-container1">
        <Head>
          <title>Restrictions - All Star Air Duct Cleaning Florida</title>
          <meta
            name="description"
            content="Florida's All Star Air Duct Cleaning! Breathe Easy &amp; Save $$$. Pro cleaning improves air quality &amp; lowers energy bills. Call now!"
          />
          <meta
            property="og:title"
            content="Restrictions - All Star Air Duct Cleaning Florida"
          />
          <meta
            property="og:description"
            content="Florida's All Star Air Duct Cleaning! Breathe Easy &amp; Save $$$. Pro cleaning improves air quality &amp; lowers energy bills. Call now!"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b690c01b-548d-404d-aaf7-07f262cbd95e/23133773-4d12-4160-8af6-f1e050fedeeb?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <Banner></Banner>
        <div className="restrictions-hero">
          <div className="restrictions-main">
            <div className="restrictions-content1">
              <header
                data-thq="thq-navbar"
                className="restrictions-navbar-interactive"
              >
                <Branding rootClassName="brandingroot-class-name13"></Branding>
                <div
                  data-thq="thq-navbar-nav"
                  data-role="Nav"
                  className="restrictions-desktop-menu"
                >
                  <div className="restrictions-links1">
                    <Link href="/monthly-specials">
                      <a className="restrictions-link11 navLink">
                        OUR MONTHLY SPECIALS
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="restrictions-link13 navLink">BLOG</a>
                    </Link>
                    <Link href="/about">
                      <a className="restrictions-link15 navLink">ABOUT</a>
                    </Link>
                    <Link href="/contact">
                      <a className="restrictions-link17 navLink">
                        <span>CONTACT</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  data-thq="thq-burger-menu"
                  className="restrictions-burger-menu"
                >
                  <button className="button">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="restrictions-icon10"
                    >
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </button>
                </div>
                <div
                  data-thq="thq-mobile-menu"
                  className="restrictions-mobile-menu"
                >
                  <div
                    data-thq="thq-mobile-menu-nav"
                    data-role="Nav"
                    className="restrictions-nav"
                  >
                    <div className="restrictions-container2">
                      <Branding rootClassName="brandingroot-class-name14"></Branding>
                      <div
                        data-thq="thq-close-menu"
                        className="restrictions-menu-close"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="restrictions-icon12"
                        >
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="restrictions-links2">
                      <Link href="/">
                        <a className="restrictions-link19 navLink">
                          <span>OUR MONTHLY SPECIALS</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="restrictions-link21 navLink">SERVICES</a>
                      </Link>
                      <Link href="/">
                        <a className="restrictions-link23 navLink">
                          <span>BLOG</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="restrictions-link25 navLink">
                          <span>ABOUT</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="restrictions-link27 navLink">
                          <span>CONTACT</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="restrictions-link29 navLink">
                          <span>BUSINESS RELATIONS</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                    <div className="restrictions-icon-group">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="restrictions-icon14"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="restrictions-icon16"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="restrictions-icon18"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </header>
              <div className="restrictions-hero-section">
                <div className="restrictions-header">
                  <h1 className="restrictions-heading Heading3">
                    Restrictions
                  </h1>
                  <p className="restrictions-caption">
                    At All Star Air Duct Cleaning, we take pride in our
                    commitment to customer satisfaction. Our cleaning services
                    come with specific restrictions to ensure the highest
                    quality of service. Our certified technicians guarantee
                    top-notch results, and we have insurance coverage in place
                    for your peace of mind.
                  </p>
                </div>
                <div className="restrictions-buttons">
                  <a
                    href="tel:7542311631"
                    className="restrictions-link30 button"
                  >
                    <span>Call Now</span>
                  </a>
                  <button className="restrictions-button2 button">
                    <span>Join our newsletter</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="restrictions-image1">
              <button className="restrictions-button3 button">Call Now</button>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxsZWdhbCUyMGJsYWNrJTIwfGVufDB8fHx8MTcyNzU4OTcwNnww&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="restrictions-image2"
              />
            </div>
          </div>
        </div>
        <div className="restrictions-content2">
          <div className="restrictions-content-wrap">
            <span className="restrictions-text24">
              All goods and services are subject to a written agreement between
              the customer and All Star, to be signed when the services are
              provided. We are committed to full client satisfaction! Before
              service, you will receive a price quote, only after your approval
              we will provide our services.
            </span>
            <span className="restrictions-text25">
              <span>100% satisfaction:</span>
              <br></br>
            </span>
            <span className="restrictions-text28">
              If a customer has a complaint about a service performed by All
              Star technician, he needs to allow All Star representative to
              inspect the service. If the customer does not allow an on-site
              inspection by All Star representative, he will not be eligible to
              take advantage of the 100% satisfaction benefits.
            </span>
            <span className="restrictions-text29">
              <span>Additional services:</span>
              <br></br>
            </span>
            <span className="restrictions-text32">
              <span>
                Additional services refer to services other than the customer
                ordered by phone with AM Pure representative/dispatcher or any
                other company who contracted AM Pure for the job.
              </span>
              <br></br>
              <br></br>
              <span>
                An AM Pure representative on-site may offer additional services
                according to his discretion. The AM Pure representative on-site
                will not perform any additional services, free or charged,
                without the customer&apos;s authorization or the person in
                charge on-site.
              </span>
              <br></br>
              <br></br>
              <span>
                The person in charge will be the customer that booked the
                appointment or someone on his behalf and any person who signed
                the work agreement.
              </span>
            </span>
            <span className="restrictions-text40">
              <span>&quot;Annual Cleaning&quot; Package and coupon:</span>
              <br></br>
            </span>
            <span className="restrictions-text43">
              The &apos;Annual cleaning&apos; is the package name. The
              &apos;annual cleaning&apos; package is valid for existing
              customers who had a thorough cleaning with All Star in the past
              year, and their property is not bigger than 1,200 square feet.
              Package description and any restrictions will be provided in full
              by an All Star dispatcher when a customer calls to inquire about
              the package.
            </span>
            <span className="restrictions-text44">
              &quot;Duct Cleaning&quot; Package and coupon:
            </span>
            <span className="restrictions-text45">
              The &apos;duct cleaning&apos; is the package name. The &apos;duct
              cleaning&apos; package is considered a basic cleaning by All Star
              standards. The cleaning of the &apos;duct cleaning&apos; package
              will remove some loose dust and debris starting in the main supply
              line only. The cleaning of the &apos;duct cleaning&apos; package
              does not include opening the registers and cleaning individual air
              ducts in the house area. No guarantee for any results. Package
              description and any restrictions will be provided in full by an
              All Star dispatcher when a customer calls to inquire about the
              package.
            </span>
            <span className="restrictions-text46">
              <span>Monthly specials on site:</span>
              <br></br>
            </span>
            <span className="restrictions-text49">
              The packages on the monthly specials page on All Star website may
              have restrictions. A representative on the phone will provide
              restrictions. Monthly special packages and prices may be changed
              from time to time.
            </span>
            <span className="restrictions-text50">
              <span>Certified technician:</span>
              <br></br>
            </span>
            <span className="restrictions-text53">
              All Star certified technicians are certified by All Star staff
              according to All Star standards.
            </span>
            <span className="restrictions-text54">Insurance:</span>
            <span className="restrictions-text55">
              All All Star employees are insured under Michigan workers comp
              insurance law.
            </span>
          </div>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="restrictions-text56">
                All rights reserved @ ALL STAR
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="restrictions-text57">
                Developed by 011.ninja
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="restrictions-text58">Bytii Cloud</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="restrictions-text59">Info</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="restrictions-text60">
                <span>ABOUT</span>
                <br></br>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="restrictions-text63">RESTRICTIONS</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="restrictions-text64">CONTACT</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="restrictions-text65">Contact Us</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="restrictions-text66">(754)-231-1631</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="restrictions-text67">
                SERVICE@ALLSTARDUCT.COM
              </span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="restrictions-text68">Subscribe</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="restrictions-text69">
                Subscribe to our newsletter
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="restrictions-text70">Product</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="restrictions-text71">MONTHLY SPECIALS</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .restrictions-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .restrictions-hero {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f6f5ed;
          }
          .restrictions-main {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 646px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .restrictions-content1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .restrictions-navbar-interactive {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .restrictions-desktop-menu {
            display: flex;
          }
          .restrictions-links1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .restrictions-link11 {
            text-decoration: none;
          }
          .restrictions-link13 {
            text-decoration: none;
          }
          .restrictions-link15 {
            text-decoration: none;
          }
          .restrictions-link17 {
            text-decoration: none;
          }
          .restrictions-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .restrictions-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .restrictions-mobile-menu {
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
          .restrictions-nav {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .restrictions-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .restrictions-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .restrictions-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .restrictions-links2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .restrictions-link19 {
            text-decoration: none;
          }
          .restrictions-link21 {
            text-decoration: none;
          }
          .restrictions-link23 {
            text-decoration: none;
          }
          .restrictions-link25 {
            text-decoration: none;
          }
          .restrictions-link27 {
            text-decoration: none;
          }
          .restrictions-link29 {
            text-decoration: none;
          }
          .restrictions-icon-group {
            display: flex;
          }
          .restrictions-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .restrictions-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .restrictions-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .restrictions-hero-section {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .restrictions-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .restrictions-heading {
            color: var(--dl-color-primary-darkblue);
            font-style: normal;
          }
          .restrictions-caption {
            fill: var(--dl-color-primary-darkblue);
            color: var(--dl-color-primary-darkblue);
          }
          .restrictions-buttons {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .restrictions-link30 {
            text-decoration: none;
            background-color: var(--dl-color-primary-main);
          }
          .restrictions-button2 {
            color: #f6f5ed;
            background-color: #000000;
          }
          .restrictions-image1 {
            flex: 1;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-end;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .restrictions-button3 {
            background-color: var(--dl-color-primary-main);
          }
          .restrictions-image2 {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: grayscale();
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .restrictions-content2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: flex-start;
            margin-bottom: 0px;
            justify-content: center;
          }
          .restrictions-content-wrap {
            flex: 0 0 auto;
            width: 768px;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .restrictions-text24 {
            height: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text25 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text28 {
            height: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text29 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text32 {
            height: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text40 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text43 {
            height: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text44 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text45 {
            height: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text46 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text49 {
            height: 100%;
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text50 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text53 {
            height: 100%;
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text54 {
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text55 {
            height: 100%;
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .restrictions-text56 {
            display: inline-block;
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          .restrictions-text57 {
            display: inline-block;
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          .restrictions-text58 {
            color: rgb(201, 206, 218);
            display: inline-block;
            font-style: normal;
            font-weight: 300;
          }
          .restrictions-text59 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .restrictions-text60 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .restrictions-text63 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .restrictions-text64 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .restrictions-text65 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .restrictions-text66 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .restrictions-text67 {
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
          .restrictions-text68 {
            display: inline-block;
          }
          .restrictions-text69 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .restrictions-text70 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .restrictions-text71 {
            color: var(--dl-color-scheme-darkblue);
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .restrictions-content-wrap {
              width: 768px;
            }
            .restrictions-text56 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .restrictions-content-wrap {
              width: 768px;
              max-width: auto;
              min-width: auto;
            }
            .restrictions-text56 {
              width: auto;
              text-align: center;
            }
            .restrictions-text66 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .restrictions-text67 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
          }
          @media (max-width: 991px) {
            .restrictions-main {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-threeunits);
            }
            .restrictions-navbar-interactive {
              gap: 0;
              justify-content: space-between;
            }
            .restrictions-links1 {
              display: none;
            }
            .restrictions-burger-menu {
              display: flex;
            }
            .restrictions-heading {
              font-size: 36px;
              line-height: 46px;
            }
            .restrictions-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .restrictions-buttons {
              flex-direction: column;
            }
            .restrictions-button3 {
              display: none;
            }
            .restrictions-content-wrap {
              width: 768px;
            }
            .restrictions-text56 {
              text-align: center;
            }
            .restrictions-text57 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .restrictions-main {
              gap: var(--dl-space-space-threeunits);
              height: 800px;
              position: relative;
              padding-left: 0px;
              flex-direction: column;
            }
            .restrictions-content1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .restrictions-navbar-interactive {
              gap: 0;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .restrictions-desktop-menu {
              display: none;
            }
            .restrictions-burger-menu {
              display: flex;
            }
            .restrictions-link19 {
              text-decoration: none;
            }
            .restrictions-link21 {
              text-decoration: none;
            }
            .restrictions-link23 {
              text-decoration: none;
            }
            .restrictions-link25 {
              text-decoration: none;
            }
            .restrictions-link27 {
              text-decoration: none;
            }
            .restrictions-link29 {
              text-decoration: none;
            }
            .restrictions-button2 {
              display: none;
            }
            .restrictions-image1 {
              width: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              background-position: center;
            }
            .restrictions-content-wrap {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .restrictions-text56 {
              text-align: center;
            }
            .restrictions-text57 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .restrictions-content1 {
              gap: var(--dl-space-space-threeunits);
            }
            .restrictions-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .restrictions-mobile-menu {
              padding: 16px;
            }
            .restrictions-content-wrap {
              width: 100%;
            }
            .restrictions-text56 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .restrictions-text59 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
            .restrictions-text65 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
            .restrictions-text67 {
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
            .restrictions-text70 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
          }
        `}
      </style>
    </>
  )
}

export default Restrictions
