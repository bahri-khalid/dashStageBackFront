import { Component } from "react";
import { Routes as Switch, Route, Router, Link } from "react-router-dom";
import Footer from "./footer.component";
export default class Dash extends Component{

    constructor(props){
        super(props);
        this.state={
            
        }
    }

    componentDidMount(){

    }

    render(){
        
        return(
            <div>
                <section id="sidebar">
                <Link to={"#"} className="brand">
                    <i className='bx bxs-smile'></i>
                    <span className="text">SupAdmin</span>
                </Link>
                <Switch>
                    <Route exact path={["/", "/home"]} >
                        <Footer/>
                    </Route>
                </Switch>
                <ul className="side-menu top">
                    <li className="active">
                        <Link to={"/index"}>
                            <i className='bx bxs-dashboard' ></i>
                            <span className="text">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/users"}>
                            <i className='bx bxs-shopping-bag-alt' ></i>
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
                        <Link to={"addProducts"}>
                            <i className='bx bxs-add-to-queue' ></i>
                            <span className="text">Add Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            <i className='bx bxs-doughnut-chart' ></i>
                            <span className="text">Analytics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}>
                            <i className='bx bxs-message-dots' ></i>
                            <span className="text">Message</span>
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
            </div>
            

        )
    }   
    
}