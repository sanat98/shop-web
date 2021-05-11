import React, { Component } from 'react';

export default class StockDash extends Component {
    render() {
        return (
            <>
            <div className="row" style={{display:"flex"}}>
                
                <div className="col-md-4 col-sm-12">
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <div><h3><b>STOCKS</b></h3></div>
                        </div>

                        <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"#4dcb4d",borderRadius:"5px"}}>
                            <div>Image</div>
                            <div>Name</div>
                            <div>Quantity</div>

                        </div>
                        {/* content to be maped */}

                        <div className="mt-1" style={{display:"flex",justifyContent:"space-around",backgroundColor:"#eee",borderRadius:"5px",justifyItems:""}}>
                            <div className=" " ><img src="https://source.unsplash.com/1080x300/?pils,supliment" width="50px"height="50px"></img></div>
                            <div className="mt-2 " style={{}}>Parasitamol</div>
                            <div className="mt-2  " style={{backgroundColor:""}}>100</div>

                        </div>
                        {/* map end */}
                        


                    {/* </div> */}
                </div>
                <div className="col-md-4 col-sm-12">
                <div style={{display:"flex",justifyContent:"center"}}>
                        <div><h3><b>LESS STOCK</b></h3></div>
                        </div>

                        <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"#e28c36",borderRadius:"5px"}}>
                            <div>Image</div>
                            <div>Name</div>
                            <div>Quantity</div>

                        </div>
                        {/* content to be maped */}

                        <div className="mt-1" style={{display:"flex",justifyContent:"space-around",backgroundColor:"#eee",borderRadius:"5px",justifyItems:""}}>
                            <div className=" " ><img src="https://source.unsplash.com/1080x300/?pils,supliment" width="50px"height="50px"></img></div>
                            <div className="mt-2 " style={{}}>Parasitamol</div>
                            <div className="mt-2  " style={{backgroundColor:""}}>100</div>

                        </div>
                        {/* map end */}
                </div>
                <div className="col-md-4 col-sm-12 ">
                <div style={{display:"flex",justifyContent:"center"}}>
                        <div><h3><b>OUT OF STOCK</b></h3></div>
                        </div>

                        <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"#dd3c3c",borderRadius:"5px"}}>
                            <div>Image</div>
                            <div>Name</div>
                            <div>Quantity</div>

                        </div>
                        {/* content to be maped */}

                        <div className="mt-1" style={{display:"flex",justifyContent:"space-around",backgroundColor:"#eee",borderRadius:"5px",justifyItems:""}}>
                            <div className=" " ><img src="https://source.unsplash.com/1080x300/?pils,supliment" width="50px"height="50px"></img></div>
                            <div className="mt-2 " style={{}}>Parasitamol</div>
                            <div className="mt-2  " style={{backgroundColor:""}}>100</div>

                        </div>
                        {/* map end */}
                </div>
                </div>
            </>
        )
    }
}
