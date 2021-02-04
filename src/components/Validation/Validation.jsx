import React from "react";
import "./Validation.css";
import { MdClear } from "react-icons/md";
import { FaYoutube } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import {  FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import castle from "./assets/castle.png";
import moon from "./assets/moon.png";
import halfTree from "./assets/half-tree.png";
import tree from "./assets/tree.png";
import { Link } from "react-router-dom";

export default function Validation() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className="val-section">
      <div className="bg-img"></div>
      <div className="val-content">
        <div className="val-text">
          <Link className="val-clear-icon" to='/main'>
            <MdClear size={30} color="#ccc" />
          </Link>
          <div className="val-all-text-wrapper">
          <h2 className="val-title">Get In Touch</h2>
           <div className="val-main-text">
               If you have any questions, please feel free to ask. <br/>
               I'll get back to you as soon as I can. That's promise!
           </div>
          <div className="form-icon">
           <form onSubmit={handleSubmit}>
              <div>
               <input className="inputFirstName" type="text" name="FirstName" placeholder="Name" />
              </div>
              <div>
               <input className="inputSurname" type="text" name="LastName" placeholder="Surname" />
               </div>
               <div>
                <textarea className="message-text" placeholder="Message" cols="30" rows="12"></textarea>
               </div>
               <div className="submitButton">
                 <button  type="submit">Submit</button>
               </div>
           </form>
           <div className="social-icons">
             <div className="insta-icon">
              <FaInstagram color="#fff" size={25} />
             </div>
             <div className="fb-icon">
              <FaFacebookF color="#fff" size={25} />
             </div>
             <div className="yt-icon">
              <FaYoutube color="#fff" size={25} />
             </div>
              <div className="tg-icon">
              <FaTelegramPlane color="#fff" size={25} />
              </div>
           </div>
          </div>
        </div>     
        </div>
        <div className="val-view">
          <div className="mountain-img">
            {/* <img src={mountains} alt="mountains"/> */}
          </div>
          <div className="val-img-castle">
            <img src={castle} alt="Castle"/>
          </div>
          <div className="val-moon">
            <img src={moon} alt="moon"/>
          </div>
          <div className="val-bottom-half-tree">
            <img src={halfTree} alt="half tree"/>
          </div>
          <div className="val-center-half-tree">
            <img src={halfTree} alt="Half Tree"/>
          </div>
          <div className="val-tree">
            <img src={tree} alt="Tree"/>
          </div>
        </div>
      </div>
    </div>
  );
}
