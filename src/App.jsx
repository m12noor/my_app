<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
=======
import React from 'react'
>>>>>>> 5f95a22d7716f211fe09664ee51718e88a19fceb
import Header from './Header.jsx'
import Banner from './Banner.jsx'
import Services from './Services.jsx'
import ProjectTable from './ProjectTable.jsx'
import Contactform from './Contactform.jsx'
import Footer from './Footer.jsx'
function App() {
<<<<<<< HEAD
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const saveduser = localStorage.getItem('userEmail');

    if (saveduser) {
      setIsLoggedIn(true);
      setUserEmail(saveduser);
    }

  }, []);

  const handleLogin = (email, password) => {


    if (email && password) {
      localStorage.setItem('userEmail', email);

      setUserEmail(email);
      setIsLoggedIn(true);

    };
  }


  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail('');
    setIsLoggedIn(false);
  };


  return (
    <div>

      <Header
        isLoggedIn={isLoggedIn} // login status
        userEmail={userEmail}  // user identity
        onLogin={handleLogin}  // login function
        onLogout={handleLogout} // logout function
      />

      <Banner />
      <Services isLoggedIn={isLoggedIn} />
=======
  return (
    <div>
      < Header />
      <Banner />
      <Services />
>>>>>>> 5f95a22d7716f211fe09664ee51718e88a19fceb
      <ProjectTable />
      <Contactform />
      <Footer />
    </div>
  )
}

export default App

