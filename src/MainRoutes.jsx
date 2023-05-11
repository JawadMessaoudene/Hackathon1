import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Form from "./pages/Form"
import { Header } from "./Header"
const MainRoutes = () => {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  )
}
export default MainRoutes;