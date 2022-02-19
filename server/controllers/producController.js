const mongoose = require("mongoose")
const Product = require("../models/Product")
const User = require("../models/User")
const Order = require("../models/Order")

module.exports.get_products = async (req,res)=>{
    //User.find()
    // .then((users)=>{
    //         // var ddd = JSON.parse(users)
    //         Order.find()
    //             .then((orders)=>{
    //                 Product.find()
    //                     .then((products)=>{
    //                         res.render("products",{users,orders,products})
    //                     }).catch(e=>{
    //                         console.log(e)
    //                     })
    //             }).catch((e)=>{
    //                 console.log(e)
    //             })
    //     }).catch((e)=>{
    //         res.send(`this is the error ${e}`)
    //     })

    //*********************for reactjs */
    function findItemByProductId(items,id){
        let rtrn=0
        items.forEach((item,index)=>{
            if(item.productId==id){
                rtrn = index
            }
        })
        return rtrn
    }

    const sendResponse = (b)=>{
        if(b){
            console.log("rah dkhal")
            return true
        }
    }
    let totaleSales=0;
    const productInfos = new Array()
    Product.find()
        .then((products)=>{
            products.forEach((product,index1)=>{
                Order.find({"items.productId":product.id},{items:1})
                    .then((orders)=>{
                        if(orders.length!=0){
                            orders.forEach((order,index2)=>{
                                let index = findItemByProductId(order.items,product.id);
                                totaleSales+=order.items[index].price * order.items[index].quantity;
                                // console.log(index1==products.length-1,index2==orders.length-1,index1)
                                if(index1==products.length-1 && index2==orders.length-1){
                                    // console.log("khldkfjslkj")
                                    productInfos.push({"product":product,"totaleSales":totaleSales})  
                                    res.json(productInfos)
                                }
                            })
                        }else if(products.length-1==index1){

                            productInfos.push({"product":product,"totaleSales":totaleSales})  
                                    res.json({"productInfos":productInfos})
                        }

                    }).then(()=>{
                        // console.log(index1,product,totaleSales)
                        // console.log("just before the push   ")
                        productInfos.push({"product":product,"totaleSales":totaleSales})                    
                        totaleSales=0;
                    }).catch(()=>{
                        console.log("there is an error");
                    })
                    
                    
            })
            
        })
        // .then(()=>{
                
        //         console.log("just before the render")
        //         res.json(productInfos)
            
        // })
}





module.exports.oneProd = (req,res)=>{
    Product.findById(req.params.id)
        .then(product=>{
            res.render("productsMng",{product})
        }).catch(e=>{
            res.send(e)
        });
};

module.exports.addProduct  = async (req,res)=>{
     console.log(req.file.filename)
     console.log("fanida fanida")
     console.log("it is in the post request")
    // const product = {
    //   title:'hamburger8',
    //   image: 'tacos.png',
    //   description:"hello world this is a new product ",
    //   category:'food',
    //   price:888,
    //   quantity:44,
    // }

      Product.create(req.body)
        .then(()=>{
            console.log("new product created")
          res.send("a new product created")
      }).catch(e=>{
          console.log("the product didn't created")
          res.send(e)
      })
    };