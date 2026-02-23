import axios from 'axios'
import { useState } from 'react'

const AddBookmark = () => {

    const [title, setTitle] = useState("")
    const [link, setLink] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        await axios.post("http://localhost:3000/api/bookmarks/create", {
            title,
            link
        })
    }

  return (
    <div>
      <p>Add Bookmark</p>
      <form className='add-form' onSubmit={() => (handleSubmit())}>
        <input 
        type="text"
        onChange={(e) => (setTitle(e.target.value))}
        placeholder="Title" 
        className='bm-input'
        />
        <input 
        type="text" 
        onChange={(e) => (setLink(e.target.value))}
        placeholder="Link" 
        className='bm-input'
        />
        <button type="submit" className='submit-btn'>Submit</button>
      </form>
    </div>
  )
}

export default AddBookmark
