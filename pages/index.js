import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from "../styles/Home.module.css"; // import the styles


export default function Index() {
  const [opacity, setOpacity] = useState(1)

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const scrollY = window.scrollY
    const fadeSpeed = 2 // You can adjust this value to control the fade speed
    const newOpacity = 1 - (scrollY / windowHeight) * fadeSpeed
    setOpacity(newOpacity)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <section class="relative bg-[url(../public/photos/show.jpeg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1
              style={{ opacity: opacity }}
              class="text-3xl font-extrabold sm:text-5xl text-black"
            >
              Lit Line
              <strong
                style={{ opacity: opacity }}
                class="block font-extrabold text-blue-400"
              >
                Helping everyone to read
              </strong>
            </h1>

            <p
              style={{ opacity: opacity }}
              class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-black"
            >
              Welcome to Lit Line's Official Website
            </p>

            <div
              style={{ opacity: opacity }}
              class="mt-8 flex flex-wrap gap-4 text-center"
            >
              <Link
                href="/products"
                class="block w-full rounded bg-blue-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.sectionWrapper}>
        <div className={`${styles.section} ${styles.section1}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-12">
              <div className="section-wrapper">
                <h2
                  className={`text-5xl font-semibold mb-4 ${styles.sectionTitle}`}
                >
                  Our product
                </h2>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 text-2xl">
                    <p>
                      This is the first part of our product journey, where it
                      all started. We focused on creating a strong foundation to
                      ensure the best possible experience for our users.
                    </p>
                    <Link href="/products" legacyBehavior>
                      <a className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded">
                        products
                      </a>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                    <Image
                      className="object-cover object-center"
                      src="/photos/people1.jpeg"
                      alt="Our product"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.section2}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-12">
              <div className="section-wrapper">
                <h2 className="text-5xl font-semibold mb-4">How we do it</h2>
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                    <Image
                      className="object-cover object-center"
                      src="/photos/people1.jpeg"
                      alt="How we do it"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-2xl">
                    <p>
                      As our product grew, we adapted and improved our offerings
                      based on user feedback and emerging technologies. This
                      allowed us to provide even more value to our customers.
                    </p>
                    <Link href="/creation" legacyBehavior>
                      <a className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded">
                        creation
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.section3}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-12">
              <div className="section-wrapper">
                <h2 className="text-5xl font-semibold mb-4">Our Purpose</h2>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 text-2xl">
                    <p>
                      We continuously strive to stay ahead of the curve,
                      bringing new features and innovations to our product. Our
                      aim is to deliver an unmatched experience and exceed
                      expectations.
                    </p>
                    <Link href="/purpose" legacyBehavior>
                      <a className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded">
                        purpose
                      </a>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                    <Image
                      className="object-cover object-center"
                      src="/photos/people1.jpeg"
                      alt="Our Purpose"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  )
}
