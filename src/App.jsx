import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import { Error404, Login, Register } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Error */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;