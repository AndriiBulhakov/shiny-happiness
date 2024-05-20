import React, { useState } from "react"

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-2">
      <input
        type="email"
        className="w-[19.625rem] p-4 rounded-lg text-gray-primary placeholder:text-gray-primary placeholder:text-opacity-50"
        placeholder="Write your email*"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <button type="submit" className="btn btn-primary">
        Subscribe
      </button>
    </form>
  )
}

export default SubscriptionForm
