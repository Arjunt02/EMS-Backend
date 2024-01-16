// this folder is makes with connection of frontend and backend
// frontend request


const users=require('../Modals/userSchema')



exports.addUser=async(req,res)=>{

    req.file
    const {fname,lname,email,mobile,gender,status,profile,location}=req.body

    try{

        const preuser=await users.findOne({email})

        if(preuser){
            res.status(406).json("user already exists")
        }
        else{
            const newUser=new users({
                fname,lname,email,mobile,gender,status,profile:req.file.filename,location
            })
            await newUser.save()
            res.status(200).json(newUser)
        }


    }catch(err){
        res.status(401).json("Error:"+err)
    }

    console.log('inside add user ');

}



exports.getallUsers=async(req,res)=>{

    const search=req.query.search

    const query={
        fname:{$regex:search,$options:"i"}
    }
    
    try{
        const allusers=await users.find(query)
        res.status(200).json(allusers)
    }
    catch(err){
        res.status(401).json(err)
    }
}



exports.deleteUser=async(req,res)=>{
    const {id}=req.params

    try{
        removeData=await users.findByIdAndDelete({_id:id})
        res.status(200).json(removeData)
    }catch(err){
        res.status(401).json(err)
    }

}



exports.editUser=async(req,res)=>{
    const{id}=req.params
    const{fname,lname,email,mobile,gender,status,location,profile}=req.body
    const file=req.file?req.file.filename:profile

    try{
        const updateUser=await users.findByIdAndUpdate({_id:id},{
            fname,lname,email,mobile,gender,status,profile:file,location
        },{new:true})

        await updateUser.save()
        res.status(200).json(updateUser)
    }
    catch(err){
        res.status(401).json(err)
    }


}



