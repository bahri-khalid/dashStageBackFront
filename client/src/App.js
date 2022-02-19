import logo from './logo.svg';
import './App.css';
import './css/style.css';
import './css/style2.css';
import './css/headStyle.css';

import Footer from './components/footer.component';
import { useState } from 'react';
import { Component } from 'react';
import Test from './components/test.component';
import Users from './components/users.component';
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import react from 'react';
import Products from './components/products.component';
import Orders from './components/orders.component';
import AddPorduct from './components/add-product.component';


class App extends Component{
  constructor(props){
    super(props);
    this.myRef = react.createRef();
    this.menuBar = react.createRef();
    this.state={
      sidebar : react.createRef(),
      status : null,
    }
  }

  hideSide(e){
    this.menuBar.current.addEventListener('click',  () =>{
        e.classList.toggle("hide");
    })
    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
    allSideMenu.forEach(item=>{
      const li = item.parentElement;

      item.addEventListener('click', function () {
        allSideMenu.forEach(i=> {
          i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
      })
    })
  }
  
  componentDidMount(){
    this.hideSide(this.state.sidebar.current)
  }

  render(){

    //const node = this.myRef.current;
    return(
      
        <BrowserRouter>
      <div className='App' >
      
        <section ref={this.state.sidebar} id="sidebar">
          
                <Link to={"#"} className="brand">
                    <i className='bx bxs-smile'></i>
                    <span className="text">SupAdmin</span>
                </Link>
                <ul className="side-menu top">
                    <li className="active">
                        <Link to={"/index"}>
                            <i className='bx bxs-dashboard' ></i>
                            <span className="text">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link    to={"/orders"}>
                            <i className='bx bxs-bell' >
                            </i>
                            <span className="text">Orders</span>
                            
                        </Link>
                    </li>
                    <li>
                        <Link to={"/users"}>
                            <i className='bx bxs-group' ></i>
                            <span className="text">Clients</span>
                        </Link>
                    </li>
                    <li >
                        <Link to={"/products"}>
                            <i className='bx bxs-shopping-bag-alt' ></i>
                            <span className="text">Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"addProduct"}>
                            <i className='bx bxs-add-to-queue' ></i>
                            <span className="text">Add Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"} ref={this.myRef}>
                            <i className='bx bxs-doughnut-chart' ></i>
                            <span className="text">Analytics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            <i className='bx bxs-group' ></i>
                            <span className="text">Team</span>
                        </Link>
                    </li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <Link to={"#"}>
                            <i className='bx bxs-cog' ></i>
                            <span className="text">Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"} className="logout">
                            <i className='bx bxs-log-out-circle' ></i>
                            <span className="text">Logout</span>
                        </Link>
                    </li>
                </ul>
            </section>
            <section id="content">
            <nav>
            <i ref={this.menuBar}  className='bx bx-menu' ></i>
            <Link to="#" className="nav-link">Categories</Link>
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..."/>
                    <button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
                </div>
            </form>
            <Link to="#" className="notification">
                <i className='bx bxs-bell' ></i>
                <span className="num">5</span>
            </Link>
            <Link to="#" className="profile">
                <img src="muslim.png"/>
            </Link>
        </nav>
            <Routes>

            <Route exaxt path="/products" element={<Products/>}/>
              <Route exaxt path="/users" element={<Users/>}/>
              <Route exaxt path="/orders" element={<Orders/>}/>
              <Route exaxt path="/addProduct" element={<AddPorduct/>}/>
            

          </Routes>
            </section>

      </div>
          </BrowserRouter>
    )
  }
}

export default App;
