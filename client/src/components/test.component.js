import myinfoService from "../services/myinfo.service";
import { Component } from "react";

export default class Test extends Component{
    constructor(props){
        super(props);
        this.state={
            data : null,
            IsHere : false
        }
    }


    componentDidMount(){
        myinfoService.findInfo()
            .then(response=>response.data)
            .then(data=>{
                    console.log(data);
                    this.state.IsHere=true;
                    this.setState({IsHere:true})

            })
    }
    render(){
        const isHere = this.state.IsHere;
        return(
            <div className="Test">
                {isHere&&
                <p>the data is here</p>
                }
                {!isHere&&
                <p>the data is not here</p>
                }
            </div>
        )
    }
}