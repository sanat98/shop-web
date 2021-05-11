import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ANavbar from '../aComponents/ANavbar';
import axios from 'axios'
import FormInput from '../aComponents/FormInput';
import './Registration.css';

function Registration() {
    const [name, setName] = useState();
    const [last, setLast] = useState();
    const [dob, setDob] = useState();
    const [mob, setMob] = useState();
    const [panNum, setPanNum] = useState();
    const [aadharNum, setAadharNum] = useState();
    const [shopName, setShopName] = useState(); // do we need more dyanamic
    const [aadharImg, setAadharImg] = useState("https://source.unsplash.com/1600x900/?medicine,pils");
    const [panImg, setPanImg] = useState("https://source.unsplash.com/1600x900/?pancard,india-panCard");
    const [profileImg, setProfileImg] = useState("https://source.unsplash.com/1600x900/?profilepic,dp,profile");
    //const [shopName, setShopName] = useState();
    const [email, setEmail] = useState();//
    const [password, setPassword] = useState();

    const[pf,setPF]=useState("");



    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('name', name);
        // formData.append('cat',cat);
        // formData.append('brand',brand);
        // formData.append('price',price);
        // formData.append('quantity',quantity);
        // formData.append('review',review);
        // formData.append('description',description);
        // formData.append('barcode',barcode);
        // formData.append('oldPrice',oldPrice);
        // formData.append('offerPercent',offerPercent);
        // formData.append('offerLast',offerLast);

        axios.post('http://localhost/shop-web/test.php', formData).then(() => alert("Successfully added"))

            .catch(function (error) {
                alert("yes" + error)
            })
    }

    const imageHandlerAadhar = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAadharImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    // .............

    const imageHandlerPan = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPanImg(reader.result);
                
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        setPF(e.target.files[0].name); //for custom file chhoser
    }
    //...........
    const imageHandlerProfile = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result);
                
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: "60px" }}>
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



            {/* form inside card  s*/}
            <Card style={{ width: '100%', height: "50%", }}>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Body>
                    <Card.Title ><div style={{ marginBottom: "-21px", zIndex: "1", display: "flex" }} className=""><div style={{ marginBottom: "-8px", zIndex: "1", backgroundColor: "white" }}><b>Registration Page</b></div></div></Card.Title>
                    <div style={{ height: "50%" }}></div>
                    <Card.Text>
                        {/* formS */}

                        <Form className='p-2' onSubmit={handleSubmit} style={{ fontWeight: "bold" }}>
                            {/* <div className="row" >
                                <div className="col-md-7" style={{ border: "1px solid #ccc", borderRadius: "8px", paddingTop: "15px" }}>
                                    <div style={{ display: "flex", flexWrap: "wrap" ,marginTop:"10px"}}> */}

<div className="row">

