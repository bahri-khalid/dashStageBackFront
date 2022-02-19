const {Router} = require("express")
const userControllers = require("../controllers/usersControllers")
const router = new Router()

router.get("/users",userControllers.users)
module.exports = router