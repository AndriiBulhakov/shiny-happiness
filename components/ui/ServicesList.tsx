"use client"
import { useEffect, useState } from "react"

type Tab = {
  title: string
  description: string
}

type ServicesListProps = {
  tabList: object[]
  type: string
}

const ServicesList = ({ tabList, type }: ServicesListProps) => {
  const [activeTab, setActiveTab] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabList.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [setActiveTab, tabList.length])

  return (
    <ul
      className={`service-list flex gap-6 ${
        type === "horizontal" ? "flex-col" : "lg:flex-row xs:flex-col"
      }`}
    >
      {tabList.map((tab, index) => (
        <li key={index} className={`${type === "horizontal" ? "" : "flex-1"}`}>
          <div
            className={`relative text-left pt-6 border-t-2 text-body/medium border-gray-quinary ${
              activeTab === index ? "is--active" : ""
            }`}
          >
            <h4
              className={`mb-4 transition-colors duration-200 ${
                activeTab === index
                  ? "text-gray-primary"
                  : "text-gray-quaternary"
              }`}
            >
              {(tab as Tab).title}
            </h4>
            <p
              className={`transition-colors duration-200 ${
                activeTab === index
                  ? "text-gray-tetriary"
                  : "text-gray-quaternary"
              }`}
            >
              {(tab as Tab).description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ServicesList
