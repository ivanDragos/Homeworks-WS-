const { readData, writeData } = require("../files");
const DATA_SOURCE = `${__dirname}/../../consoles`;

const megaCompanies = {
    id:"string",
    name:"string",
    category:"string",
    revenue:"number",
    worth:"number"
}

const footballTeams = {
    id:"string",
    name:"string",
    stadiumName:"string",
    fans:"number",
}


const footballPlayers = {
    id:"string",
    firstName:"string",
    lastName:"string",
    yearOfBirth:"number",
}


const videoGames = {
    id:"string",
    name:"string",
    category:"string",
    yearOfRelease:"number",
    copiesSold:"number"
}


const gameConsoles = {
    id:"string",
    name:"string",
    manufacturer:"string",
    yearOfRelease:"number",  
}




const addGameConsole = async (console) => {
    try {    
        let data = await readData(DATA_SOURCE)
        data.push(console)
        await writeData(data, DATA_SOURCE)
    } catch (err) {
        throw err
    }
}

const getGameConsoles = async () => {
    try {
        const data = await readData(DATA_SOURCE)
        return data
    } catch (err) {
        throw err
    }
}

const getOneConsole = async (id) => {
    try {
        const data = await readData(DATA_SOURCE)
        const console = data.find((console) => console.id === id)
        return console;
    } catch (err) {
        throw err
    }
}

const updateConsole = async(id, newConsoleData) => {
    try{
        let data = await readData(DATA_SOURCE);
        const consoleFound = data.find((console) => console.id === id);
        if(consoleFound){
            const newConsole = {
                ...consoleFound,
                ...newConsoleData
            };
        
        data = data.filter((console) => console.id != id);
        data.push(newConsole);
        await writeData(data, DATA_SOURCE);
        }else{
            console.log("Console not found!");
        }
    }catch(err){
        throw err;
    }
};

const removeConsole = async(id) => {
    try{
        const data = await readData(DATA_SOURCE);
        const newData = data.filter((console) => console.id !== id);
        await writeData(newData, DATA_SOURCE); 
    }catch(err){
        throw err;
    }
}

module.exports = {
    addGameConsole,
    getGameConsoles,
    getOneConsole,
    updateConsole,
    removeConsole
}