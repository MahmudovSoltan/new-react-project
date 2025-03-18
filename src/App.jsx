import React, { useState } from 'react'
import Header from './components/header/Header'
import "./index.css";
import Button from './components/addButton/Button';

// import Sidebar from './components/sidebar/SideBar';
import MainPage from './pages/main/MainPage';
import Modal from './components/modal/Modal';
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div> 
          <Header/>
          <Button setIsOpen={setIsOpen}/>
         <MainPage/>
       <Modal setIsOpen={setIsOpen} isOpen={isOpen}/>
    </div>
  )
}

export default App
