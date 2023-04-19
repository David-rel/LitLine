import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const STLViewer = ({ url }) => {
  const containerRef = useRef()

  useEffect(() => {
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0xffffff) // Set background color to white
    container.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 1))
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    const loader = new STLLoader()
    loader.load(url, (geometry) => {
      geometry.computeBoundingBox()
      geometry.center()

      const material = new THREE.MeshPhongMaterial({
        color: 0xff5533,
        specular: 0x111111,
        shininess: 200,
      })
      const mesh = new THREE.Mesh(geometry, material)

      mesh.scale.set(0.02, 0.02, 0.02)

      mesh.rotation.x = -Math.PI / 2

      scene.add(mesh)

      // Calculate the size of the bounding box
      const size = new THREE.Vector3()
      geometry.boundingBox.getSize(size)

      // Calculate the camera distance based on the bounding box size and the field of view
      const fov = camera.fov * (Math.PI / 180)
      const maxDimension = Math.max(size.x, size.y, size.z)
      const zoomFactor = 0.01 // Adjust this value to change the initial zoom level (smaller value means more zoomed in)
      const distance = (zoomFactor * (maxDimension / 2)) / Math.tan(fov / 2)

      // Set the camera position
      camera.position.set(distance, distance, distance)

      // Set the camera to look at the center of the geometry
      camera.lookAt(geometry.boundingBox.getCenter(new THREE.Vector3()))

      // Update the controls
      controls.update()
    })

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      container.removeChild(renderer.domElement)
    }
  }, [url])


  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ width: 'px', height: '400px' }}
    ></div>
  )
}

export default STLViewer
