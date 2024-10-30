import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Box, useColorModeValue } from '@chakra-ui/react';
import HomePage from './pages/Home.jsx';
import CharactersPage from './pages/Characters.jsx';
import LocationsPage from './pages/Locations.jsx';
import EpisodesPage from './pages/Episodes.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <Box maxH={"100vh"}  display={'flex'} flexDirection={'column'} bg={useColorModeValue("white.200", "white.900")}>
      <Navbar />
      <Box flex={1} overflow={'hidden'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />        
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;