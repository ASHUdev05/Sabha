import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from "./Feed";


function App() {
  return (
    <div className="app">
      <div className="app-header">
      <h3>Sabha</h3>
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
    </div>
  );
}

export default App;
