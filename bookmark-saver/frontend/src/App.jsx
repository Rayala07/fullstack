import "../src/index.css"
import AddBookmark from "./components/AddBookmark"
import BookmarkList from "./components/BookmarkList"
import TopBar from "./components/TopBar"

export const App = () => {
  return (
    <div id="app">
      <TopBar />
      <BookmarkList />
    </div>
  )
}


