import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, Button, Card } from 'react-bootstrap';
import ANavbar from '../aComponents/ANavbar';
import axios from 'axios';

//import image1 from '../Image/loginpng.png';



function AddCategory() {
    const [categoryT, setCategoryT] = useState();
    const [categoryImg, setCategoryImg] = useState("https://source.unsplash.com/1600x900/?nature,water");

   const handleSubmit=(event)=>{
    event.preventDefault();

    // let formData=new FormData();
    // formData.append('name',categoryT);
    // formData.append('shopId',"AVI123");
    // formData.append('title',categoryT);

    //formData.append('categoryImg',categoryImg);
    var categoryTT=categoryT.split(' ').join('_');

    axios({
        method: 'POST',
                url: 'http://ec2-65-0-32-190.ap-south-1.compute.amazonaws.com:8082/api/category/create',
                data: {
                    "name": categoryT.toUpperCase(),
                    "shopId": "AVI123",
                    "title": categoryTT.toUpperCase()
                }}
    ).then(()=>alert("Successfully added"))
           
            .catch(function(error){
				alert("yes"+error)
			})
            setCategoryT("");


    }
   const imageHandler=(e)=>{
       const reader=new FileReader();
       reader.onload=()=>{
           if(reader.readyState===2){
               setCategoryImg(reader.result)

           }
       }
       reader.readAsDataURL(e.target.files[0])
   }

    return (
        <div>
            <ANavbar 
            heading="Add Category"
            />

            { /* form inside card  s*/}
            <Card style={{ width: '100%', height: "50%", }}>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Body>
                    <Card.Title>Form to add Category</Card.Title>
                    <div style={{ height: "50%" }}></div>
                    <Card.Text>
                        {/* form S */}

                        <Form onSubmit={handleSubmit} style={{ fontWeight: "bold" }}>
                            <div className="row">
                                <div className="col-md-6" style={{ backgroundColor: "" }}>
                                    <Form.Label style={{ marginBottom: "-5px" }}>Category Title/Name</Form.Label>
                                    <Form.Control style={{ marginBottom: "10px",textTransform: 'capitalize' }} type='text' id="" name="" value={categoryT} onChange={(e) => setCategoryT(e.target.value)} />

                                 

                                    <Form.Group className="col-md-6" controlId="" style={{ marginBottom: "" }}>
                                        <Form.Label style={{ marginBottom: "" }}>Category Image</Form.Label>
                                        <Form.Control multiple accept=".gif, .jpg, .png," type='file' id="" name="" onChange={imageHandler} />
                                    </Form.Group>
                                </div>
                                {/* for image preview */}
                                <div className="col-md-6">
                                    {/* <div className="row"> */}
                                    <div style={{ display: "flex", justifyContent: "center", justifyItems: "center",flexDirection:"" }}>
                                        {/* <div>Priview Image</div> */}

                                      <div style={{width:"10px",height:"200px"}} ></div> <img src={categoryImg} width="200px" height="200px"></img>
                                    </div>
                                    {/* </div> */}
                                </div>

                            </div>
                            <div style={{height:"30px"}}></div>
                            <div style={{display:"flex",justifyContent:"flex-end"}}>
                            <Form.Group className="col-md-1" controlId="formBasicCheckbox">
                                    <Form.Label></Form.Label>
                                    <Form.Check type="checkbox" required label="Confirm" />
                                </Form.Group>

                                <Button className="col-md-1" variant="primary" type="submit">
                                    Submit
  </Button>
                            </div>


                        </Form>
                        {/* forme */}
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    )
}

export default AddCategory
