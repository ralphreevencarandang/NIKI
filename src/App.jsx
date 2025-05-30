import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage"
import BrowsePage from "./pages/BrowsePage";
import NotFoundPage from './pages/NotFoundPage'
function App() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <HomePage/>}/>
            <Route path="/browse" element={ <BrowsePage/>}/>
            <Route path="*" element={ <NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
