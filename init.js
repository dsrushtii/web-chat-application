const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {console.log("connection successful")})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

let allChats = [
    {
        from: "john",
        to: "emma",
        msg: "Hey, are we meeting today?",
        created_at: new Date()
    },
    {
        from: "alice",
        to: "bob",
        msg: "Don’t forget to submit the assignment",
        created_at: new Date()
    },
    {
        from: "sam",
        to: "lily",
        msg: "I reached home safely",
        created_at: new Date()
    },
    {
        from: "mike",
        to: "sara",
        msg: "Call me when you’re free",
        created_at: new Date()
    }

];

Chat.insertMany(allChats);