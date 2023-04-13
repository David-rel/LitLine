import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-blue-400 text-white p-4">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center text-xl items-center space-y-2 md:space-y-0 md:space-x-8">
          <li className="w-full md:w-auto text-center">
            <Link href="/" legacyBehavior>
              <a className="text-white hover:text-gray-300">Home</a>
            </Link>
          </li>
          <li className="w-full md:w-auto text-center">
            <Link href="/products" legacyBehavior>
              <a className="text-white hover:text-gray-300">Products</a>
            </Link>
          </li>
          <li className="w-full md:w-auto text-center">
            <Link href="/about" legacyBehavior>
              <a className="text-white hover:text-gray-300">
                About the Creator
              </a>
            </Link>
          </li>
          <li className="w-full md:w-auto text-center">
            <Link href="/contact" legacyBehavior>
              <a className="text-white hover:text-gray-300">Contact</a>
            </Link>
          </li>
          <li className="w-full md:w-auto text-center">
            <Link href="/creation" legacyBehavior>
              <a className="text-white hover:text-gray-300">How it's Created</a>
            </Link>
          </li>
          <li className="w-full md:w-auto text-center">
            <Link href="/purpose" legacyBehavior>
              <a className="text-white hover:text-gray-300">Our Purpose</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
