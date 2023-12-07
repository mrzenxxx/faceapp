import { useState } from "react"
import Webcam from "react-webcam"
import { webCamConfig } from "./webCamConfig"

function App() {
  const [isWorking, setIsWorking] = useState(false)

  const toggleCamera = () => {
    setIsWorking(!isWorking)
  }

  return (
    <>
      <main className='flex flex-col w-full h-screen text-green-300 bg-gray-900 justify-center items-center bg-gradient-to-tr from-purple-800 to-green-400 via-gray-600'>
        <section className="relative w-96 min-h-[506px] max-h-[506px] my-auto border border-green-300 shadow-2xl rounded-xl p-2 bg-gray-800">
          <button
            className="bg-gray-700 p-2 m-2 rounded-xl absolute z-10 min-w-[48px] uppercase right-1 top-1"
            onClick={toggleCamera}
          >
            {isWorking ? 'off' : 'on'}
          </button>
          {isWorking &&
            <Webcam videoConstraints={webCamConfig} />
          }
        </section>
      </main>
    </>
  )
}

export default App
