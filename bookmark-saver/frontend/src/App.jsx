import "../src/index.css"
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


