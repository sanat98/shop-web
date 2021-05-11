import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Nav, Navbar, Form, Button, Card } from 'react-bootstrap';
import ANavbar from '../aComponents/ANavbar';
import axios from 'axios';


function AddBrand() {
    const [catData, setcatData] = useState([]);
    // const [hasError, setHasError] = useState(false)
    const [brandName, setBrandName] = useState();
    const [brandCat, setBrandCat] = useState();
    const [brandImg, setBrandImg] = useState("https://source.unsplash.com/1600x900/?nature,water");

    useEffect(() => {
        axios("http://ec2-65-0-32-190.ap-south-1.compute.amazonaws.com:8082/api/category/getallcategory").then(
            res => setcatData(res.data)
        )
        
    },[])


    const handleSubmit=(event)=>{
        event.preventDefault();
    
        // let formData=new FormData();
        // formData.append('name',categoryT);
        // formData.append('shopId',"AVI123");
        // formData.append('title',categoryT);
    
        //formData.append('categoryImg',categoryImg);
        var brandTemp=brandName.split(' ').join('_');
    
        axios({
            method: 'POST',
                    url: 'http://ec2-65-0-32-190.ap-south-1.compute.amazonaws.com:8082/api/brand/create',
                    data: {
                        "name": brandName.toUpperCase(),
                        "shopId": "AVI123",
                        "title": brandTemp.toUpperCase(),
                        "category":brandCat
                    }}
        ).then(()=>alert("Successfully added"))
               
                .catch(function(error){
                    alert("yes"+error)
                })
               
    
    
        }
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setBrandImg(reader.result)

            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    return (
        <div>
            <ANavbar
                heading="Add Brand"
            />

            { /* form inside card  s*/}
            <Card style={{ width: '100%', height: "50%", }}>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Body>
                    <Card.Title><h3><b>Form to add Brand</b></h3></Card.Title>
                    <div style={{ height: "50%" }}></div>
                    <Card.Text>
                        {/* form S */}

                        <Form onSubmit={handleSubmit} style={{ fontWeight: "bold" }}>
                            <div className="row">
                                <div className="col-md-6" style={{ backgroundColor: "" }}>
                                    <Form.Label style={{ marginBottom: "-5px" }}>Brand Name</Form.Label>
                                    <Form.Control style={{ marginBottom: "10px" }} type='text' id="" name="" value={brandName} onChange={(e) => setBrandName(e.target.value)} />

                                    <Form.Label style={{ marginBottom: "-5px" }}>Category</Form.Label>
                                    <select className="ml-2 mb-3" name="cat" id="cat" value={brandCat} onChange={(e) => setBrandCat(e.target.value)}>
                                        <option  value="v">Select a category</option>
                                        
                                        {catData.map(data=>(<option value={data.id}>{data.name}</option>))} 
                                        
                                    </select>
                                    
                                    {/* <Form.Control type='select' id="" name="" value={brandCat} onChange={(e) => setBrandCat(e.target.value)} >
                                        
                                        </Form.Control> */}

                                    <Form.Group className="" controlId="" style={{ marginBottom: "" }}>
                                        <Form.Label style={{ marginBottom: "" }}>Brand Image</Form.Label>
                                        <Form.Control multiple accept=".gif, .jpg, .png," type='file' id="" name="" onChange={imageHandler} />
                                    </Form.Group>
                                </div>
                                {/* for image preview */}
                                <div className="col-md-6">
                                    {/* <div className="row"> */}
                                    <div style={{ display: "flex", justifyContent: "center", justifyItems: "center", flexDirection: "" }}>
                                        {/* <div>Priview Image</div> */}

                                        <div style={{ width: "10px", height: "200px" }} ></div> <img src={brandImg} width="200px" height="200px"></img>
                                    </div>
                                    {/* </div> */}
                                </div>

                            </div>
                            <div style={{ height: "30px" }}></div>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Form.Group className="col-md-1" controlId="formBasicCheckbox">
                                    <Form.Label></Form.Label>
                                    <Form.Check type="checkbox" required label="Confirm" />
                                </Form.Group>

                                <Button className="col-md-1" variant="primary" type="submit">
                                    Submit
  </Button>
                            </div>


                        </Form>

                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    )
}

export default AddBrand
