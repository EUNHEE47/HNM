/* eslint-disable jsx-a11y/alt-text */
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);
  const menu = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "스포츠",
    "Sale",
    "지속가능성",
  ];

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <Container className="header">
      <div>
        <div className="side-menu" style={{ width: width }}>
          <button className="closebtn" onClick={() => setWidth(0)}>
            &times;
          </button>
          <div className="side-menu-list" id="menu-list">
            {menu.map((menu, index) => (
              <button key={index}>{menu}</button>
            ))}
          </div>
        </div>
        <div className="burger-menu">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div className="login-button" onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>&nbsp;로그아웃</span>
          </div>
        ) : (
          <div className="login-button" onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>&nbsp;로그인</span>
          </div>
        )}
      </div>
      <div className="nav-logo">
        <img
          width={60}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="menu-wrap">
        <ul className="menu-area">
          {menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            onKeyPress={(e) => search(e)}
            placeholder="제품검색"
          />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
