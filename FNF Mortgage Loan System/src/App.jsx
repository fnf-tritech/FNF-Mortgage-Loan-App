import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import LoginSignupPage from "./LoginSignupPage"; 


function App() {
   // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);
 // eslint-disable-next-line
  const handleLogin = (value) => {
    setIsLoggedIn(value);
    localStorage.setItem("isLoggedIn", JSON.stringify(value));
  };

  return (
    <div>
      <Header />
      {/* <LogoutButton handleLogout={handleLogin} /> */}
      <div className="main">
        {/* <Router>
          <Routes>
            {isLoggedIn ? (
              <React.Fragment>
                <Route path="/" element={<HomePages />} />
                <Route path="/LoanPage" element={<LoanPage />} />
                <Route path="/Calculator" element={<Calculator />} />
                <Route path="/Chatbot" element={<Chatbot />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/Status" element={<Status />} />
                <Route path="/PersonalDetails" element={<PersonalDetails />} />
                <Route path="/PropertyDetails" element={<PropertyDetails />} />
                <Route path="/Identity" element={<Identity />} />
                <Route path="/CreditCard" element={<CreditCard />} />
                <Route path="/Assets" element={<Assets />} />
                <Route path="/Income" element={<Income />} />
                <Route path="/Address" element={<Address />} />
                <Route path="/Employee" element={<Employee />} />
                <Route path="/Investment" element={<Investment />} />
                <Route path="/Loan" element={<Loan />} />
                <Route path="/brokers" element={<BrokersPages />} />
                <Route path="/lenders" element={<LendersPages />} />
                <Route path="/about" element={<AboutPages />} />
                <Route path="/borrowers" element={<BorrowersPage />} />
                <Route path="/TicketForm" element={<TicketForm/>} />
                <Route path="/response/:ticketId" element={<ResponseForm/>} />

              </React.Fragment>
            ) : (
              <Route
                path="/*"
                element={
                  <LoginSignupPage setIsLoggedIn={handleLogin} /> 
                }
              />
            )}
          </Routes>
        </Router> */}
        <LoginSignupPage></LoginSignupPage>
      </div>
    </div>
  );
}

export default App;
