import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { TeamProvider } from './context/TeamContext'
import { AuthProvider } from './context/AuthContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Notices from './pages/Notices'
import School from './pages/School'
import TeamTraining from './pages/TeamTraining'
import Prayer from './pages/Prayer'
import Word from './pages/Word'
import Records from './pages/Records'
import Contact from './pages/Contact'
import Building from './pages/Building'
import Missions from './pages/Missions'
import Preparation from './pages/Preparation'
import Items from './pages/Items'
import DepartureCheck from './pages/DepartureCheck'
import FieldCheck from './pages/FieldCheck'
import Praise from './pages/Praise'
import ChurchInfo from './pages/ChurchInfo'
import BoardWrite from './pages/BoardWrite'
import BoardDetail from './pages/BoardDetail'
import BoardEdit from './pages/BoardEdit'

function App() {
  const [theme, setTheme] = useState('light')

  // 다크모드 초기화
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <Router basename="/newway-mission">
      <AuthProvider>
        <TeamProvider>
          <div className="min-h-screen flex flex-col">
            <Header theme={theme} toggleTheme={toggleTheme} />
            
            <main className="flex-1 mobile-content">
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/notices" element={<Notices />} />
              <Route path="/school" element={<School />} />
              <Route path="/teamtraining" element={<TeamTraining />} />
              <Route path="/prayer" element={<Prayer />} />
              <Route path="/word" element={<Word />} />
              <Route path="/records" element={<Records />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/building" element={<Building />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/preparation" element={<Preparation />} />
              <Route path="/items" element={<Items />} />
              <Route path="/departure-check" element={<DepartureCheck />} />
              <Route path="/field-check" element={<FieldCheck />} />
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
  )
}

export default App

