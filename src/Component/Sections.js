import React from 'react'
import firstimg from './imgs/firstimg.png'
import animalimg from './imgs/animalimg.png'
 import recentpostone from './imgs/recentpostone.png'
 import recentposttwo from './imgs/recentposttwo.png'
 import recentpostthree from './imgs/recentpostthree.png'
 import animalloverimg from './imgs/animalloverimg.png'
 import animalsectiontreatdogthree from './imgs/animalsectiontreatdogthree.png'
 import animalsectiontreatdog from './imgs/animalsectiontreatdog.png'
 import animalsectiontreat from './imgs/animalsectiontreat.png'
 import socialmediaicon from './imgs/socialmediaicon.png'
 import vetcareteamthree from './imgs/vetcareteamthree.png'
 import vetcareteamtwo from './imgs/vetcareteamtwo.png'
 import vetcareteam from './imgs/vetcareteam.png'
 import injectionshape from './imgs/injectionshape.png'
 import heartShape from './imgs/heartShape.png'
 import treatmenticonimg from './imgs/treatmenticonimg.png'
 import { FaSearch ,FaBars,FaInstagram,FaWhatsapp,FaFacebook,FaTwitter
 } from "react-icons/fa";
 import backgroundimg from './imgs/backgroundimg.png'
 import { CgSearch } from "react-icons/cg";

export default function Sections() {
  return (
  <>
    <div className="first-section">
    <div className="container">
      <div className="row py-3">
        <div className="col-lg-6 col-md-12">
          <h2>First I wanted to be a veterinarian</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt nobis, praesentium adipisci saepe quaerat sapiente, odit porro aut molestiae quos velit quo accusamus tempora laudantium ut excepturi, vitae molestias.</p>
          <button className="btn btn-primary mx-2">Our Service</button>
          <button className="btn btn-primary mx-2">Contact Us</button>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="doc-image d-flex justify-content-center align-items-center m-auto">
          <img src={firstimg} alt="Banner" className="img-fluid" />
        </div>
      </div>
      </div>
    </div>
    </div>

 {/* section-1 end 
 section-2 start  */}

  <div className="second-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <h2>As a veterinarian and lover of animals.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt nobis, praesentium adipisci saepe quaerat sapiente, odit porro aut molestiae quos velit quo accusamus tempora laudantium ut excepturi, vitae molestias.</p>
        <button className="btn btn-primary">Contact Us</button>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="animal-image d-flex justify-content-center align-items-center m-auto">
        <img src={animalimg} alt="" className="img-fluid"/>
      </div>
    </div>
  </div>
</div>
</div>


 {/* section-2 end 
 section-3 start  */}

     <div className="third-section">
     <div className="container">
       <div className="row">
           <h2 className="text-center py-3">Title Here</h2>
           <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint alias cumque nisi adipisci tempore, placeat sapiente eligendi earum. Temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur debitis odit possimus reiciendis voluptatum rem.</p>
           <div className="col-lg-4 col-md-12">
             <div className="title-imgs">
               <img src={recentpostone} alt="" /></div>
               <h5 className="text-center py-3">Veterinarian</h5>
               <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos accusantium accusamus, laborum optio porro consequatur at asperiores fuga facilis!</p>
           </div>
           <div className="col-lg-4 col-md-12">
             <div className="title-imgs">
               <img src={recentposttwo} alt="" /></div>
               <h5 className="text-center py-3">Vaccination Care</h5>
               <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos accusantium accusamus, laborum optio porro consequatur at asperiores fuga facilis!</p>
           </div>
           <div className="col-lg-4 col-md-12"> 
             <div className="title-imgs">
               <img src={recentpostthree} alt="" /></div>
               <h5 className="text-center py-3">Dental Care</h5>
               <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos accusantium accusamus, laborum optio porro consequatur at asperiores fuga facilis!</p>
             </div>
           </div>
     </div>
   </div>

    {/* section-3 end 
    section-4 start  */}

    <div className="fouth-section">
     <div className="container">
       <div className="row py-3">
         <div className="col-lg-6 col-md-12"> 
           <div className="animal-lover-img d-flex justify-content-center align-items-center m-auto">
           <img src={animalloverimg} alt=""  className="img-fluid" /></div>
         </div>
         <div className="col-lg-6 col-md-12"> 
           <h2>As a veterinarian and lover of animals.</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt nobis, praesentium adipisci saepe quaerat sapiente, odit porro aut molestiae quos velit quo accusamus tempora laudantium ut excepturi, vitae molestias.</p>
           <button className="btn btn-primary">Our Service</button>
         </div>
       </div>
     </div></div>
  


      {/* section-4 end 
     section-5 start  */}

      <div className="fifth-section">
      <div className="container">
        <div className="row">
            <h2 className="text-center">Title Here</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint alias cumque nisi adipisci tempore, placeat sapiente eligendi earum. Temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur debitis odit possimus reiciendis voluptatum rem.</p>
            <div className="col-lg-4 col-md-12">
              <div className="title-dog-imgs">
                <img src={animalsectiontreatdog} alt="" /></div>
                <div className="money"><h5 className="text-center py-3">$30</h5></div>
               <button className="btn btn-primary">Buy Now</button>
              </div>
          
            <div className="col-lg-4 col-md-12">
              <div className="title-dog-imgs">
                <img src={animalsectiontreat} alt="" /></div>
                <div className="money"><h5 className="text-center py-3">$25</h5></div>
                <button className="btn btn-primary">Buy Now</button>
              </div>
          
            <div className="col-lg-4 col-md-12">
              <div className="title-dog-imgs">
                <img  src={animalsectiontreatdogthree} alt="" /></div>
                <div className="money"><h5 className="text-center py-3">$20</h5></div>
                <button className="btn btn-primary">Buy Now</button>
            
            </div>
      </div>
      </div>
      </div>
      
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

 {/* section-8 end 
  footer start  */}

  <footer>
  <div className="container">
    <div className="row py-3">
      <div className="col-lg-4 col-md-12 about-section">
        <h3>About</h3>
        <ul><li>History</li>
        <li>Our Team</li>
        <li>Brand Guildness</li>
        <li>T&C</li>
        <li>Privacy Policy</li></ul>
      </div>
        <div className="col-lg-4 col-md-12 service-section">
          <h3>Service</h3>
          <ul>
          <li>How to Order</li>
          <li>Our Product</li>
          <li>Order Status</li>
          <li>Promo</li>
          <li>Payment Method</li>
          </ul>
        </div>

      <div className="col-lg-4 col-md-12">
        <h2>Title Here</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="search-container">
          <input type="text" id="search-input" placeholder="Search..." />
          <button type="submit" id="search-button">
          <CgSearch />
          </button>

        <div className="social-icons py-3">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
          <FaWhatsapp />
        </div>
      </div>
</div>
    </div>
  </div>
  </footer>   
      </>
      )
      }
