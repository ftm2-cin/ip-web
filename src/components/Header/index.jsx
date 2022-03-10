import React from "react";
import { NavLink } from "react-router-dom";
import { IoSchoolOutline, IoFileTrayOutline } from "react-icons/io5";
import "./index.css";

function Header({ sections }) {
  const emmitAlert = () => {
    alert(
      "Certifique-se que está logadx no email do CIn! " +
        window.location.origin
    );
  };

  return (
    <header className="App-Header">
      <h1 className="App-Title">
        Monitoria <span>IP</span>
      </h1>
      <nav className="App-Nav">
        <ul>
          {sections.map(({ path, name, Icon }) => (
            <li className="App-NavItem">
              <NavLink to={path}>
                <Icon />
                {name}
              </NavLink>
            </li>
          ))}
          <li className="App-NavItem">
            <a
              onClick={emmitAlert}
              href="https://docs.google.com/spreadsheets/d/12zaq3LsBcZh9qMyFbs6gdU2_Y9qPn53Csj3eYwTA6fE/"
              target="_blank"
              rel="noreferrer"
            >
              <IoSchoolOutline />
              Notas
            </a>
          </li>
          <li className="App-NavItem">
            <a
              onClick={emmitAlert}
              href="https://drive.google.com/drive/folders/1STo4COxHusk2v2W9XzXmIXLEzq7MO00W?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <IoFileTrayOutline />
              Drive
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
