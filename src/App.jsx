import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import OTPVerificationPage from './pages/auth/OTPVerificationPage';
import CreatePasswordPage from './pages/auth/CreatePasswordPage';
import CreateProfilePage from './pages/auth/CreateProfilePage';
import EventDetailPage from './pages/EventDetailPage';
import CommunityDetailPage from './pages/CommunityDetailPage';
import CreateCommunityPage from './pages/CreateCommunityPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes without navbar and sidebar */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-otp" element={<OTPVerificationPage />} />
        <Route path="/create-password" element={<CreatePasswordPage />} />
        <Route path="/create-profile" element={<CreateProfilePage />} />

        {/* Main routes with navbar and sidebar */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/events/:id" element={<EventDetailPage />} />
                <Route path="/communities/:id" element={<CommunityDetailPage />} />
                <Route path="/communities/create" element={<CreateCommunityPage />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;