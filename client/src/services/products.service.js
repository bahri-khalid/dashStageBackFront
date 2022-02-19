import axios from "axios";

export default new class productsService{

    getPorducts(){
        return axios.get("/products");
    }
}