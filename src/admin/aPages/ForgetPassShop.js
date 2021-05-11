import React, { Component } from 'react';

import { Navbar, Nav, Form, Button, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios'
import FormInput from '../aComponents/FormInput';
import './Registration.css';
import tik1 from '../Image/tik1.gif';

export default class ForgetPassShop extends Component {
    constructor(props){
        

        super(props);
        this.state={
            mobile:"123456789",
            show:"none",
            message:"",
            warning:"",
            password:"",
            cPassword:"",
            color:"black",
            statusCorrect:"none",
            statusMessage:"",
            svgDisplay:"none"

            
        }
        this.mobCheck=this.mobCheck.bind(this);
        this.onChangeC=this.onChangeC.bind(this);
        this.checkPass=this.checkPass.bind(this);
    }
    
    mobCheck=()=>{
        if(this.state.mobile=="7677256089"){
            this.setState({show:""});
            this.setState({message:" is registerd. Please enter a new Password"});
            this.setState({warning:"green"});


            
        }
       
        else{
            this.setState({show:""});
            this.setState({message:" is not registerd"});
            this.setState({warning:"red"})   
        }     
    }
    onChangeC=(e)=>{
      this.setState({cPassword:e.target.value});
    //   alert("b");
    //   this.checkPass();
    //   alert("aa")
     
    }
    checkPass=()=>{
        if(this.state.password===this.state.cPassword )
        {
            this.setState({color:"green"});
            this.setState({statusCorrect:""});
            this.setState({statusMessage:"correct"});
            this.setState({svgDisplay:""})
    }
    if(this.state.password!==this.state.cPassword ){
    this.setState({color:"red"});
    this.setState({statusCorrect:""});
    this.setState({statusMessage:"unmatched"});
    this.setState({svgDisplay:"none"})
    }
    if(this.state.password=="" ||this.state.cPassword==""){
        this.setState({color:"black"});
        this.setState({statusCorrect:"none"});
        this.setState({svgDisplay:"none"})
    }
}

    render() {
        
        return (
            <>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: "60px" }}>
                        <Navbar.Brand href=" " ><h3 style={{ marginBottom: "0px", marginTop: "0px", padding: "0", margin: "auto" }}
                        >Password Reset</h3></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            {/* to align extreme left and right s*/}
                            <Nav className="mr-auto">
                            </Nav>
                            {/* to align extreme left and right e */}

                            <Nav >




                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                {/* main */}

                <Card>
                    <Card.Body>

                        <div className="row">
                            <div className="col-md6">

                           
                        
                        <Form.Group className="col-md-11 mt-3" controlId="" style={{ marginBottom: "10px" }}>
                                            <Form.Label style={{ marginBottom: "0" }}>Enter Your Registerd Mobile Number</Form.Label>
                                            <Form.Control input type="tel" onClick={()=>this.setState({show:"none"})} ref={this.textInput}   onChange={(e)=>this.setState({mobile:e.target.value})} value={this.state.mobile} name="" placeholder=""/>
                                        </Form.Group>
                                      
                                        <button className="btn btn-primary ml-3" onClick={this.mobCheck}>Search</button>
                                        <div className="ml-3" style={{display:this.state.show,color:this.state.warning}}><span style={{color:"black"}}>{this.state.mobile}</span>{this.state.message} </div>
                                        <Form.Group className="col-md-12 mt-3" controlId="" style={{ marginBottom: "10px" }}>
                                            <Form.Label style={{ marginBottom: "0" }}>Please Enter a New Password</Form.Label>
                                            <Form.Control  type="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} onKeyUp={this.checkPass} id="" name=""/>
                                        </Form.Group>
                                        {/* cc{this.state.password}  vvv{this.state.cPassword} */}
                                        <Form.Group className="col-md-12 mt-3" controlId="" style={{ marginBottom: "10px" }}>
                                        <div className="row">           
                                        <div className="col-md-6 " style={{display:"flex",justifyContent:""}}>
                                            <Form.Label style={{ marginBottom: "0" }}>
                                                
                                              <div className="ml-2">Please Confirm </div>  </Form.Label></div>
            
                                            
                                                
          <div className="col-md-4" style={{display:"flex",justifyContent:"flex-end"}}>
               <div style={{color:this.state.color,display:this.state.statusCorrect}}>{this.state.statusMessage }
               
               {/* <div style={{display:this.state.svgDisplay}}> */}


               <svg  style={{display:this.state.svgDisplay}} className="checkmark ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                   <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                   <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
               
               </div>
               {/* </div> */}
               
          </div> 
          
          </div>

                                               
                                       
                                            <Form.Control  type="password" value={this.state.cPassword} onChange={this.onChangeC} onKeyUp={this.checkPass} id="" name=""/>
                                        </Form.Group>
                                        

                                        <button type="button" onClick={this.checkPass} className='lb ml-3'>Submit</button>


                                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
