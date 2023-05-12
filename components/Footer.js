import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function footer() {
  return (
    <div className="bg-green-600 px-10 py-10 text-center">
      <>
        <div className=" bg-linear-pink-invert pb-12 bg-green-600">
          <div className="mx-auto container flex flex-col items-center justify-center">
            <div>
              <Image
                src={'/static/LitLine.png'}
                alt="Home Page"
                className="rounded-lg"
                width={400}
                height={200}
              />
            </div>

            <div className="text-black flex flex-col md:items-center f-f-l  pt-6">
              <h1 className="text-2xl">LitLine</h1>

              <div className="md:flex items-center mt-4 text-base text-color f-f-l">
                <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">
                  phone: +1 (720) 822-4550
                </h2>
                <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">
                  email: dyslexicreadingtools@gmail.com
                </h2>
              </div>

              <div className=" text-base text-color f-f-l">
                <ul className="md:flex items-center">
                  <Link
                    href="/"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Home
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/products"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Products
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/about"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    About the Creator
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/contact"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Contact
                  </Link>
                  
                  <br />
                  <br />
                  <Link
                    href="/purpose"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Our Purpose
                  </Link>
                  <br />
                  <br />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default footer
