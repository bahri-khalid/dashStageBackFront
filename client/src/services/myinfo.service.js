import axios from "axios";


class myinfoService {

    findInfo(){
            console.log("is here")
            return axios.get("../../react");
    }
}

export default new myinfoService;