import {createBrowserRouter} from "react-router"
import Home from "./features/notes/pages/Home"
import AddNote from "./features/notes/pages/AddNote"
import ViewNotes from "./features/notes/pages/ViewNotes"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/add-note",
        element: <AddNote />
    },
    {
        path: "/view-notes",
        element: <ViewNotes />
    }
])