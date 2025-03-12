import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import OTPVerificationPage from './pages/auth/OTPVerificationPage';
import CreatePasswordPage from './pages/auth/CreatePasswordPage';
import CreateProfilePage from './pages/auth/CreateProfilePage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import EventDetailPage from './pages/EventDetailPage';
import CommunityDetailPage from './pages/CommunityDetailPage';
import CreateCommunityPage from './pages/CreateCommunityPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes without navbar and footer */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-otp" element={<OTPVerificationPage />} />
        <Route path="/create-password" element={<CreatePasswordPage />} />
        <Route path="/create-profile" element={<CreateProfilePage />} />

        {/* Main routes with navbar and footer */}
        <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} />
        <Route path="/home" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><ProfilePage /></MainLayout>} />
        <Route path="/events/:id" element={<MainLayout><EventDetailPage /></MainLayout>} />
        <Route path="/communities/:id" element={<MainLayout><CommunityDetailPage /></MainLayout>} />
        <Route path="/communities/create" element={<MainLayout><CreateCommunityPage /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;