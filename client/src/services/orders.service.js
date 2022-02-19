import axios from "axios";

export default new class orderServices{
    getOrders(){
        return axios.get("/orders")
    }
}