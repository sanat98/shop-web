import React,{Component} from 'react';
import {Badge, Button} from 'react-bootstrap';
import ANavbar from '../../aComponents/ANavbar'
import LableText from '../../aComponents/constants';
import {Link} from 'react-router-dom';

class CustomerList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
          name:"",
          mobile:"",
          image:"",
          tableData:[{
              first_name:"sanat",
              last_name:"kumar",
              image:"https://source.unsplash.com/1600x900/?ploarbear",
              mobile:787878787,
              address:"gardanibgh road no:21",
              credit:0,
              debit:1500
          },
          {
          first_name:"sksksk",
          last_name:"kumar",
          image:"https://source.unsplash.com/1600x900/?panada",
          mobile:787878787,
          address:"gardanibgh road no:21",
          credit:1000,
          debit:0
      },
      {
        first_name:"sssssss",
        last_name:"kumar",
        image:"https://source.unsplash.com/1600x900/?ploarbear",
        mobile:787878787,
        address:"gardanibgh road no:21",
         credit:1000,
        debit:0
    },
    {
    first_name:"aaaaaaaa",
    last_name:"kumar",
    image:"https://source.unsplash.com/1600x900/?panada",
    mobile:787878787,
    address:"gardanibgh road no:21",
    credit:1000,
    debit:0
},
{
  first_name:"sdasd",
  last_name:"kumar",
  image:"https://source.unsplash.com/1600x900/?ploarbear",
  mobile:787878787,
  address:"gardanibgh road no:21",
  credit:0,
  debit:1000
},
{
first_name:"sksksk",
last_name:"kumar",
image:"https://source.unsplash.com/1600x900/?panada",
mobile:787878787,
address:"gardanibgh road no:21",
credit:0,
debit:500
}
        ]

      }
    }

    render(){

        return(
            <>
            <ANavbar
            heading="Customers"
            />
            <div className="col-md-12 mb-3 mt-3 tbl">
            
              {/* <div className="search">
                <input
                  onChange={event => { (event.target.value.this.tableData.map()) }}
                />

              </div> */}

              <table className="table table-striped  table-sm row-border hover ">
                <thead>
                  <tr>
                    {/* <th scope="col">Id </th> */}
                    
                    
                    <th scope="col"><div style={{display:"flex",justifyContent:"center"}}>Picture</div></th>
                    <th scope="col"><div style={{display:"flex",justifyContent:""}}>Name</div></th>
                    <th scope="col"><div style={{display:"flex",justifyContent:"",}}>Address</div></th>
                    <th scope="col"><div style={{display:"flex",justifyContent:"",paddingLeft:"20px"}}> Amount</div></th>
                    
                    <th scope="col"><div style={{display:"flex",justifyContent:"center"}}>Payment</div></th>
                   
                  </tr>
                </thead>
                {/* <TableContainer>

                      </TableContainer> */}

                <tbody>
                  {

                    this.state.tableData.map((data) => (

                      <tr key={data.Id}>
                        {/* <td>{data.Id}</td> */}
                        
                        <td scope="row">
                          <div style={{display:"flex",justifyContent:"center"}}>
                            <Link to="customerDetail"><img style={{borderRadius:"5px"}} src={data.image} height="100px" width="100px">
                              </img></Link>
                              </div>
                          </td>
                        <td scope="row"><Link to="customerDetail" style={{display:"",color:"black"}}><b>{data.first_name} {data.last_name}</b></Link> <br></br><br></br>Mob: {data.mobile}</td>
                        
                        <td scope="row"><div style={{display:"flex",justifyContent:"",marginLeft:""}}>{data.address} </div></td>

                        <td scope="row"> <div style={{display:"flex",justifyContent:"",flexDirection:"column"}}>
                             <Badge pill variant="info" className="col-md-5 mt-3 mb-2  " ><span style={{fontSize:"20px"}}>Rs:+{data.credit}</span>  </Badge>

                          {/* <Link to={{pathname:"/User"    or onclick any function */}
                           <Badge pill variant="danger" className="col-md-5  mt-2 mr-3 "> <span style={{fontSize:"20px"}}>Rs:-{data.debit}</span>  </Badge>
                           </div>
                        </td>
                        


                        <td scope="row"> <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                             <Button type="button" className="btn btn-success mr-2 mt-2 mb-2 btn-sm" >Add Credit </Button>

                          {/* <Link to={{pathname:"/User"    or onclick any function */}
                           <Button type="button" className="btn btn-solid mr-2 btn-sm mt-2 btn-danger"> Add Debit </Button>
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
  
export default CustomerList;
