const express = require("express")
const mongoose = require("mongoose")
const User = require("./models/User")
const Product = require("./models/Product")
const Order = require("./models/Order")
const userRouter = require('./routers/userRouters')
const productRouter = require('./routers/productRouters')
const orderRouter = require("./routers/orderRouters")
const crypto = require("crypto");
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");
var fs = require('fs');
var path = require('path');
require('dotenv/config');
//const dburl = "mongodb+srv://khalidbahri:khabah30012000@cluster0.urkzz.mongodb.net/merndb"
const dblocal="mongodb://localhost:27017/mern"
app = express()
app.use(express.json())
app.set("view engine",'ejs')
app.use(express.urlencoded())
app.use(express.static("./public/css"))
app.use(express.static("./public/img"))
app.use(express.static("./public/js"))

const promise =mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true,useUnifiedTopology: true },()=>{
})


// app.get("/adminPage",async (req,res)=>{
//     // const user = await User.create({"name":"khalid","email":"khalid3@gmail.com","password":"klsjdfklksdj"});
//     res.render("pageAdmin")
// })

// app.get("/react",async (req,res)=>{
//   console.log("hello react");
//   res.json({"name":"khalid bahri","age":22,"project name":"projet de stage"});
// })
//this is should be delete all users
// app.get("/delall",async (req,res)=>{
  
//     User.deleteMany()
//       .then(r=>{
  //         console.log(r)
//       }).catch(e=>{
//         console.log(e)
//       })
//   })  
//this should delete all orders

// app.get("/delall",async (req,res)=>{
  //   Order.deleteMany()
  //     .then(r=>{
    //       console.log(r)
    //     }).catch(e=>{
//       console.log(e)
//     })
// })

// app.get("/adduser",(req,res)=>{
//   res.render("adduser")
// })

//this get is to return all data from the db to the dashboard

//we use this function to get the name using id
// const findName = (id)=>{
  //   User.findById(id)
  //     .then(result=>{
    //       console.log("khalid")
    //       return result.name
//     }).catch((err)=>{
  //       console.log(err)
  //     })
  // }
  
  
  //
//   app.get("/index",(req,res)=>{
  //     Order.find()
  //     .then(orders=>{
//       User.find()
//       .then(users=>{
  //         res.render("index",{orders,users})
  //       }).catch(e=>{
    //         console.log("hada err",e)
    //         })
        
    //     }).catch(e=>{
      //       console.log('hada err tani',e)
      //     })
//   })

// app.post("/adduser",async (req,res)=>{
  //   const {name,email,password} = req.body
  //     const user = await  User.create({name,email,password})
  //   })
  
  // app.get("/addproduct",async (req,res)=>{
    //   const product = {
      //     title:'chebakia',
      //     image: 'tacos.png',
      //     description:"this is very deleciousss",
      //     category:'food',
      //     price:5040,
      //     quantity:25,
      //   }
  //     const newproduct = await  Product.create(product)
  //   })
  
  //this is just to puting some data
  // var newOrder;
  // app.get("/addOrder",async (req,res)=>{
//   User.find()
//   .then(async (result)=>{
//     result.forEach(async (user)=>{
//         newOrder={
//           userId:user.id,
//           items:[{productId:"62099817101f5074211f2d91",quantity:22,price:44},{productId:"620999a3f6f89584c751d5e0",quantity:10,price:52},{productId:"620999d41d23113dc92a7875",quantity:10,price:15}],
//           bill:10,  
//         }
//         //const order = await Order.create(newOrder)
//         const order = await Order.create(newOrder)
//       })
//     })

//   })

//   app.get("/modify",async (req,res)=>{
  //     await User.updateMany({},{ signupDate:Date.now});
  //     res.send("hkldj")
  // })
  
  
  
  // connection
//   const conn = mongoose.connection;
//   // init gfs
//   let gfs;
//   conn.once('open',() => {
//     gfs = new mongoose.mongo.GridFSBucket(conn.db, {
//       bucketName: "uploads"
//     });
//   });
  
//   //create storage object
//   const storage = new GridFsStorage({
//     url:process.env.MONGO_URL,
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err);
//           }
//           const filename = buf.toString('hex') + path.extname(file.originalname);
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'uploads'
//           };
//           resolve(fileInfo);
//         });
//       });
//     }
//   });
//   const upload = multer({ storage });

// app.post("/upload", upload.single("file"), (req, res) => {
//   // res.json({file : req.file})
//   res.redirect("/");
// });


app.use(userRouter)
app.use(productRouter)
app.use(orderRouter)
let port = 3001 
app.listen(port,console.log("the connection is estableshed on ",port))