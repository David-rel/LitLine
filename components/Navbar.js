import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div>
      <nav className="bg-green-600 w-full px-10 py-3 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <Link href="/">
              <img
                src="/static/LitLine.png"
                alt="Your Logo"
                className="h-24 w-auto"
              />
            </Link>
            <ul className="hidden sm:flex items-center space-x-6 text-black text-xl">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white hover:underline"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white hover:underline"
                >
                  About the Creator
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/purpose"
                  className="hover:text-white hover:underline"
                >
                  Our Purpose
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/login" className="hidden sm:inline-flex">
            <p className="text-white italic hidden md:block text-right md:col-span-2">
              "Everyone should be able to read"
            </p>
          </Link>
          <div className="flex sm:hidden items-center space-x-10">
            <p className="text-white italic hidden md:block text-right md:col-span-2">
              "Everyone should be able to read"
            </p>
            <button
              onClick={toggleMobileMenu}
              className="text-black text-3xl hover:text-white"
            >
              ☰
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-10 p-10"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-black text-3xl hover:text-white"
              >
                ×
              </button>
            </div>
            <hr className="border-gray-300 mb-6" />
            <ul className="space-y-6 text-black text-xl">
              <li>
                <Link href="/" legacyBehavior>
                  <p className="hover:text-white hover:underline cursor-pointer">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/products" legacyBehavior>
                  <p className="hover:text-white hover:underline cursor-pointer">
                    Products
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <p className="hover:text-white hover:underline cursor-pointer">
                    About the Creator
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white hover:underline"
                  legacyBehavior
                >
                  <p className="hover:text-white hover:underline cursor-pointer">
                    Contact
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/purpose"
                  className="hover:text-white hover:underline"
                  legacyBehavior
                >
                  <p className="hover:text-white hover:underline cursor-pointer">
                    Our Purpose
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
