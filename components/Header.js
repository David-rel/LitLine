// components/Header.js

import React from 'react'

const Header = () => {

  
  return (
    <header className="bg-green-600 w-full p-4 grid grid-cols-3 items-center md:grid-cols-3">
      <div className="flex items-center justify-center w-full md:justify-start col-span-3 md:col-span-1">
        <img
          src="/static/LitLine.png"
          alt="Logo"
          className="h-14 w-auto"
          style={{ aspectRatio: '3184 / 1162' }}
        />
      </div>
      <p className="text-white italic hidden md:block text-right md:col-span-2">
        "Everyone should be able to read"
      </p>
      
    </header>
  )
}

export default Header
