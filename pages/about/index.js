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
            Here is some information about the author. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed fermentum leo vel risus
            rhoncus, vel bibendum mi bibendum. Curabitur massa quam, vulputate
            ac nunc sit amet, lobortis viverra sapien. Proin gravida lectus
            vitae ultricies sagittis. Integer rhoncus porta lorem, ut vulputate
            ex auctor vel. Duis porttitor facilisis magna ut commodo. Fusce
            malesuada gravida tortor quis placerat. Maecenas posuere enim eget
            dolor laoreet, ut maximus diam aliquam. Phasellus eu nisi posuere
            nulla dignissim viverra. Proin laoreet enim sit amet libero molestie
            consequat. Nullam scelerisque maximus eros, eu dapibus dui sagittis
            in. Nulla id nulla id sem rhoncus congue.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
