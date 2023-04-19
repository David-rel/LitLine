import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutProductSection = () => {
  return (
    <div className="bg-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-12">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2 mb-4 md:mb-0 relative">
                  <Image
                    className="object-cover object-center"
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                  />
                  {index < data.length - 1 && (
                    <VerticalLine
                      connectTop={index % 2 === 0}
                      connectBottom={index % 2 === 1}
                    />
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={`/${item.link}`} legacyBehavior>
                    <a className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded">
                      {item.link}
                    </a>
                  </Link>
                </div>
              </div>
              {index < data.length - 1 && <ConnectingLine />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

const ConnectingLine = () => (
  <div className="hidden md:block w-full h-0.5 bg-gray-300 mb-12"></div>
)

const VerticalLine = ({ connectTop, connectBottom }) => (
  <div className="hidden md:block absolute bottom-0 w-0.5 bg-gray-300 h-full">
    {connectTop && (
      <div className="w-6 h-0.5 bg-gray-300 absolute top-0 left-0 transform -translate-x-6"></div>
    )}
    {connectBottom && (
      <div className="w-6 h-0.5 bg-gray-300 absolute bottom-0 left-0 transform -translate-x-6"></div>
    )}
  </div>
)

export default AboutProductSection

const data = [
  {
    title: 'Our product',
    description:
      'This is the first part of our product journey, where it all started. We focused on creating a strong foundation to ensure the best possible experience for our users.',
    image: '/photos/people1.jpeg',
    link: 'products'
  },
  {
    title: 'How we do it',
    description:
      'As our product grew, we adapted and improved our offerings based on user feedback and emerging technologies. This allowed us to provide even more value to our customers.',
    image: '/photos/people1.jpeg',
    link: 'creation'
  },
  {
    title: 'Our Purpose',
    description:
      'We continuously strive to stay ahead of the curve, bringing new features and innovations to our product. Our aim is to deliver an unmatched experience and exceed expectations.',
    image: '/photos/people1.jpeg',
    link: 'purpose'
  },
]
