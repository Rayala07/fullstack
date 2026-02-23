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
    }, [bookmarks])

  return (
    <div className="bm-card">
      {bookmarks.map((bm) => {
        return (
        <div>
            <p>{bm.title}</p>
            <p>{bm.link}</p>
        </div>
        )
      })}
    </div>
  )
}

export default BookmarkList
