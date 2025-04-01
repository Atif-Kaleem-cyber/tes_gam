import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import GameDetails from './pages/GameDetails';
import News from './pages/News';
import About from './pages/About';
import SignIn from './pages/SignIn';
import JoinNow from './pages/JoinNow';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/join" element={<JoinNow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
