import { useState } from "react"
import Webcam from "react-webcam"
import { webCamConfig } from "./webCamConfig"

function App() {
  const [isWorking, setIsWorking] = useState(false)

  const toggleCamera = () => {
    setIsWorking(!isWorking)
  }
  
  const sectionClass = isWorking ? 'bg-gradient-to-tr from-green-400 to-purple-700' : 'bg-gray-800'

  return (
    <>
      <main className='relative flex flex-col w-full h-screen text-green-300 bg-gray-900 justify-center items-center bg-gradient-to-tr from-purple-700 to-green-400'>
        {!isWorking&&
          <h1 className='absolute top-2 text-lg text-gray-800 mt-3'>Включи, чтобы увидеть самого прекрасного человека!</h1>
        }
        <section className={`relative w-96 min-h-[506px] max-h-[506px] my-auto border border-green-300 shadow-2xl rounded-xl p-2 ${sectionClass}`}>
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
