import React from 'react';
import { Card, ListGroupItem, ListGroup,Row } from 'react-bootstrap';

function DetailPage(props) {
    
    return (
        <div style={{margin:"5px"}} >
        <div className="row" style={{backgroundColor:"", margin:"auto"}}>
            <div class="col-lg-3 col-sm-12" style={{backgroundColor:"",textAlign:'center'}}>
                <div style={{marginTop:"15%" ,boxShadow:" 0px 4px 8px 0 rgba(0, 0, 0, 0.5)"}}><img  src="https://source.unsplash.com/1080x300/?medicine,pils,medical" width="300px" height='300px'></img></div>


            </div>
            <div className="col-lg-8">
                
                <Row>
                    <div className="col-lg-4" style={{marginTop:"5%"}}>
                        <h3>Name</h3>

                    </div>
                    <div className="col-lg-4" style={{marginTop:"5%"}}>
                       <h3>{localStorage.name}</h3> 

                    </div>
                </Row>
                <Row>
                    <div className="col-lg-4" style={{marginTop:""}}>
                        <h3>Brand</h3>

                    </div>
                    <div className="col-lg-4" style={{marginTop:""}}>
                       <h3>{localStorage.brand}</h3> 

                    </div>
                </Row>
                <Row>
                    <div className="col-lg-4" style={{marginTop:""}}>
                        <h3>Description</h3>

                    </div>
                    <div className="col-lg-4" style={{marginTop:""}}>
                       <h3> Describe in short</h3> 

                    </div>
                </Row>
                <Row>
                    <div className="col-lg-4" style={{marginTop:""}}>
                        <h3>Category</h3>

                    </div>
                    <div className="col-lg-4" style={{marginTop:""}}>
                       <h3>{localStorage.category}</h3> 

                    </div>
                </Row>
                <Row>
                    <div className="col-lg-4" style={{marginTop:""}}>
                        <h3>Quantity</h3>

                    </div>
                    <div className="col-lg-4" style={{marginTop:""}}>
                       <h3>{localStorage.quantity}</h3> 

                    </div>
                </Row>
                <Row>
                    <div className="col-lg-4" style={{marginTop:""}}>
                        <h3>Price</h3>

                    </div>
                    <div className="col-lg-4" style={{marginTop:""}}>
                       <h3>Rs:{localStorage.costPrice}</h3> 

                    </div>
                </Row>
                <Row>
                    <div className="col-lg-4" style={{marginTop:""}}>
                        <h4>Offer</h4>

                    </div>
                    <div className="col-lg-4" style={{marginTop:""}}>
                       <h4> Rs:{localStorage.oldPrice - localStorage.costPrice}</h4> 

                    </div>
                </Row>
                
                
                {/* <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-6" style={{backgroundColor:""}} >
                
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4" style={{backgroundColor:"", margin:"auto"}}>
                    <div><img src='https://source.unsplash.com/1080x300/?medicine,pils,medical' width="100%" height='100%'></img></div>

                </div>
                </div> */}

            </div>
            <div className="col-lg-1">
                
            </div>
            

            
        </div>
        <div className="row" style={{backgroundColor:"",margin:"auto"}}>
           <div style={{textAlign:"center"}}> <h3>reviews:</h3></div>
            </div>
            <div>
                prop.reviews
                </div>
        </div>
    )
}

export default DetailPage
