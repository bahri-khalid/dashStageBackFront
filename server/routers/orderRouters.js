const {Router} = require("express")
const orderController =  require("../controllers/orderController")
const router = new Router();

router.get("/orders",orderController.orders)

module.exports= router;