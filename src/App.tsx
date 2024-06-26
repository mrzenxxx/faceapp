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
          <h1 className='absolute text-lg top-1 text-gray-800 mt-10 text-bold text-center mx-3'>Включи, чтобы увидеть самого прекрасного человека!</h1>
        }
        <section className={`relative w-[380px] min-h-[380px] max-h-[380px] my-auto border border-green-300 shadow-2xl rounded-xl p-2 ${sectionClass} flex jusify-center items-center`}>
          <button
            className="bg-gray-700 p-2 m-2 rounded-xl absolute z-10 min-w-[48px] uppercase right-1 top-1"
            onClick={toggleCamera}
          >
            {isWorking ? 'off' : 'on'}
          </button>
          {isWorking &&
            <Webcam videoConstraints={webCamConfig} mirrored forceScreenshotSourceSize	/>
          }
        </section>
        {isWorking &&
            <h1 className='absolute text-lg bottom-1 text-gray-800 mb-10 text-bold text-center mx-3'>Теперь сделай и отправь мне скриншот :)</h1>
        }
      </main>
    </>
  )
}

export default App
