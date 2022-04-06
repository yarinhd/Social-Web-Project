import mongoose from "mongoose";
import IUser from "./user.interface";


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    }  
},
    {
        timestamps: true
    });

UserSchema.virtual('fullName').get(function(this: IUser & mongoose.Document){
    return `${this.firstName} ${this.lastName}`; 
});

const userModel = mongoose.model<IUser & mongoose.Document>('User', UserSchema);
export default userModel;