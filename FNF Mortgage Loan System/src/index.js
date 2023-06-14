import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import HomePages from './HomePages';
import LoanPage from './LoanPage';
import { HomePageContent } from './HomePageContent';
import { LoanPageContent } from './LoanPageContent';
import PersonalDetails from './PersonalDetails';
import PropertyDetails from './PropertyDetails';
import Income from './Income';
import Address from './Address';
import Loan from './Loan';
import Identity from './Identity';
import CreditCard from './CreditCard';
import Employee from './Employee';
import Assets from './Assets';
import Investment from './Investment';
import Status from './Status';
import TicketForm from './TicketForm';
import ResponseForm, { loader as ticketLoader } from './ResponseForm';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Calculator from './Calculator';
import BrokersPages from './BrokersPages';
import BorrowersPage from './BorrowersPage';
import LendersPages from './LendersPages';
import AboutPages from './AboutPages';
import Chatbot from './Chatbot';
import FAQ from './FAQ';
import DownloadLink from './DownloadPdf';


function AppContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);

  const handleLogin = (value) => {
    setIsLoggedIn(value);
    localStorage.setItem("isLoggedIn", JSON.stringify(value));
  };

  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    {
      path: "/raiseticket", element: <TicketForm />, children: [
        {
          path: "ticket/:ticketId", element: <ResponseForm />,
          loader: ticketLoader
        },
    ] },
    

    { path: "/brokers", element: <BrokersPages /> },
    { path: "/borrowers", element: <BorrowersPage /> },
    { path: "/lenders", element: <LendersPages /> },
    { path: "/aboutus", element: <AboutPages /> },
    { path: "/chatbot", element: <Chatbot /> },
    { path: "/faq", element: <FAQ /> },
    { path: "/loanpage", element: <LoanPage />, children: [
        { path: "content", element: <LoanPageContent /> },
        { path: "personaldetails", element: <PersonalDetails /> },
        { path: "propertydetails", element: <PropertyDetails /> },
        { path: "income", element: <Income /> },
        { path: "address", element: <Address /> },
        { path: "loan", element: <Loan /> },
        { path: "identity", element: <Identity /> },
        { path: "creditcard", element: <CreditCard /> },
        { path: "employee", element: <Employee /> },
        { path: "assets", element: <Assets /> },
      { path: "investment", element: <Investment /> },
      
      ]
    },
    {
      path: "/homepage",
      element: <HomePages />,
      children: [
        { path: "content", element: <HomePageContent /> },
      ]
    },
    { path: "/calculator", element: <Calculator /> },
    { path: "/status", element: <Status /> },
    { path: "/download", element: <DownloadLink /> },
    
    
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        <App isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      </RouterProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppContainer />);

reportWebVitals();