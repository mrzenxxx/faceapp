import { useEffect, useState } from "react"
import Webcam from "react-webcam"
import { webCamConfig } from "./webCamConfig"

function App() {
  const [isWorking, setIsWorking] = useState(false)
  const [isApproved, setIsApproved] = useState(false)

  const toggleCamera = () => {
    setIsWorking(!isWorking)
  }



  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => setIsApproved(true))
    } else {
      setIsApproved(false)
    }
  }, [])


  return (
    <>
      <main className='relative flex flex-col w-full h-screen text-gray-300 bg-gray-900 justify-center items-center'>
        <section className={`relative w-[380px] min-h-[380px] max-h-[380px] my-auto rounded-2xl flex jusify-center items-center bg-gray-800`}>
          <button
            className="bg-gray-700 p-2 m-2 rounded-xl absolute z-10 min-w-[48px] uppercase right-1 top-1"
            onClick={toggleCamera}
          >
            {isWorking ? 'off' : 'on'}
          </button>
          {isWorking &&
            <>
              <Webcam
                className="w-full h-full rounded-2xl"
                videoConstraints={webCamConfig}
                mirrored
              />
              {isApproved && 
              <h1 className='absolute text-2xl bottom-5 text-gray-300 text-bold text-center mx-auto w-full uppercase animate-ping'>чушпан</h1>
              }
            </>
          }
        </section>

      </main>
    </>
  )
}

export default App
