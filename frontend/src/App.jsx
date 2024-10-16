import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Box, useColorModeValue } from '@chakra-ui/react';
import HomePage from './pages/Home.jsx';
import CharactersPage from './pages/Characters.jsx';
import LocationsPage from './pages/Locations.jsx';
import EpisodesPage from './pages/Episodes.jsx';

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("white.200", "white.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />        
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
      </Routes>
    </Box>
  );
}

export default App;