import React from 'react'
import CharacterGallery from './components/CharacterGallery'
import './App.css'

const App = () => {
  return (
    <div data-test='app-container'>
      <h1 className="site-title" data-test='site-title'>A Song of Fire and Ice</h1>
      <CharacterGallery />
    </div>
  );
};

export default App;