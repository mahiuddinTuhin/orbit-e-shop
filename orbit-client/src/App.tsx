import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import { LoginPage } from "./routes/routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
