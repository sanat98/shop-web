import React, { Component } from 'react';
import { Badge, Button, Nav, Navbar } from 'react-bootstrap';

import LableText from '../aComponents/constants';
import './Registration.css'

class WalletShopKeeper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sr: 0,
            name: "",
            mobile: "",
            image: "",
            tableData: [{

                date: "10/01/2021",
                comment: "weekly withdrowal",
                transactionType: "withdrow",
                ammount: 10000

            },
            {

                date: "10/01/2021",
                comment: "for servises",
                transactionType: "credit",
                ammount: 1000
            },
            {
                date: "10/01/2021",
                comment: "validity recharge",
                transactionType: "debit",
                ammount: 1000
            },
            {
                date: "10/01/2021",
                comment: "weekly withdrowal",
                transactionType: "withdrow",
                ammount: 10000
            },
            {
                date: "10/01/2021",
                comment: "weekly withdrowal",
                transactionType: "withdrow",
                ammount: 10000
            },
            {
                date: "10/01/2021",
                comment: "weekly withdrowal",
                transactionType: "withdrow",
                ammount: 10000
            }
            ]

        }
        //   this.mySearch = this.mySearch.bind(this);
    }

    //functions

    //  mySearch=(e)=>
    // {
    //   this.setState({name:e.target.value});

    //   this.state.tableData.map((data)=>(

    //     (data.first_name.indexOf(this.state.name)===0)?this.ttt.push(data):this.state.tt.push("abc")
    //   ))

    // }



    render() {

        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: "60px" }}>
                    <Navbar.Brand href=" " ><h3 style={{ marginBottom: "0px", marginTop: "0px", padding: "0", margin: "auto" }}
                    >Wallet</h3></Navbar.Brand>
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

                {/* mainn */}

                {/* header */}
                <div className="row">
                    <div className="mt-2 col-md-6" style={{display:"flex",justifyContent:"space-between"}}>
                        <div className="mt-2 ml-3"style={{backgroundColor:"#ddd",borderRadius:"5px",padding:"0 4px 0 4px",fontWeight:"bold"}}>Balance:Rs<span style={{fontWeight:"bolder",color:"brown"}}>10,000</span></div>
                        <div><button className=" lb">withdrow</button></div>

                    </div>
                    <div className="col-md-6 mt-2"style={{display:"flex",justifyContent:"flex-end"}}>
                        <button className="lb">Add Money</button>

                    </div>
                </div>
                {/* header colse */}
                <div className="col-md-12 mb-3 mt-2 tbl">


                    {/* <div className="">
                <input type="text"
                  // onChange={event => { (event.target.value.this.tableData.map()) }}
                  onChange={this.mySearch}
                />

              </div> */}
                    {/* <div>cc{this.state.name}</div> */}

                    <table className="table table-striped  table-sm row-border hover ">
                        <thead>
                            <tr>
                                {/* <th scope="col">Id </th> */}


                                <th scope="col"><div style={{ display: "flex", justifyContent: "center" }}>Sr</div></th>
                                <th scope="col"><div style={{ display: "flex", justifyContent: "" }}>Date</div></th>
                                <th scope="col"><div style={{ display: "flex", justifyContent: "" }}>Comment</div></th>

                                <th scope="col"><div style={{ display: "flex", justifyContent: "", paddingLeft: "" }}>Type</div></th>

                                <th scope="col"><div style={{ display: "flex", justifyContent: "" }}>Ammount</div></th>


                            </tr>
                        </thead>
                        {/* <TableContainer>

                      </TableContainer> */}

                        <tbody>
                            {

                                this.state.tableData.map((data) => (

                                    <tr key={data.Id}>
                                        {/* <td>{data.Id}</td> */}

                                        <td scope="row"><div style={{ display: "flex", justifyContent: "center" }}>
                                            {/* active/dynamic sr number */}
                                        {this.state.sr+=1}
                                        </div></td>
                                        <td scope="row">{data.date}</td>

                                        <td scope="row"><div style={{ display: "flex", justifyContent: "", marginLeft: "" }}>{data.comment} </div></td>

                                        <td scope="row"> <div style={{ display: "flex", justifyContent: "", flexDirection: "" }}>
                                            {data.transactionType}

                                            {/* <Link to={{pathname:"/User"    or onclick any function 
                           <Badge pill variant="danger" className="col-md-5  mt-2 mr-3 "> <span style={{fontSize:"20px"}}>Rs:-{data.debit}</span>  </Badge>*/}
                                        </div>
                                        </td>

                                        <td scope="row"><div className="mt-2" style={{ display: "flex", justifyContent: "", marginLeft: "" }}>{data.ammount} </div></td>

                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>


                </div>

            </>

        )
    }
}

export default WalletShopKeeper;
