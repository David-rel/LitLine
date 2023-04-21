import Image from 'next/image'

const About = () => {
  return (
    <div className="flex h-screen p-10">
      <div className="flex-1 flex bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="relative w-1/2 h-full">
          <Image
            src="/photos/people1.jpeg"
            alt="Photo of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl mb-4">Hello, my name is </h2>
          <p className="text-xl">
            I am currently a junior at Regis Jesuit high school, and I was
            diagnosed with dyslexia in first grade. I greatly struggled with
            reading growing up and at times hated it due to the great confusion
            that I felt. I have since realized the joy that reading can bring
            and the importance of reading without anger. Recently my younger
            brother was also diagnosed with Dyslexia, and I hated to see his
            frustration when reading. Thinking back on what helped me read when
            I was his age I remembered using a piece of paper to isolate the
            line. This inspired me to create a more robust, permanent, and
            customizable tool to isolate the line. I found that this benefitted
            my brother, so I decided to share it with the learning services
            programs at other schools.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
