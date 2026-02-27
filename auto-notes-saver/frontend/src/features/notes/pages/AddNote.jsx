import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AddNote = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [noteId, setNoteId] = useState("");
  const [saveStatus, setSaveStatus] = useState("Saved");

  // 1. Create note as Add-button is clicked
  useEffect(() => {
    async function createInitialNote() {
      const res = await axios.post("http://localhost:3000/api/notes/create", {
        title: "",
        body: ""
      })

      setNoteId(res.data.note._id);
    }

    createInitialNote()
  }, [])

  // 2. Auto Save using Debounce
  useEffect(() => {
    if(!noteId) return 

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSaveStatus("Saving...")

    const timer = setTimeout(async() => {
      try {
        await axios.put(`http://localhost:3000/api/notes/update/${noteId}`, {
          title,
          body
        })

        setSaveStatus("Saved")
      } catch(err) {
        console.log(err)
      }
    }, 1400)

    return () => clearTimeout(timer)
  }, [title, body, noteId])

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()

    navigate("/view-notes")
  }



  return (
    <div className='min-h-screen bg-linear-to-br from-[#0f0f0f] via-[#151515] to-[#1c1c1c] text-white flex items-center justify-center px-6'>

      {/* Outer Card */}
      <div className='w-full max-w-4xl border border-white/10 rounded-3xl p-10 bg-white/5 backdrop-blur-xl shadow-2xl'>

        {/* Header */}
        <div className='flex justify-between items-center mb-10'>
          <p className='text-2xl font-semibold text-white/20 tracking-tight'>
            Add Note.
          </p>

          {/* Saving Status */}
          <p className={`text-sm ${saveStatus === "Saving..." ? "text-yellow-400" : "text-green-400"}`}>
            {saveStatus}
          </p>
        </div>
        <form className='flex flex-col gap-8' onSubmit={submitHandler}>

          {/* Title Input */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => (setTitle(e.target.value))}
            className='w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-6 py-4 text-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300'
          />

          {/* Body Input */}
          <textarea
            placeholder="Body"
            rows="8"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className='w-full bg-[#1a1a1a] border border-white/10 rounded-2xl px-6 py-6 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 resize-none'
          />

          {/* Done Button */}
          <div className='flex justify-end'>
            <button
              type="submit"
              className='px-6 py-3 rounded-md bg-linear-to-r from-blue-600 via-blue-400 to-blue-300 text-black/50 font-medium hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out'
            >
              Done
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddNote