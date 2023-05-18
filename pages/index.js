import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css' // import the styles

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
      <section class="relative bg-[url(../public/photos/people1.jpeg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1
              style={{ opacity: opacity }}
              class="text-3xl font-extrabold sm:text-5xl text-green-300"
            >
              Lit Line
              <strong
                style={{ opacity: opacity }}
                class="block font-extrabold text-green-600"
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
                class="block w-full rounded bg-green-300 px-12 py-3 text-sm font-medium text-black shadow hover:bg-green-100 focus:outline-none focus:ring active:bg-green-100 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
            <div
              style={{ opacity: opacity }}
              class="mt-8 flex flex-wrap gap-4 text-center"
            >
              <Link
                href="/contact"
                class="block w-full rounded bg-green-400 px-12 py-3 text-sm font-medium text-black shadow hover:bg-green-600 focus:outline-none focus:ring active:bg-green-600 sm:w-auto"
              >
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.sectionWrapper}>
        <div className={`${styles.section} bg-green-100`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-12">
              <div className="section-wrapper">
                <h2 className="text-5xl text-green-600 font-semibold mb-4">
                  Our product
                </h2>
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                    <Image
                      className="object-cover object-center"
                      src="/photos/thing.png"
                      alt="How we do it"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-2xl text-black">
                    <p>
                      This is the first part of our product journey, where it
                      all started. We focused on creating a strong foundation to
                      ensure the best possible experience for our users.
                    </p>
                    <Link href="/products" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-200 text-black px-4 py-2 mt-4 inline-block rounded mr-4">
                        products
                      </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded">
                        Buy Now
                      </a>
                    </Link>
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
                <h2 className="text-5xl font-semibold mb-4 text-green-600">
                  How we do it
                </h2>
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                    <Image
                      className="object-cover object-center"
                      src="/photos/thing.png"
                      alt="How we do it"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-2xl text-black">
                    <p>
                      As our product grew, we adapted and improved our offerings
                      based on user feedback and emerging technologies. This
                      allowed us to provide even more value to our customers.
                    </p>
                    <Link href="/creation" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-200 text-black px-4 py-2 mt-4 inline-block rounded mr-4">
                        creation
                      </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded">
                        Buy Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.section4}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-12">
              <div className="section-wrapper">
                <h2 className="text-5xl font-semibold mb-4 text-green-600">
                  Our Purpose
                </h2>
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                    <Image
                      className="object-cover object-center"
                      src="/photos/thing.png"
                      alt="How we do it"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-2xl text-black">
                    <p>
                      We continuously strive to stay ahead of the curve,
                      bringing new features and innovations to our product. Our
                      aim is to deliver an unmatched experience and exceed
                      expectations.
                    </p>
                    <Link href="/purpose" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded mr-4">
                        purpose
                      </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded">
                        Buy Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={`${styles.section} ${styles.section3}`}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-12">
                <div className="section-wrapper">
                  <h2 className="text-5xl font-semibold mb-4 text-green-600">
                    {' '}
                    A little about me
                  </h2>
                  <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                      <Image
                        className="object-cover object-center"
                        src="/photos/thing.png"
                        alt="How we do it"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="w-full md:w-1/2 text-2xl text-black">
                      <p>
                        Discover our amazing services and become part of our
                        fantastic community.
                      </p>
                      <Link href="/about" legacyBehavior>
                        <a className="bg-green-300 hover:bg-green6100 text-black px-4 py-2 mt-4 inline-block rounded mr-4">
                          Learn More
                        </a>
                      </Link>
                      <Link href="/contact" legacyBehavior>
                        <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded mr-4">
                          Contact Me
                        </a>
                      </Link>
                      <Link href="/contact" legacyBehavior>
                        <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded">
                          Buy Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
