import Link from "next/link"
import AboutHome from '../components/AboutHome'
import PersonalHome from '../components/PersonalHome'
import React, { useState, useEffect, useRef } from 'react'

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
              class="text-3xl font-extrabold sm:text-5xl"
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
              class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed"
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
      <AboutHome />
      <PersonalHome />
    </div>
  )
}
