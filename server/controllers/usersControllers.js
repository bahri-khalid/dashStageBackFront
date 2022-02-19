const User = require("../models/User")
const Orders = require("../models/Order")
module.exports.users = (req,res)=>{
    // User.find()
    // .then((users)=>{
    //         // var ddd = JSON.parse(users)
    //         Orders.find()
    //             .then((orders)=>{

    //                 //res.render("users",{users,orders})
    //                 res.json({"users":users,"orders":orders});
    //             }).catch((e)=>{
    //                 console.log(e)
    //             })
    //     }).catch((e)=>{
    //         res.send(`this is the error ${e}`)
    //     })

    /************vesion for reactjs */
    const userInfos = new Array();
    let sum=0

    User.find()
    .then((users)=>{
        users.forEach((user,index)=>{
            Orders.find({userId:user.id},{_id:0,bill:1})
            .then((userOrders)=>{
                userOrders.forEach((order)=>{
                    sum+=order.bill
                })
                //console.log(userInfos)
                userInfos.push({"user":user,'totaleSales':sum});
                sum=0;  
                if(index == users.length-1){
                    res.json({"userInfos":userInfos})
                }
            })
        })

        console.log(userInfos)
        
        }).catch(()=>{
           
                res.json({"user":{"_id":"617c06b0ae866124af2ddf84","name":"fack user to avoid err","email":"khalid@gmal.com","password":"$2b$10$fcZtxwLkT60Tki8h8z6lDuYXuBlJsKDGkKRTIKzDwsR8KVFp.XnhK","__v":0,"signupDate":"2022-02-13T19:22:53.040Z"},"totaleSales":90})
            
        })
    
}