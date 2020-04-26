import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import './App.scss';
import './components/header.scss';
import Sidebar from './components/sidebar.jsx';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log('Up');

  return (
    <section>
      <header>
        <GiHamburgerMenu 
        className="hamburger"
        onClick={(event) => {
          event.preventDefault();
          console.log('Funciono');
          console.log(sidebarOpen);
          setSidebarOpen(prevState => {
            return !prevState;
          });
        }}
        size={42}
        color={"#333333"}
        />
      </header>
      <Sidebar show={sidebarOpen} />
      <main>
        Página 01 ou Página 02
      </main>
    </section>
  );
}

