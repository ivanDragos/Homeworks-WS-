
const mongoose = require("mongoose");

const consoleSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        minLength: 2
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
   
    },
    color: {
        type: String,
        required: true,
      },
    createdAt: {
        immutable: true,
        type: Date,
        default: () => Date.now(),
    },
    updatedAt:{
        type: Date,
        default: () => Date.now(),
    }
});

const gameConsole = mongoose.model("Console", consoleSchema, "gameConsoles");

const addGameConsole = async(con) => {
    const newConsole = new gameConsole(con);
    return await newConsole.save();
};

const removeConsole = async(id) => {
    return await gameConsole.deleteOne({ _id: id});
};

const updateConsole = async(id, newConsoleData) => {
    return await gameConsole.updateOne({ _id: id}, newConsoleData); 
};

const getAllConsoles = async() => {
    return await gameConsole.find({});
}

const getConsoleById = async(id) => {
    return await gameConsole.findOne({ _id: id});
}

module.exports = {
        addGameConsole,
        removeConsole,
        updateConsole,
        getConsoleById,
        getAllConsoles
}