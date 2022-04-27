import React from "react";
import { Link } from "react-router-dom";

function navbar() {
    return (
        <div>
       <ul>
         <li>
         <Link to="/">home</Link>
         </li>
         <li>
         <Link to="/about">about</Link>
         </li>
         <li>
         <Link to="/contact">contact</Link>
         </li>
         <li>
         <Link to="/project">project</Link>
         </li>
       </ul> 
       </div>
        
    );

}

export default navbar;