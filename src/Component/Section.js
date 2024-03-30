import React from 'react'
 import socialmediaicon from './imgs/socialmediaicon'
 import vetcareteamthree from './imgs/vetcareteamthree'
 import vetcareteamtwo from './imgs/vetcareteamtwo'
 import vetcareteam from './imgs/vetcareteam'
 import injectionshape from './imgs/injectionshape'
 import heartShape from './imgs/heartShape'
 import treatmenticonimg from './imgs/treatmenticonimg'






export default function Section() {
  return (
    <>
        <div className="sixth-section">
        <div className="container">
        <div className="row py-3">
      <h2 className="text-center">The vetcare team</h2>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint alias cumque nisi adipisci tempore, placeat sapiente eligendi earum. Temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur debitis odit possimus reiciendis voluptatum rem.</p>
      <div className="col-lg-4 col-md-12">
        <div className="vetcareteam">
          <img src={vetcareteam} alt="" /></div>
          <div className="social">
          <h5 className="text-center py-3">Jennifer Mullen</h5>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos accusantium accusamus, laborum optio porro consequatur at asperiores fuga facilis!</p>
          <img src={socialmediaicon} alt="" />
        </div>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="vetcareteam">
          <img src={vetcareteamtwo} alt="" /></div>
          <div className="social">
          <h5 className="text-center py-3">Shreen Collin</h5>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos accusantium accusamus, laborum optio porro consequatur at asperiores fuga facilis!</p>
          <img src={socialmediaicon} alt="" />
        </div>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="vetcareteam">
          <img src={vetcareteamthree} alt="" /></div>
          <div className="social">
          <h5 className="text-center py-3">Jennifer Mullen</h5>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos accusantium accusamus, laborum optio porro consequatur at asperiores fuga facilis!</p>
          <img src={socialmediaicon} alt="" />
        </div>
      </div>
</div>
</div>
</div>

<div className="seventh-section">
<div className="container">
  <div className="row py-5">
    <div className="col-lg-4 col-md-12">
    <div className="instuments">
      <img src={injectionshape} alt="" /></div>
      <div className="numbers">
        <h2>+54789</h2>
        <h4>Vaccinations</h4>
      </div>
    </div>
    <div className="col-lg-4 col-md-12">
    <div className="instuments">
      <img src={heartShape} alt="" /></div>
      <div className="numbers">
        <h2>+45891</h2>
        <h4>Happy Clients</h4>
      </div>
    </div>
    <div className="col-lg-4 col-md-12">
    <div className="instuments">
      <img src={treatmenticonimg} alt="" /></div>
      <div className="numbers">
        <h2>+34569</h2>
        <h4>Departments</h4>
      </div>
    </div>
  </div>
</div>
</div>

<div className="eight-section">
<div className="container">
  <div className="row py-3">
      <h2 className="text-center">Recent Post </h2>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint alias cumque nisi adipisci tempore, placeat sapiente eligendi earum. Temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur debitis odit possimus reiciendis voluptatum rem.</p>
      <div className="col-lg-4 col-md-12">
        <div className="recent-post">
          <img src={recentpostone} alt="" /></div>
          <h3>As a veterinarian and lover of animals.</h3>
          <a href="">January 1, 2024</a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos accusantium accusamus, laborum optio porro consequatur at asperiores fuga facilis!</p>
          <a href="" className="readmore">Read More</a>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="recent-post">
            <img src={recentposttwo} alt="" /></div>
            <h3>As a veterinarian and lover of animals.</h3>
            <a href="">January 1, 2024</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos accusantium accusamus, laborum optio porro consequatur at asperiores fuga facilis!</p>
            <a href="" className="readmore">Read More</a>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="recent-post">
              <img src={recentpostthree} alt="" /></div>
              <h3>As a veterinarian and lover of animals.</h3>
              <a href="">January 1, 2024</a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos accusantium accusamus, laborum optio porro consequatur at asperiores fuga facilis!</p>
              <a href="#" className="readmore">Read More</a>
            </div>
</div>
</div>
</div>
</>
)
} 
