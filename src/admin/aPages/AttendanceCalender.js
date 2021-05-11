import React, { Component } from 'react';
import {Badge, Table} from "react-bootstrap";

class AttendanceCalender extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
        }
    }

// days=()=>
// {
// for(x=1,x<30,x++){
//     if(x<7){

//     }
// }
// }

    
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {[1,2,3,4,5,6,7].map((data)=>(<td>{data} <Badge variant="info">Present</Badge></td>))}
                           
                            
                        
                        </tr>
                        <tr>
                            <td>8 <Badge variant="info">Present</Badge></td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                        </tr>
                        <tr>
                        
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                        </tr>
                        <tr>
                        
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                        </tr>
                        <tr>
                        
                            <td>30</td>
                            <td>31</td>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default AttendanceCalender