import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
    name:String,
    price: Number,
    category: String,
    image:String,
    title:String
})

// Abh Schema ka modal create karenge
const Book = mongoose.model("Book",bookSchema);
export default Book;