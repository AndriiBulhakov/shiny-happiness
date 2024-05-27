"use client"

import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
  email: string
}

const NewsletterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsSubmitting(true)
    setErrorMessage(null)

    const formData = {
      ...data,
      formId: "clll0pqwo018vml0o7ciaze5z",
    }

    try {
      const response = await fetch(
        "https://app.loops.so/api/newsletter-form/clll0pqwo018vml0o7ciaze5z",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        throw new Error("Oops! Something went wrong, please try again")
      }

      setIsSuccess(true)
    } catch (error) {
      setErrorMessage((error as Error).message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {isSuccess ? (
        <div className="success-message">Subscription successful!</div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-stretch gap-4 sm:flex-row xs:flex-col"
          noValidate
        >
          <div className="form-group relative">
            <input
              id="email"
              type="email"
              placeholder="Write your email*"
              className={`form-control h-full pl-6 rounded-lg min-w-[19.625rem] min-h-[3.5rem] ${
                errors.email ? "is-invalid" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="error-message absolute bottom-[-1rem] left-[1rem] translate-y-4">
                {errors.email.message}
              </p>
            )}
          </div>
          {errorMessage && <div className="error-state">{errorMessage}</div>}
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <span className="spinner"></span> : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  )
}

export default NewsletterForm
