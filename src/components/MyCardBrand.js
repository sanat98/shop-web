import React from 'react';
import {Card,Button}from 'react-bootstrap';


function MyCardBrand() {
    return (
        <div className="col-lg-2 col-md-2">
            <Card style={{ width: '',margin:"auto" ,marginBottom:"10px"}}>
  <Card.Img style={{height:"" ,margin:""}} variant="top" src="https://source.unsplash.com/1600x900/?med,brands" height="" />
  <Card.Body>
    <Card.Title style={{marginTop:"0%"}}>Patanjali</Card.Title>
    <Card.Text >
      {/* Some quick  */}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
        </div>
    )
}

export default MyCardBrand
