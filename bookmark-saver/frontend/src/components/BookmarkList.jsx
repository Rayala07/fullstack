import axios from "axios"
import { useEffect, useState } from "react"

const BookmarkList = () => {

    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
    async function getBookmarks() {
        const response = await axios.get("http://localhost:3000/api/bookmarks/fetch")

        setBookmarks(response.data.bookmarks)
        console.log(bookmarks)
    }
        getBookmarks()
    }, [setBookmarks])

  return (
    <div className="bm-card">
      {bookmarks.map((bm, index) => {
        return (
        <div key={index} className="bm-card">
            <p>{bm.title}</p>
            <p>{bm.link}</p>
            <button className="delete-btn">X</button>
        </div>
        )
      })}
    </div>
  )
}

export default BookmarkList
