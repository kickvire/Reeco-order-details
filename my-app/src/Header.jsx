// import "./styles.css";

import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Reeco</div>
        <div className="nav">
          <span>Store</span>
          <span>Orders</span>
          <span>Analytics</span>
          <span>Cart</span>
          <span>User Name</span>
        </div>
      </header>
      <div className="order-header">
        <span>Orders Number: 1234567</span>
        <button>Back</button>
        <button>Approve</button>
      </div>
      <div className="main-content">
        <div className="content-header">
          <span>Supplier: East Company</span>
          <span>Shipping Date: 27/09/2023</span>
          <span>Total: 5</span>
          <span>Category:</span>
          <span>Department</span>
          <span>Status</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
