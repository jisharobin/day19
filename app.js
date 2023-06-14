var exp=require('express')
var bodyParser = require('body-parser')//to read value import body parser
const res = require('express/lib/response')
var app=exp()
app.get('/',(req,res)=>{
    res.send("hello")
})

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.post('/home',(req,res)=>{
var getName=req.body.name
var getRoll=req.body.rollno

//res.send(getName+" "+getRoll)

res.json(
    {
        "your name is":getName,"your roll no":getRoll
    }
)
    res.send("home")
})

app.post('/add',(req,res)=>{
    var getNum1=parseFloat(req.body.num1) 
var getNum2=parseFloat(req.body.num2)
var result=getNum1+getNum2
res.json({"result=":result})
})

app.listen(3000,()=>{
    console.log("server  is running on chrome http://localhost:3000/")
    console.log("server running on postman http://localhost:3000/home")
    console.log("server running on postman json http://localhost:3000/add")

})

