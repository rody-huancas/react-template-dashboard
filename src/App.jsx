import { BrowserRouter, Route, Routes } from "react-router-dom";
// Layouts
import { LayoutAdmin } from "./layouts";
// pages
import { Chat, Error404, ForgetPassword, Home, Login, Profile, Register, Tickets } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

        {/* Admin */}
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
          <Route path="tickets" element={<Tickets />} />
        </Route>

        {/* Error */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;