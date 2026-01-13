import React, { useState, useEffect } from 'react'
import Header from './Header.jsx'
import Banner from './Banner.jsx'
import Services from './Services.jsx'
import ProjectTable from './ProjectTable.jsx'
import Contactform from './Contactform.jsx'
import Footer from './Footer.jsx'
function App() {
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
      <ProjectTable />
      <Contactform />
      <Footer />
    </div>
  )
}

export default App

