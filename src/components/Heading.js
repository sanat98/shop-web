import React from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import catData from './Category.json';

function Heading(props) {
    return (
        <>
      
      {/* <Nav> */}
        {
        //     catData.map((cat)=>(
        //         <NavItem>
        //         <NavLink >
         
        //   {cat.category} 
        
        //   </NavLink>
        // </NavItem>

        //     ))
        <NavItem>
            <NavLink  name={props.name} onClick={props.myOnclick}>
                {props.category}
                {/* <span style={{display:""}}> {props.fun}</span> */}
                 {/* <img src={props.ipath}></img> */}

            </NavLink>
        </NavItem>
}
          
       
      {/* </Nav> */}
      
     
     
    </>
    )
}

export default Heading
