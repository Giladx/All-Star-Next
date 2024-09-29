import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Banner from '../components/banner'
import Branding from '../components/branding'
import Hero7 from '../components/hero7'
import Features18 from '../components/features18'
import Testimonial2 from '../components/testimonial2'
import Contact11 from '../components/contact11'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container1">
        <Head>
          <title>About - All Star Air Duct Cleaning Florida</title>
          <meta
            name="description"
            content="Florida's All Star Air Duct Cleaning! Breathe Easy &amp; Save $$$. Pro cleaning improves air quality &amp; lowers energy bills. Call now!"
          />
          <meta
            property="og:title"
            content="About - All Star Air Duct Cleaning Florida"
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
        <Banner
          bold1="(754)-231-1631"
          redirect="7542311631"
          rootClassName="bannerroot-class-name"
        ></Banner>
        <section className="about-hero">
          <div className="about-main">
            <div className="about-content">
              <header
                data-thq="thq-navbar"
                className="about-navbar-interactive"
              >
                <Branding rootClassName="brandingroot-class-name11"></Branding>
                <div
                  data-thq="thq-navbar-nav"
                  data-role="Nav"
                  className="about-desktop-menu"
                >
                  <div className="about-links1">
                    <Link href="/monthly-specials">
                      <a className="about-link11 navLink">
                        OUR MONTHLY SPECIALS
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="about-link13 navLink">BLOG</a>
                    </Link>
                    <Link href="/about">
                      <a className="about-link15 navLink">ABOUT</a>
                    </Link>
                    <Link href="/contact">
                      <a className="about-link17 navLink">
                        <span>CONTACT</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div data-thq="thq-burger-menu" className="about-burger-menu">
                  <button className="button">
                    <svg viewBox="0 0 1024 1024" className="about-icon10">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </button>
                </div>
                <div data-thq="thq-mobile-menu" className="about-mobile-menu">
                  <div
                    data-thq="thq-mobile-menu-nav"
                    data-role="Nav"
                    className="about-nav"
                  >
                    <div className="about-container2">
                      <Branding rootClassName="brandingroot-class-name12"></Branding>
                      <div
                        data-thq="thq-close-menu"
                        className="about-menu-close"
                      >
                        <svg viewBox="0 0 1024 1024" className="about-icon12">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="about-links2">
                      <Link href="/">
                        <a className="about-link19 navLink">
                          <span>OUR MONTHLY SPECIALS</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="about-link21 navLink">SERVICES</a>
                      </Link>
                      <Link href="/">
                        <a className="about-link23 navLink">
                          <span>BLOG</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="about-link25 navLink">
                          <span>ABOUT</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="about-link27 navLink">
                          <span>CONTACT</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="about-link29 navLink">
                          <span>BUSINESS RELATIONS</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                    <div className="about-icon-group">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="about-icon14"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="about-icon16"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="about-icon18"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </header>
              <div className="about-hero-section">
                <div className="about-header">
                  <h1 className="about-heading Heading3">About</h1>
                  <p className="about-caption">
                    All Star Air Duct Cleaning is a premier service in Florida
                    dedicated to improving indoor air quality by removing dust,
                    debris, and allergens from air ducts. Their certified
                    technicians use top-tier equipment to ensure cleaner air for
                    a healthier living environment.
                  </p>
                </div>
                <div className="about-buttons">
                  <button className="about-button2 button">
                    <span>Call Now</span>
                  </button>
                  <button className="about-button3 button">
                    <span>Join our newsletter</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="about-image1">
              <button className="about-button4 button">Call Now</button>
              <img
                alt="image"
                src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHN0b3J5fGVufDB8fHx8MTcyNzYxODAyMHww&amp;ixlib=rb-4.0.3&amp;w=1400"
                className="about-image2"
              />
            </div>
          </div>
        </section>
        <Hero7
          action1={
            <Fragment>
              <span className="about-text24 thq-body-small">
                Schedule Your Cleaning Today
              </span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="about-text25 thq-body-small">Learn More</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-text26 thq-body-large">
                Welcome to Florida&apos;s premier air duct cleaning service. We
                specialize in improving indoor air quality to create healthier
                homes and reduce allergens. Our certified technicians use
                top-tier equipment to provide you with the cleanest air
                possible.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text27 thq-heading-1 Heading2">
                Breathe Clean, Live Healthy
              </span>
            </Fragment>
          }
          rootClassName="hero7root-class-name"
        ></Hero7>
        <Features18
          feature1Title={
            <Fragment>
              <span className="about-text28 Heading2">
                Professional Air Duct Cleaning
              </span>
            </Fragment>
          }
          rootClassName="features18root-class-name"
          feature1Slogan={
            <Fragment>
              <span className="about-text29 Content thq-body-small">
                Breathe Clean, Live Healthy
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="about-text30 thq-body-large Content">
                Our expert team provides thorough air duct cleaning services to
                remove dust, debris, and allergens, ensuring cleaner indoor air
                quality for a healthier living environment.
              </span>
            </Fragment>
          }
        ></Features18>
        <Testimonial2
          review1={
            <Fragment>
              <span className="about-text31 thq-body-large">
                I was amazed by the difference in air quality after All Star Air
                Duct Cleaning serviced my home. I highly recommend their
                professional team!
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="about-text32 thq-body-small">Sarah Johnson</span>
            </Fragment>
          }
          rootClassName="testimonial2root-class-name"
          author1Position={
            <Fragment>
              <span className="about-text33 thq-body-small">Homeowner</span>
            </Fragment>
          }
        ></Testimonial2>
        <Contact11
          email={
            <Fragment>
              <span className="about-text34 Content thq-body-small">
                info@floridaairductcleaning.com
              </span>
            </Fragment>
          }
          phone1={
            <Fragment>
              <span className="about-text35 thq-body-small Content">
                +1 (123) 456-7890
              </span>
            </Fragment>
          }
          address1={
            <Fragment>
              <span className="about-text36 thq-body-small Content">
                123 Main Street, Miami, FL 33101
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-text37 thq-body-large Content">
                Have questions or need a quote? Reach out to us!
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="about-text38 Content thq-body-large">
                Our team is ready to assist you with any inquiries.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="about-text39 thq-body-large Content">
                We are committed to providing top-notch customer service.
              </span>
            </Fragment>
          }
          content5={
            <Fragment>
              <span className="about-text40 thq-body-large Content">
                Let us help you breathe cleaner air in your home.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text41 thq-heading-2 Heading2">
                Contact Us
              </span>
            </Fragment>
          }
          rootClassName="contact11root-class-name"
        ></Contact11>
        <Footer
          text={
            <Fragment>
              <span className="about-text42">
                All rights reserved @ ALL STAR
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-text43">Developed by 011.ninja</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-text44">Bytii Cloud</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-text45">Info</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-text46">
                <span>ABOUT</span>
                <br></br>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="about-text49">RESTRICTIONS</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="about-text50">CONTACT</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="about-text51">Contact Us</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="about-text52">(754)-231-1631</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="about-text53">SERVICE@ALLSTARDUCT.COM</span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="about-text54">Subscribe</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="about-text55">Subscribe to our newsletter</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="about-text56">Product</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="about-text57">MONTHLY SPECIALS</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name"
        ></Footer>
      </div>
      <style jsx>
        {`
          .about-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-hero {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f6f5ed;
          }
          .about-main {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 646px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .about-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .about-navbar-interactive {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .about-desktop-menu {
            display: flex;
          }
          .about-links1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-link11 {
            text-decoration: none;
          }
          .about-link13 {
            text-decoration: none;
          }
          .about-link15 {
            text-decoration: none;
          }
          .about-link17 {
            text-decoration: none;
          }
          .about-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .about-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-mobile-menu {
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
          .about-nav {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .about-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-links2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .about-link19 {
            text-decoration: none;
          }
          .about-link21 {
            text-decoration: none;
          }
          .about-link23 {
            text-decoration: none;
          }
          .about-link25 {
            text-decoration: none;
          }
          .about-link27 {
            text-decoration: none;
          }
          .about-link29 {
            text-decoration: none;
          }
          .about-icon-group {
            display: flex;
          }
          .about-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .about-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .about-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-hero-section {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-heading {
            color: var(--dl-color-primary-darkblue);
            font-style: normal;
          }
          .about-caption {
            fill: var(--dl-color-primary-darkblue);
            color: var(--dl-color-primary-darkblue);
          }
          .about-buttons {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .about-button2 {
            background-color: var(--dl-color-primary-main);
          }
          .about-button3 {
            color: #f6f5ed;
            background-color: #000000;
          }
          .about-image1 {
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
            background-size: cover;
          }
          .about-button4 {
            z-index: 100;
            background-color: var(--dl-color-primary-main);
          }
          .about-image2 {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: grayscale();
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .about-text24 {
            display: inline-block;
            text-align: center;
            font-family: 'Lora';
          }
          .about-text25 {
            display: inline-block;
            text-align: center;
            font-family: 'Lora';
          }
          .about-text26 {
            display: inline-block;
            text-align: center;
            font-family: 'Lora';
          }
          .about-text27 {
            display: inline-block;
          }
          .about-text28 {
            display: inline-block;
            text-transform: none;
          }
          .about-text29 {
            display: inline-block;
          }
          .about-text30 {
            display: inline-block;
          }
          .about-text31 {
            display: inline-block;
            text-align: center;
          }
          .about-text32 {
            display: inline-block;
            text-align: left;
            font-weight: 600;
          }
          .about-text33 {
            display: inline-block;
            text-align: left;
          }
          .about-text34 {
            display: inline-block;
          }
          .about-text35 {
            display: inline-block;
          }
          .about-text36 {
            display: inline-block;
          }
          .about-text37 {
            display: inline-block;
          }
          .about-text38 {
            display: inline-block;
          }
          .about-text39 {
            display: inline-block;
          }
          .about-text40 {
            display: inline-block;
          }
          .about-text41 {
            display: inline-block;
          }
          .about-text42 {
            display: inline-block;
            font-style: normal;
            font-weight: 300;
            text-decoration: none;
          }
          .about-text43 {
            display: inline-block;
            font-style: normal;
            font-family: 'Rubik';
            font-weight: 300;
            text-decoration: none;
          }
          .about-text44 {
            color: rgb(201, 206, 218);
            display: inline-block;
            font-style: normal;
            font-weight: 300;
          }
          .about-text45 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text46 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-text49 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-text50 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .about-text51 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text52 {
            display: inline-block;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-text53 {
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
          .about-text54 {
            display: inline-block;
          }
          .about-text55 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text56 {
            display: inline-block;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text57 {
            color: var(--dl-color-scheme-darkblue);
            display: inline-block;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          @media (max-width: 1600px) {
            .about-text42 {
              width: auto;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .about-text42 {
              width: auto;
              text-align: center;
            }
            .about-text52 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-text53 {
              font-size: 16px;
              font-style: normal;
              font-weight: 900;
              line-height: 1.3;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: auto;
            }
          }
          @media (max-width: 991px) {
            .about-main {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-threeunits);
            }
            .about-navbar-interactive {
              gap: 0;
              justify-content: space-between;
            }
            .about-links1 {
              display: none;
            }
            .about-burger-menu {
              display: flex;
            }
            .about-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .about-buttons {
              flex-direction: column;
            }
            .about-button4 {
              display: none;
            }
            .about-text42 {
              text-align: center;
            }
            .about-text43 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .about-main {
              gap: var(--dl-space-space-threeunits);
              height: 800px;
              position: relative;
              padding-left: 0px;
              flex-direction: column;
            }
            .about-content {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-navbar-interactive {
              gap: 0;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .about-desktop-menu {
              display: none;
            }
            .about-burger-menu {
              display: flex;
            }
            .about-link19 {
              text-decoration: none;
            }
            .about-link21 {
              text-decoration: none;
            }
            .about-link23 {
              text-decoration: none;
            }
            .about-link25 {
              text-decoration: none;
            }
            .about-link27 {
              text-decoration: none;
            }
            .about-link29 {
              text-decoration: none;
            }
            .about-button3 {
              display: none;
            }
            .about-image1 {
              width: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              background-position: center;
            }
            .about-text42 {
              text-align: center;
            }
            .about-text43 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .about-content {
              gap: var(--dl-space-space-threeunits);
            }
            .about-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .about-mobile-menu {
              padding: 16px;
            }
            .about-text42 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-text45 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
            .about-text51 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
            .about-text53 {
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
            .about-text56 {
              fill: var(--dl-color-primary-main);
              color: var(--dl-color-primary-main);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
