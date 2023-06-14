import React, { useState, useEffect } from "react";
import { getFeatureKeyValue } from "./featureKeyQuery";
import { Link } from 'react-router-dom';

function NavBar() {
  function LogoutButton({ handleLogout }) {
    const handleClick = () => {
      handleLogout(false);
      window.location.href = "/";
    };

    return <button onClick={handleClick}>Logout</button>;
  }
// eslint-disable-next-line
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

  // Define a state variable to store the feature flag value
  const [showcalc, setShowcalc] = useState(false);

  // Define a connection string and a feature key
  const connectionString = "Endpoint=https://myappcalcreact.azconfig.io;Id=h0Uc;Secret=LhROrss9VzcgWYLyKq6Vru7oFUQ1HxjMvVbSCvOk8Ws=";
  const featureKey = ".appconfig.featureflag/showcalc";

  // Use useEffect hook to call the getFeatureKeyValue function and update the state variable   
  useEffect(() => {
    getFeatureKeyValue(connectionString, featureKey)
      .then((value) => {
        setShowcalc(value.enabled);
      })
      .catch((err) => {
        console.error("Failed to Fetch Keys:", err);
      });
  }, []); // Run the effect only once on mount

  return (
    <nav style={styles.nav}>
      <ul style={styles.list}>
        <li><a href="/homepage/content" style={styles.link}>Home</a></li>
        <li><a href="/loanpage/content" style={styles.link}>Loan</a></li>
        { /*<li><Link to='/status' style={styles.link}>Status</Link></li>*/}
        {/* Conditionally render the calculator link based on the feature flag */}
        {showcalc && <li><Link to='/calculator' style={styles.link}>Calculator</Link></li>}
        {<li>
         {/* <Link to="/download">Download PDF</Link>*/}
        </li>}
        <li><a href="/raiseticket" style={styles.link}>Ticket</a></li>
      </ul>

      <div style={styles.userInfoContainer}>
        <div style={styles.userInfo}>
          <p style={styles.infoLabel}>User ID:</p>
          <p style={styles.infoValue}>{localStorage.getItem("uid")}</p>
        </div>
        <div style={styles.userInfo}>
          <p style={styles.infoLabel}> App ID:</p>
          <p style={styles.infoValue}>{localStorage.getItem("appID")}</p>
        </div>
      </div>
      
      <div style={styles.logoutContainer}>
        <LogoutButton handleLogout={handleLogin} />
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#E5E9EC',
    padding: '10px',
  },
  list: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    marginRight: '10px',
  },
  userInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px',
  },
  infoLabel: {
    fontSize: '12px',
    marginBottom: '4px',
  },
  infoValue: {
    fontSize: '14px',
    fontWeight: 'bold',
    margin: 0,
  },
  logoutContainer: {
    marginLeft: '20px',
  },
};

export default NavBar;
