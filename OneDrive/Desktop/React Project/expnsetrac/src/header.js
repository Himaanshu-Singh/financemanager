import React from "react";
import "./index.css"; 
import profile from "../src/assets/profile.png";
import search from "../src/assets/search.png";
import logo from "../src/assets/logo.png";

const Header = () => {
  return (
    <><body className="header">
     
      <div className="header-section">
      <div className="logo-container">
        <img
          src={logo} 
          alt="Logo"
          className="logo" />
      </div>

      
      <div className="search-bar-container">
        <div className="search-bar-wrapper">
          <img
            src={search} 
            alt="Search"
            className="search-icon" />
          <input
            type="text"
            placeholder="Quick Search"
            className="search-bar" />
        </div>
      </div>

      
      <div className="profile-container">
        <img
          src={profile} 
          alt="Profile"
          className="profile-picture" />
        <div className="profile-details">
          <span className="profile-name">Himanshu Singh</span>
          <span className="profile-status">Platinum Member</span>
        </div>
      </div>

    
    </div>
    
    
       
  
      <div className="welcome-text">
          <span className="greeting">Welcome, Jake! 👋</span>
          <h1 className="dashboard-title">Your Dashboard</h1>
        
        <div className="actions">
          <div className="action-card">Top Up</div>
          <div className="action-card">Send</div>
          <div className="action-card">Request</div>
          <div className="action-card">Crypto</div>
          <div className="action-card">More</div>
        </div>
      </div>
    
    
      <div className="dashboard">
      
      <div className="row">
        <div className="credit-history-container">
          <h2>Credit History</h2>
          <div className="credit-history">
            <span className="amount">$22,752.00</span>
            <span className="growth">+2.5% vs Last Week</span>
          </div>
          <div className="chart-buttons">
            <button>12 months</button>
            <button>30 days</button>
            <button>7 days</button>
            <button>24 hours</button>
          </div>
          <div className="chart">
            
            <div>Chart Placeholder</div>
          </div>
        </div>

        <div className="ecard-container">
          <h3>e-Card</h3>
          <p className="amount">$5,234.32</p>
          <p>Virtual Card</p>
          <div className="card-details">
            <p>Johar Wahyu Ngudiono</p>
            <p>04/29</p>
          </div>
        </div>
      </div>

     
      <div className="row">
        <div className="credit-limit-container">
          <h3>Credit Limit</h3>
          <div className="limit-bar">
            <div className="current-limit" style={{ width: "45%" }}></div>
          </div>
          <div className="limit-details">
            <p>Minimum Payment: $500</p>
            <p>Debit for the Period: $1,500</p>
            <p>Recommended Payment: $500</p>
          </div>
        </div>

        <div className="recent-transactions-container">
          <h3>Recent Transactions</h3>
          <div className="transaction">
            <span>Hafid William</span>
            <span>$200.00</span>
          </div>
          <div className="transaction">
            <span>Apple Store</span>
            <span>$1,200.00</span>
          </div>
          <div className="transaction">
            <span>Farrel Putra</span>
            <span>$150.00</span>
          </div>
        </div>
      </div>
    </div>
      </body>
    </>
  );
};

export default Header;
