import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-blue-400 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex justify-center text-xl items-center space-x-28">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-white hover:text-gray-300">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/products" legacyBehavior>
              <a className="text-white hover:text-gray-300">Products</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="text-white hover:text-gray-300">About the Creator</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="text-white hover:text-gray-300">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/creation" legacyBehavior>
              <a className="text-white hover:text-gray-300">How it's Created</a>
            </Link>
          </li>
          <li>
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
