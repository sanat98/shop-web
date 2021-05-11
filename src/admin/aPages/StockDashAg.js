import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {Badge, Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Registration.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
//import { DateComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';

const StockDashAg = () => {

  
//fun



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
            { quantity: 200, name: "parasitamol", brand: "sun",image:"https://source.unsplash.com/1600x900/?nature" },
            { quantity: 200, name: "ppp cvcv vcvc bbbb ", brand: "cipla",image:"https://source.unsplash.com/1600x900/?ploarbear"  },
            { quantity: 200, name: "null", advance: "000", brand: "qqwqqw",image:"https://source.unsplash.com/1600x900/?ploarbear" },
            { quantity: 200, name: "conveyemce", advance: 100, brand: "wwwwwqqqq",image:"https://source.unsplash.com/1600x900/?ploarbear" },
            { quantity: 200, name: "syrup", advance: 300, brand: "wewew",image:"https://source.unsplash.com/1600x900/?ploarbear" },
            { quantity: 200, name: "null", advance: "000", brand: "qqqq",image:"https://source.unsplash.com/1600x900/?ploarbear" },
            { quantity: 200, name: "null", advance: "000", brand: "eeer",image:"https://source.unsplash.com/1600x900/?ploarbear" },
            { quantity: 200, name: "ccvbnmnb", advance: 100, brand: "hghghg",image:"https://source.unsplash.com/1600x900/?ploarbear" },

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
                >Stock Dash</h3></Navbar.Brand>
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
                <div className="col-md-12" style={{display:"flex",justifyContent:"space-between"}}>
                    
                   <div style={{marginRight:""}}><b>
                       Available stock
                       </b></div>
                
             
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
                            <AgGridColumn headerName="Picture" field="image" sortable={true} filter={true} minWidth={"50"} cellStyle={dynamicCellStyle} ></AgGridColumn>
                            <AgGridColumn headerName="Name" field="name" sortable={true} filter={true} minWidth={"50"} cellStyle={dynamicCellStyle}></AgGridColumn>
                            <AgGridColumn headerName="Brand" field="brand" sortable={true} filter={true} minWidth={"50"} cellStyle={dynamicCellStyle}></AgGridColumn>
                            <AgGridColumn headerName="Quantity" field="quantity" sortable={true} filter={true} minWidth={"50"} cellStyle={dynamicCellStyle}></AgGridColumn>
                            {/* <AgGridColumn headerName="payment" field="payment" sortable={true} filter={true} minWidth={"50"} cellStyle={dynamicCellStyle}></AgGridColumn> */}
                        </AgGridReact>
                    </div>
                    {/* </div> */}

                    

                </div>
            </div>
            

        </>
    );
};

export default StockDashAg;