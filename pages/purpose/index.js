import Link from 'next/link'
import React from 'react'

function IndexPage() {
  return (
    <div className="bg-green-100">
      <div className=" mx-auto px-4 bg-green-100">
        <h1 className="text-5xl text-center f-m-w text-black font-bold pt-0 pt-4">
          Our Purpose at LitLine
        </h1>
        <div className="pt-14 xl:px-0 px-4">
          <div className="w-full lg:flex">
            <div className="lg:w-1/2">
              <img
                src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog1.png"
                className="w-full"
              />
              <div className="mt-8 lg:mb-0 mb-8">
                <h1 className="f-m-m text-2xl font-semibold leading-7">
                  Empowering Dyslexic Kids
                </h1>
                <p className="text-base f-m-m leading-loose mt-2">
                  Our mission at LitLine is to empower dyslexic children to
                  unlock their full potential. Through our innovative tools,
                  kids can overcome their reading challenges and build
                  confidence in their abilities.
                </p>
              </div>
              <div className="mt-4">
                <Link href="/contact" legacyBehavior>
                  <a className="bg-green-300 text-black text-lg py-4 px-12 rounded-lg hover:bg-green-200 font-bold">
                    Get LitLine
                  </a>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 lg:ml-8">
              <div className="lg:flex items-start mb-8">
                <img
                  src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog2.png"
                  className="w-full"
                />

                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    Creating a Supportive Environment
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    We understand that each dyslexic child's learning journey is
                    unique. LitLine creates a supportive learning environment
                    that adapts to each child's specific needs.
                  </p>
                </div>
              </div>

              <div className="lg:flex items-start mb-8">
                <img
                  src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog3.png"
                  className="w-full"
                />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    Engaging and Interactive Learning
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    We believe learning should be fun. LitLine leverages
                    interactive elements to keep children engaged and motivated
                    throughout their learning journey.
                  </p>
                </div>
              </div>

              <div className="lg:flex items-start mb-8">
                <img
                  src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog4.png"
                  className="w-full"
                />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    A Community of Support
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    LitLine is more than just a tool. We're building a community
                    to share experiences, advice, and support. Together, we're
                    making a difference in the lives of dyslexic children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

export default IndexPage
