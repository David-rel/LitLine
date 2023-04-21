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
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        {/* Section 1 */}
        <section className="grid grid-cols-2 gap-4 mb-20 ">
          <div className="relative h-96 w-full">
            <Image
              src="/photos/IMG_1126.jpeg"
              alt="Product image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-96 w-full">
            <Image
              src="/photos/IMG_1129.jpeg"
              alt="Product image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-4">Product Description</h2>
            <p>
              Your detailed product description goes here. Include information
              about the product's features, benefits, and any other relevant
              information that will help the user understand and appreciate the
              value of the product.
            </p>
          </div>
        </section>

        {/* New STL Viewer Section */}
        <section className="h-screen flex items-center justify-center bg-black py-20 pb-32">
          {/* New STL Viewer Section */}{' '}
          <div className="relative w-full max-w-4xl h-3/4 bg-gray-800 rounded-lg p-4 mb-20 mx-auto">
            <h1 className="text-center text-white text-lg mb-4">
              Welcome to the STL Viewer
            </h1>
            <Canvas
              camera={{ position: [0, 0, 50] }}
              className="w-full h-full mb-4"
            >
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <STLModel url={stlFileURL} color={color} />
              <Controls />
            </Canvas>
            <div className="grid grid-cols-5 gap-2 mb-4">
              <button
                className="bg-red-500 p-2 rounded"
                onClick={() => handleColorChange('blue')}
              >
                cobalt
              </button>
              <button
                className="bg-green-500 p-2 rounded"
                onClick={() => handleColorChange('green')}
              >
                Green
              </button>
              <button
                className="bg-blue-500 p-2 rounded"
                onClick={() => handleColorChange('blue')}
              >
                Blue
              </button>
              <button
                className="bg-yellow-500 p-2 rounded"
                onClick={() => handleColorChange('yellow')}
              >
                Yellow
              </button>
              <button
                className="bg-purple-500 p-2 rounded"
                onClick={() => handleColorChange('purple')}
              >
                Purple
              </button>
            </div>
            <div className="text-white">
              <h2 className="text-lg mb-2">Instructions:</h2>
              <ol className="list-decimal list-inside">
                <li>
                  Click on a colour button to change the colour of the STL
                  model.
                </li>
                <li>Rotate the model by clicking and dragging the mouse.</li>
                <li>
                  Zoom in and out using the scroll wheel or trackpad gesture.
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
          <div className="mt-4">
            <Link href="/contact" legacyBehavior>
              <a className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-800 font-bold">
                Contact Me
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
