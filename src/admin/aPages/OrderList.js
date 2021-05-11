import React,{Component} from 'react';
import {Badge, Button} from 'react-bootstrap';
import ANavbar from '../aComponents/ANavbar'
import LableText from '../aComponents/constants';
import {Link} from 'react-router-dom';

class OrderList extends Component {
    constructor(props) {
      super(props);
  this.ttt=[];
      this.state = {
        tt:[],
          name:"",
          mobile:"",
          image:"",
          tableData:[{
              first_name:"sanat",
              last_name:"kumar",
              image:"https://source.unsplash.com/1600x900/?ploarbear",
              mobile:787878787,
              address:"gardanibgh road no:21",
              count:10,
              date:'10/04/2020'
          },
          {
          first_name:"aksksk",
          last_name:"kumar",
          image:"https://source.unsplash.com/1600x900/?panada",
          mobile:787878787,
          address:"gardanibgh road no:21",
          count:10,
          date:0
      },
      {
        first_name:"sssssss",
        last_name:"kumar",
        image:"https://source.unsplash.com/1600x900/?ploarbear",
        mobile:787878787,
        address:"gardanibgh road no:21",
        count:10,
        date:0
    },
    {
    first_name:"aaaaaaaa",
    last_name:"kumar",
    image:"https://source.unsplash.com/1600x900/?panada",
    mobile:787878787,
    address:"gardanibgh road no:21",
    count:20,
    date:0
},
{
  first_name:"sdasd",
  last_name:"kumar",
  image:"https://source.unsplash.com/1600x900/?ploarbear",
  mobile:787878787,
  address:"gardanibgh road no:21",
  count:10,
  date:1000
},
{
first_name:"sksksk",
last_name:"kumar",
image:"https://source.unsplash.com/1600x900/?panada",
mobile:787878787,
address:"gardanibgh road no:21",
count:10,
date:500
}
        ]

      }
      this.mySearch = this.mySearch.bind(this);
    }

    //functions

     mySearch=(e)=>
    {
      this.setState({name:e.target.value});

      this.state.tableData.map((data)=>(
       
        (data.first_name.indexOf(this.state.name)===0)?this.ttt.push(data):this.state.tt.push("abc")
      ))

    }



    render(){

        return(
            <>
            <ANavbar
            heading="Order List"
            />
            <div className="col-md-12 mb-3 mt-3 tbl">

            
              <div className="">
                <input type="text"
                  // onChange={event => { (event.target.value.this.tableData.map()) }}
                  onChange={this.mySearch}
                />

              </div>
              <div>cc{this.state.name}</div>

              <table className="table table-striped  table-sm row-border hover ">
                <thead>
                  <tr>
                    {/* <th scope="col">Id </th> */}
                    
                    
                    <th scope="col"><div style={{display:"flex",justifyContent:"center"}}>Picture</div></th>
                    <th scope="col"><div style={{display:"flex",justifyContent:""}}>Name</div></th>
                    <th scope="col"><div style={{display:"flex",justifyContent:""}}>Address</div></th>

                    <th scope="col"><div style={{display:"flex",justifyContent:"",paddingLeft:""}}>Item Count</div></th>
                    
                    <th scope="col"><div style={{display:"flex",justifyContent:""}}>Date</div></th>
                    <th scope="col"><div style={{display:"flex",justifyContent:"center"}}>Accept/Regect</div></th>
                   
                  </tr>
                </thead>
                {/* <TableContainer>

                      </TableContainer> */}

                <tbody>
                  {

                    this.state.tableData.map((data) => (

                      <tr key={data.Id}>
                        {/* <td>{data.Id}</td> */}
                        
                       <td scope="row"><Link to="orders" ><div style={{display:"flex",justifyContent:"center"}}><img style={{borderRadius:"5px"}} src={data.image} height="100px" width="100px"></img></div> </Link> </td> 
                        <td scope="row"><b>{data.first_name} {data.last_name}</b> <br></br><br></br>Mob: {data.mobile}</td>
                        
                        <td scope="row"><div style={{display:"flex",justifyContent:"",marginLeft:""}}>{data.address} </div></td>

                        <td scope="row"> <div style={{display:"flex",justifyContent:"",flexDirection:""}}>
                             <Badge pill variant="info" className="col-md-6 mt-2 mb-2" ><span style={{fontSize:"20px"}}>{data.count}</span>  </Badge>

                          {/* <Link to={{pathname:"/User"    or onclick any function 
                           <Badge pill variant="danger" className="col-md-5  mt-2 mr-3 "> <span style={{fontSize:"20px"}}>Rs:-{data.debit}</span>  </Badge>*/}
                           </div>
                        </td>
                        
                        <td scope="row"><div className="mt-2" style={{display:"flex",justifyContent:"",marginLeft:""}}>{data.date} </div></td>

                        <td scope="row"> <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                             <Button type="button" className="btn btn-success mr-2 mt-2 mb-2 btn-sm" >Accept </Button>

                          {/* <Link to={{pathname:"/User"    or onclick any function */}
                           <Button type="button" className="btn btn-solid mr-2 btn-sm mt-2 btn-danger">Regect </Button>
                           </div>
                        </td>
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
  
export default OrderList;
