const express = require("express");
const config = require("./pkg/config");
require("./pkg/db");


const {
    getAll,
    getOneById,
    createConsole,
    update,
    remove
} = require("./handlers/consoles");

const api = express();

api.use(express.json());

api.get("/consoles", getAll);
api.get("/consoles/:id", getOneById);
api.post("/consoles", createConsole);
api.patch("/consoles/:id", update);
api.delete("/consoles/:id", remove);


api.listen(config.getSection("development").port, (err) => {
    err 
        ? console.error(err)
        : console.log(
            `Server started at port ${config.getSection("development").port}`
        );
});