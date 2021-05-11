import React from 'react';
import {Badge, Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
//import ANavbar from '../aComponents/ANavbar';
import {Bar} from 'react-chartjs-2';

function Admin() {
  const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Sell',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [165000, 599000, 800000, 810000, 560000,100000]
      }
    ]
  }
    return (
      <>
        <div>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="">Admin</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
      
    </Nav>
    <Nav>
  
    <Nav.Link href=""><Link to="AddCategory">Add Category</Link></Nav.Link>
      <Nav.Link href=""><Link to="AddBrand">Add Brand</Link></Nav.Link>
      <Nav.Link href=""><Link to="AddProduct">Add Product</Link></Nav.Link>
      <Nav.Link href=""><Link to=""><Badge variant="warning">Logout</Badge></Link></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>




            {/* <Link to="/AddCategory"> <p>hh
           
            </p></Link> */}
   
        </div>

        <div style={{display:"flex",justifyContent:"center"}}>
          <div>Stock Management</div>
        </div>


        <div style={{display:"flex",justifyContent:"center"}}>
          <div>Employee Management</div>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
            <div className="mr-2"> <Link to="addUser"><button className="btn-info btn ">Add Employee</button></Link></div>
            <div> <Link to="showUser"><button className="btn-info btn ">Show Employees</button></Link></div>
            <div className="ml-2"> <Link to="showUser"><button className="btn-info btn ">Manage Sallary</button></Link></div>
          </div>

          
        <div style={{display:"flex",justifyContent:"center"}}>
          <div>Customer Management</div>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
            <div className="mr-2"> <Link to="addCustomer"><button className="btn-info btn ">Add Customer</button></Link></div>
            <div> <Link to="customerList"><button className="btn-info btn ">Show Customers</button></Link></div>
          </div>
<hr></hr>
          {/* graph */}
          <div className="col-md-12" style={{display:"flex",justifyContent:""}}>
            <div className="col-md-6">
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average selling per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
      </div>
          
        
        </>
    )
}

export default Admin
