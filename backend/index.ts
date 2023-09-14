const cors = require('cors'); //install cors for intract frontend to backen
const express = require('express');  //framework of node js
const app = express();
app.use(express.json());
app.use(cors());
require('./datsbase') //Connect dataabse 
const Connect = require('./userSchema')  //Add Schema and model

// Post API

app.post('/adduser',async(req:any,res:any)=>{
const user = new Connect(req.body);
const result = await user.save();
res.send(result);
})

// GET API

app.get('/',async(req:any,res:any)=>{
    const result = await Connect.find();
   res.send(result);
  
    })

// Delete API

app.delete('/:id', async(req:any,res:any)=>{
  const result =await Connect.deleteOne({_id:req.params.id});
        res.send(result);
    })

// Single User Call API

 app.get('/singleuser/:id', async(req:any,res:any)=>{
    const result =await Connect.findOne({_id:req.params.id});
    if(result){
        res.send(result);
    }else{
        res.send({result:"User Not Found"})
    }})


 // Update API

 app.put('/updateuser/:id', async(req:any,res:any)=>{
    const result =await Connect.updateOne({_id:req.params.id},{$set:req.body});
    res.send(result)
    })


 // Search API

//  app.get('/search/:key', async(req:any,res:any)=>{
//     let result =await Connect.find({
//         "$or":{
//             {name:{$regex:req.params.key}}
//         }
//     });
//     res.send(result);
//     })


app.listen(5000)

