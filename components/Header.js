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
      <p className="text-white italic hidden md:block text-right md:col-span-2">
        "Everyone should be able to read"
      </p>
      
    </header>
  )
}

export default Header
