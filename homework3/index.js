const express = require("express");
const api = express();

api.use(express.json());

const {
    getAllConsoles,
    getConsoleById,
    createConsole,
    update,
    remove
} = require("./handlers/consoles")


api.get("/consoles", getAllConsoles);
api.get("/console/:id", getConsoleById);
api.post("/consoles", createConsole);
api.patch("/consoles/:id", update);
api.delete("/consoles/:id", remove);

api.listen(5000, (err) => {
    err ? console.error(err) : console.log("Server started, port 5000   ");
});