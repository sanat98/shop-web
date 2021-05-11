import React, { Component } from 'react';
import { Badge,Button } from 'react-bootstrap';
import ANavbar from '../aComponents/ANavbar';
import LableText from '../aComponents/constants';

export default class OfferDetail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name:"",
            mobile:"",
            image:"",
            tableData:[{
                name:"parasitamol ",
                image:"https://source.unsplash.com/1600x900/?ploarbear",
                brand:"Cipla",
                quantity:"20%"
            },
            {
            name:"xyzzz",
            image:"https://source.unsplash.com/1600x900/?panada",
            brand:"Sun",
            quantity:"10%"
        },
        {
          name:"sssssss",
          image:"https://source.unsplash.com/1600x900/?ploarbear",
          brand:"Cipla",
          quantity:"5%"
      },
      {
      name:"aaaaaaaa",
      image:"https://source.unsplash.com/1600x900/?panada",
      brand:"Sun",
      quantity:"15%"
  },
  {
    name:"sdasd",
    image:"https://source.unsplash.com/1600x900/?ploarbear",
    brand:"Cipla",
    quantity:"25%"
  },
  {
  name:"sksksk",
  image:"https://source.unsplash.com/1600x900/?panada",
  brand:"Cipla",
  quantity:"15%"
  }
          ]
  
        }
      }
    render() {
        return (
            <>
            <ANavbar
            heading="OFFERS"
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
                  
                  
                  <th scope="col"><div style={{display:"flex",justifyContent:"center"}}>IMAGE</div></th>
                  <th scope="col"><div style={{display:"flex",justifyContent:"center"}}>NAME</div></th>
                  <th scope="col"><div style={{display:"flex",justifyContent:"center"}}>BRAND</div></th>
                  
                  <th scope="col"><div style={{display:"flex",justifyContent:"center"}}>OFFER</div></th>
                 
                </tr>
              </thead>
              {/* <TableContainer>

                    </TableContainer> */}

              <tbody>
                {

                  this.state.tableData.map((data, index) => (

                    <tr key={data.Id}>
                      {/* <td>{user.Id}</td> */}
                      
                      <td scope="row"><div style={{display:"flex",justifyContent:"center"}}><img style={{borderRadius:"5px"}} src={data.image} height="100px" width="100px"></img></div></td>
                      <td scope="row"><div className="" style={{display:"flex",backgroundColor:"",maxWidth:"",justifyContent:"center"}}>
                          <div className="" style={{maxWidth:"200px"}}>{data.name}</div></div></td>
                      
                      <td scope="row"><div style={{display:"flex",justifyContent:"center",marginLeft:"10px"}}>{data.brand}</div></td>
                      <td scope="row"> 
                      <div style={{display:"flex",justifyContent:"center",flexDirection:""}}>
                          {data.quantity}
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
