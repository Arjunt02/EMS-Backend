
// import mongoose

    const mongoose=require('mongoose')

//  import validator

   const validator=require('validator')


// set schema 
    const userSchema=new mongoose.Schema({
        fname:{
            type:String,
            required:true,
            trim:true
        },
        lname:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            reguired:true,
            unique:true,
            validator(value){
                if(!validator.isEmail(value)){
                    throw Error('invalid Email')
                }
            }
        },
        mobile:{
            type:String,
            required:true,
            unique:true,
            minlength:10,
            maxlength:10
        },
        gender:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        },
        profile:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        }
    })
    

    const users=new mongoose.model('users',userSchema)
                                 // collection name , schema

    module.exports=users