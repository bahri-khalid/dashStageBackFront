import { Component } from "react";
import usersService from "../services/users.service";
export default class Users extends Component{
    constructor(props){
        super(props)
        
        this.date = new Date
        this.state={
            users:null
        }
    }

    componentDidMount(){

        usersService.getUsers()
            .then(result=>result.data)
            .then(dt=>{
                this.setState({users:dt})
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
                        <h3>Recent Users</h3>
                        <i className='bx bx-search' ></i>
                        <i className='bx bx-filter' ></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>SignupDate</th>
                                <th>Email</th>
                                <th>TataleSales</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.users&& this.state.users.userInfos.map((user,index) => {
                                const d = new Date(user.user.signupDate)
                                //this.setState({totaleSales:0})
                                var sum=0;
                                if(((this.date.getTime()-d.getTime())<240*60*60*1000)){
                                    return(
                                        
                                        <tr key={user.user._id}>
                                    <td>
                                        <img src={ (index%3)? "fimaleUser.png":"maleUser.png" }/>
                                        <p>
                                                {user.user.name}
                                        </p>
    
                                    </td>
                                    <td>{new Intl.DateTimeFormat().format(d)} </td>
                                    <td><span className="status completed">{user.user.email  } </span></td>
                                    
                                    <td><span className="status validate">{user.totaleSales} $ </span></td>
                                </tr>	
                                    )
                                    
                                }
                            })  }
                            {!this.state.users&&
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