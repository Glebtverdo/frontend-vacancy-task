import { NavLink } from "react-router-dom"
import { menu } from "./menu"
import "./menuStyles.css"

export default function MenuComp() {
  return <div className="menuMain">
        <div className="menuLogoDiv">
          <p style={{fontSize: "34px"}}>ever<b>board</b></p>
          <p>project subheading</p>
        </div>
        {menu.map((item) => (
          <NavLink to={`/${item.id}`} key={item.id} 
            className={(isActive)=>  isActive.isActive ? "menuSelected" : "menuItem"}>
            <span>{item.icon}</span>
            <span>{item.title}</span>
            </NavLink>
        ))}
        <p style={{fontFamily: 'Montserrat',
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "100%",
          marginTop: "600px",
          color: "white"
          }}>Русский</p>
      </div>
}