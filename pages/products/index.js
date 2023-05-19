// pages/index.js
import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import Link from 'next/link'
import Image from 'next/image'

extend({ OrbitControls })

const Controls = (props) => {
  const { camera, gl } = useThree()
  const ref = useRef()

  useFrame(() => ref.current?.update())
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}

const STLModel = ({ url, color }) => {
  const { scene, camera } = useThree()
  const ref = useRef()

  useEffect(() => {
    const loader = new STLLoader()
    loader.load(url, (geometry) => {
      ref.current.geometry = geometry
      ref.current.computeBoundingBox()

      const boundingBox = ref.current.geometry.boundingBox
      const centerX = 0.5 * (boundingBox.max.x + boundingBox.min.x)
      const centerY = 0.5 * (boundingBox.max.y + boundingBox.min.y)
      const centerZ = 0.5 * (boundingBox.max.z + boundingBox.min.z)
      scene.position.set(-centerX, -centerY, -centerZ)

      const maxDimension = Math.max(
        boundingBox.max.x - boundingBox.min.x,
        boundingBox.max.y - boundingBox.min.y,
        boundingBox.max.z - boundingBox.min.z
      )
      camera.position.set(0, 0, 2.5 * maxDimension)
      camera.updateProjectionMatrix()
    })
  }, [url, camera, scene])

  return (
    <mesh ref={ref}>
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

const App = () => {
  const stlFileURL = '/tool.stl'
  const [color, setColor] = useState('lightblue')

  const handleColorChange = (newColor) => {
    setColor(newColor)
  }

  return (
    <div className="min-h-screen bg-green-100">
      <main className="container mx-auto p-4">
        {/* Section 1 */}
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          <div className="relative h-96 w-full">
            <Image
              src="/photos/show.jpeg"
              alt="Product image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-96 w-full">
            <Image
              src="/photos/IMG_6344.jpeg"
              alt="Product image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-4">Product Description</h2>
            <p>
              A major issue that children with Dyslexia struggle with is reading
              large chunks of text at once. The LitLine attempts to remedy this
              issue by isolating each line of text. It is an easily mass
              producible and modifiable tool due to the fact that it is 3D
              printed. In addition, the material used to create the LitLine is
              composable non toxic PLA. All models of the tool are available on
              Thingiverse.com (https:// www.thingiverse.com/thing:5966347) for
              modification, and I distribute copies to local schools free of
              charge.
            </p>
          </div>
          <div className="mt-4">
            <Link href="/contact" legacyBehavior>
              <a className="bg-green-300 text-black py-2 px-6 rounded-lg hover:bg-green-200 font-bold">
                Get LitLine
              </a>
            </Link>
          </div>
        </section>

        {/* New STL Viewer Section */}
        <section className="h-auto sm:h-screen flex items-center justify-center py-16 md:pb-48 sm:pb-20">
          {/* New STL Viewer Section */}{' '}
          <div className="relative w-full max-w-4xl h-3/4 bg-gray-800 rounded-lg p-4 mb-20 mx-auto">
            <h1 className="text-center text-white text-lg mb-4">
              Welcome to the Lit Line viewer
            </h1>
            <Canvas
              camera={{ position: [0, 0, 100] }}
              className="w-full h-full mb-4"
            >
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <STLModel url={stlFileURL} color={color} />
              <Controls />
            </Canvas>
            <div className="grid grid-cols-5 gap-2 mb-4">
              <button
                style={{ backgroundColor: '#0047AB' }}
                className="p-2 rounded text-white"
                onClick={() => handleColorChange('#0047AB')}
              >
                Cobalt Blue
              </button>
              <button
                style={{ backgroundColor: '#C46210' }}
                className="p-2 rounded text-white"
                onClick={() => handleColorChange('#C46210')}
              >
                Autumn Orange
              </button>
              <button
                style={{ backgroundColor: '#DA9100' }}
                className="p-2 rounded text-white"
                onClick={() => handleColorChange('#DA9100')}
              >
                Harvest Gold
              </button>
              <button
                style={{ backgroundColor: '#228B22' }}
                className="p-2 rounded text-white"
                onClick={() => handleColorChange('#228B22')}
              >
                Forest Green
              </button>
              <button
                style={{ backgroundColor: '#76EEC6' }}
                className="p-2 rounded text-white"
                onClick={() => handleColorChange('#76EEC6')}
              >
                Green Ice
              </button>
              <button
                style={{ backgroundColor: '#D2B48C' }}
                className="p-2 rounded text-white"
                onClick={() => handleColorChange('#D2B48C')}
              >
                Tan 64
              </button>
              <button
                style={{ backgroundColor: '#FF6EC7' }}
                className="p-2 rounded text-white"
                onClick={() => handleColorChange('#FF6EC7')}
              >
                Neon Pink
              </button>
              <button
                style={{ backgroundColor: '#FF4C4C' }}
                className="p-2 rounded text-white"
                onClick={() => handleColorChange('#FF4C4C')}
              >
                Red Light Glitter
              </button>
            </div>
            <div className="text-white">
              <h2 className="text-lg mb-2 md:text-black sm:text-white">
                Instructions:
              </h2>
              <ol className="list-decimal list-inside md:text-black sm:text-white">
                <li>
                  Click on a colour button to change the colour of the STL
                  model.
                </li>
                <li>Rotate the model by clicking and dragging the mouse.</li>
                <li>
                  Zoom in and out using the scroll wheel or trackpad gesture.
                </li>
                <li>
                  Move around the model by pressing 2 fingers down on the
                  trackpad and moving
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="pt-20">
          <h2 className="text-xl font-bold mb-4">
            Interested in this product?
          </h2>
          <p>
            If you are interested in ordering simply email me at
            <a className="font-bold"> dyslexicreadingtools@gmail.com </a> and I
            will get back to you with details! Or...
          </p>

          {/* Add the video element with the playsInline attribute */}
          <div className="mt-4">
            <video className="w-full h-auto" controls playsInline>
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-4">
            <Link href="/contact" legacyBehavior>
              <a className="bg-green-300 text-black py-2 px-6 rounded-lg hover:bg-green-200 font-bold">
                Get LitLine
              </a>
            </Link>
          </div>
        </section>

        <br />
        <br />
      </main>
    </div>
  )
}

export default App
