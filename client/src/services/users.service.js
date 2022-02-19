import axios from "axios"


export default new class UsersService {

    getUsers(){
        return axios.get("/users")
    }
}