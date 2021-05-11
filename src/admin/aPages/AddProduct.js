import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, Button, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ANavbar from '../aComponents/ANavbar';
import axios from 'axios'
import FormInput from '../aComponents/FormInput';
// import './AddProduct.css';
import './Registration.css'



function AddProduct() {
    const [catData, setcatData] = useState([]);
    const [brandData, setBrandData] = useState([]);

    const [name, setName] = useState();
    const [cat, setCat] = useState();
    const [brand, setBrand] = useState();
    const [price, setPrice] = useState();
    const [costPrice, setCostPrice] = useState();
    const [sellPrice, setSellPrice] = useState();
    const [gstPercent, setGstPercent] = useState();
    const [gstAmount, setGstAmount] = useState();
    const [quantity, setQuantity] = useState();
    const [review, setReview] = useState(); // do we need more dyanamic
    const [description, setDescription] = useState();
    const [barcode, setBarcode] = useState();
    const [oldPrice, setOldPrice] = useState();
    const [offerPercent, setOfferPercent] = useState();//
    const [offerLast, setOfferLast] = useState();

    const [offerFrom, setOfferFrom] = useState();
    const [offerTo, setOfferTo] = useState();

    const [offerDisplay, setofferDisplay] = useState("none");
    //image test
    const [pImage, setPImage] = useState();

    //cat data
    useEffect(() => {
        axios("http://ec2-65-0-32-190.ap-south-1.compute.amazonaws.com:8082/api/category/getallcategory").then(
            res => setcatData(res.data)
        )

    }, [])
    //cat data end
    //brand data
    useEffect(() => {
        axios("http://ec2-65-0-32-190.ap-south-1.compute.amazonaws.com:8082/api/brand/getallbrand").then(
            res => setBrandData(res.data)
        )

    }, [])
    //brand data end


    const handleSubmit = (event) => {
        event.preventDefault();
        // let formData = new FormData();
        // formData.append('name', name);
        // formData.append('cat', cat);
        // formData.append('brand', brand);
        // formData.append('price', price);
        // formData.append('quantity', quantity);
        // formData.append('review', review);
        // formData.append('description', description);
        // formData.append('barcode', barcode);
        // formData.append('oldPrice', oldPrice);
        // formData.append('offerPercent', offerPercent);
        // formData.append('offerLast', offerLast);
        // axios.post('http://localhost/shop-web/test.php', formData).then(() => alert("Successfully added"))

        //     .catch(function (error) {
        //         alert("yes" + error)
        //     })



        axios({
            method: 'POST',
            url: 'http://ec2-65-0-32-190.ap-south-1.compute.amazonaws.com:8082/api/product/create',
            data: {
                'name': name.toUpperCase(),
                'category': cat,
                'brand': brand,
                'shopId': 'AVI123',
                'quantity': quantity,
                'description': description,
                'barcode': "test1",
                'sellingPrice': sellPrice,
                'costPrice': costPrice,
                'offerPercent': offerPercent,
                'offerFrom': offerFrom,
                'offerTo': offerTo,
                'offerActiveInd': true,
                'measurement': "testm",
                'gstPercent': gstPercent

            }
        }
        ).then(() => alert("Successfully added"))

            .catch(function (error) {
                alert("yes" + error)
            })
    }

    const offerToggel = () => {
        if (offerDisplay !== "none") {
            setofferDisplay("none")
        }
        if (offerDisplay === "none") {
            setofferDisplay("")
        }
    }


    return (
        <div>
            <ANavbar
                heading="Add Product"
            />


            {/* form inside card  s*/}
            <Card style={{ width: '100%', height: "50%", }}>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Body>
                    <Card.Title><h3><b> </b></h3></Card.Title>
                    <div style={{ height: "50%" }}></div>
                    <Card.Text>
                        {/* formS */}

                        <Form onSubmit={handleSubmit} style={{ fontWeight: "bold" }}>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>

                                {/* ....img.... */}

                                <div className="row">
                                    <div className="col-md-12">
                                        <div style={{ marginBottom: "-15px", zIndex: "1", display: "flex" }} className="mt-2">
                                            <div style={{ backgroundColor: "white", borderRadius: "5px", boxShadow: "0px -5px 10px 0px #ccc inset" }}>
                                                <h3 style={{ marginBottom: "-2px" }}>Images</h3></div>
                                        </div>

                                        <div className="row" style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "40px 10px 20px 0px", boxShadow: "5px 10px 20px 2px #ccc inset" }}>


                                            <div className="col-md-12">
                                                iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                                            iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                                            {/* imag1 */}

                                            {/* <div className="col-md-4" style={{ backgroundColor: "" }}>
                                                <div style={{ marginLeft: "5%" }}>PAN</div>
                                                <div style={{ display: "flex", justifyItems: "center", justifyContent: "center", flexDirection: "" }}>
                                                    <img src="https://source.unsplash.com/1600x900/?nature,water" width="95%" height="200px" alt="image" style={{ borderRadius: "5px" }}></img>
                                                    {/* <div className="" style={{backgroundColor:"red"}}> </div> 

                                                </div>

                                                <div className="mt-2" style={{ display: "flex", justifyItems: "center", justifyContent: "center" }}>
                                                    <input multiple accept=".gif, .jpg, .png," type='file' id="pan" className="fileChooser" name="" />
                                                    {/* style file selector 
                                                    <label className="lb" for="pan">Choose</label>
                                                    <button className="btn btn-danger btn-sm" type="button">uplood</button>

                                                </div>
                                            </div>
                                            {/* imag1 */}
                                            {/*

                                            <div className="col-md-4" style={{ backgroundColor: "" }}>
                                                <div style={{ marginLeft: "5%" }}>PAN</div>
                                                <div style={{ display: "flex", justifyItems: "center", justifyContent: "center", flexDirection: "" }}>
                                                    <img src="https://source.unsplash.com/1600x900/?nature,water" width="95%" height="200px" alt="image" style={{ borderRadius: "5px" }}></img>
                                                    {/* <div className="" style={{backgroundColor:"red"}}> </div> 

                                                </div>

                                                <div className="mt-2" style={{ display: "flex", justifyItems: "center", justifyContent: "center" }}>
                                                    <input multiple accept=".gif, .jpg, .png," type='file' id="pan" className="fileChooser" name="" />
                                                    {/* style file selector 
                                                    <label className="lb" for="pan">Choose</label>
                                                    <button className="btn btn-danger btn-sm" type="button">uplood</button>

                                                </div>
                                            </div> */}


                                        </div>
                                    </div>
                                </div>
                                {/* image end */}
                                <div className="row">

                                    <div className="col-md-12 mt-4 mb-4" >
                                        <div style={{ marginBottom: "-15px", zIndex: "1", display: "flex" }} className="">
                                            <div style={{ backgroundColor: "white", borderRadius: "5px", boxShadow: "0px -5px 10px 0px #ccc inset" }}>
                                                <h3 style={{ marginBottom: "-2px" }}>Product detail</h3></div>
                                        </div>

                                        <div className="row" style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px 0 10px 2px", boxShadow: "5px 10px 20px 2px #ccc inset" }}>


                                           
                                            <Form.Group className="col-md-6 mt-4" controlId="" style={{ marginBottom: "10px" }}>
                                                <Form.Label style={{ marginBottom: "0", marginLeft: "10px" }}>Category</Form.Label>
                                                <select className="ml-2 mb-3 lb" name="cat" id="cat" value={cat} onChange={(e) => setCat(e.target.value)}>
                                                    <option value="v">Select a category</option>

                                                    {catData.map(data => (<option value={data.id}>{data.name}</option>))}

                                                </select>

                                            </Form.Group>


                                            {/* <FormInput
                                                label="Category"
                                                type="text"
                                                value={cat}
                                                myOnChange={(e) => setCat(e.target.value)}
                                            /> */}

                                            <Form.Group className="col-md-6 mt-4" controlId="" style={{ marginBottom: "10px" }}>
                                                <Form.Label style={{ marginBottom: "0", marginLeft: "10px" }}>Brand</Form.Label>
                                                <select className="ml-2 mb-3 lb" name="" id="" value={brand} onChange={(e) => setBrand(e.target.value)}>
                                                    <option value="v">Select a Brand</option>

                                                    {brandData.map(data => (<option value={data.id}>{data.name}</option>))}

                                                </select>

                                            </Form.Group>

                                            {/* <FormInput
                                                label="Brand"
                                                type="text"
                                                value={brand}
                                                myOnChange={(e) => setBrand(e.target.value)}
                                            /> */}
                                             <FormInput
                                                label="Name"
                                                type="text"
                                                value={name}
                                                myOnChange={(e) => setName(e.target.value)}
                                            />
                                            <FormInput
                                                label="Price"
                                                type="text"
                                                value={price}
                                                myOnChange={(e) => setPrice(e.target.value)}
                                                pHolder="not now"
                                            />
                                            <FormInput
                                                label="Cost Price"
                                                type="text"
                                                value={costPrice}
                                                myOnChange={(e) => setCostPrice(e.target.value)}
                                            />
                                            <FormInput
                                                label="Selling Price"
                                                type="text"
                                                value={sellPrice}
                                                myOnChange={(e) => setSellPrice(e.target.value)}
                                            />
                                            <FormInput readonly
                                                label="GST Percent"
                                                type="text"
                                                value={gstPercent}
                                                myOnChange={(e) => setGstPercent(e.target.value)}
                                            />
                                            <FormInput
                                                label="GST Amount"
                                                type="text"
                                                value={gstAmount}
                                                myOnChange={(e) => setGstAmount(e.target.value)}
                                                pHolder="not Now"
                                            />

                                            {/* <div className="col-md-6" style={{ border: "2px solid black", display: "flex", backgroundColor: "", width: "", borderRadius: "5px", wrap: "wrap", margin: "0px" }}> */}
                                            {/* <select styleclassName="col-md-4" name="cars" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                     </select> */}


                                            {/* <div style={{ marginBottom: "-15px", zIndex: "1", display: "flex" }} className="">
                                            <div style={{ backgroundColor: "white", borderRadius: "5px", boxShadow: "0px -5px 10px 0px #ccc inset" }}>
                                                <h3 style={{ marginBottom: "-2px" }}>Product detail</h3></div>
                                        </div> */}

                                            <div className="col-md-6" style={{ display: "flex", border: "1px solid #ccc", borderRadius: "5px", padding: "20px 0 10px 2px", boxShadow: "5px 10px 20px 2px #ccc inset" }}>



                                                <Form.Group className="col-md-6" controlId="" style={{ marginBottom: "10px" }}>
                                                    <Form.Label style={{ marginBottom: "0" }}>Measurement Type</Form.Label>
                                                    <Form.Control as="select"   >
                                                        <option disabled value="Select from drop down">Select from drop down NOT NOW</option>
                                                        <option value="bottel">1</option>
                                                        <option value="leaf">2</option>

                                                    </Form.Control>
                                                </Form.Group>


                                                <FormInput
                                                    label="Quantity"
                                                    type="text"
                                                    value={gstAmount}
                                                    myOnChange={(e) => setQuantity(e.target.value)}
                                                />

                                            </div>
                                            <Form.Group className="col-md-6" controlId="" style={{ marginBottom: "0" }}>
                                                <Form.Label style={{ marginBottom: "0" }}>Old Price</Form.Label>
                                                <Form.Control placeholder="not now" type='text' id="" name="" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} />
                                            </Form.Group>


                                            {/* <Form.Group className="col-md-8" controlId="" style={{ marginBottom: "0" }}>
                                          <Form.Label style={{ marginBottom: "0" }}>Quantity</Form.Label>
                                          <Form.Control type='text' id="" name="" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                          </Form.Group> */}






                                            <Form.Group className="col-md-6" controlId="" style={{ marginBottom: "0" }}>
                                                <Form.Label style={{ marginBottom: "0" }}>Description</Form.Label>
                                                <Form.Control as="textarea" id="" name="" value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
                                            </Form.Group>

                                            <Form.Group className="col-md-6" controlId="" style={{ marginBottom: "0" }}>
                                                <Form.Label style={{ marginBottom: "0" }}>Riview</Form.Label>
                                                <Form.Control placeholder="not now" as="textarea" id="" name="" value={review} onChange={(e) => setReview(e.target.value)} />
                                            </Form.Group>



                                        </div>
                                    </div>
                                </div>





                                <Form.Group className="col-md-10" controlId="" style={{ marginBottom: "0" }}>
                                    {/* <Button variant="success" onClick={offerToggel} style={{ marginTop: "10px", width: "100px", height: "50px" }}>
                                        Offer
  </Button> */}<br></br>


                                    <Form.Check onClick={offerToggel}
                                        type="switch"
                                        id="custom-switch"
                                        label="Offer"
                                        size="lg"
                                    />

                                </Form.Group>



                                {/* <div style={{ display: offerDisplay, width: "100%", margin: "10px" }}>
                                    <div className="row" style={{ display: 'flex', backgroundColor: "", border: "2px solid black", width: "", borderRadius: "5px", wrap: "wrap" }}> */}

                                {/* <div className="row"> */}

                                <div className="col-md-12 mt-4 mb-4" style={{ display: offerDisplay, }} >
                                    <div style={{ marginBottom: "-15px", zIndex: "1", display: "flex" }} className="">
                                        <div style={{ backgroundColor: "white", borderRadius: "5px", boxShadow: "0px -5px 10px 0px #ccc inset" }}>
                                            <h3 style={{ marginBottom: "-2px" }}>Offer Display</h3></div>
                                    </div>

                                    <div className="row" style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px 0 10px 2px", boxShadow: "5px 10px 20px 2px #ccc inset" }}>



                                        <FormInput
                                            label="Offer Starts From"
                                            type="date"
                                            value={offerFrom}
                                            myOnChange={(e) => setOfferFrom(e.target.value)}

                                        />
                                        <FormInput
                                            label="Offer Last To "
                                            type="date"
                                            value={offerTo}
                                            myOnChange={(e) => setOfferTo(e.target.value)}

                                        />


                                        <Form.Group className="col-md-6" controlId="" style={{ marginBottom: "" }}>
                                            <Form.Label style={{ marginBottom: "0" }}>Offer Percent</Form.Label>
                                            <Form.Control type='text' id="" name="" value={offerPercent} onChange={(e) => setOfferPercent(e.target.value)} />
                                        </Form.Group>
                                    </div>
                                </div>








                                <Form.Group className="col-md-10" controlId="formBasicCheckbox">
                                    <Form.Label>       </Form.Label>
                                    <Form.Check style={{ marginRight: "" }} type="checkbox" required label="Check me out to Confirm" />
                                </Form.Group>

                                <Button className="" variant="primary" type="submit" style={{ marginTop: "10px", width: "100px", height: "50px", marginRight: "" }}>
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

export default AddProduct
