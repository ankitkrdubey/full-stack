const mongoose = require("mongoose");
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});
const User = mongoose.model("User", userSchema);
User.insertMany([
    { name: "Ankit", age: 21, email: "ankit@gmail.com"},
    { name: "Rahul", age: 22, email: "rahul@gmail.com"},
    { name: "Rohit", age: 23, email: "rohit@gmail.com"},
    { name: "Raj", age: 24, email: "raj@gmail.com"},
]).then((res)=>{
    console.log(res);
});
