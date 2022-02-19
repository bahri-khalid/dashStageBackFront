import react from "react";
import { Component } from "react";
import { FaFeather } from "react-icons/fa";
import addProductService from "../services/add-product.service";
import NameForm from "./form.component";
export default  class AddPorduct extends Component{

        constructor(props){
            super(props)
            this.submit = react.createRef()
            this.form = react.createRef()
            this.state={
                newProduct:null
            }
        }

        componentDidMount(){
            this.setState({newProduct:{
                "title":"khalid youssef",
                "image": "tacos.png",
                "description":"hello world this is a new product ",
                "category":"food", 
                "price":1,
                "quantity":8
              }}) 
              const np = {
                "title":"khalid hello",
                "image": "tacos.png",
                "description":"hello world this is a new product ",
                "category":"food", 
                "price":1,
                "quantity":8
              }
              //addProductService.AddProduct(this.newProduct)
              addProductService.addProduct(np)
            //   
        }

        render(){
            return(
                <div className="container">
        <div className="content2">
            <div className="left">
            </div>
            <div className="right">
                <h2>Welcom</h2>
                <NameForm/>
            </div>
    
        </div>
    </div>
            )
        }
}