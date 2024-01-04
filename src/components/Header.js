
import { LOGO_URL } from "../../utils/constants";
//  Build a Header Componend with a Logo and Nav Items & Cart.
const Header=()=>{
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
                    <li>Signin</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
