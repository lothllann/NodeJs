import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Nickolas:yenn@cluster0.jhxxcks.mongodb.net/Alura-Node");

let db = mongoose.connection;

export default db;