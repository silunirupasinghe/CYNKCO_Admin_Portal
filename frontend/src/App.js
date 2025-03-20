import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserDashboard from "./Sidebar/Userdashboard"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to Connex Global Portal</h1>
              <a href="/dashboard">Go to Dashboard</a>
            </div>
          }
        />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;