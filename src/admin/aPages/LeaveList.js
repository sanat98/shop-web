import React,{Component} from 'react';
import {Badge, Button} from 'react-bootstrap';
import ANavbar from '../aComponents/ANavbar'
import LableText from '../aComponents/constants';
import {Link} from 'react-router-dom';
import './Registration.css';

class LeaveList extends Component {
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
              from:"10/02/2021",
              to:"12/04/2021",
              type:"Paid"
          },
          {
          first_name:"sksksk",
          last_name:"kumar",
          image:"https://source.unsplash.com/1600x900/?panada",
          mobile:787878787,
          from:"10/02/2021",
          to:"12/04/2021",
          type:"Un-Paid"
      },
      {
        first_name:"sssssss",
        last_name:"kumar",
        image:"https://source.unsplash.com/1600x900/?ploarbear",
        mobile:787878787,
        from:"10/02/2021",
        to:"12/04/2021",
        type:"Un-Paid"
    },
    {
    first_name:"aaaaaaaa",
    last_name:"kumar",
    image:"https://source.unsplash.com/1600x900/?panada",
    mobile:787878787,
    from:"10/02/2021",
    to:"12/04/2021",
    type:"Paid"
},
{
  first_name:"sdasd",
  last_name:"kumar",
  image:"https://source.unsplash.com/1600x900/?ploarbear",
  mobile:787878787,
  from:"10/02/2021",
  to:"12/04/2021",
  type:"Paid"
},
{
first_name:"sksksk",
last_name:"kumar",
image:"https://source.unsplash.com/1600x900/?panada",
mobile:787878787,
from:"10/02/2021",
to:"12/04/2021",
type:"Paid"
}
        ]

      }
    }

    render(){

        return(
            <>
            <ANavbar
            heading="On Leave"
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
                    
                    
                    <th scope="col"><div style={{display:"flex",justifyContent:"center"}}>Picture</div></th>
                    <th scope="col"><div style={{display:"flex",justifyContent:""}}>Name</div></th>
                    <th scope="col"><div className="ml-4" style={{display:"flex",justifyContent:""}}>From</div></th>
                    <th scope="col"><div className="ml-4" style={{display:"flex",justifyContent:""}}>To</div></th>
                    
                    <th scope="col"><div style={{display:"flex",justifyContent:"center"}}>Leave type</div></th>
                   
                  </tr>
                </thead>
                {/* <TableContainer>

                      </TableContainer> */}

                <tbody>
                  {

                    this.state.tableData.map((user, index) => (

                      <tr key={user.Id}>
                        {/* <td>{user.Id}</td> */}
                        
                        <td scope="row"> 
                        <div style={{display:"flex",justifyContent:"center"}}><Link to="userDetail"><img style={{borderRadius:"5px"}} src={user.image} height="100px" width="100px"></img></Link></div>
                        </td>
                        <td scope="row" ><b>{user.first_name} {user.last_name}</b> <br></br><br></br>Mob: 7676767676</td>
                        
                        <td scope="row">
                          <div style={{display:"flex",justifyContent:"",marginLeft:""}}>
                            <Badge className="col-md-5 mt-2" pill variant="info"> {user.from}</Badge></div>
                            
                            </td>
                            <td scope="row">
                          <div style={{display:"flex",justifyContent:"",marginLeft:""}}>
                            <Badge className="col-md-5 mt-2" pill variant="info"> {user.to}</Badge></div>
                            
                            </td>

                        <td scope="row"> <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                             {/* <Button type="button" className="btn btn-success mr-2 mt-2 mb-2 btn-sm" > {user.type} </Button> */}
                             <Badge pill variant="success" className="mt-2 col-md-10 ml-4"  >{user.type}</Badge>

                          {/* <Link to={{pathname:"/User"    or onclick any function */}
                           <Badge pill variant="success" className="mt-2 col-md-10 ml-4" >Remaining Days:10 </Badge>
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
  
export default LeaveList;
