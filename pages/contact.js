import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container1">
        <Head>
          <title>Contact - All Star Air Duct Cleaning Florida</title>
          <meta
            name="description"
            content="Florida's All Star Air Duct Cleaning! Breathe Easy &amp; Save $$$. Pro cleaning improves air quality &amp; lowers energy bills. Call now!"
          />
          <meta
            property="og:title"
            content="Contact - All Star Air Duct Cleaning Florida"
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
        <div className="contact-container2">
          <div className="contact-container3">
            <div className="contact-container4">
              <Script
                html={`
    <iframe
      id="JotFormIFrame-242717064921456"
      title="All Star Contact"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/242717064921456"
      frameborder="0"
      style="min-width:100%;max-width:100%;height:539px;border:none;"
      scrolling="no"
      height="100vh"
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-242717064921456']", "https://form.jotform.com/")</script>
    `}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-container2 {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-container3 {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .contact-container4 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Contact
