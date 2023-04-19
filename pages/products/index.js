import STLViewer from '../../components/stl-viewer'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      Products
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-3/4 h-3/4 bg-white shadow-lg rounded-md p-4">
          <STLViewer url="/tool.stl" />
        </div>
      </div>
    </div>
  )
}