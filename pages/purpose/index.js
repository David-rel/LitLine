import React from 'react'

const OurPurpose = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Purpose</h1>
      <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg p-8">
        <p className="text-white text-lg">
          A major issue that children with dyslexia struggle with is reading
          large chunks of text at once. The LitLine attempts to remedy this
          issue by isolating each line of text. It is an easily mass-producible
          and modifiable tool due to the fact that it is 3D printed. In
          addition, the material used to create the LitLine is compostable,
          non-toxic PLA. All models of the tool are available on{' '}
          <a
            href="https://www.thingiverse.com/thing:5966347"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Thingiverse.com
          </a>{' '}
          for modification, and I distribute copies to local schools free of
          charge.
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <img
          src="/photos/people1.jpeg"
          alt="LitLine Example"
          className="rounded-lg shadow-lg w-full max-w-lg"
        />
      </div>

      {/* New Sections */}
      <section className="mt-16">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2">
            <img
              src="/photos/people1.jpeg"
              alt="Section 1 Example"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 p-4 bg-purple-500 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Section 1 Title
            </h2>
            <p className="text-white text-lg">
              Insert the content for Section 1 here. You can add any relevant
              information, statistics, or stories to engage your audience and
              provide more context about your project.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2">
            <img
              src="/photos/people1.jpeg"
              alt="Section 2 Example"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 p-4 bg-blue-500 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Section 2 Title
            </h2>
            <p className="text-white text-lg">
              Insert the content for Section 2 here. You can add any relevant
              information, statistics, or stories to engage your audience and
              provide more context about your project.
            </p>
          </div>
        </div>
      </section>
      {/* End of New Sections */}
    </div>
  )
}

export default OurPurpose
