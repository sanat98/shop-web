import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch ,Route } from 'react-router-dom';

// import './App.css';
import Heading from './components/Heading';
import MyNavbar from './components/MyNavbar';
// import Home from './pages/Home';
// import FirstCat from './pages/FirstCat';
// import SecondCat from './pages/SecondCat';
//import  All from './pages';
import catData from './components/Category.json'
import { Navbar } from 'react-bootstrap';
import MyMain from './components/MyMain';
import DetailPage from './pages/DetailPage';
import MyScrolable from './components/MyScrolable';
import Admin from './admin/aPages/Admin';
import AddCategory from './admin/aPages/AddCategory';
import AddBrand from './admin/aPages/AddBrand';
import AddProduct from './admin/aPages/AddProduct';
import LoginForm from './admin/aPages/LoginForm';
import Registration from './admin/aPages/Registration';
import AddUser from './admin/aPages/AddUser';
import ShowUser from './admin/aPages/ShowUser';
import UserDetail from './admin/aPages/UserDetail';
import Sallary from './admin/aPages/Sallary';
import AttendanceCalender from './admin/aPages/AttendanceCalender';
import Advance from './admin/aPages/Advance';
import StockDash from './admin/aPages/StockDash';
import OfferDetail from './admin/aPages/OfferDetail';

import AddCustomer from './admin/aPages/AddCustomer';
import CustomerList from './admin/aPages/customer/CustomerList';
import OrderList from './admin/aPages/OrderList';
import Orders from './admin/aPages/Orders';
import StockDashAg from './admin/aPages/StockDashAg';
import Packed from './admin/aPages/status/Packed';
import Shipped from './admin/aPages/status/Shipped';
import Completed from './admin/aPages/status/Completed';
import CustomerDetail from './admin/aPages/customer/customerDetail';
import ForgetPassShop from './admin/aPages/ForgetPassShop';
import LeaveList from './admin/aPages/LeaveList';
import WalletShopKeeper from './admin/aPages/WalletShopKeeper';
import Validity from './admin/aPages/Validity';

// import {BrowserRouter,Switch ,Route } from 'react-router-dom';

function App() {
  return (
    
    //   <BrowserRouter>
    // <div className="App">

    // <Switch>
    // <Route path="/" exact component={MyMain}></Route>
    // <Route path="/DetailPage" exact component={DetailPage}></Route>
       
    //     {/* <MyMain/> */}
    //     {/* <DetailPage/> */}
    //     {/* <MyScrolable/> */}

     
    //     </Switch>
    // </div>

    // </BrowserRouter>


<>
<div className="App">
<MyMain/>

//   <BrowserRouter>
// <div className="App">
// <Switch>
//   <Route path="/" exact component={MyMain}></Route>
//   <Route path="/login" exact component={LoginForm}></Route>
//   <Route path="/admin" exact component={Admin}></Route>
//   <Route path="/registration" exact component={Registration}></Route>
//   <Route path="/AddCategory" component={AddCategory}></Route>
//   <Route path="/AddBrand" component={AddBrand}></Route>
//   <Route path="/AddProduct" component={AddProduct}></Route>
//   <Route path="/main" exact component={MyMain}></Route>
//   <Route path="/DetailPage" exact component={DetailPage}></Route>
//   <Route path="/AddUser" exact component={AddUser}></Route>
//   <Route path="/reg" exact component={Registration}></Route>
//   <Route path="/showUser" exact component={ShowUser}></Route>
//   <Route path="/userDetail" exact component={UserDetail}></Route>
//   <Route path="/sallary" exact component={Sallary}></Route>
//   <Route path="/attendance" exact component={AttendanceCalender}></Route>
//   <Route path="/advance" exact component={Advance}></Route>
//   <Route path="/stock" exact component={StockDash}></Route>
//   <Route path="/offerDetail" exact component={OfferDetail}></Route>
//   <Route path="/addCustomer" exact component={AddCustomer}></Route>
//   <Route path="/customerList" exact component={CustomerList}></Route>
//   <Route path="/orderList" exact component={OrderList}></Route>
//   <Route path="/orders" exact component={Orders}></Route>
//   <Route path="/stockAg" exact component={StockDashAg}></Route>
//   <Route path="/packed" exact component={Packed}></Route>
//   <Route path="/shipped" exact component={Shipped}></Route>
//   <Route path="/completed" exact component={Completed}></Route>
//   <Route path="/customerDetail" exact component={CustomerDetail}></Route>
//   <Route path="/forgetPass" exact component={ForgetPassShop}></Route>
//   <Route path="/leaveList" exact component={LeaveList}></Route>
//   <Route path="/walletShop" exact component={WalletShopKeeper}></Route>
//   <Route path="/validity" exact component={Validity}></Route>

    
    
//     </Switch>
//     </div>
//     </BrowserRouter> 
    </>




// <>
//  <BrowserRouter>
//     <div className="App">

//      <Switch>
//     <Route path="/" exact component={LoginForm}></Route>
//      <Route path="/Registration" exact component={Registration}></Route>
          
//       </Switch>
//     </div>

//      </BrowserRouter>
// </>
  
    
  );
}

export default App;
