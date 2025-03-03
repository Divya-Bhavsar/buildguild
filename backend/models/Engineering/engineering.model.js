import mongoose from "mongoose";

const engineeringSchema = new mongoose.Schema({
    activity : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Activity'
    }],
    change_history : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'EChangeHistory'
    }]
})

export const Engineering = mongoose.model('Engineering' , engineeringSchema)