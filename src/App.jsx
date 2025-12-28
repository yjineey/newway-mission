import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TeamProvider } from './context/TeamContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import TrainingSchedule from './pages/TrainingSchedule';
import School from './pages/School';
import PrayerRequest from './pages/PrayerRequest';
import Records from './pages/Records';
import Contact from './pages/Contact';
import Building from './pages/Building';
import Preparation from './pages/Preparation';
import Items from './pages/Items';
import Notice from './pages/Notice';
import Praise from './pages/Praise';
import ChurchInfo from './pages/ChurchInfo';
import BloodDeclaration from './pages/BloodDeclaration';
import Arabic from './pages/Arabic';
import BoardWrite from './pages/BoardWrite';
import BoardDetail from './pages/BoardDetail';
import BoardEdit from './pages/BoardEdit';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  const [theme, setTheme] = useState('light');

  // 다크모드 초기화
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Router basename="/newway-mission">
      <ScrollToTop />
      <AuthProvider>
        <TeamProvider>
          <div className="min-h-screen flex flex-col">
            <Header theme={theme} toggleTheme={toggleTheme} />

            <main className="flex-1 mobile-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Navigate to="/" replace />} />
                <Route
                  path="/training-schedule"
                  element={<TrainingSchedule />}
                />
                <Route path="/school" element={<School />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/preparation" element={<Preparation />} />
                <Route path="/items" element={<Items />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/church-info" element={<ChurchInfo />} />
                <Route
                  path="/blood-declaration"
                  element={<BloodDeclaration />}
                />
                <Route path="/arabic" element={<Arabic />} />

                {/* 로그인 필요한 페이지 */}
                <Route
                  path="/prayer-request"
                  element={
                    <ProtectedRoute>
                      <PrayerRequest />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/records"
                  element={
                    <ProtectedRoute>
                      <Records />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/building"
                  element={
                    <ProtectedRoute>
                      <Building />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/praise"
                  element={
                    <ProtectedRoute>
                      <Praise />
                    </ProtectedRoute>
                  }
                />

                {/* 공통 게시판 페이지 */}
                <Route
                  path="/write/:category"
                  element={
                    <ProtectedRoute>
                      <BoardWrite />
                    </ProtectedRoute>
                  }
                />
                <Route path="/:category/:id" element={<BoardDetail />} />
                <Route
                  path="/edit/:category/:id"
                  element={
                    <ProtectedRoute>
                      <BoardEdit />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>

            <Footer />
          </div>
        </TeamProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
