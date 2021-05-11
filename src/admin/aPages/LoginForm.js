import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import image1 from '../Image/loginpng.png';
import {Link} from 'react-router-dom';
import '../CSS/Login.css';
import { Navbar, Nav, Form, Button, Card, Row } from 'react-bootstrap';




class LoginForm extends Component{

    constructor(props){
        super(props);
       
        this.state = {
            // email : "",
            // password : "",
            // logged : false,
           
        }
    }
    //for session clear
    // logout= ()=>{
   
    //     window.sessionStorage.clear();
    //     this.setState({loggedIn : false});
    
        //return <Redirect to="/" />
    
           // }

    //         componentDidMount(){
    //            this.logout();
    //         }
    //         //session clear last 


    // handleChangeAll = (event) =>{

    //     this.setState({[event.target.name ] : event.target.value});

    // }



    // // Submit function start here 

    // handleSubmit = (event) =>{
    //         event.preventDefault();
            
    //         if(this.state.email.length !=0 && this.state.password.length !=0)
    //         {

    //             let formData = new FormData();
    //             formData.append("email",this.state.email);
    //             formData.append("password",this.state.password);
    //             //http://reactproject.atspace.cc/login_signup/Login.php
    //             //axios.post('http://localhost/login_signup/Login.php',formData)
    //             axios.post('http://localhost/hrm/Login.php',formData)
    //             .then((response)=>{

    //                console.log(response.data);
    //               if(response.data[0] === "success")
    //               {
    //                   //this.setState({logged:true});
    
    //                   window.sessionStorage.setItem("userID",response.data[1]);
    //                   this.setState({logged:true});
                     
    //               }
    //               else
    //                { 
    //                    console.log("Else data ",response.data);
    //                    this.setState({logged : false});
    //                    document.getElementById('para').innerHTML="Invalid Email or Password";
    //                }


    //             }).catch(function (error){

    //                 alert(error);
    //             })

               
    //         }
    //         else
    //         {
    //             alert("Password Must be more the 1 digit ");
    //         }


    // }

    render(){

        // if(this.state.logged === true)
        // {
        //     return <Redirect to="/Home" />
        // }


          return(
                <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{height:"60px"}}>
                <Navbar.Brand href=" " ><h3 style={{ marginBottom: "0px", marginTop: "0px", padding: "0", margin: "auto" }}
                ></h3></Navbar.Brand>
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

    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 col-sm-12">
                
               
                
                <div className="wrapperLogin fadeInDown">
                  <div id="formContent">
                  
                    <div className="fadeIn first">
                      <img src={image1} id="icon" alt="User Icon" height="145px"  />
                      <h3>Admin Login</h3>    
                    </div>

                  
                    <form   onSubmit={this.handleSubmit}>
                      <input type="email" id="login" className="fadeIn second" name="email" placeholder="email"  value={this.state.email} onChange={this.handleChangeAll}  required/>
                      <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"  value={this.state.password} onChange={this.handleChangeAll} required />
                      <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>

                   
                    <div id="formFooter">
                      {/* <div className="row" style={{display:"flex",justifyContent:"center",justifyItems:"center"}}>  */}
                     <div style={{marginTop:"-15px"}}> <Link to="/registration"><p style={{color:"black"}}>Sign UP</p></Link></div>
                      {/* </div> */}
                        <p id="para" style={{color :"red"}}></p>
                    </div>

                  </div>
                </div>

            
            
            </div>
         </div>
        </div> 

 </div>

        );

    }
}


export default LoginForm;