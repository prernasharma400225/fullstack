require("dotenv").config()
const app = require("./src/app")
const connetToDB = require("./src/config/database")


connetToDB()

app.listen(3000, () =>{
    console.log("server is running on port 3000");
    
})