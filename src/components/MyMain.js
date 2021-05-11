import { React, Component } from 'react';
import './MyMain.css'
import Heading from './Heading';
import MyNavbar from './MyNavbar';
import catData from './Category.json';
import { Nav, NavItem, NavLink, Card, Button, Row, Carousel, Tabs } from 'react-bootstrap';
import MyCard from './MyCard';

// import ScrollMenu from 'react-horizontal-scrolling-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faFacebook } from '@fortawesome/fontawesome-free-solid'
import { AppBar, Tab } from '@material-ui/core';
import Gif from './snowGif.gif';
import Gbox from './Gbox.gif';
import MyCardBrand from './MyCardBrand';
import axios from 'axios';
//import src from '*.avif';

class MyMain extends Component {


    constructor(props) {
        //
        // this.scroll = () => {
        //    this.myRef.scrollX += 20;
        //
        super(props);
        this.catData=[];
        this.catProduct=[];

        this.catProductTemp=[];

        // this.myRef = React.createRef();

        this.state = {
            myimg: "https://source.unsplash.com/1080x1000/?forest,waterfall,nature",
            categoryData:[],
            productData:[],
            catProduct2:this.catProduct
           
            

        }
        // this.addId=this.addId.bind(this);
        this.setItemOnCatClick=this.setItemOnCatClick.bind(this);
    }


    //

    componentDidMount(prevProps) {
        // Typical usage (don't forget to compare props):
        // if (this.props.userID !== prevProps.userID) {
        //   this.fetchData(this.props.userID);
        axios("http://ec2-65-0-32-190.ap-south-1.compute.amazonaws.com:8082/api/category/getallcategory").then(
            res => this.setState({categoryData:res.data}),
            console.log("data is comming")
        )
        .catch(function(error){
            console.log("yes"+error)
        });

        //
        axios("http://ec2-65-0-32-190.ap-south-1.compute.amazonaws.com:8082/api/product/getallproduct").then(
            res => this.setState({productData:res.data}),
            console.log("product data is comming")
        )
        .catch(function(error){
            console.log("yes"+error)
        });
        
      }

    

  //
  categoryItem=()=>{

  }
  //to set items by clicking category
  setItemOnCatClick=(e)=>{
    // if(this.state.catProduct2==this.catProductTemp)
    // {
    //     this.setState({catProduct2:this.catProductTemp})
    // } 

    if(this.state.catProduct2!==this.catProductTemp)//to stop repeated render after clicking
    {
      var catTemp=e.target.name;
     // alert(catTemp)
     this.state.productData.map((prod)=>(
        (catTemp==prod.category?this.catProductTemp.push(prod):console.log("007"))));

        this.setState({catProduct2:this.catProductTemp});
       
     }


}
  //end
    
    // addId(cat){
    //     const updated = this.state.categoryIds.push(cat.id);
    //     this.setState({categoryIds:updated});
    //   }
    //

