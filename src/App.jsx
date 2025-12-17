import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TeamProvider } from './context/TeamContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import TrainingSchedule from './pages/TrainingSchedule';
import School from './pages/School';
import PrayerRequest from './pages/PrayerRequest';
import Records from './pages/Records';
import Contact from './pages/Contact';
import Building from './pages/Building';
import Preparation from './pages/Preparation';
import Items from './pages/Items';
import ReadyItems from './pages/Checklist';
import Praise from './pages/Praise';
import ChurchInfo from './pages/ChurchInfo';
import BoardWrite from './pages/BoardWrite';
import BoardDetail from './pages/BoardDetail';
import BoardEdit from './pages/BoardEdit';

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
                <Route path="/schedule" element={<Schedule />} />
                <Route
                  path="/training-schedule"
                  element={<TrainingSchedule />}
                />
                <Route path="/school" element={<School />} />
                <Route path="/prayer-request" element={<PrayerRequest />} />
                <Route path="/records" element={<Records />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/building" element={<Building />} />
                <Route path="/preparation" element={<Preparation />} />
                <Route path="/items" element={<Items />} />
                <Route path="/checklist" element={<ReadyItems />} />
                <Route path="/praise" element={<Praise />} />
                <Route path="/church-info" element={<ChurchInfo />} />

                {/* 공통 게시판 페이지 */}
                <Route path="/write/:category" element={<BoardWrite />} />
                <Route path="/:category/:id" element={<BoardDetail />} />
                <Route path="/edit/:category/:id" element={<BoardEdit />} />
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
