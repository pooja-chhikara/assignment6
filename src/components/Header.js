import { LOGO_URL } from "../utils/constants"
import { useState } from "react"

const Header=()=>{
const [btnName,setBtnName]=useState("Login")
console.log(btnName)
    return (
        <div className="header">
    <div className='logo-container'>
    
        <img  src={LOGO_URL}
        className="logo"/>
    
    </div>
    <div className='nav-items'>
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
       {console.log(btnName)}
        <button className="login"  onClick={()=>{
            btnName==="Login"?
            setBtnName("Logout"):
            setBtnName("Login");}}> {btnName}</button>
    </ul>
   
    </div>
    
        </div>
    )
    }
    export default Header