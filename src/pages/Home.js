import React from 'react';
import "./Home.css"

function Home() {
  return (
    <div id="home-container">
      <h1>Shop Mate</h1>
      <h3>Expect More. Pay Less</h3>
      
      <section id="hero-img">
      </section>      
      <h4 id="catch-phrase">All your favourite brands in one place</h4>
      
      

      
      <div className="category-img" id="box1"></div>
      <h4 className="category-title">SPORTS</h4>


      <div className="category-img" id="box2"></div>
      <h4 className="category-title">BEAUTY</h4>

      <div className="category-img" id="box3"></div>
      <h4 className="category-title">HOUSE</h4>       

      <div className="category-img" id="box4"></div>
      <h4 className="category-title">ELECTRONICS</h4>

    </div>
  )
}

export default Home;