import NewsletterForm from "./ui/NewsletterForm"
// import SubscriptionForm from "./ui/SubscriptionForm"
import React from "react"

const Subscription = () => {
  return (
    <section className="pt-[15.06rem] pb-[13.81rem] flex justify-center">
      <div className="flex flex-col items-center gap-12 max-w-[40rem] text-center">
        <h2 className="text-headlines/h2">
          Oh, hey-let’s be inbox friends.
          <br />
          Get updates, offers and other news
        </h2>
        <NewsletterForm />
      </div>
    </section>
  )
}

export default Subscription
