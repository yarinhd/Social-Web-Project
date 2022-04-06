import IComment from "./post.comment.interface";

export default interface IUser {
    _id?: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    gender: string,
    profilePhoto: string
}