const express = require('express');
//path will indicates that code is able to produce output in any operating system 
const path = require('path');
const port = 9000;

//it needs to aquire mongoose file because to works as middleware to user and the data base
const db = require('./config/mongoose');
//dtata base collection
const Lists= require('./models/lists');
// exports=Lists;
//app will aquire the functionalities of express
const app = express();
//we change the view engine from folder system into ejs engine
//by usiong ejs we can write html and js in one file and also it is used
//to handle the view template
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
// app.set('views','./views');

//it is serve as middlewear to your files to ejs file
app.use(express.static('./assets'));
//url encoded means we need to transfer data from one router to one router
//in that cases t=data is not visible in text
app.use(express.urlencoded());
//it will take visibility to another router
app.get('/viewall',async function(req,res){
    console.log("in all");
    try{
        const lists = await Lists.find({});
        return res.render('list',{
            contactList  : lists
        })
    }catch(err){
        console.log('error');
    }
})
//we change the direction of route to routes folder because it will reduce the code complexity 
//by doing this we can handle saperately it will alse
//helps to find errors in code
 app.use('/',require('./routes'));
// app.get('/',async function(req,res){
//     try{
//         const lists = await Lists.find({});
//         return res.render('home',{
//             title:"Daily Routene Lists",
//             contactList : lists
//         })
//     }catch(err){
//         console.log("error");
//     }
// });
app.post('/create-list',async function(req,res){
   
    try {
       
        await Lists.create({
            description: req.body.description,
            date:req.body.date,
            category:req.body.category,
            color:req.body.color

        });
        
        res.redirect('back');
    } catch (err) {
        console.log('error in creating list');
        return;
    }
})

// app.get('/delete-list',async function(req,res){
//     try{
//         let id =  req.query.id;
//         const contact = await Lists.findByIdAndDelete(id);
//         return res.redirect('back');
//     }catch(err){
//         console.log('error');
//     }
// })


//this function will delete the list from data bases
app.use('/delete-list',require('./routes/index'))
app.listen(port,function(err){
    if(err){
        console.log('error occurred');
        return;
    }
    console.log('our server runs ok')
})