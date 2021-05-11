import React,{Component} from 'react';
import {Badge, Button} from 'react-bootstrap';
import ANavbar from '../aComponents/ANavbar'
import LableText from '../aComponents/constants';
import {Link} from 'react-router-dom';
import './Registration.css';

class ShowUser extends Component {
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
              salary:10000
          },
          {
          first_name:"sksksk",
          last_name:"kumar",
          image:"https://source.unsplash.com/1600x900/?panada",
          mobile:787878787,
          salary:15000
      },
      {
        first_name:"sssssss",
        last_name:"kumar",
        image:"https://source.unsplash.com/1600x900/?ploarbear",
        mobile:787878787,
        salary:20000
    },
    {
    first_name:"aaaaaaaa",
    last_name:"kumar",
    image:"https://source.unsplash.com/1600x900/?panada",
    mobile:787878787,
    salary:15000
},
{
  first_name:"sdasd",
  last_name:"kumar",
  image:"https://source.unsplash.com/1600x900/?ploarbear",
  mobile:787878787,
  salary:25000
},
{
first_name:"sksksk",
last_name:"kumar",
image:"https://source.unsplash.com/1600x900/?panada",
mobile:787878787,
salary:15000
}
        ]

      }
    }

    render(){

        return(
            <>
            <ANavbar
            heading="Employees List"
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
                    <th scope="col"><div className="ml-4" style={{display:"flex",justifyContent:""}}>Sallary</div></th>
                    
                    <th scope="col"><div style={{display:"flex",justifyContent:"center"}}>Attendance</div></th>
                   
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
                        <td scope="row"><b>{user.first_name} {user.last_name}</b> <br></br><br></br>Mob: 7676767676</td>
                        
                        <td scope="row">
                          <div style={{display:"flex",justifyContent:"",marginLeft:""}}>
                            <Badge className="col-md-4" pill variant="info"> {user.salary}</Badge></div>
                            
                            <Link to="sallary"><button className="btn btn-info btn-sm mt-4 lb">Manage</button></Link>
                            </td>
                        <td scope="row"> <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                             <Button type="button" className="btn btn-success mr-2 mt-2 mb-2 btn-sm" > {LableText.PRESENT} </Button>

                          {/* <Link to={{pathname:"/User"    or onclick any function */}
                           <Button type="button" className="btn btn-solid mr-2 btn-sm mt-2 " >Absent </Button>
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
  
export default ShowUser;
