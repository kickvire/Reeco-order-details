import React, { useState } from "react";
import "./App.css";

import { data } from "./assets/data";
import Header from "./Header";

function App() {
  const [productData, setProductData] = useState(data);
  const handleTick = (index) => {
    const modifiedArr = data.map((ele, id) => {
      if (id == index) {
        ele.statusShow = "Approved";
      }
      return ele;
    });
    setProductData(modifiedArr);
  };
  const handleCross = (index) => {
    const modifiedArr = data.map((ele, id) => {
      if (id == index) {
        ele.statusShow = "Missing";
      }
      return ele;
    });
    setProductData(modifiedArr);
  };
  console.log(data);
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="order-table">
          <table className="data-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((ele, index) => (
                <tr className="sticky-row">
                  <td>{ele.productName}</td>
                  <td>{ele.brand}</td>
                  <td>{ele.price}</td>
                  <td>{ele.quantity}</td>
                  <td>{ele.total}</td>
                  <td>
                    {ele.statusShow}
                    <span
                      onClick={() => handleTick(index)}
                      class="tick-icon"
                    ></span>
                    <span
                      onClick={() => handleCross(index)}
                      class="cross-icon"
                    ></span>
                    <span>Edit</span>
                  </td>
                </tr>
              ))}
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
