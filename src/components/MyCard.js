import React, { useState }from 'react';
import './MyCard.css';
import { Card, ListGroupItem, ListGroup,Row,Carousel,Button } from 'react-bootstrap';

import {Link} from 'react-router-dom';

function MyCard(props) {
    //const [link, setLink] = useState(0);
    return (
        <>
            <Card className='col-lg-2 col-md-5 col-sm-12 col-xs-12 mr-2 ml-2 mt-4 mb-4'>
            <Link to="/DetailPage">
                <Row>
                <Carousel fade>
                        <Carousel.Item>
                            <img height="200px" onClick={() => { alert("hi") }} style={{borderRadius:"5px"}}
                                className="d-block w-100 "
                                // src={props.src1}
                                src="https://source.unsplash.com/1080x300/?mobile"

                                alt="First slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img height="200px" 
                                className="d-block w-100"
                                src="https://source.unsplash.com/1080x300/?pils,supliment,syrup"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img height="200px" 
                                className="d-block w-100"
                                src="https://source.unsplash.com/1080x300/?medicine,pils,syrup,doctor"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                 
                 {/* <Card.Img onClick={()=>{localStorage.clear();localStorage.setItem('price',props.price);}} variant="top" src="https://source.unsplash.com/1080x900/?syrup,pills,med" width="10px" height="200px" /> */}
            
                <Card.Body style={{color:"black"}} onClick={()=>{localStorage.clear();localStorage.setItem('costPrice',props.costPrice);
            localStorage.setItem('name',props.name);
            localStorage.setItem('brand',props.brand);
            localStorage.setItem('category',props.cateogary);
            localStorage.setItem('oldPrice',props.oldPrice);
            localStorage.setItem('quantity',props.quantity);
            }}>
                    <Row>
                        <div className="col-lg-5"style={{justifyItems:"left", paddingLeft:"0"}}>
                           <b>Name</b> 
                        </div>
                        <div className="col-lg-7" style={{justifyItems:"left", padding:"0"}}>
                            {props.name}

                        </div>
                    </Row>

                   < Row>
                        <div className="col-lg-5"style={{justifyItems:"left", paddingLeft:"0"}}>
                           <b>Brand</b> 
                        </div>
                        <div className="col-lg-7" style={{justifyItems:"left", padding:"0"}}>
                            {props.brand}

                        </div>
                    </Row>

                    <Row>
                        <div className="col-lg-5"style={{justifyItems:"left", padding:"0"}}>
                            <b>Quantity</b>
                        </div>
                        <div className="col-lg-7" style={{justifyItems:"left", padding:"0"}}>
                            {props.quantity}

                        </div>
                    </Row>

                   
                    
                    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
                </Card.Body>
                </Link>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap",paddingRight:"1%",paddingLeft:"1%"  }}>
                        <div style={{ fontWeight: "bold",paddingRight:"1%",paddingLeft:"1%" }}>Cost Price:{props.costPrice} </div> <div>Old Price:{props.oldPrice}</div>
                    </div>
                    </ListGroupItem>

                </ListGroup>
                <Card.Body>  <div style={{display:"flex",justifyContent:"center"}}>
                   <Button> <Card.Link href="#">Buy Now</Card.Link></Button>
                   </div>

                </Card.Body>
            </Card>
        </>
    )
}

export default MyCard
