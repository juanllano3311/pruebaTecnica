import { Schema } from "mongoose";

export const MemberSchema = new Schema({

    firstLastName: {type: String, required: true},

    secondtLastName: {type: String, required: true},

    firstName: {type: String, required: true},

    othersNames: {type: String},

    country: {type: String, required: true},

    typeId: {type: String, required: true},

    identification: {type: String, required: true},

    email: {type: String, required: true},

    status: {type: Boolean, required: true}
},{ 
    versionKey: false,
    timestamps: true
    });