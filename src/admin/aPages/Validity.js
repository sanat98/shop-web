import React,{Component} from 'react';
import {Badge, Button} from 'react-bootstrap';
import ANavbar from '../aComponents/ANavbar'
import LableText from '../aComponents/constants';
import {Link} from 'react-router-dom';
import './Registration.css';

export default class Validity extends Component {
    render() {
        return (
            <>
            <div>
                <ANavbar
            heading="Validity"
            />
            </div>

            {/* mainn */}
            
                <div className="row">
                <div className="col-md-12" style={{display:"flex",flexDirection:"",justifyContent:"center"}}>
                <div className="">
                    Status: <span style={{color:"white",backgroundColor:"#050",padding:"0 5px 2px 5px",borderRadius:"5px"}}>Active</span>
                </div>   
                </div>

                <div className="col-md-12" style={{display:"flex",flexDirection:"",justifyContent:"center"}}>
                <div className="">
                    Remaining Days: 10
                </div>   
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <button className="lb">Recharge</button>
                    </div>
                </div></div>
            


            </>
        )
    }
}
