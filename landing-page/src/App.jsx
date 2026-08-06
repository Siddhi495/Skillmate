import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ExploreSkill from "./Pages/Dashboard/ExploreSkill";
import ChatPage from "./Pages/ChatPage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="explore" element={<ExploreSkill />} />
      </Route>

      {/* Chat */}
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/chat/:id" element={<ChatPage />} />

    <Route path="/profile" element={<Profile />} />
<Route path="/profile/edit" element={<EditProfile />} />

    </Routes>
  );
}

export default App;