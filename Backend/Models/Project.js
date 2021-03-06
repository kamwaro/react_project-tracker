const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ProjectSchema = new Schema({

        id: Number,
        name: String,
        deadline: String,
        done: Boolean,
        loveCounts: Number,
        hateCounts: Number,
        messages: [{
            message: String
        }      
      ],
      messageCounts: Number
})

module.exports = mongoose.model("Project", ProjectSchema);