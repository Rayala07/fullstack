import React, { useEffect, useState } from 'react'
import axios from "axios"

const ViewNotes = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        async function fetchNotes() {
            const res = await axios.get("http://localhost:3000/api/notes/fetch")
            setNotes(res.data.notes)
            console.log(res.data.notes)
            console.log("Notes", notes)
        }

        fetchNotes()
    },[])


  return (
    <div className='min-h-screen bg-linear-to-br from-[#0f0f0f] via-[#151515] to-[#1c1c1c] text-white px-10 py-16'>

      {/* Header */}
      <div className='mb-12 text-center'>
        <p className='text-3xl font-semibold tracking-tight bg-linear-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent'>
          Your Notes
        </p>
      </div>

      {/* Notes Grid */}
      <div className='grid grid-cols-5 gap-8'>

        {/* Sample Card (duplicate when mapping) */}
        {notes.map((note) => {
            return (
                <div className='h-40 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center text-center px-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-xl'>
                    <p className='text-gray-200 font-medium text-lg'>
                    {note.title}
                    </p>
                </div>
            )
        })}
      </div>

    </div>
  )
}

export default ViewNotes