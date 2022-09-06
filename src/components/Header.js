import React from "react";
import logo from "../assets/image/logo.png";

export default function Header() {
  const [isOpen, open] = React.useState(true);

  function handleclick() {
    open((isOpen) => !isOpen);
  }

  return (
    <div className="header-back">
      <header className="container-css">
        <div className="nav-css">
          <div className="dir-logo">
            <a href="#">
              <img src={logo} alt="Icom Logo" className="logo" />
            </a>
          </div>
          <div className="dir-ul">
            <div className="new-ul">
              <a href="#" className="nav-links">
                <li>الرئيسية</li>
              </a>
              <a href="#about" className="nav-links">
                <li style={{marginLeft: '1vw'}}>عن الشركة</li>
              </a>
              <a href="#services" className="nav-links">
                <li>خدماتنا</li>
              </a>
              <i
                className={`fa-solid fa-bars ${
                  isOpen ? "showmenu" : "hidemenu"
                }`}
                onClick={handleclick}
              ></i>
            </div>
          </div>
          <a href="https://wa.me/message/GC6W4EGX6RLAN1" className="contact-us-btn">
                <li>اتصل بنا</li>
          </a>
        </div>
        <div className={`${isOpen ? "notmenu" : "menu"} new-nav`}>
          <div>
            <i
              className={`fa-solid fa-x ${isOpen ? "hidemenu" : "showmenu"}`}
              onClick={handleclick}
            ></i>
            <ol>
              <i className="fa-solid fa-xmark-large"></i>
              <li
                className={`nav-links-new ${isOpen ? "hidemenu" : "showmenu"}`}
              >
                <a href="#">الرئيسية</a>
              </li>
              <li
                className={`nav-links-new ${isOpen ? "hidemenu" : "showmenu"}`}
              >
                <a href="#about">عن الشركة</a>
              </li>
              <li
                className={`nav-links-new ${isOpen ? "hidemenu" : "showmenu"}`}
              >
                <a href="#services">خدماتنا</a>
              </li>
              <li
                className={`nav-links-new ${isOpen ? "hidemenu" : "showmenu"}`}
              >
                <a href="https://wa.me/message/GC6W4EGX6RLAN1">اتصل بنا</a>
              </li>
            </ol>
         
          </div>
        </div>
      </header>
    </div>
  );
}
