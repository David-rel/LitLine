import Link from 'next/link'
import React from 'react'

const IntroSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-2/3 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-1/2 bg-cover"
          style={{ backgroundImage: "url('./photos/show.jpeg')" }}
        ></div>
        <div className="w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-gray-700">
            A little about me
          </h2>
          <p className="mt-4 text-gray-600">
            Discover our amazing services and become part of our fantastic
            community.
          </p>
          <div className="mt-8">
            <Link href="/about">
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg mr-4">
                Learn More
              </button>
            </Link>
            <Link href="contact">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
