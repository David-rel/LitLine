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
              class="text-5xl font-extrabold sm:text-5xl text-green-600"
            >
              Lit Line
              <strong
                style={{ opacity: opacity }}
                class="block font-extrabold text-green-400 text-3xl"
              >
                Enhancing Everyone's Reading Experience
              </strong>
            </h1>

            <p
              style={{ opacity: opacity }}
              class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-black"
            >
              Welcome to the Official Home of Lit Line.
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
                GET LITLINE
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
                  Our Exceptional Product
                </h2>
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                    <Image
                      className="object-cover object-center"
                      src="/photos/IMG_1130.jpeg"
                      alt="How we do it"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-2xl text-black">
                    <p>
                      Presenting the Lit Line - a compact and handy tool
                      designed to improve focus while reading. We've crafted it
                      with everyone in mind, especially those struggling with
                      maintaining focus on the text. Discover more below.
                    </p>
                    <Link href="/products" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-200 text-black px-4 py-2 mt-4 inline-block rounded mr-4">
                        Products
                      </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded">
                        Get LitLine
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
                  The Creation Process
                </h2>
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                    <Image
                      className="object-cover object-center"
                      src="/photos/IMG_1129.jpeg"
                      alt="How we do it"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-2xl text-black">
                    <p>
                      LitLine is meticulously crafted using a 3D printer with
                      eco-friendly, non-toxic PLA that ensures safety for all
                      ages. From the printer to your door, our process is as
                      simple as it is effective. Learn more about our unique
                      production process below.
                    </p>
                    <Link href="/products" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-200 text-black px-4 py-2 mt-4 inline-block rounded mr-4">
                        Creation
                      </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded">
                        Get LitLine
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
                  Our Noble Cause
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
                      We envision a world where everyone can read with ease and
                      confidence, without feeling left behind. Lit Line is
                      designed to assist students with dyslexia, helping them
                      read as well as their peers. We believe in empowering
                      everyone with the lifelong skill of efficient reading.
                    </p>
                    <Link href="/purpose" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded mr-4">
                        Purpose
                      </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                      <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded">
                        Get LitLine
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
                    A Glimpse Into My Journey
                  </h2>
                  <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                      <Image
                        className="object-cover object-center"
                        src="/photos/mat.jpeg"
                        alt="How we do it"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="w-full md:w-1/2 text-2xl text-black">
                      <p>
                        I invite you to learn a bit more about me, my life, and
                        the inspiration behind Lit Line. If you're interested in
                        my story and my work, feel free to explore further.
                      </p>
                      <Link href="/about" legacyBehavior>
                        <a className="bg-green-300 hover:bg-green6100 text-black px-4 py-2 mt-4 inline-block rounded mr-4">
                          About Me
                        </a>
                      </Link>
                      <Link href="/contact" legacyBehavior>
                        <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded mr-4">
                          Contact Me
                        </a>
                      </Link>
                      <Link href="/contact" legacyBehavior>
                        <a className="bg-green-300 hover:bg-green-600 text-black px-4 py-2 mt-4 inline-block rounded">
                          Get LitLine
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
