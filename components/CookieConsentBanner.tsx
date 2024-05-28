"use client"

import React, { useEffect, useState } from "react"
import cookie from "js-cookie"

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent")

    if (!consentCookie) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    setShowBanner(false)
    cookie.set("cookieConsent", "accepted", { expires: 365 })
  }

  const handleReject = () => {
    setShowBanner(false)
    cookie.set("cookieConsent", "rejected", { expires: 365 })
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="mentions-wrapper fixed z-20 sm:bottom-5 sm:right-5 sm:left-auto xs:bottom-4 xs:right-4 xs:left-4 sm:max-w-[33.625rem] sm:w-full sm:p-8 xs:p-6 rounded-[2rem]">
      <button
        className="absolute sm:top-9 sm:right-9 xs:right-6 xs:top-6"
        onClick={handleReject}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 4L20 20M4 20L20 4"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <h3 className="text-headlines/h3 text-white-primary mr-6">
        We Value Your Privacy
      </h3>
      <p className="text-body/small text-white-secondary mt-4 mb-6">
        We use cookies to enhance your experience, personalize ads, and analyze
        our traffic. By clicking &quot;Accept All&quot;, you consent to all
        cookies. Use &quot;Reject All&quot; to decline non-essential cookies.
        For more details, please find our privacy policy here.
      </p>

      <div className="w-full flex gap-4 sm:flex-row xs:flex-col max-w-full">
        <button
          className="btn btn-quaternary is--white flex-1"
          onClick={handleReject}
        >
          Reject All
        </button>
        <button className="btn btn-tetriary flex-1" onClick={handleAccept}>
          Accept All
        </button>
      </div>
    </div>
  )
}

export default CookieConsentBanner
