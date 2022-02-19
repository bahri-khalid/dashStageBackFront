import { Component } from "react"
import ordersService from "../services/orders.service"


export default  class Orders extends Component{
    constructor(props){
        super(props)
        this.date = new Date()
        this.state={
            orders:null
        }
    }
    componentDidMount(){
        ordersService.getOrders()
            .then(orders=>{
                this.setState({orders:orders.data})
                console.log(orders.data)
            })
    }
    render(){
        return(
            <main>
            <div className="table-data">
                <div className="order">
                    <div className="head">
                        <h3>Recent Orders</h3>
                        <i className='bx bx-search' ></i>
                        <i className='bx bx-filter' ></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Status</th>
                                <th>N° Products</th>
                                <th>Bill</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.orders&& this.state.orders.map((order,index) => {
                                const d = new Date(order.date_added)
                                
                                var sum=0;
                                if(((this.date.getTime()-d.getTime())<240*60*60*1000)){
                                    return(
                                        
                                        <tr key={order._id}>
                                    <td>
                                        <img src={ (index%3)? "fimaleUser.png":"maleUser.png" }/>
                                        <p>
                                        {new Intl.DateTimeFormat().format(d)}
                                        </p>
    
                                    </td>
                                    <td><span className="status completed">{order.status  } </span></td>
                                    <td ><span className="status infos">{order.items.length}</span></td>
                                    
                                    <td><span className="status validate">{order.bill} $ </span></td>
                                </tr>	
                                    )
                                    
                                }
                            })  }
                            {!this.state.orders&&
                                <tr>
                                    <td><h1>Loading...</h1></td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </main>
        )
    }
}