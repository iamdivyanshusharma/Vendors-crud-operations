import mangoose from 'mangoose';

const userSchema=mangoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        age :{
        type:Number,
        required:true
        
        }
    } ,{
        timestamps:true
    }       
)


const User = mangoose.model("User",userSchema);

export default User;
