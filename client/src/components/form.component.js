import { Component } from "react";
import addProductService from "../services/add-product.service";

export default class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          title:'',
          image:null,
          category:'',
          price:0,
          quantity:0,
          description:'',
          newProduct:null
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleQuantityChange = this.handleQuantityChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value});
      }
      handleImageChange(event) {
        console.log("file changed",event.target.files[0])
        this.setState({image: event.target.files[1]});
      }
      handleCategoryChange(event) {
        this.setState({category: event.target.value});
      }
      handlePriceChange(event) {
        this.setState({price: event.target.value});
      }
      handleDescriptionChange(event) {
        this.setState({description: event.target.value});
      }
      handleQuantityChange(event) {
        this.setState({quantity: event.target.value});
      }
  
    handleSubmit(event) {
      console.log(this.state.image)
      let formData = new FormData();
      formData.append("file", event.target.image);
      formData.append("title", this.state.title);
      formData.append("description", this.state.description);
      formData.append("category", this.state.category);
      formData.append("price", this.state.price);
      formData.append("quantity", this.state.quantity);

        console.log("submit")
        console.log(event)
        event.preventDefault();
          addProductService.addProduct(formData)
            .then(r=>{
              console.log("back again")
                this.setState({
                    value: '',
                    title:'',
                    image:null,
                    category:'',
                    price:0,
                    quantity:0,
                    description:'',
                  });

            })
          
    }
    
    render() {
      return (
        <form  encType="multipart/form-data" className="right" onSubmit={this.handleSubmit}>
            <div className="data">
            <label >Title
            </label>
             <input type="text" className="input" value={this.state.title} onChange={this.handleTitleChange} />
            </div>    
          <div className="data">

        <label >Image</label>
        <input type="file" required className="input" name="file" id ="image"  onChange={this.handleImageChange}/>
        </div>
        <div className="data">  

        <label>Category</label>
        <input type="text" className="input custom-file-input" id="category" value= {this.state.category} onChange={this.handleCategoryChange}/>
        </div>
        <div className="data">

        <label >Price</label>
        <input type="number" className="input" id ="price" value={this.state.price} onChange={this.handlePriceChange}/>
        </div>
        <div className="data">

        <label >Quantity</label>
        <input type="number" id =" quantity" className="input" value={this.state.quantity} onChange={this.handleQuantityChange}/>
        </div>
        <div className="data">
        <label >Description</label>
        <textarea name="text" id ="desc"  className="input"   id="field" cols="40" rows="1.5" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
        </div>
          <input type="submit" value="Submit"  className="input" id="submit"/>
         </form>
      );
    }
  }
  