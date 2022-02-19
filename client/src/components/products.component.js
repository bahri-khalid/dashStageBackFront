import { Component } from "react";
import productsService from "../services/products.service";
import { FaEdit, FaUbuntu, IconName } from "react-icons/fa";
export default class Products extends Component{
    constructor(props){
        super(props)
        
        this.date = new Date
        this.state={
            products:null
        }
    }

    componentDidMount(){

        productsService.getPorducts()
            .then(result=>result.data)
            .then(dt=>{
                this.setState({products:dt})
                
            })
    }

    render() {
        return (
            <main>
            {/* <%let date = new Date%>
            <%- include("./partials/counter")%> */}
            <div className="table-data">
                <div className="order">
                    <div className="head">
                        <h3>Recent Products</h3>
                        <i className='bx bx-search' ></i>
                        <i className='bx bx-filter' ></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                            <th>Product Title</th>
                            <th>Date Added</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>TotaleSales</th>
                            <th>Modify</th>
                            </tr>
                        </thead>


                        <tbody>
                            {this.state.products&& this.state.products.productInfos.map((product,index) => {    
                                const d = new Date(product.product.date_added)
                                //this.setState({totaleSales:0})
                                var sum=0;
                                if(((this.date.getTime()-d.getTime())<240*60*60*100000)){
                                    // {console.log(product.product.title)}
                                    return(
                                        
                                        <tr key={product.product._id}>
                                    <td>
                                        <img src={ `${product.product.category}.png` }/>
                                        <p>
                                                {product.product.title}
                                        </p>
    
                                    </td>
                                    <td>{new Intl.DateTimeFormat().format(d)} </td>
                                    <td><span className="status completed">{product.product.category  } </span></td>
                                    <td><span className="status infos">{product.product.price  } $ </span></td>
                                    <td><span className="status validate">{product.totaleSales} $ </span></td>
                                    <td><span className="status validate" style={{textAlign:""}}><FaEdit style={{fontSize:'16px',paddingTop:"5px"}}/>  </span></td>
                                </tr>	
                                    )
                                    console.log("hello")
                                }
                            })  }
                            {!this.state.products&&
                                <tr>
                                    
                               <td><h1>Loading...</h1></td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </main>
        );
    }
}
