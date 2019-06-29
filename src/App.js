import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ValueProposition from './components/valueProposition/ValueProposition';
import ActivityHeader from './components/activityHeader/ActivityHeader';
import Product from './components/productComponent/Product';

function App() {
  return (
    <div>
      <NavBar/>
      <ValueProposition/> 
      <ActivityHeader/>
      <Product/>
    </div>
  );
}

export default App;
