const exp = require('express')
const cors = require('cors')
const app = exp()
app.use(exp.json())
app.use(cors())
app.use(exp.urlencoded({ extended: true }))

app.get('/', function(req, res){
    res.send("hello")
})
app.post('/message', function (req, res) {
    try {
        const data = req.body
            // for Name validation
        const isName = (data.name)
        if (isName === "") {
            throw new Error(" Please Enter the username")
        }
            // for mobile number validation
        const isPhone = (data.phone)
        if(isPhone.length < 10){
                throw new Error("Invalid Mobile Number")
        }
            // for email validation
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const isEmali =pattern.test(data.email)
        if(!isEmali){
            throw new Error(" Invalid E-mail !!!")
        }
        const isMsg = (data.msg)
        if(isMsg == ""){
            throw new Error(" Message must be have in 10 character")
        }
        res.status(200).json({
            msg:"Message send succesfully !!",
            status:true
        })
    }
   catch(error){
        res.status(500).json({
            msg:error.message
        })
   }
})
app.listen(3000,function(){
    console.log('you are ready ')
})