    render() {

        return (
            <>

                <MyNavbar />

                <Nav >
                    {
                        this.state.categoryData.map((cat) => (
                            <Heading
                                category={cat.name}
                                
                                name={cat.id}
                                myOnclick={this.setItemOnCatClick}
                                // myOnclick={(e) => alert(e.target.name)}
                            // ipath={cat.image}
                            //  fun={this.catData.push(cat)}
                            fun={this.state.productData.map((prod)=>(
                                (cat.id==prod.category?this.catProduct.push(prod):console.log("007"))
                            ))}
                            />
                        ))

                    }
                    </Nav>

                <Nav style={{backgroundColor:"#ddd",color:"#000"}}>
                    {
                        catData.map((cat) => (
                            <Heading
                                category={cat.category}
                                name={cat.category}
                                myOnclick={() => alert(cat.price)}
                            // ipath={cat.image}
                            />
                        ))

                    }</Nav>
                <hr />
                {/* brands : section=third*/}
                {/* <div style={{display:"flex",flexDirection:"row",background:"#ddd"}}>
                    
                    <div style={{margin:"2px"}}><img src="https://source.unsplash.com/1600x900/?medicine,pils" width="200px"height="150px"></img></div>
                    <div style={{margin:"2px"}}>brand2</div>
                    </div> */}
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img onClick={() => { alert("hi") }}
                                className="d-block w-100"
                                src="https://source.unsplash.com/1080x300/?medicine,pils,medical"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/1080x300/?pils,supliment"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://source.unsplash.com/1080x300/?medicine,pils"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* main */}
                <hr></hr>
                {/* sliders */}
                <div>

                </div>


                {/*slidere */}


                <div style={{ backgroundImage: "url(" + this.state.myimg + ")", minHeight: "100px", backgroundAttachment: "fixed", backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover", fontWeight: "bold", fontFamily: "", marginLeft: "0%", marginBottom: "" }}>
                    <div style={{ marginLeft: "5%", paddingTop: "70px",marginBottom:"-10px",paddingBottom:"0px",color:"white" }}>
                        <h4><b>Category one</b></h4>
                        </div>
                {/* </div> */}


                {/* <div style={{backgroundColor:"green",paddingLeft:"",paddingRight:"",display:"",justifyItems:"",margin:"auto"}}> */}
                {/* <div className='row' style={{margin:"auto",flexWrap:"wrap" , backgroundImage: "url(" + Gif + ")"}}> */}
                <div className='' style={{ marginTop: "20px", margin: "auto", flexWrap: "wrap", background: "", backgroundColor: 'rgba(255, 255, 255, .15)'  ,
 backdropFilter: 'blur(5px)', flexWrap: "wrap", display: "flex", justifyContent: "center"   , }}>
                    {/* <div style={{marginTop:"15px",backgroundColor:'',width:"",height:"",flexGrow:'',flexDirection:'',opecity:"",marginLeft:"",marginRight:"0px",flexWrap:"wrap",display:"flex",justifyContent:"center"}}> */}
            {/* cat one mapping */}
                    {this.state.catProduct2.map((data) => (
                        <MyCard
                        src1='https://source.unsplash.com/1080x300/?mobilephones,smartphones'
                        name={data.name}
                        brand={data.brand}
                        costPrice={data.costPrice}
                        oldPrice={data.oldPrice}
                        quantity={data.quantity}
                         //price={data.price}
                          />
                    ))}
                    {/* {this.categoryItem()} */}

                    </div>

                </div>
                {/* </div> */}
                {/* slider s*/}

                {/* Regular Products */}

                <hr></hr>
                <div style={{ fontWeight: "bold", fontFamily: "", marginLeft: "5%" }}>
                    <h4><b>Regular Products</b></h4>
                </div>

                <div className='' style={{ boxShadow: "", marginTop: "20px", margin: "auto", flexWrap: "wrap", background: "linear-gradient(to right, #43cea2, #185aff)", flexWrap: "wrap", display: "flex", justifyContent: "center" }}>
                    {/* <div style={{marginTop:"15px",backgroundColor:'',width:"",height:"",flexGrow:'',flexDirection:'',opecity:"",marginLeft:"",marginRight:"0px",flexWrap:"wrap",display:"flex",justifyContent:"center"}}> */}

                    {/* { catData.map((data)=>(
                        <MyCard price={data.price}/>
                    ))} */}

                    <MyCard />
                    <MyCard />
                    <MyCard />

                </div>

                <hr>
                </hr>
                {/* Top Brands */}
                <div style={{ width: "80%", backgroundColor: "#aab", marginLeft: "10%", borderRadius: "30px" }}>
                    <div style={{ fontWeight: "bold", fontFamily: "", marginLeft: "5%" }}>
                        <h4><b>Top Brands</b></h4>
                    </div>
                    <div className="row" style={{ width: "", display: "flex", flexWrap: "wrap", margin: "auto", paddingTop: "5px", borderRadius: "10px", background: "linear-gradient(to right, #43ced2, #185aff)", }}>
                        <MyCardBrand />
                        <MyCardBrand />
                        <MyCardBrand />
                        <MyCardBrand />
                        <MyCardBrand />
                        <MyCardBrand />
                        <MyCardBrand />
                        <MyCardBrand />
                        <MyCardBrand />
                    </div>
                </div>
                {/* offers */}

                <hr></hr>
                <div style={{ width: "", backgroundColor: "#aab", marginLeft: "", margin: "auto", borderRadius: "30px 30px 0 0" }}>
                    <div style={{ fontWeight: "bold", fontFamily: "", marginLeft: "5%" }}>
                        <h4 id="exOffer"><b>Exclusive Offers</b></h4>
                    </div>
                    <div className="row" style={{ justifyContent: "center", width: "", display: "flex", flexWrap: "wrap", margin: "auto", paddingTop: "5px", borderRadius: "10px 10px 0 0", background: "linear-gradient(to right, #43ced2, #185aff)" }}>
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                    </div>
                </div>



                {/* footer s */}
                <div class="row" style={{ display: "flex", backgroundColor: 'black', color: "white", fontWeight: "bold", flexDirection: "", justifyContent: "", height: "10vh", margin: "auto", justifyContent: "center", justifyItems: "" }}>
                    <div class="col-lg-3">
                        about
                    </div>
                    <div class="col-lg-3">
                        address
                    </div>
                    <div class="col-lg-3">
                        social media

                    </div>

                </div>




            </>
        )
    }
}



export default MyMain;
