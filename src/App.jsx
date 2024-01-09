import { BrowserRouter, Route, Routes } from "react-router-dom";
// Layouts
import { LayoutAdmin, LayoutAuth } from "./layouts";
// pages
import { Chat, Error404, Home, Login, Register } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Admin */}
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
        </Route>

        {/* Error */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;