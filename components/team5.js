import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Team5 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="team5-max-width thq-section-max-width">
          <div className="team5-section-title">
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="team5-text34 thq-body-small">
                    Join Our Team Today!
                  </span>
                </Fragment>
              )}
            </span>
            <button className="team5-button thq-button-filled">
              <span>
                {props.actionContent ?? (
                  <Fragment>
                    <span className="team5-text38 thq-body-small">
                      Open positions
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="team5-content1">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="team5-text32 thq-heading-2">
                      Meet our team
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content2 ?? (
                  <Fragment>
                    <p className="team5-text41 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="team5-content2">
            <div className="team5-row1">
              <div className="team5-container1">
                <div className="team5-card1">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="team5-placeholder-image1 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team5-content3">
                    <div className="team5-title1">
                      <span>
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team5-text37 thq-body-small">
                              John Smith
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team5-text29 thq-body-small">
                              Lead Air Duct Technician
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team5-text36 thq-body-small">
                            John has over 10 years of experience in air duct
                            cleaning and is dedicated to providing top-quality
                            service to our customers.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team5-social-icons1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team5-card2">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="team5-placeholder-image2 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team5-content4">
                    <div className="team5-title2">
                      <span>
                        {props.member2 ?? (
                          <Fragment>
                            <span className="team5-text40 thq-body-small">
                              Emily Johnson
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team5-text31 thq-body-small">
                              Customer Service Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team5-text30 thq-body-small">
                            Emily ensures that our customers receive the best
                            care and assistance throughout their air duct
                            cleaning experience.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team5-social-icons2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="team5-row2">
              <div className="team5-container2">
                <div className="team5-card3">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="team5-placeholder-image3 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team5-content5">
                    <div className="team5-title3">
                      <span>
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team5-text35 thq-body-small">
                              Michael Davis
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team5-text39 thq-body-small">
                              Equipment Maintenance Technician
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team5-text26 thq-body-small">
                            Michael is responsible for maintaining and ensuring
                            the proper functioning of our top-tier air duct
                            cleaning equipment.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team5-social-icons3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team5-card4">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="team5-placeholder-image4 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team5-content6">
                    <div className="team5-title4">
                      <span>
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team5-text28 thq-body-small">
                              Sarah Lee
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span>
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team5-text27 thq-body-small">
                              Marketing Coordinator
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span>
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team5-text33 thq-body-small">
                            Sarah handles our marketing efforts to reach more
                            families in Florida and educate them about the
                            benefits of clean air ducts.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team5-social-icons4">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team5-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .team5-section-title {
            gap: var(--dl-space-space-unit);
            width: 30%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team5-button {
            width: 100%;
            max-width: 300px;
          }
          .team5-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team5-content2 {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .team5-row1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team5-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team5-card1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team5-placeholder-image1 {
            width: 80px;
            height: 80px;
          }
          .team5-content3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team5-title1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team5-social-icons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team5-card2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team5-placeholder-image2 {
            width: 80px;
            height: 80px;
          }
          .team5-content4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team5-title2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team5-social-icons2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team5-row2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .team5-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .team5-card3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team5-placeholder-image3 {
            width: 80px;
            height: 80px;
          }
          .team5-content5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team5-title3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team5-social-icons3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team5-card4 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team5-placeholder-image4 {
            width: 80px;
            height: 80px;
          }
          .team5-content6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team5-title4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .team5-social-icons4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team5-text26 {
            display: inline-block;
            text-align: center;
          }
          .team5-text27 {
            display: inline-block;
            text-align: center;
          }
          .team5-text28 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .team5-text29 {
            display: inline-block;
            text-align: center;
          }
          .team5-text30 {
            display: inline-block;
            text-align: center;
          }
          .team5-text31 {
            display: inline-block;
            text-align: center;
          }
          .team5-text32 {
            display: inline-block;
          }
          .team5-text33 {
            display: inline-block;
            text-align: center;
          }
          .team5-text34 {
            display: inline-block;
          }
          .team5-text35 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .team5-text36 {
            display: inline-block;
            text-align: center;
          }
          .team5-text37 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .team5-text38 {
            display: inline-block;
          }
          .team5-text39 {
            display: inline-block;
            text-align: center;
          }
          .team5-text40 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .team5-text41 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 991px) {
            .team5-section-title {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .team5-max-width {
              align-items: center;
              flex-direction: column;
            }
            .team5-section-title {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .team5-button {
              width: 100%;
            }
            .team5-row1 {
              align-items: center;
              flex-direction: column;
            }
            .team5-container1 {
              flex-direction: column;
            }
            .team5-row2 {
              align-items: center;
              flex-direction: column;
            }
            .team5-container2 {
              flex-direction: column;
            }
            .team5-text32 {
              text-align: center;
            }
            .team5-text34 {
              text-align: center;
            }
            .team5-text41 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Team5.defaultProps = {
  member1Src:
    'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU2NjgzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  member3Content: undefined,
  member2Alt: 'Image of Emily Johnson',
  member4Job: undefined,
  member4: undefined,
  member1Job: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU2NjgzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  member2Content: undefined,
  member2Job: undefined,
  heading1: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1706530227240-b1fda861dbf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU2NjgzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  member3Alt: 'Image of Michael Davis',
  member4Src:
    'https://images.unsplash.com/photo-1636041282694-aa4e52370419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzU2NjgzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Content: undefined,
  content1: undefined,
  member3: undefined,
  member1Content: undefined,
  member1: undefined,
  actionContent: undefined,
  member4Alt: 'Image of Sarah Lee',
  member3Job: undefined,
  member2: undefined,
  content2: undefined,
  member1Alt: 'Image of John Smith',
}

Team5.propTypes = {
  member1Src: PropTypes.string,
  member3Content: PropTypes.element,
  member2Alt: PropTypes.string,
  member4Job: PropTypes.element,
  member4: PropTypes.element,
  member1Job: PropTypes.element,
  member3Src: PropTypes.string,
  member2Content: PropTypes.element,
  member2Job: PropTypes.element,
  heading1: PropTypes.element,
  member2Src: PropTypes.string,
  member3Alt: PropTypes.string,
  member4Src: PropTypes.string,
  member4Content: PropTypes.element,
  content1: PropTypes.element,
  member3: PropTypes.element,
  member1Content: PropTypes.element,
  member1: PropTypes.element,
  actionContent: PropTypes.element,
  member4Alt: PropTypes.string,
  member3Job: PropTypes.element,
  member2: PropTypes.element,
  content2: PropTypes.element,
  member1Alt: PropTypes.string,
}

export default Team5
