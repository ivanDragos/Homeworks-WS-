const{
    addGameConsole,
    removeConsole,
    updateConsole,
    getConsoleById,
    getAllConsoles
}=require("../pkg/consoles/mongo")



const getAll = async(req, res) => {
    try{
        const consoles = await getAllConsoles();
        return res.status(200).send(consoles);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

const getOneById = async(req, res) => {
    try{
        const id = (req.params.id);
        const c = await getConsoleById(id);
        return res.status(200).send(c);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

const createConsole = async(req, res) => {
    try{
        await addGameConsole(req.body);
        return res.status(201).send(req.body);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

const update = async(req, res) => {
    try{
        const id = (req.params.id);
        await updateConsole(id, req.body);
        return res.status(204).send("")
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

const remove = async(req, res) => {
    try{
        const id = (req.params.id);
        await removeConsole(id);
        return res.status(200).send("Console deleted!");
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    getAll,
    getOneById,
    createConsole,
    update,
    remove
}