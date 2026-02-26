 
 const e = require("express");
const http = require("node:http")
//  console.log(http)

// const app = http.createServer((req , res) =>{
//      if(req.url === "/"){
//         res.write("Home Page")
//         res.end()
//      }else if(reg.url === "/login"){
//         res.write("Login Page")
//         res.end()
//      }
// });


const express = require("express");
const { error } = require("node:console");
const path = require("node:path");
const app = express()

app.use(express.static('public'))

app.set('view engine', 'hbs');

// const pathDircory = path.join(__dirname, "views/partials");
// hbs.registerPartials(pathDircory)

var hbs = require('hbs');
const pathPartials = path.join(__dirname , "views/partials");
hbs.registerPartials(pathPartials)


app.get("/" , (req , res) =>{
    res.render("index" , {
        LOGO : "HOME ",
        img1 : "images/gh.jpg",
    })
})


app.get("/users" , (req , res) =>{
    res.render("users" , {
        LOGO : "USERS ",
        name : "GHADA",
        age : 20,
        city : "Tunis",
        id : 12345
    })
})


app.get(/.*/ , (req , res) =>{
    res.render("404" ,{
         LOGO : "NOT FOUND ",
        error : "page not found"
    })
})


// app.get("/" , (req , res) =>{
//     res.json("HELLO WORD")
// })


const port = process.env.port||3000 
app.listen(port ,()=>{
    console.log(`Server is running on port  🌏${port}`)
})
