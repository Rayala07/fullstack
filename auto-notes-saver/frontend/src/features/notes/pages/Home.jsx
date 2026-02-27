import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {

  const navigate = useNavigate()

  const handleAddClick = () => {
    navigate("/add-note")
  }

  const handleViewClick = () => {
    navigate("/view-notes")
  }

  return (
    <div className='h-screen bg-linear-to-br from-[#0f0f0f] via-[#151515] to-[#181818] text-white flex flex-col items-center justify-center px-6'>

        {/* Header */}
        <div className='mb-6'>
            <p className='text-4xl font-semibold tracking-tight bg-linear-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent'>
              Smart Notes
            </p>
        </div>

        {/* Subtitle */}
        <div className='mb-10 text-center max-w-md'>
          <p className='text-gray-400 text-lg leading-relaxed'>
            Just create notes on the go. They will be saved automatically while you focus on writing.
          </p>
        </div>

        {/* Buttons */}
        <div className='flex gap-6'>

          <button onClick={handleViewClick} className='px-6 py-3 rounded-md bg-white/5 backdrop-blur-md border border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/20 transition-all duration-250 ease-in-out shadow-lg hover:shadow-xl cursor-pointer'>
            View Notes
          </button>

          <button onClick={handleAddClick} className='px-6 py-3 rounded-md bg-linear-to-r from-blue-600 via-blue-400 to-blue-300 text-black/50 font-medium hover:scale-105 hover:shadow-2xl transition-all duration-250 ease-in-out cursor-pointer'>
            Add Note
          </button>

        </div>
    </div>
  )
}

export default Home