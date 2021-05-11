import React, { useState } from 'react';
import { Card, Form, Navbar, Nav } from 'react-bootstrap';
import FormInput from '../aComponents/FormInput';
import { Link } from 'react-router-dom';

function AddUser() {
    const btn = "btn-danger"; //testing
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [aMobile, setAMobile] = useState();
    const [dob, setDob] = useState();
    const [fatherName, setFatherName] = useState();
    const [fatherMobile, setFatherMobile] = useState();
    const [bloodGroup, setBloodGroup] = useState();
    const [gender, setGender] = useState();

    const [aadharNum, setAadharNum] = useState();
    const [panNum, setPanNum] = useState();
    const [bankName, setBankName] = useState();
    const [holderName, setHolderName] = useState();
    const [accountNum, setAccountNum] = useState();
    const [ifsc, setIfsc] = useState();

    const [highestQualification, setHighestQualification] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const [pState, setPState] = useState();
    const [pCity, setPCity] = useState();
    const [pPin, setPPin] = useState();
    const [pAddress, setPAddress] = useState();

    const [cState, setCState] = useState();
    const [cCity, setCCity] = useState();
    const [cPin, setCPin] = useState();
    const [cAddress, setCAddress] = useState();

    const [profileImg, setProfileImg] = useState("https://source.unsplash.com/1600x900/?nature,water");
    const [aadharImg, setAadharImg] = useState();
    const [panImg, setPanImg] = useState();

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
        <>
            {/* ....navBar... */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href=" " ><h3 style={{ marginBottom: "0px", marginTop: "0px", padding: "0", margin: "auto" }}
                >Add New Employee</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* to align extreme left and right s*/}
                    <Nav className="mr-auto">
                    </Nav>
                    {/* to align extreme left and right e */}
                    <Nav >
                        <Link to="Admin">Admin</Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* .....navBar End..... */}
            { /* form inside card  s*/}
            <Card style={{ width: '100%', height: "50%", }}>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Body>
                    {/* <Card.Title><h1><b>Form to Add User</b></h1></Card.Title> */}
                    <div style={{ height: "50%" }}></div>
                    <Card.Text>
                        {/* form S */}

                        <Form style={{ fontWeight: "bold" }}>
                            <div className="row">

                                <div className="col-md-12 mt-4 mb-4" >
                                    <div style={{ marginBottom: "-15px", zIndex: "1", display: "flex" }} className="">
                                    <div style={{ backgroundColor: "white", borderRadius: "5px",boxShadow: "0px -5px 10px 0px #ccc inset" }}>
                                            <h3 style={{marginBottom:"-2px"}}>Personal Detail</h3></div>
                                        </div>

                                    <div className="row" style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px 0 10px 2px", boxShadow: "5px 10px 20px 2px #ccc inset" }}>

                                        <FormInput
                                            label="First Name"
                                            type="text"
                                            pHolder="First Name"
                                            value={fName}
                                            myOnChange={(e) => setFName(e.target.value)}
                                        />
                                        <FormInput
                                            label="Last Name"
                                            type="text"
                                            pHolder="Last Name"
                                            value={lName}
                                            myOnChange={(e) => setLName(e.target.value)}
                                        />

                                        <FormInput
                                            label="Email"
                                            type="text"
                                            pHolder="Email id"
                                            value={email}
                                            myOnChange={(e) => setEmail(e.target.value)}
                                        />
                                        <FormInput
                                            label="Mobile Number"
                                            type="tel"
                                            pHolder="Valid Mobile Number"
                                            value={mobile}
                                            myOnChange={(e) => setMobile(e.target.value)}
                                        />
                                        <FormInput
                                            label="Alternate Mobile Number"
                                            type="tel"
                                            pHolder="Valid Mobile Number"
                                            value={aMobile}
                                            myOnChange={(e) => setAMobile(e.target.value)}
                                        />
                                        <FormInput
                                            label="DOB"
                                            type="date"
                                            pHolder="0-0-0"
                                            value={dob}
                                            myOnChange={(e) => setDob(e.target.value)}
                                        />
                                        <FormInput
                                            label="Father Name"
                                            type="text"
                                            pHolder="Father's Name"
                                            value={fatherName}
                                            myOnChange={(e) => setFatherName(e.target.value)}
                                        />
                                        <FormInput
                                            label="Blood Group"
                                            type="text"
                                            pHolder="Blood Group"
                                            value={bloodGroup}
                                            myOnChange={(e) => setBloodGroup(e.target.value)}
                                        />
                                        <FormInput
                                            label="Gender"
                                            type="text"
                                            pHolder="Gender"
                                            value={gender}
                                            myOnChange={(e) => setGender(e.target.value)}
                                        />
                                        <FormInput
                                            label="Father's Mobile Number"
                                            type="tel"
                                            pHolder="Father's Mobile Num"
                                            value={fatherMobile}
                                            myOnChange={(e) => setFatherMobile(e.target.value)}
                                        />

                                        <FormInput
                                            label="Aadhar Number"
                                            type="text"
                                            pHolder="Aadhar Number"
                                            value={aadharNum}
                                            myOnChange={(e) => setAadharNum(e.target.value)}
                                        />
                                        <FormInput
                                            label="Pan Number"
                                            type="text"
                                            pHolder="Pan Number"
                                            value={panNum}
                                            myOnChange={(e) => setPanNum(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* ...Bank... */}
                                <div className="col-md-12 mt-4 mb-4" >
                                    <div style={{ marginBottom: "-15px", zIndex: "1", display: "flex" }} className="">
                                    <div style={{ backgroundColor: "white", borderRadius: "5px",boxShadow: "0px -5px 10px 0px #ccc inset" }}>
                                            <h3 style={{marginBottom:"-2px"}}>Bank Detail</h3></div>
                                        </div>

                                    <div className="row" style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px 0 10px 2px", boxShadow: "5px 10px 20px 2px #ccc inset" }}>

                                        <FormInput
                                            label="Bank Name"
                                            type="text"
                                            pHolder="Bank Name"
                                            value={bankName}
                                            myOnChange={(e) => setBankName(e.target.value)}
                                        />
                                        <FormInput
                                            label="Bank Holder Name"
                                            type="text"
                                            pHolder="Holder Name"
                                            value={holderName}
                                            myOnChange={(e) => setHolderName(e.target.value)}
                                        />
                                        <FormInput
                                            label="Bank Account Number"
                                            type="text"
                                            pHolder="Bank Account Number"
                                            value={accountNum}
                                            myOnChange={(e) => setAccountNum(e.target.value)}
                                        />
                                        <FormInput
                                            label="IFSC"
                                            type="text"
                                            pHolder="IFSC"
                                            value={ifsc}
                                            myOnChange={(e) => setIfsc(e.target.value)}
                                        />
                                    </div></div>
                                <FormInput
                                    label="Highest Qualification"
                                    type="text"
                                    pHolder="Highest Qualification"
                                    value={highestQualification}
                                    myOnChange={(e) => setHighestQualification(e.target.value)}
                                />
                                <FormInput
                                    label="Job Start Date"
                                    type="date"
                                    pHolder="Job Start Date"
                                    value={startDate}
                                    myOnChange={(e) => setStartDate(e.target.value)}
                                />
                                <FormInput
                                    label="Job End Date"
                                    type="Date"
                                    pHolder="Job End Date"
                                    value={endDate}
                                    myOnChange={(e) => setEndDate(e.target.value)}
                                />
                                {/* ...Permananent... */}
                                <div className="col-md-12 mt-4" >
                                    <div style={{ marginBottom: "-15px", zIndex: "1", display: "flex" }} className="">
                                    <div style={{ backgroundColor: "white", borderRadius: "5px",boxShadow: "0px -5px 10px 0px #ccc inset" }}>
                                            <h3 style={{marginBottom:"-2px"}}>Permananent Address</h3></div>
                                        </div>

                                    <div className="row" style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px 0 10px 2px", boxShadow: "5px 10px 20px 2px #ccc inset" }}>

                                        <FormInput
                                            label="State"
                                            type="text"
                                            pHolder="Permananent State"
                                            value={pState}
                                            myOnChange={(e) => setPState(e.target.value)}
                                        />
                                        <FormInput
                                            label="City"
                                            type="text"
                                            pHolder="City"
                                            value={pCity}
                                            myOnChange={(e) => setPCity(e.target.value)}
                                        />
                                        <FormInput
                                            label="Pin"
                                            type="text"
                                            pHolder="Pin "
                                            value={pPin}
                                            myOnChange={(e) => setPPin(e.target.value)}
                                        />
                                        <FormInput
                                            label="Permanent Address"
                                            type="text"
                                            pHolder="Parmanent address"
                                            value={pAddress}
                                            myOnChange={(e) => setPAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* ...current.. */}
                                <div className="col-md-12 mt-4" >
                                    <div style={{ marginBottom: "-15px", zIndex: "1", display: "flex" }} className="">
                                    <div style={{ backgroundColor: "white", borderRadius: "5px",boxShadow: "0px -5px 10px 0px #ccc inset" }}>
                                            <h3 style={{marginBottom:"-2px"}}>Current Address</h3></div>
                                        </div>

                                    <div className="row " style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px 0 10px 0", boxShadow: "5px 10px 20px 2px #ccc inset" }}>

                                        <FormInput
                                            label="State"
                                            type="text"
                                            pHolder="Current State"
                                            value={cState}
                                            myOnChange={(e) => setCState(e.target.value)}
                                        />
                                        <FormInput
                                            label="City"
                                            type="text"
                                            pHolder="City"
                                            value={cCity}
                                            myOnChange={(e) => setCCity(e.target.value)}
                                        />
                                        <FormInput
                                            label="Pin"
                                            type="text"
                                            pHolder="Pin "
                                            value={cPin}
                                            myOnChange={(e) => setCPin(e.target.value)}
                                        />
                                        <FormInput
                                            label=" Address"
                                            type="text"
                                            pHolder="Current address"
                                            value={cAddress}
                                            myOnChange={(e) => setCAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ....submit section... */}
                            <div className="row" style={{ backgroundColor: "" }}>

                                <div className='col-md-12 mt-2' style={{ display: "flex", justifyContent: "flex-end" }}>

                                    <div style={{ alignSelf: 'center' }}>
                                        <Form.Group className="col-md-1" controlId="formBasicCheckbox">
                                            <Form.Label></Form.Label>
                                            <Form.Check type="checkbox" required label="Confirm" />
                                        </Form.Group>
                                    </div>
                                    <div style={{ alignSelf: 'center' }}>
                                        <button className="btn btn-primary btn-md" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* ....img.... */}

                            <div className="row">
                                <div className="col-md-12">
                                <div style={{ marginBottom: "-15px", zIndex: "1", display: "flex" }} className="mt-2">
                                <div style={{ backgroundColor: "white", borderRadius: "5px",boxShadow: "0px -5px 10px 0px #ccc inset" }}>
                                            <h3 style={{marginBottom:"-2px"}}>Images</h3></div>
                                        </div>

                                <div className="row" style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "40px 10px 20px 0px", boxShadow: "5px 10px 20px 2px #ccc inset" }}>

                                    <div className="col-md-4" style={{ backgroundColor: "" }}>
                                        <div style={{ marginLeft: "5%" }}>Profile Picture</div>
                                        <div style={{ display: "flex", justifyItems: "center", justifyContent: "center", flexDirection: "" }}>

                                            <img src={profileImg} width="95%" height="200px" alt="image" style={{ borderRadius: "5px" }}></img>

                                        </div>

                                        <div className="mt-2" style={{ display: "flex", justifyItems: "center", justifyContent: "center" }}>
                                            <input accept=".gif, .jpg, .png," type='file' id="profile" className="fileChooser" name="" onChange={imageHandlerProfile} />
                                            {/* style file selector */}
                                            <label className="lb" for="profile">Choose</label>
                                            <button className="btn btn-danger btn-sm" type="button">uplood</button>

                                        </div>

                                    </div>

                                    <div className="col-md-4" style={{ backgroundColor: "" }}>
                                        <div style={{ marginLeft: "5%" }}>Aadhar</div>
                                        <div style={{ display: "flex", justifyItems: "center", justifyContent: "center", flexDirection: "" }}>
                                            <img src="https://source.unsplash.com/1600x900/?nature,water" width="95%" height="200px" alt="image" style={{ borderRadius: "5px" }}></img>

                                        </div>

                                        <div className="mt-2" style={{ display: "flex", justifyItems: "center", justifyContent: "center" }}>
                                            <input multiple accept=".gif, .jpg, .png," type='file' id="aadhar" className="fileChooser" name="" />
                                            {/* style file selector */}
                                            <label className="lb" for="aadhar">Choose</label>
                                            <button className="btn btn-danger btn-sm" type="button">uplood</button>

                                        </div>

                                    </div>

                                    <div className="col-md-4" style={{ backgroundColor: "" }}>
                                        <div style={{ marginLeft: "5%" }}>PAN</div>
                                        <div style={{ display: "flex", justifyItems: "center", justifyContent: "center", flexDirection: "" }}>
                                            <img src="https://source.unsplash.com/1600x900/?nature,water" width="95%" height="200px" alt="image" style={{ borderRadius: "5px" }}></img>
                                            {/* <div className="" style={{backgroundColor:"red"}}> </div> */}

                                        </div>

                                        <div className="mt-2" style={{ display: "flex", justifyItems: "center", justifyContent: "center" }}>
                                            <input multiple accept=".gif, .jpg, .png," type='file' id="pan" className="fileChooser" name="" />
                                            {/* style file selector */}
                                            <label className="lb" for="pan">Choose</label>
                                            <button className="btn btn-danger btn-sm" type="button">uplood</button>

                                        </div>
                                    </div>
                                </div>
                            </div></div>

                            {/* ..img close... */}

                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>





        </>
    )
}

export default AddUser
