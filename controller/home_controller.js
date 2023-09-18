const Lists = require("../models/lists");
//export indicates that this function is visible to all thefiles inthe project
module.exports.create = async function(req,res){
    try{
        //it will collect the database collection
        const lists = await Lists.find({});
        //after collecting the database it will render into home.ejs
        return res.render('home',{
            title:"Daily Routene Lists",
            contactList : lists
        })
    }catch(err){
        console.log("error");
    }
}
//this function will controll the routes and the the delete operations
module.exports.delete=async function(req,res){
    try{
        let id =  req.query.id;
        //this will delete list bassed on the id
        const contact = await Lists.findByIdAndDelete(id);
        return res.redirect('back');
    }catch(err){
        console.log('error');
    }
}