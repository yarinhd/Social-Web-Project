import IComment from "./comment.interface";

export default interface IUser {
    _id?: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    // should delete the password cause it is important
    gender: string,
    avatar: string
}