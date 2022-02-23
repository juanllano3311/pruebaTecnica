import { Schema } from "mongoose";

export const AdminSchema = new Schema({

    email: {type: String, required: true},

    password: {type: String, required: true}

},{ 
    versionKey: false,
    timestamps: true
    });