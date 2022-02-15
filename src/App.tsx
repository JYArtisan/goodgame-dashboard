import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Layout from './components/Layout';

function App() {
 
  return (
    <div className="App">
      <GlobalStyle/>
      <Layout />
    </div>
  );
}

export default App;
