import React from "react";
import "../App.css";
import PopularSearch from "./PopularSearch";
function ACRepair() {
  return (
    <>
      <div className="container">
        <div className="container-fluid p-10">
          <div style={{ padding: "2px" }}></div>
          <div className="banner44">
            <div style={{ padding: "10px" }}></div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-lg-3">
              <a href="/acrepairshops" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/carrier-removebg-preview.png"
                  width="30px"
                />
                Carrier
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/acrepairshops" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/LG-removebg-preview.png"
                  width="20px"
                />
                LG
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/acrepairshops" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/toshiba-removebg-preview.png"
                  width="30px"
                />
                Toshiba
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/acrepairshops" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/onida-removebg-preview.png"
                  width="30px"
                />
                Onida
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <a href="/acrepairshops" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/whirlpool__2_-removebg-preview.png"
                  width="30px"
                />
                Whirlpool
              </a>
            </div>
          </div>
        </div>

        <hr />
        <PopularSearch/>
        <div style={{ padding: "2px" }}></div>
      </div>
    </>
  );
}

export default ACRepair;
