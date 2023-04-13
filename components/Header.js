// components/Header.js

import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-700 w-full p-4 grid grid-cols-3 items-center md:grid-cols-3">
      <div className="flex items-center justify-center w-full md:justify-start col-span-3 md:col-span-1">
        <img
          src="/static/LitLine.png"
          alt="Logo"
          className="h-12 w-auto"
          style={{ aspectRatio: '3184 / 1162' }}
        />
        <h1 className="text-white text-4xl font-semibold ml-4">LitLine</h1>
      </div>
      <p className="text-white italic hidden md:block text-center md:col-span-1">
        "Everyone should be able to read"
      </p>
      <div className="relative hidden md:block justify-self-end md:col-span-1">
        <input
          type="text"
          placeholder="Search..."
          className="border border-blue-500 bg-white rounded-lg p-2 pl-8"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.818a1 1 0 01-1.414 1.414l-4.818-4.817A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </header>
  )
}

export default Header
