import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';


import { Outlet } from 'react-router-dom';
import Header from './Header';

function HomePages({ userId }) {
  const [data, setData] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    fetch('https://mortgageautomationgroupa.azurewebsites.net/register', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        const currentUser = data.filter(item => item.id === userId);
        setData(currentUser);
      })
      .catch(error => console.error(error));
  }, [userId]);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };
  
  return (
    <div>
      <Header/>
      <NavBar />
     
      <Outlet></Outlet>
    </div>
  );
}

export default HomePages;
   
   
   
   