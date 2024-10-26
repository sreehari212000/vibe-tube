import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Homepage } from "./Pages/Homepage"
import Errorpage from "./components/Errorpage"
import SingleVideo from "./Pages/SingleVideo"

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/video/:id" element={<SingleVideo />}/>
                </Route>
                <Route path="*" element={<Errorpage />}/>
            </Routes>
        </div>
      )
}

export default App