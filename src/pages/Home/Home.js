import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import KidoLogo from "../../assets/kido-logo.png";

function Home(props) {

  return(
    <>
        <Navbar />
        <div className="wrapper d-flex align-items-stretch">
        <Sidebar />
            <div className="container main bg-light py-">
                <img src={KidoLogo} width="200" alt="icon"/>
                <div className="our-achivements py-3">
                    <h4 className="text-primary">Food Receipe Dashboard</h4>
                </div>
            </div>
        </div>
    </>
  );

}

export default Home;
