export default interface UserDocument {
    _id: string,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
}