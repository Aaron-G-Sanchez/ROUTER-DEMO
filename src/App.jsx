import './App.scss'
import { Route, Routes } from 'react-router-dom'
import * as page from './pages'

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<page.Home />} />
        <Route path="/about" element={<page.About />} />
      </Routes>
    </main>
  )
}

export default App
