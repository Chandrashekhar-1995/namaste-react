
import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
//  Build a Header Componend with a Logo and Nav Items & Cart.
const Header=()=>{
    const [btnName, setBtnName] = useState("Login");
    return(
        <div className="header">
          <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
            <h2 className="logo-name">Food Flow</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Cart</li>
                    <li>{<button className="loginBtn" onClick={()=>{btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
