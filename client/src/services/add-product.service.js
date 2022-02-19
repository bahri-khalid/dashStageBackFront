import axios from "axios"

export default new class addProductService{
    addProduct(formData){
        console.log(formData)
        return axios.post(
            "http://localhost:3000/addProduct",
            formData,
            {
                "Content-Type": "multipart/form-data",
                "Content-type": "application/json",
              }
          )
    }
}   