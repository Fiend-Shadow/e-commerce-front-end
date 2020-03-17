import React from 'react';
import "./Home.css"

function Home() {
  return (
    <div id="home-container">
      <h1>Shop Mate</h1>
      <h3>Expect More. Pay Less</h3>
      
      <section id="hero-container">
        <h4 id="hero-title">All your favourite brands in one place</h4>
      </section>
      
      <div className="category-box" id="box1">
          <h4>Sports</h4>          
      </div>

      <div className="category-box" id="box2">
          <h4>Beauty</h4>          
      </div>

      <div className="category-box" id="box3">
          <h4>House</h4>          
      </div>

      <div className="category-box" id="box4">
          <h4>Electronics</h4>          
      </div>

    </div>
  )
}

export default Home;