import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Notices from './pages/Notices'
import School from './pages/School'
import Prayer from './pages/Prayer'
import Word from './pages/Word'
import Records from './pages/Records'
import Contact from './pages/Contact'
import Building from './pages/Building'
import Missions from './pages/Missions'
import Preparation from './pages/Preparation'
import Items from './pages/Items'
import Praise from './pages/Praise'
import ChurchInfo from './pages/ChurchInfo'

function App() {
  const [theme, setTheme] = useState('light')
  const [selectedTeam, setSelectedTeam] = useState('egypt')

  // 다크모드 초기화
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  // 팀 선택 초기화
  useEffect(() => {
    const savedTeam = localStorage.getItem('selectedTeam') || 'egypt'
    setSelectedTeam(savedTeam)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const handleTeamChange = (team) => {
    setSelectedTeam(team)
    localStorage.setItem('selectedTeam', team)
  }

  return (
    <Router basename="/newway-mission">
      <div className="min-h-screen flex flex-col">
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <main className="flex-1 mobile-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  selectedTeam={selectedTeam} 
                  onTeamChange={handleTeamChange} 
                />
              } 
            />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/school" element={<School />} />
            <Route path="/prayer" element={<Prayer />} />
            <Route path="/word" element={<Word />} />
            <Route path="/records" element={<Records />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/building" element={<Building />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/preparation" element={<Preparation />} />
            <Route path="/items" element={<Items />} />
            <Route path="/praise" element={<Praise />} />
            <Route path="/church-info" element={<ChurchInfo />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App