<div className="col-md-7 mt-4 mb-4" >
    <div style={{ marginBottom: "-15px", zIndex: "1", display: "flex" }} className="">
        <div style={{ backgroundColor: "white", borderRadius: "5px", boxShadow: "0px -5px 10px 0px #ccc inset" }}>
            <h3 style={{ marginBottom: "-2px" }}>User (Shopkeeper) detail</h3></div>
    </div>

    <div className="row" style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px 0 10px 2px", boxShadow: "5px 10px 20px 2px #ccc inset" }}>




                                        <FormInput
                                            label="Name"
                                            type="text"
                                            value={name}
                                            myOnChange={(e) => setName(e.target.value)}
                                        />

                                        <FormInput
                                            label="Last Name"
                                            type="text"
                                            value={last}
                                            myOnChange={(e) => setLast(e.target.value)}
                                        />
                                        <FormInput
                                            label="Shop Name"
                                            type="text"
                                            value={shopName}
                                            myOnChange={(e) => setShopName(e.target.value)}
                                        />

                                        <FormInput
                                            label="Mobile Number"
                                            type="number"
                                            value={mob}
                                            myOnChange={(e) => setMob(e.target.value)}
                                        />

                                        <FormInput
                                            label="Date Of Birth"
                                            type="date"
                                            value={dob}
                                            myOnChange={(e) => setDob(e.target.value)}
                                        />

                                        <FormInput
                                            label="Pan Number"
                                            type="text"
                                            value={panNum}
                                            myOnChange={(e) => setPanNum(e.target.value)}
                                        />

                                        <FormInput
                                            label="Aadhar Number"
                                            type="text"
                                            value={aadharNum}
                                            myOnChange={(e) => setAadharNum(e.target.value)}
                                        />


                                        {/* 
                                        <FormInput
                                            label="Aadhar Image "
                                            type="file"
                                            value={aadharImg}
                                            myOnChange={(e) => setAadharImg(e.target.value)}
                                        /> */}

                                        {/* <FormInput
                                            label="Pan Image"
                                            type="file"
                                            value={panImg}
                                            myOnChange={(e) => setPanImg(e.target.value)}
                                        /> */}
                                        {/* <FormInput
                                            label="Profile Picture"
                                            type="file"
                                            value={profileImg}
                                            myOnChange={(e) => setProfileImg(e.target.value)}
                                        /> */}

                                        <Form.Group className="col-md-12 mt-3" controlId="" style={{ marginBottom: "10px" }}>
                                            <Form.Label style={{ marginBottom: "0" }}>Email<span style={{ color: "white" }}>cccc</span></Form.Label>
                                            <Form.Control readOnly type="email" id="" name="" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group className="col-md-12 mt-3" controlId="" style={{ marginBottom: "10px" }}>
                                            <Form.Label style={{ marginBottom: "0" }}>Password</Form.Label>
                                            <Form.Control type="password" id="" name="" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </Form.Group>


                                        </div>

                                        {/* <FormInput
                                            label="Email"
                                            type="email"
                                            value={email}
                                            myOnChange={(e) => setEmail(e.target.value)}
                                        /> */}
                                        {/* <FormInput
                                            label="Password"
                                            type="password"
                                            value={password}
                                            myOnChange={(e) => setPassword(e.target.value)}
                                        /> */}


                                    </div>
                                

                                {/* ....img.... */}
                                

                                <div className="col-md-5" style={{ backgroundColor: "" }}>
                                     <div className="row">
                                         {/* profile pic */}
                                         
                                        <div className="col-md-12 mt-2 mb-2 ">
                                        <div className="row" >
                                        <div className="col-md-5" style={{marginLeft:"20%"}}>Profile Picture</div></div>

                                            <div style={{ display: "flex", justifyItems: "center", justifyContent: "center" }}>
                                                <img  src={profileImg} width="60%" height="100px" alt="image" style={{ borderRadius: "5px" }}></img>
                                            </div>
                                            <div className="mt-2" style={{ display: "flex", justifyItems: "center", justifyContent: "center", backgroundColor: "" }}>
                                                <input   accept=".gif, .jpg, .png," type='file' id="profile" className="fileChooser" name="" onChange={imageHandlerProfile} />
                                                 {/* style file selector */}
                                                 <label  className="lb"for="profile">Choose</label>
                                                <button className="btn btn-danger btn-sm" type="button">uplood</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ...aadhar... */}
                                        <div className="col-md-12 mt-2 mb-2 " style={{}}>
                                            <div className="row" >
                                            <div className="col-md-4" style={{marginLeft:"20%"}}>Aadhar Card</div></div>

                                            <div style={{ display: "flex", justifyItems: "center", justifyContent: "center" }}>
                                                
                                                
                                                <img src={aadharImg} width="60%" height="100px" alt="image" style={{ borderRadius: "5px" }}></img>
                                            </div>
                                            <div className="mt-2" style={{ display: "flex", justifyItems: "center", justifyContent: "center", backgroundColor: "" }}>
                                                <input   accept=".gif, .jpg, .png," type='file' id="aadhar" className="fileChooser" name="" onChange={imageHandlerAadhar} />
                                                    {/* style file selector */}
                                                    <label  className="lb"for="aadhar">Choose</label>
                                                <button className="btn btn-danger btn-sm" type="button">uplood</button>
                                            </div>
                                        </div>
                                    
                                                {/* ...pan... */}
                                    <div className="row">
                                        <div className="col-md-12 mt-2 mb-2 ">
                                        <div className="row" >
                                            <div className="col-md-4" style={{marginLeft:"20%"}}>PAN Card</div></div>

                                            <div style={{ display: "flex", justifyItems: "center", justifyContent: "center" }}>
                                                <img src={panImg} width="60%" height="100px" alt="image" style={{ borderRadius: "5px" }}></img>
                                            </div>
                                            <div className="mt-2" style={{ display: "flex", justifyItems: "center", justifyContent: "center", backgroundColor: "" }}>
                                   
                                                <input    accept=".gif, .jpg, .png," type='file' id="pan"className="fileChooser" name="" onChange={imageHandlerPan} />
                                                             {/* style file selector */}
                                                 <label  className="lb"for="pan">Choose</label>
                                                  {/* <div style={{display:"flex",flexWrap:"nowrap",marginRight:"2px",width:"100px",fontSize:"10px",marginTop:"8px"}}> <div>{pf} </div>   </div> */}
                                                <button className="btn btn-danger btn-sm" type="button">uplood</button>
                                            </div>
                                        </div>
                                    </div>
                                             







                                </div></div>
                                {/* submit and checkbox*/}

                               
                                <div className="row" style={{backgroundColor:""}}>
                                     <div className='col-md-12 ' style={{ display: "flex", justifyContent: "center",justifyItems:"center",backgroundColor:"" }}>
                                    
                                        <div style={{ alignSelf: 'center' }}>
                                            <Form.Group className="col-md-1" controlId="formBasicCheckbox">
                                                <Form.Label></Form.Label>
                                                <Form.Check type="checkbox" required label="Confirm" />
                                            </Form.Group>
                                        </div>
                                        <div style={{ alignSelf: 'center' }}>
                                            <button className="btn btn-primary btn-sm" type="button">
                                                Submit
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            

                            {/* </div> */}



                        </Form>

                        {/* form */}
                    </Card.Text>

                </Card.Body>
            </Card>

            {/* <button className="btn btn-primary btn-sm" type="button">
                Submit
  </button> */}



        </div>
    )
}

export default Registration
