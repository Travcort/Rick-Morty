import Navbar from '@/components/shared/Navbar';
import { Route, Routes } from "react-router";
import HomePage from '@/pages/Home';
import CharactersPage from '@/pages/Characters';
import LocationsPage from '@/pages/Locations';
import EpisodesPage from '@/pages/Episodes';
import { ThemeProvider } from '@/components/shared/ThemeContext';

function App() {
  return (
    <div className='bg-[var(--backgroundColour)]'>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='/locations' element={<LocationsPage />} />
          <Route path='/episodes' element={<EpisodesPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
