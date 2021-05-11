import React, { Component } from 'react';
import { Badge, Button } from 'react-bootstrap';
import ANavbar from '../aComponents/ANavbar'
import LableText from '../aComponents/constants';

class Orders extends Component {
    constructor(props) {
        super(props);
this.sum=0;
        this.state = {
            sum: 0,
            name: "",
            mobile: "",
            image: "",
            tableData: [{
                name: "parsitamol",
                last_name: "kumar",
                image: "https://source.unsplash.com/1600x900/?ploarbear",
                mobile: 787878787,
                address: "gardanibgh road no:21",
                quantity: 2,
                price: 75
            },
            {
                name: "cough serip vvv bbb nmnm vvvvvvvvvvvvvvvvvv vvvvvvvvvvvv",
                last_name: "kumar",
                image: "https://source.unsplash.com/1600x900/?panada",
                mobile: 787878787,
                address: "gardanibgh road no:21",
                quantity: 3,
                price: 100
            },
            {
                name: "sss ccc fdhdhhs",
                last_name: "kumar",
                image: "https://source.unsplash.com/1600x900/?ploarbear",
                mobile: 787878787,
                address: "gardanibgh road no:21",
                quantity: 3,
                price: 150
            },
            {
                name: "aaaa",
                last_name: "kumar",
                image: "https://source.unsplash.com/1600x900/?panada",
                mobile: 787878787,
                address: "gardanibgh road no:21",
                quantity: 1,
                price: 150
            },
            {
                name: "s",
                last_name: "kumar",
                image: "https://source.unsplash.com/1600x900/?ploarbear",
                mobile: 787878787,
                address: "gardanibgh road no:21",
                quantity: 1,
                price: 1000
            },
            {
                name: "sk",
                last_name: "kumar",
                image: "https://source.unsplash.com/1600x900/?panada",
                mobile: 787878787,
                address: "gardanibgh road no:21",
                quantity: 2,
                price: 500
            }
            ]

        }
    }

    render() {

        return (
            <>
                <ANavbar
                    heading="Order of Sanat Kumar"
                />
                <div className="col-xl-12 mb-3 mt-3 tbl">

                    {/* <div className="search">
                <input
                  onChange={event => { (event.target.value.this.tableData.map()) }}
                />

              </div> */}

                    <table className="table table-striped  table-sm row-border hover ">
                        <thead>
                            <tr>
                                {/* <th scope="col">Id </th> */}


                                <th scope="col"><div style={{ display: "flex", justifyContent: "center" }}>Picture</div></th>
                                <th scope="col"><div style={{ display: "flex", justifyContent: "center" }}>Name</div></th>
                                <th scope="col"><div style={{ display: "flex", justifyContent: "center", }}>Quantity</div></th>
                                <th scope="col"><div style={{ display: "flex", justifyContent: "center", paddingLeft: "" }}>Unit Price</div></th>
                                <th scope="col"><div style={{ display: "flex", justifyContent: "center", paddingLeft: "" }}>Price</div></th>

                                <th scope="col"><div style={{ display: "flex", justifyContent: "center" }}>Checkbox</div></th>

                            </tr>
                        </thead>
                        {/* <TableContainer>

                      </TableContainer> */}

                        <tbody>
                            {

                                this.state.tableData.map((data) => (

                                    <tr key={data.Id}>
                                        {/* <td>{data.Id}</td> */}

                                        <td scope="row"><div style={{ display: "flex", justifyContent: "center" }}><img style={{ borderRadius: "5px" }} src={data.image} height="100px" width="100px"></img></div></td>
                                        <td scope="row">
                                            <div className="" style={{ display: "flex", backgroundColor: "", maxWidth: "", justifyContent: "center" }}>
                                                <div className="" style={{ maxWidth: "200px" }}>{data.name}</div></div>
                                        </td>

                                        <td scope="row"><div style={{ display: "flex", justifyContent: "center", }}>{data.quantity}</div></td>
                                        <td scope="row"><div style={{ display: "flex", justifyContent: "center", marginLeft: "" }}>{data.price} </div></td>
                                        <td scope="row"><div style={{ display: "flex", justifyContent: "center", marginLeft: "" }}>{data.price*data.quantity} <span style={{display:"none"}}> {this.sum+=(data.price*data.quantity)}</span> </div></td>
                                        <td scope="row"><div style={{ display: "flex", justifyContent: "center",marginLeft: "" }}>
                                            <input type="checkbox"></input>
                                        </div></td>

                                        {/* <td scope="row"> <div style={{display:"flex",justifyContent:"",flexDirection:"column"}}>
                             <Badge pill variant="info" className="col-md-5 mt-3 mb-2  " ><span style={{fontSize:"20px"}}>Rs:+{data.credit}</span>  </Badge>

                          {/* <Link to={{pathname:"/User"    or onclick any function 
                           <Badge pill variant="danger" className="col-md-5  mt-2 mr-3 "> <span style={{fontSize:"20px"}}>Rs:-{data.debit}</span>  </Badge>
                           </div>
                        </td> */}



                                        {/* <td scope="row"> <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                             <Button type="button" className="btn btn-success mr-2 mt-2 mb-2 btn-sm" >Add Credit </Button>

                          {/* <Link to={{pathname:"/User"    or onclick any function 
                           <Button type="button" className="btn btn-solid mr-2 btn-sm mt-2 btn-danger"> Add Debit </Button>
                           </div>
                        </td> */}


                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>

                    <div style={{width:"100%",borderRadius:"5px 5px 0 0",background:"",opacity:"1",display:"flex",justifyItems:"",justifyContent:"",backgroundColor:"#333",backdropFilter: "blur(5px)",position:"fixed",bottom:"0",right:"0"}}>
                        

                    {/* <div className="mt-1 col-md-3" style={{paddingLeft:""}}><button className="btn-danger btn-sm col-md-6 " type="button">packed</button></div>
                    <div className="mt-1 col-md-3" style={{paddingLeft:""}}><button className="btn-danger btn-sm col-md-6" type="button">Shiped</button></div>
                    <div className="mt-1 col-md-3" style={{paddingLeft:""}}><button className="btn-success btn-sm col-md-6" type="button">Completed</button></div>
                   
                        <div className="mt-1 col-md-3" style={{paddingLeft:"",color:"#fff"}}><span  style={{fontSize:"25px"}}>Total: Rs {this.sum}</span> </div> */}
                       <div className="mt-1 col-md-3" style={{paddingLeft:"80px"}}><button className="btn-danger btn-sm col-md-5" type="button">packed</button></div>  
                      <div className="mt-1 mr- col-md-3 "style={{paddingLeft:"85px"}}><button className="btn-danger btn-sm col-md-5" type="button">shipded</button></div> 
                      <div className="mt-1 mr- col-md-3"style={{paddingLeft:"45px"}}><button className="btn-danger btn-sm col-md-5" type="button">completed</button></div>

                        <div className="col-md-3"style={{paddingRight:"",color:"white"}}> <span style={{fontSize:"25px"}}>Total: Rs {this.sum}</span> </div> 

                    </div>

                </div>

            </>

        )
    }
}

export default Orders;
