import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {Badge, Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Registration.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
//import { DateComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';

const Advance = () => {

    const date = new Date().toLocaleString();
    const [tTitle,setTTitle]=useState("Last ten activites");
    const [fromD,setFromD]=useState();
    const [toD,setToD]=useState();
//fun
const titleChange=(e)=>{
    setTTitle("Activites from "+" "+fromD +" to "+toD)
}


    //
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    //for auto hr resize
    const [rowData, setRowData] = useState(null);

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

        // const updateData = (data) => {
        setRowData([
            { date: "1/2/21", comment: "medical emergency", advance: 300, balance: 9700, payment: "0000" },
            { date: "2/2/21", comment: "null", advance: "000", balance: "9700", payment: "0000 " },
            { date: "3/2/21", comment: "null", advance: "000", balance: "9700", payment: "0000" },
            { date: "4/2/21", comment: "conveyemce", advance: 100, balance: "9600", payment: "0000" },

        ]);
        // };

        // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        //   .then((resp) => resp.json())
        //   .then((data) => updateData(data));
    };
    //auto h resize close

    const onFirstDataRendered = (params) => {
        params.api.sizeColumnsToFit();
    };


    //... cell style 
    const dynamicCellStyle = params => {
        if (params.value > 1 && params.value < 1000) {
            //mark police cells as red
            return { color: '#000', backgroundColor: '#afa' };
        }
        return null;
    };
    //row style


    //

    // const [rowData, setRowData] = useState([
    //     { date: "1/2/21", comment: "medical emergency", advance: 300,balance:9700,payment: "0000" },
    //     { date: "2/2/21", comment: "null", advance: "000",balance:"9700",payment:"0000 "},
    //     { date: "3/2/21", comment: "null", advance: "000",balance:"9700",payment:"0000" },
    //     { date: "4/2/21", comment: "conveyemce", advance: 100,balance:"9600",payment:"0000" },

    // ]);

    //..............


    return (
        <>
         {/* ....navBar... */}
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href=" " ><h3 style={{ marginBottom: "0px", marginTop: "0px", padding: "0", margin: "auto" }}
                >Advance Payment Details</h3></Navbar.Brand>
                
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

            <div className="row">
                <div className="col-md-12 mb-4 mt-2">
                    <div style={{display:"flex" ,justifyContent:""}}>
                    <div style={{marginRight:"10px",marginTop:"3px",fontFamily:'',fontWeight:"bolder"}}>Select an Interval</div>
                        <div>
                            
                        <label for="sDate" className=""> From:<span style={{color:"white"}}>a</span>  </label>
                        <input type="date" id="sDate" className="sallaryDate" value={fromD} onChange={(e)=>setFromD(e.target.value)} ></input>
                  

                        </div>

                        <div>
                        <label for="sDate"><span style={{color:"white"}}>a</span> To: <span style={{color:"white"}}>a</span> </label>
                        <input type="date" id="eDate" className="sallaryDate"value={toD} onChange={(e)=>setToD(e.target.value)}></input>
                        <button type="button"className="btn btn-sm lb" style={{marginLeft:"5px"}} onClick={titleChange}>Go</button>
                  

                        </div>
                    </div>
                
              </div>

            </div>
            <div className="row">
                <div className="col-md-12" style={{display:"flex",justifyContent:"space-between"}}>
                    
                   <div style={{marginRight:""}}><b>
                       {tTitle}
                       </b></div>
                
                {/* <button className="lb">pay sallary</button> */}
                 </div>
                 </div>

            <div className="row">
                <div className="col-md-12">
                    {/* // */}
                    {/* <div style={{ width: '100%', height: '100vh' }}> */}
                    <div
                        id="myGrid"
                        style={{
                            height: '50vh',
                            width: '100%',
                        }}
                        className="ag-theme-alpine"
                    >

                        {/* <div className="ag-theme-alpine" style={{ height:"100vh", width: "" }}> */}

                        <AgGridReact
                            // rowData={rowData}
                            // rowSelection="multiple"
                            defaultColDef={{ resizable: true }}
                            onGridReady={onGridReady}
                            onFirstDataRendered={onFirstDataRendered}
                            rowData={rowData}
                        >
                            <AgGridColumn headerName="date" field="date" sortable={true} filter={true} minWidth={"100"} cellStyle={dynamicCellStyle} ></AgGridColumn>
                            {/* <AgGridColumn headerName="comments" field="comment" sortable={true} filter={true} minWidth={"50"} cellStyle={dynamicCellStyle}></AgGridColumn> */}
                            <AgGridColumn headerName="advance payment" field="advance" sortable={true} filter={true} minWidth={"100"} cellStyle={dynamicCellStyle}></AgGridColumn>
                            <AgGridColumn headerName="balance ammount" field="balance" sortable={true} filter={true} minWidth={"100"} cellStyle={dynamicCellStyle}></AgGridColumn>
                            <AgGridColumn headerName="payment" field="payment" sortable={true} filter={true} minWidth={"100"} cellStyle={dynamicCellStyle}></AgGridColumn>
                        </AgGridReact>
                    </div>
                    {/* </div> */}

                    <div className="col-md-12"> 
                    <div style={{display:"flex",justifyContent:"flex-end",border:""}} >
                    <div style={{marginRight:"30px"}}>
                        <b>Date: <i>{date}</i></b>
                    </div>
                    <div style={{marginRight:"30px"}}> Total: <Badge variant="info">10,000</Badge></div>
                    
                     </div>

                     </div>

                </div>
            </div>
            

        </>
    );
};

export default Advance;