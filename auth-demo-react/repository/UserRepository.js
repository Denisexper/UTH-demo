import DBLocal from "db-local";
import crypto from 'crypto'
const {Schema} = new DBLocal({path:'./db'})

const User = Schema('User',{
    _id:{type:String,required:true,},
    username:{type:String,required:true},
    password:{type:String,required:true}

})

export default class{
    static create({username,password}){
        Validation.name(username)
        Validation.password(password)

        console.log(`Username:${username} password ${password}`);

        //verify duplicated
        const userDuplicated = User.findOne({username})
        if(userDuplicated) throw new Error('User duplicated')

        const id = crypto.randomUUID()

        User.create({
            _id:id,
            username:username,
            password:password
        }).save()
        //return id
        return id;
    }

    //create login
    static login({username,password}){
        Validation.name(username)
        Validation.password(password)

        const user=User.findOne({username})
        if(!user) throw new Error("User does not exis")

        return user
    }
}

export  class Validation{
    static name(username){
        if(typeof username !== 'string') throw new Error('The user name must be string')
        if(username.length < 3) throw  new Error('The user name must be at least 3 characters long')

    }

    static password(password){
        if(typeof password !== 'string') throw new Error('The password must be string');
        if(password.length < 6) throw new Error('The password must be at least 6') 
    }
}

