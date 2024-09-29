import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Banner from '../components/banner'
import Branding from '../components/branding'
import Steps from '../components/steps'
import IconContainer from '../components/icon-container'
import Footer1 from '../components/footer1'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>All Star Air Duct Cleaning Florida</title>
          <meta
            name="description"
            content="Florida's All Star Air Duct Cleaning! Breathe Easy &amp; Save $$$. Pro cleaning improves air quality &amp; lowers energy bills. Call now!"
          />
          <meta
            property="og:title"
            content="All Star Air Duct Cleaning Florida"
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
        <section className="home-hero">
          <div className="home-main1">
            <div className="home-content10">
              <header data-thq="thq-navbar" className="home-navbar-interactive">
                <Branding rootClassName="brandingroot-class-name1"></Branding>
                <div
                  data-thq="thq-navbar-nav"
                  data-role="Nav"
                  className="home-desktop-menu"
                >
                  <div className="home-links1">
                    <Link href="/monthly-specials">
                      <a className="home-link11 navLink">
                        OUR MONTHLY SPECIALS
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="home-link13 navLink">BLOG</a>
                    </Link>
                    <Link href="/about">
                      <a className="home-link15 navLink">ABOUT</a>
                    </Link>
                    <Link href="/contact">
                      <a className="home-link17 navLink">
                        <span>CONTACT</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div data-thq="thq-burger-menu" className="home-burger-menu">
                  <button className="button">
                    <svg viewBox="0 0 1024 1024" className="home-icon10">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </button>
                </div>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                  <div
                    data-thq="thq-mobile-menu-nav"
                    data-role="Nav"
                    className="home-nav"
                  >
                    <div className="home-container11">
                      <Branding rootClassName="brandingroot-class-name"></Branding>
                      <div
                        data-thq="thq-close-menu"
                        className="home-menu-close"
                      >
                        <svg viewBox="0 0 1024 1024" className="home-icon12">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="home-links2">
                      <Link href="/monthly-specials">
                        <a className="home-link19 navLink">
                          <span>OUR MONTHLY SPECIALS</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="home-link21 navLink">SERVICES</a>
                      </Link>
                      <Link href="/">
                        <a className="home-link23 navLink">
                          <span>BLOG</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/about">
                        <a className="home-link25 navLink">
                          <span>ABOUT</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="home-link27 navLink">
                          <span>CONTACT</span>
                          <br></br>
                        </a>
                      </Link>
                      <Link href="/business-relations">
                        <a className="home-link29 navLink">
                          <span>BUSINESS RELATIONS</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                    <div className="home-icon-group">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="home-icon14"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-icon16"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="home-icon18"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </header>
              <div className="home-hero-section">
                <div className="home-header10">
                  <h1 className="Heading3">
                    All Star Duct Cleaning
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </h1>
                  <p className="home-caption10">
                    <span className="home-text112">All Star</span>
                    <span>
                      {' '}
                      Air Duct Cleaning is your one-stop shop for pristine air
                      quality in Florida. We&apos;re a team of experts dedicated
                      to cleaning and maintaining your air duct system, ensuring
                      your home breathes easy.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Breathe Easy, Live Healthy - All Star Air Duct Cleaning
                      delivers championship-level clean for your Florida home.
                    </span>
                    <br></br>
                  </p>
                </div>
                <div className="home-buttons1">
                  <a href="tel:754-231-1631" className="home-link30 button">
                    <span>Call Now</span>
                  </a>
                  <button className="home-button11 button">
                    <span>Join our newsletter</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="home-image10">
              <a href="tel:754-231-1631" className="home-link31 button">
                Call Now
              </a>
            </div>
          </div>
          <div className="home-details-container">
            <div className="home-details1">
              <div className="home-category1">
                <img
                  alt="image"
                  src="/details-1.svg"
                  className="home-image11"
                />
                <p className="home-text120">
                  All-Star Expertise: Certified technicians using top-tier
                  equipment for guaranteed results.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-category2">
                <img
                  alt="image"
                  src="/details-2.svg"
                  className="home-image12"
                />
                <p className="home-text121">
                  <span>
                    Healthy Homes, Happy Families: Breathe cleaner air, reduce
                    allergens, improve energy efficiency.
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
              <div className="home-category3">
                <img
                  alt="image"
                  src="/details-3.svg"
                  className="home-image13"
                />
                <p className="home-text125">
                  Florida&apos;s Choice: Trusted service, competitive rates,
                  keeping your home comfortable year-round.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-mission">
          <div className="home-content11">
            <div className="home-main2">
              <span className="home-title1">Our Mission</span>
              <div className="home-header11">
                <h2 className="home-heading2 Heading3">
                  <span>Clean Air, Healthy Homes, Florida.</span>
                  <br></br>
                </h2>
                <p className="home-caption11">
                  Breathe easier with our professional air duct cleaning
                  services in Florida. Our team is dedicated to providing
                  healthier homes for you and your family. Take action today and
                  schedule a cleaning to improve the air quality in your home.
                </p>
              </div>
            </div>
            <div className="home-highlights1">
              <div className="home-highlight1">
                <h3 className="home-title2 Heading2">
                  Champion Indoor Air Quality
                </h3>
                <p className="home-description1">
                  By providing meticulous cleaning and maintenance, we ensure
                  Florida families breathe healthy, fresh air. (or)
                </p>
              </div>
              <div className="home-highlight2">
                <h3 className="home-title3 Heading2">
                  Deliver Clean Air, Breathe Easy
                </h3>
                <p className="home-description2">
                  We&apos;re dedicated to improving Florida homes through expert
                  air duct cleaning for a healthier, more comfortable
                  environment.
                </p>
              </div>
            </div>
          </div>
          <div className="home-images1">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1569134026163-4de371889697?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhaXIlMjBkdWN0fGVufDB8fHx8MTcxNTA4MDYwOHww&amp;ixlib=rb-4.0.3&amp;w=400"
              className="home-image14"
            />
            <div className="home-row">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1637958596366-15de843a9683?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGFpciUyMGR1Y3R8ZW58MHx8fHwxNzE1MDgwNjA4fDA&amp;ixlib=rb-4.0.3&amp;w=400"
                className="home-image15"
              />
            </div>
          </div>
        </section>
        <section className="home-petitions">
          <div className="home-images2">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1591329207233-c3858778b45a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxhaXIlMjBkdWN0fGVufDB8fHx8MTcxNTA4MDYwOHww&amp;ixlib=rb-4.0.3&amp;w=1400"
              className="home-image16"
            />
          </div>
          <div className="home-content12">
            <div className="home-main3">
              <div className="home-header12">
                <h2 className="home-heading3 Heading2">
                  All Star: Florida&apos;s Trusted Air Duct Experts
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <p className="home-caption12">
                  {' '}
                  Florida&apos;s Breath of Fresh Air. We&apos;re your trusted
                  experts, dedicated to keeping your home&apos;s air clean and
                  healthy year-round.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="home-button12">
              <a href="tel:754-231-1631" className="home-link32 button">
                <span>Call us Now</span>
              </a>
            </div>
          </div>
        </section>
        <section className="home-steps">
          <div className="home-content13">
            <div className="home-information">
              <div className="home-main4">
                <div className="home-header13">
                  <h2 className="home-heading4 Heading2">
                    Making a Difference in Your Home&apos;s Air
                  </h2>
                  <p className="home-caption13">
                    Dirty air ducts can lead to a variety of problems, from
                    respiratory issues to allergies and even increased energy
                    bills. At [Your Company Name], we believe everyone deserves
                    to breathe clean air in their own home. That&apos;s why
                    we&apos;re dedicated to providing top-notch air duct
                    cleaning services, removing dust, allergens, and other
                    contaminants to improve your indoor air quality and create a
                    healthier living environment for you and your family.
                  </p>
                </div>
              </div>
              <div className="home-button13">
                <a href="tel:754-231-1631" className="home-link33 button">
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            <Steps></Steps>
          </div>
        </section>
        <section className="home-help">
          <div className="home-help-content">
            <div className="home-header14">
              <h2 className="Heading2 home-heading5">How can we help you?</h2>
              <p className="home-caption14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-switch1">
              <div id="individual" className="switch-active switch">
                <span>Individuals</span>
              </div>
              <div id="company" className="switch">
                <span>Commercial</span>
              </div>
            </div>
          </div>
          <div className="home-content14">
            <div id="individuals-content" className="home-save">
              <div className="home-content15">
                <div className="home-main5">
                  <div className="home-header15">
                    <h2 className="home-heading6 Heading2">
                      This is the Individuals Tab
                    </h2>
                    <p className="home-caption15">
                      <span>
                        At
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text133">All Star</span>
                      <span>
                        {' '}
                        Air Duct Cleaning, we&apos;re passionate about creating
                        healthy and comfortable homes for Florida families. If
                        you&apos;re experiencing:
                      </span>
                      <br></br>
                      <br></br>
                      <span>Allergy or asthma symptoms</span>
                      <br></br>
                      <span>Excessive dust buildup</span>
                      <br></br>
                      <span>Musty odors</span>
                      <br></br>
                      <span>Rising energy bills</span>
                      <br></br>
                      <span>
                        ...our expert air duct cleaning services can make a
                        difference. We&apos;ll remove dust, allergens, and other
                        contaminants to improve your indoor air quality and
                        create a healthier living environment.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Let All Star Help You Breathe Easy!
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="home-highlights2">
                    <div className="home-highlight3">
                      <h3 className="home-title4 Heading2">70%</h3>
                      <p className="home-description3">
                        Reduced Allergens
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-highlight4">
                      <h3 className="home-title5 Heading2">20%</h3>
                      <p className="home-description4">Improved Efficiency</p>
                    </div>
                    <div className="home-highlight5">
                      <h3 className="home-title6 Heading2">95%</h3>
                      <p className="home-description5">Cleaner Air</p>
                    </div>
                  </div>
                </div>
                <div className="home-button14">
                  <a href="tel:754-231-1631" className="home-link34 button">
                    <span>Take action</span>
                  </a>
                  <button className="button">
                    <span>Learn more</span>
                  </button>
                </div>
              </div>
              <div className="home-images3">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1568634697393-0165d25e7acb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhaXIlMjBkdWN0fGVufDB8fHx8MTcxNTA4MDYwOHww&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="home-image17"
                />
              </div>
            </div>
            <div id="companies-content" className="home-companies">
              <div className="home-content16">
                <div className="home-main6">
                  <div className="home-header16">
                    <h2 className="home-heading7 Heading2">
                      Commercial Services
                    </h2>
                    <p className="home-caption16">
                      Our commercial air duct cleaning services are tailored to
                      meet the specific needs of businesses in Florida. By
                      choosing our professional cleaning services, you can
                      ensure a healthier indoor environment for your employees
                      and customers. Our expert technicians are trained to
                      effectively remove allergens and contaminants from your
                      air ducts, improving air quality and overall efficiency.
                      Invest in clean air for your commercial property with our
                      specialized services.
                    </p>
                  </div>
                  <div className="home-highlights3">
                    <div className="home-highlight6">
                      <h3 className="home-title7 Heading2">55%</h3>
                      <p className="home-description6">
                        Improve your indoor air quality with our professional
                        air duct cleaning services in Florida. Our expert
                        technicians are dedicated to reducing allergens and
                        improving efficiency, creating healthier homes and
                        workspaces. Take advantage of our commercial service
                        discount and ensure clean air for your business today!
                      </p>
                    </div>
                    <div className="home-highlight7">
                      <h3 className="home-title8 Heading2">45%</h3>
                      <p className="home-description7">
                        Improve your indoor air quality and create a healthier
                        home with our professional air duct cleaning services in
                        Florida. Our expert technicians are dedicated to
                        reducing allergens and enhancing efficiency, ensuring
                        clean air for both residential and commercial
                        properties.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="home-button16">
                  <button className="button">
                    <span>Take action</span>
                  </button>
                  <button className="button">
                    <span>Learn more</span>
                  </button>
                </div>
              </div>
              <div className="home-images4">
                <img
                  alt="image"
                  src="/help-1400w.png"
                  className="home-image18"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="home-container13">
              <Script
                html={`<script>
document.getElementById("individual").addEventListener("click", function() {
  document.getElementById("individuals-content").style.display = "flex";
  document.getElementById("companies-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("company").classList.remove("switch-active");
});
document.getElementById("company").addEventListener("click", function() {
  document.getElementById("companies-content").style.display = "flex";
  document.getElementById("individuals-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("individual").classList.remove("switch-active");
});
</script>`}
              ></Script>
            </div>
          </div>
        </section>
        <section className="home-quote-one">
          <div className="home-quote-content">
            <h2 className="home-quote">
              “Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.”
            </h2>
            <div className="home-quoted">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxwb3RyYWl0fGVufDB8fHx8MTY3MDkyNjgxNQ&amp;ixlib=rb-4.0.3&amp;w=200"
                className="home-image19"
              />
              <p className="home-caption17">Michael Belfort, @helpa</p>
            </div>
          </div>
        </section>
        <div className="home-donate"></div>
        <section className="home-donation-use">
          <div className="home-header17">
            <h2 className="home-heading8 Heading2">
              Frequently Asked Questions
            </h2>
            <p className="home-caption18">
              Here are some of the most common questions we receive at All Star
              Air Duct Cleaning. If you don&apos;t see your question answered
              here, feel free to contact us!
            </p>
          </div>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="accordion-element home-element1"
            >
              <div className="home-header18">
                <h3 className="home-text153">
                  Do I Need My Air Ducts Cleaned?
                </h3>
                <IconContainer rootClassName="icon-containerroot-class-name4"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text154">
                  <span>
                    You may need your air ducts cleaned if you experience:
                  </span>
                  <br></br>
                  <br></br>
                  <span>Allergies or asthma symptoms worsening indoors</span>
                  <br></br>
                  <span>Excessive dust buildup in your home</span>
                  <br></br>
                  <span>Musty odors coming from vents</span>
                  <br></br>
                  <span>
                    Rising energy bills (could indicate inefficient HVAC system)
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element2"
            >
              <div className="home-header19">
                <h3 className="home-text166">
                  How Often Should I Have My Air Ducts Cleaned?
                </h3>
                <IconContainer rootClassName="icon-containerroot-class-name5"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text167">
                  The National Air Duct Cleaners Association (NADCA) recommends
                  cleaning your air ducts every 3-5 years. However, this can
                  vary depending on factors like pets, renovations, and air
                  quality in your area.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element3"
            >
              <div className="home-header20">
                <h3 className="home-text168">
                  <span>What Does Air Duct Cleaning Involve?</span>
                  <br></br>
                </h3>
                <IconContainer rootClassName="icon-containerroot-class-name6"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text171">
                  Our professional technicians use specialized equipment to
                  access and clean your air ducts. This typically involves
                  brushing, vacuuming, and agitation to remove dust, allergens,
                  and other contaminants.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element4"
            >
              <div className="home-header21">
                <h3 className="home-text172">
                  <span>
                    Will Air Duct Cleaning Improve My Indoor Air Quality?
                  </span>
                  <br></br>
                </h3>
                <IconContainer rootClassName="icon-containerroot-class-name7"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text175">
                  <span>
                    Yes! Removing dust, allergens, and other contaminants from
                    your air ducts can significantly improve the air quality in
                    your home, leading to a healthier living environment.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element5"
            >
              <div className="home-header22">
                <h3 className="home-text178">
                  <span>Is Air Duct Cleaning Safe?</span>
                  <br></br>
                </h3>
                <IconContainer rootClassName="icon-containerroot-class-name8"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text181">
                  Professional air duct cleaning is a safe and effective way to
                  improve your indoor air quality. We use safe cleaning methods
                  and HEPA filters to ensure no dust or debris escapes back into
                  your home.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element6"
            >
              <div className="home-header23">
                <h3 className="home-text182">
                  <span>How Much Does Air Duct Cleaning Cost?</span>
                  <br></br>
                </h3>
                <IconContainer rootClassName="icon-containerroot-class-name9"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text185">
                  <span>
                    The cost of air duct cleaning can vary depending on the size
                    of your home, the complexity of your duct system, and the
                    accessibility of your vents. Contact All Star for a free
                    quote!
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
            <div>
              <div className="home-container15">
                <Script
                  html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
                ></Script>
              </div>
            </div>
          </div>
        </section>
        <section className="home-updates">
          <div className="home-content23">
            <div className="home-details2">
              <div className="home-header24">
                <h2 className="home-heading9 Heading2">
                  Get updates, Discounts, Special Offer
                </h2>
              </div>
              <div className="home-action">
                <div className="home-input">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="home-textinput input"
                  />
                  <button className="home-button19 button">Subscribe</button>
                </div>
                <div className="home-agreement">
                  <div className="home-states">
                    <div id="tos" className="home-checkbox1"></div>
                    <div id="tos-active" className="home-checkbox2">
                      <svg viewBox="0 0 1024 1024" className="home-icon20">
                        <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="home-caption19">
                    <label htmlFor="tos" className="home-normal">
                      I agree to the
                    </label>
                    <label htmlFor="tos" className="home-bold">
                      Terms and Conditions
                    </label>
                  </div>
                  <div>
                    <div className="home-container17">
                      <Script
                        html={`<script>
// Create a boolean to represent the state of the toggle
let tosToggle = false;

// Add event listeners to the divs and labels
document.getElementById("tos").addEventListener("click", toggleTos);
document.getElementById("tos-active").addEventListener("click", toggleTos);
document.querySelectorAll("label[for=tos]").forEach(label => label.addEventListener("click", toggleTos));

// Define the toggleTos function to hide/show the elements based on the state of the toggle
function toggleTos() {
  if (tosToggle) {
    document.getElementById("tos").style.display = "flex";
    document.getElementById("tos-active").style.display = "none";
  } else {
    document.getElementById("tos").style.display = "none";
    document.getElementById("tos-active").style.display = "flex";
  }
  tosToggle = !tosToggle;
}
</script>`}
                      ></Script>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-slider1">
              <div className="home-slides">
                <div className="slide-active slide">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1635604866833-70844856de75?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFpciUyMGR1Y3R8ZW58MHx8fHwxNzE1MDgwNjA4fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
                    className="home-image20"
                  />
                  <span className="home-text188">
                    Here’s what we’ve learned.
                  </span>
                </div>
                <div className="slide">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1670991761566-534b07539db5?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                    className="home-image21"
                  />
                  <span className="home-text189">
                    <span>This is a test slide</span>
                    <br></br>
                  </span>
                </div>
                <div className="slide">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1670087670280-7a3e71a7efa6?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                    className="home-image22"
                  />
                  <span className="home-text192">
                    <span>This one also!</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-buttons-container">
                <div className="home-buttons2">
                  <button id="previous-slide" className="home-previous button">
                    <svg viewBox="0 0 1024 1024" className="home-icon22">
                      <path d="M32 512l480 480v-288h512v-384h-512v-288z"></path>
                    </svg>
                  </button>
                  <button id="next-slide" className="home-next button">
                    <svg viewBox="0 0 1024 1024" className="home-icon24">
                      <path d="M992 512l-480-480v288h-512v384h512v288z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer1
          link={
            <Fragment>
              <span className="home-text195 navLink">OUR MONTHLY SPECIALS</span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="home-text196">
                754-231-1631 office@allstar.com
              </span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text197 navLink">SERVICES</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text198 navLink">BLOG</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <Link href="/">
                <a className="home-link36 navLink">
                  <span>ABOUT</span>
                  <br></br>
                </a>
              </Link>
            </Fragment>
          }
          link4={
            <Fragment>
              <Link href="/">
                <a className="home-link38 navLink">
                  <span>CONTACT</span>
                  <br></br>
                </a>
              </Link>
            </Fragment>
          }
          link5={
            <Fragment>
              <Link href="/">
                <a className="home-link40 navLink">
                  <span>BUSINESS RELATIONS</span>
                  <br></br>
                </a>
              </Link>
            </Fragment>
          }
          copyright={
            <Fragment>
              <span className="home-text205">© Copyright Company – 2022</span>
            </Fragment>
          }
        ></Footer1>
        <div>
          <div className="home-container19">
            <Script
              html={`<script>
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('slide-active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('slide-active');
}

const previousSlideButton = document.querySelector('#previous-slide');
previousSlideButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

const nextSlideButton = document.querySelector('#next-slide');
nextSlideButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});
</script>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container21">
            <Script
              html={`<script>
function setCookie(name, value, days) {
  // Set the cookie with the given name, value, and expiration time (in days)
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  // Get the value of the cookie with the given name
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function removeCookie(name) {
  // Remove the cookie with the given name
  setCookie(name, "", -1); // Set the cookie with an expiration time of -1 days
}

document.getElementById("close").addEventListener("click", function(){
  // Get the persistence value
  let persistence = document.getElementById("banner").getAttribute("data-persistence");
  if (persistence === "true") {
    // If persistence is enabled, set a cookie to remember that the banner is closed
    setCookie("bannerClosed", "true", 1); // Set the cookie with an expiration time of 1 day
  } else {
    removeCookie("bannerClosed")
  }
  document.getElementById("banner").style.display = "none"; // Hide the banner
});

window.addEventListener("load", function() {
  // Check if the banner should be displayed or not
  let bannerClosed = getCookie("bannerClosed");
  if (bannerClosed === "true") {
    // If the bannerClosed cookie is set, hide the banner
    document.getElementById("banner").style.display = "none";
  }
});
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f6f5ed;
          }
          .home-main1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 646px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-content10 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-navbar-interactive {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-links1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link11 {
            text-decoration: none;
          }
          .home-link13 {
            text-decoration: none;
          }
          .home-link15 {
            text-decoration: none;
          }
          .home-link17 {
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
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
          .home-nav {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .home-link19 {
            text-decoration: none;
          }
          .home-link21 {
            text-decoration: none;
          }
          .home-link23 {
            text-decoration: none;
          }
          .home-link25 {
            text-decoration: none;
          }
          .home-link27 {
            text-decoration: none;
          }
          .home-link29 {
            text-decoration: none;
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero-section {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption10 {
            fill: var(--dl-color-primary-darkblue);
            color: var(--dl-color-primary-darkblue);
          }
          .home-text112 {
            font-weight: 700;
          }
          .home-buttons1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link30 {
            text-decoration: none;
            background-color: var(--dl-color-primary-main);
          }
          .home-button11 {
            color: #f6f5ed;
            background-color: #000000;
          }
          .home-image10 {
            flex: 1;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1634114582073-c34f96202b65?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGFpciUyMGR1Y3R8ZW58MHx8fHwxNzE1MDgwNjA4fDA&ixlib=rb-4.0.3&w=1400');
          }
          .home-link31 {
            text-decoration: none;
            background-color: var(--dl-color-primary-main);
          }
          .home-details-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-primary-main);
          }
          .home-details1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-category1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image11 {
            width: 32px;
            object-fit: cover;
          }
          .home-text120 {
            fill: var(--dl-color-primary-darkblue);
            color: var(--dl-color-primary-darkblue);
            max-width: 282px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-category2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image12 {
            width: 32px;
            object-fit: cover;
          }
          .home-text121 {
            fill: var(--dl-color-primary-darkblue);
            color: var(--dl-color-primary-darkblue);
            max-width: 282px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-category3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image13 {
            width: 32px;
            object-fit: cover;
          }
          .home-text125 {
            fill: var(--dl-color-primary-darkblue);
            color: var(--dl-color-primary-darkblue);
            max-width: 282px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-mission {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 200px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-content11 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title1 {
            color: #222223;
            font-style: normal;
            font-weight: 500;
          }
          .home-header11 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading2 {
            color: rgb(34, 34, 35);
            font-style: normal;
          }
          .home-caption11 {
            color: rgb(34, 34, 35);
            line-height: 1.5;
          }
          .home-highlights1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-highlight1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 248px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title2 {
            color: rgb(34, 34, 35);
            font-style: normal;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description1 {
            color: rgb(34, 34, 35);
            line-height: 1.5;
          }
          .home-highlight2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 248px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title3 {
            color: rgb(34, 34, 35);
            font-style: normal;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description2 {
            color: rgb(34, 34, 35);
            line-height: 1.5;
          }
          .home-images1 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image14 {
            width: 367px;
            object-fit: cover;
          }
          .home-row {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image15 {
            right: 0px;
            width: 333px;
            bottom: 0px;
            z-index: 100;
            position: absolute;
            object-fit: cover;
          }
          .home-petitions {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-images2 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image16 {
            width: 641px;
            object-fit: cover;
          }
          .home-content12 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading3 {
            color: rgb(34, 34, 35);
            font-style: normal;
          }
          .home-caption12 {
            color: rgb(34, 34, 35);
            line-height: 1.5;
          }
          .home-button12 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link32 {
            text-decoration: none;
            background-color: var(--dl-color-primary-main);
          }
          .home-steps {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f6f5ed;
          }
          .home-content13 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: 120px;
            justify-content: space-between;
          }
          .home-information {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading4 {
            color: rgb(34, 34, 35);
            font-style: normal;
          }
          .home-caption13 {
            color: rgb(34, 34, 35);
            line-height: 1.5;
          }
          .home-button13 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link33 {
            text-decoration: none;
            background-color: var(--dl-color-primary-main);
          }
          .home-help {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 140px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-help-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header14 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption14 {
            font-size: 18px;
            text-align: center;
            line-height: 27px;
          }
          .home-switch1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content14 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-save {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content15 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading6 {
            color: rgb(34, 34, 35);
            font-style: normal;
          }
          .home-caption15 {
            color: rgb(34, 34, 35);
          }
          .home-text133 {
            font-weight: 700;
          }
          .home-highlights2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-highlight3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-title4 {
            color: rgb(34, 34, 35);
            font-style: normal;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description3 {
            color: rgb(34, 34, 35);
            font-size: 24px;
          }
          .home-highlight4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-title5 {
            color: rgb(34, 34, 35);
            font-style: normal;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description4 {
            color: rgb(34, 34, 35);
            font-size: 24px;
          }
          .home-highlight5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-title6 {
            color: rgb(34, 34, 35);
            font-style: normal;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description5 {
            color: rgb(34, 34, 35);
            font-size: 24px;
          }
          .home-button14 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link34 {
            text-decoration: none;
          }
          .home-images3 {
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image17 {
            width: 640px;
            filter: grayscale();
            object-fit: cover;
          }
          .home-companies {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content16 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main6 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading7 {
            color: rgb(34, 34, 35);
            font-style: normal;
          }
          .home-caption16 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-highlights3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-highlight6 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-title7 {
            color: rgb(34, 34, 35);
            font-style: normal;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description6 {
            color: rgb(34, 34, 35);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-highlight7 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-title8 {
            color: rgb(34, 34, 35);
            font-style: normal;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description7 {
            color: rgb(34, 34, 35);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-button16 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-images4 {
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image18 {
            width: 640px;
            object-fit: cover;
          }
          .home-container13 {
            display: contents;
          }
          .home-quote-one {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #f6f5ed;
          }
          .home-quote-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-quote {
            color: rgb(34, 34, 35);
            width: 100%;
            font-size: 32px;
            max-width: 900px;
            font-style: italic;
            font-family: Lora;
            font-weight: 500;
            line-height: 48px;
          }
          .home-quoted {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: row;
          }
          .home-image19 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-color: #222223;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-caption17 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            font-style: italic;
            font-family: Lora;
            font-weight: 500;
          }
          .home-donate {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-primary-main);
          }
          .home-donation-use {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .home-header17 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading8 {
            color: rgb(34, 34, 35);
            font-style: normal;
          }
          .home-caption18 {
            color: rgb(34, 34, 35);
          }
          .home-accordion {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header18 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text153 {
            color: rgb(34, 34, 35);
            font-size: 24px;
            font-style: normal;
            font-family: 'Lora';
            font-weight: 500;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text154 {
            color: rgb(34, 34, 35);
            line-height: 1.5;
          }
          .home-header19 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text166 {
            color: rgb(34, 34, 35);
            font-size: 24px;
            font-style: normal;
            font-family: 'Lora';
            font-weight: 500;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text167 {
            color: rgb(34, 34, 35);
            line-height: 1.5;
          }
          .home-header20 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text168 {
            color: rgb(34, 34, 35);
            font-size: 24px;
            font-style: normal;
            font-family: 'Lora';
            font-weight: 500;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text171 {
            color: rgb(34, 34, 35);
            line-height: 1.5;
          }
          .home-header21 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text172 {
            color: rgb(34, 34, 35);
            font-size: 24px;
            font-style: normal;
            font-family: 'Lora';
            font-weight: 500;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text175 {
            color: rgb(34, 34, 35);
            line-height: 1.5;
          }
          .home-header22 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text178 {
            color: rgb(34, 34, 35);
            font-size: 24px;
            font-style: normal;
            font-family: 'Lora';
            font-weight: 500;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text181 {
            color: rgb(34, 34, 35);
            line-height: 1.5;
          }
          .home-header23 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text182 {
            color: rgb(34, 34, 35);
            font-size: 24px;
            font-style: normal;
            font-family: 'Lora';
            font-weight: 500;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text185 {
            color: rgb(34, 34, 35);
            line-height: 1.5;
          }
          .home-container15 {
            display: contents;
          }
          .home-updates {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #e8e6da;
          }
          .home-content23 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 100px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: 100px;
            justify-content: center;
          }
          .home-details2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header24 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading9 {
            color: rgb(34, 34, 35);
            width: 100%;
            font-style: normal;
          }
          .home-action {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-input {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-textinput {
            color: #222223;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 0px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-button19 {
            background-color: var(--dl-color-primary-main);
          }
          .home-agreement {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-states {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-checkbox1 {
            width: 24px;
            cursor: pointer;
            height: 24px;
            display: flex;
            align-items: flex-start;
            border-color: #222223;
            border-style: solid;
            border-width: 1px;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-checkbox2 {
            width: 24px;
            cursor: pointer;
            height: 24px;
            display: none;
            align-items: center;
            border-color: #222223;
            border-style: solid;
            border-width: 1px;
            flex-direction: row;
            justify-content: center;
            background-color: rgb(121, 212, 144);
          }
          .home-icon20 {
            width: 10px;
            height: 10x;
          }
          .home-caption19 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-normal {
            color: rgb(34, 34, 35);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-bold {
            color: rgb(34, 34, 35);
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .home-container17 {
            display: contents;
          }
          .home-slider1 {
            gap: 115px;
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-slides {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .home-image20 {
            width: 100%;
            filter: grayscale();
            object-fit: cover;
            align-content: 350px;
          }
          .home-text188 {
            line-height: 31px;
          }
          .home-image21 {
            width: 100%;
            height: 350px;
            object-fit: cover;
          }
          .home-text189 {
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 31px;
          }
          .home-image22 {
            width: 100%;
            height: 350px;
            object-fit: cover;
          }
          .home-text192 {
            font-size: 24px;
            font-style: normal;
            font-family: Lora;
            font-weight: 500;
            line-height: 31px;
          }
          .home-buttons-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-buttons2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-previous {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            background-color: transparent;
          }
          .home-icon22 {
            width: 18px;
            height: 18px;
          }
          .home-next {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            background-color: transparent;
          }
          .home-icon24 {
            width: 18px;
            height: 18px;
          }
          .home-text195 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text196 {
            display: inline-block;
            font-size: 24px;
            font-style: normal;
            font-family: 'Lora';
            font-weight: 500;
            line-height: 36px;
          }
          .home-text197 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text198 {
            display: inline-block;
            text-decoration: none;
          }
          .home-link36 {
            display: inline-block;
            text-decoration: none;
          }
          .home-link38 {
            display: inline-block;
            text-decoration: none;
          }
          .home-link40 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text205 {
            color: rgba(0, 0, 0, 0.3);
            width: 100%;
            display: inline-block;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 18px;
          }
          .home-container19 {
            display: contents;
          }
          .home-container21 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-main1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-threeunits);
            }
            .home-navbar-interactive {
              gap: 0;
              justify-content: space-between;
            }
            .home-links1 {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-caption10 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-buttons1 {
              flex-direction: column;
            }
            .home-link31 {
              display: none;
            }
            .home-details1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-category1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-category2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-category3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-mission {
              gap: var(--dl-space-space-twounits);
            }
            .home-petitions {
              padding-top: 0px;
              flex-direction: column-reverse;
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-images2 {
              width: 100%;
            }
            .home-image16 {
              flex: 1;
              width: 100%;
            }
            .home-content12 {
              max-width: 100%;
            }
            .home-button12 {
              width: 100%;
            }
            .home-content13 {
              gap: var(--dl-space-space-fourunits);
              align-items: flex-start;
              padding-top: var(--dl-space-space-sixunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-sixunits);
              justify-content: flex-start;
            }
            .home-button13 {
              width: 100%;
            }
            .home-help {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-save {
              flex-direction: column;
            }
            .home-content15 {
              max-width: 100%;
            }
            .home-button14 {
              width: 100%;
            }
            .home-images3 {
              width: 100%;
            }
            .home-image17 {
              width: 100%;
            }
            .home-companies {
              flex-direction: column;
            }
            .home-content16 {
              max-width: 100%;
            }
            .home-button16 {
              width: 100%;
            }
            .home-images4 {
              width: 100%;
            }
            .home-image18 {
              width: 100%;
            }
            .home-quote-one {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-donation-use {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-content23 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-sixunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-details2 {
              width: 100%;
            }
            .home-input {
              width: 100%;
            }
            .home-textinput {
              flex: 1;
            }
            .home-button19 {
              width: 30%;
            }
            .home-slider1 {
              gap: var(--dl-space-space-fourunits);
              width: 100%;
              flex-direction: column;
            }
            .home-buttons2 {
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .home-main1 {
              gap: var(--dl-space-space-threeunits);
              height: 800px;
              position: relative;
              padding-left: 0px;
              flex-direction: column;
            }
            .home-content10 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-navbar-interactive {
              gap: 0;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-link19 {
              text-decoration: none;
            }
            .home-link21 {
              text-decoration: none;
            }
            .home-link23 {
              text-decoration: none;
            }
            .home-link25 {
              text-decoration: none;
            }
            .home-link27 {
              text-decoration: none;
            }
            .home-link29 {
              text-decoration: none;
            }
            .home-button11 {
              display: none;
            }
            .home-image10 {
              width: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              background-position: center;
            }
            .home-details1 {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-category1 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text120 {
              max-width: 100%;
            }
            .home-category2 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text121 {
              max-width: 100%;
            }
            .home-category3 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text125 {
              max-width: 100%;
            }
            .home-mission {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-content11 {
              max-width: 100%;
            }
            .home-images1 {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-row {
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-end;
            }
            .home-image15 {
              bottom: var(--dl-space-space-halfunit);
              position: static;
            }
            .home-petitions {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content13 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-help {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-help-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading6 {
              text-align: center;
            }
            .home-caption15 {
              text-align: center;
            }
            .home-heading7 {
              text-align: center;
            }
            .home-caption16 {
              text-align: center;
            }
            .home-quote-content {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-donation-use {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-header17 {
              max-width: 100%;
            }
            .home-accordion {
              width: 100%;
            }
            .home-content23 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-slider1 {
              gap: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .home-content10 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-mission {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-title1 {
              font-size: 12px;
            }
            .home-header11 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading2 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption11 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-highlights1 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-highlight1 {
              gap: var(--dl-space-space-unit);
            }
            .home-title2 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-highlight2 {
              gap: var(--dl-space-space-unit);
            }
            .home-title3 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-image14 {
              width: 200px;
            }
            .home-image15 {
              width: 200px;
            }
            .home-petitions {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-caption12 {
              color: rgb(34, 34, 35);
              line-height: 24px;
            }
            .home-content13 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading4 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption13 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-help {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading5 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption14 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-heading6 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption15 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-highlights2 {
              width: 100%;
            }
            .home-highlight3 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .home-title4 {
              width: 100%;
              text-align: center;
              padding-left: 0px;
              border-left-width: 0px;
            }
            .home-description3 {
              width: 100%;
              text-align: center;
            }
            .home-highlight4 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .home-title5 {
              width: 100%;
              text-align: center;
              padding-left: 0px;
              border-left-width: 0px;
            }
            .home-description4 {
              width: 100%;
              text-align: center;
            }
            .home-highlight5 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .home-title6 {
              width: 100%;
              text-align: center;
              padding-left: 0px;
              border-left-width: 0px;
            }
            .home-description5 {
              width: 100%;
              text-align: center;
            }
            .home-button14 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-heading7 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption16 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-highlight6 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .home-title7 {
              padding-left: 0px;
              border-left-width: 0px;
            }
            .home-description6 {
              text-align: center;
            }
            .home-highlight7 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .home-title8 {
              padding-left: 0px;
              border-left-width: 0px;
            }
            .home-description7 {
              text-align: center;
            }
            .home-button16 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-quote-one {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-quote-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-quote {
              font-size: 18px;
              text-align: center;
              line-height: 27px;
            }
            .home-quoted {
              flex-direction: column;
              justify-content: center;
            }
            .home-image19 {
              width: 40px;
              height: 40px;
            }
            .home-caption17 {
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
            }
            .home-donation-use {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading8 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption18 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-element1 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text153 {
              font-size: 16px;
            }
            .home-text154 {
              line-height: 24px;
            }
            .home-element2 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text166 {
              font-size: 16px;
            }
            .home-text167 {
              line-height: 24px;
            }
            .home-element3 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text168 {
              font-size: 16px;
            }
            .home-text171 {
              line-height: 24px;
            }
            .home-element4 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text172 {
              font-size: 16px;
            }
            .home-text175 {
              line-height: 24px;
            }
            .home-element5 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text178 {
              font-size: 16px;
            }
            .home-text181 {
              line-height: 24px;
            }
            .home-element6 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text182 {
              font-size: 16px;
            }
            .home-text185 {
              line-height: 24px;
            }
            .home-content23 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading9 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-action {
              gap: var(--dl-space-space-threeunits);
            }
            .home-input {
              flex-direction: column;
            }
            .home-textinput {
              width: 100%;
              text-align: center;
            }
            .home-button19 {
              width: 100%;
            }
            .home-text196 {
              font-size: 18px;
              line-height: 40px;
            }
            .home-text205 {
              font-size: 10px;
              line-height: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
